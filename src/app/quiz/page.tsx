"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QUIZ, buildResult } from "@/lib/quiz";
import { detectUnits, localizeText, type Units } from "@/lib/units";

const KEY = "beermile.quiz";
const UNITS_KEY = "beermile.units";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [chosen, setChosen] = useState<Record<string, string>>({});
  const [units, setUnits] = useState<Units>("metric");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(UNITS_KEY);
      if (saved === "metric" || saved === "imperial") setUnits(saved);
      else setUnits(detectUnits());
    } catch {
      // ignore
    }
  }, []);

  const q = QUIZ[step];
  const pickedLabel = chosen[q?.id ?? ""];
  const t = (s: string) => localizeText(s, units);

  function pick(label: string, points: number) {
    if (!q) return;
    setAnswers((a) => ({ ...a, [q.id]: points }));
    setChosen((c) => ({ ...c, [q.id]: label }));
  }

  function next() {
    if (step < QUIZ.length - 1) {
      setStep(step + 1);
    } else {
      const result = buildResult(answers);
      try {
        localStorage.setItem(KEY, JSON.stringify(result));
      } catch {
        // ignore
      }
      router.push("/training");
    }
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  if (!q) return null;

  return (
    <div>
      <div className="old-box" style={{ textAlign: "center" }}>
        <h2>Questionnaire</h2>
        <p>
          Question {step + 1} of {QUIZ.length}
        </p>
      </div>
      <br />
      <div className="speech">
        <b>{t(q.prompt)}</b>
      </div>
      <br />
      {q.options.map((o) => (
        <p key={o.label}>
          <button
            onClick={() => pick(o.label, o.points)}
            className={`quiz-opt ${pickedLabel === o.label ? "quiz-opt-picked" : ""}`}
          >
            <b>{t(o.label)}</b>
            <br />
            <small>{t(o.blurb)}</small>
          </button>
        </p>
      ))}
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <p>
          {step > 0 && (
            <button onClick={back} className="old-btn">
              &lt; back
            </button>
          )}{" "}
          <button
            onClick={next}
            disabled={pickedLabel === undefined}
            className="old-btn"
          >
            {step === QUIZ.length - 1 ? "finish" : "next >"}
          </button>
        </p>
      </div>
    </div>
  );
}
