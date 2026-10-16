"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { QuizResult } from "@/lib/quiz";
import { planForBase } from "@/lib/plans";
import { detectUnits, localizeText, type Units } from "@/lib/units";

const KEY = "beermile.quiz";
const UNITS_KEY = "beermile.units";

export default function TrainingPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [week, setWeek] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [units, setUnits] = useState<Units>("metric");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setResult(JSON.parse(raw) as QuizResult);
      const savedUnits = localStorage.getItem(UNITS_KEY);
      if (savedUnits === "metric" || savedUnits === "imperial") {
        setUnits(savedUnits);
      } else {
        setUnits(detectUnits());
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  function changeUnits(u: Units) {
    setUnits(u);
    try {
      localStorage.setItem(UNITS_KEY, u);
    } catch {
      // ignore
    }
  }

  const plan = useMemo(() => (result ? planForBase(result.base) : null), [result]);

  if (!loaded) return <p>loading...</p>;

  if (!result || !plan) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>no plan yet</h2>
        <p>complete the questionnaire to get your training plan.</p>
        <p>
          <Link href="/quiz" className="old-btn">
            start questionnaire
          </Link>
        </p>
      </div>
    );
  }

  const w = plan.weeks[week - 1];
  const t = (s: string) => localizeText(s, units);
  const raceNote =
    units === "metric"
      ? "Race day: 4 x 355ml + 4 x 400m laps = 1 beer mile."
      : "Race day: 4 x 12oz + 4 x quarter mile laps = 1 beer mile.";

  function tagClass(kind: string): string {
    if (kind === "CHUG") return "tag tag-chug";
    if (kind === "GUT") return "tag tag-gut";
    if (kind === "JOG") return "tag tag-jog";
    return "tag tag-sim";
  }

  function howToFor(kind: string): string {
    if (kind === "CHUG")
      return "Drink the set amount from a can or bottle as quickly as is comfortable, then rest. Same drink, same container each time.";
    if (kind === "GUT")
      return "Train your stomach to settle after fizz. Drink, breathe slowly, then release a small burp while walking. Stay upright.";
    if (kind === "SIM")
      return "Links a drink with a lap, like race day. Drink from the can or bottle, pause briefly to settle, then run the lap.";
    return "Jog slowly and walk whenever needed. You should be able to talk in full sentences throughout.";
  }

  return (
    <div>
      <div className="old-box">
        <h2>Your training plan</h2>
        <p>
          Week {week} of 12. {w.theme}
        </p>
        <p>
          <small>{raceNote}</small>
        </p>
        <p>
          <button onClick={() => setWeek(Math.max(1, week - 1))} disabled={week === 1} className="old-btn">
            &lt; prev
          </button>{" "}
          <button onClick={() => setWeek(Math.min(12, week + 1))} disabled={week === 12} className="old-btn">
            next &gt;
          </button>
        </p>
        <p>
          <small>
            Units:{" "}
            <span className="unit-toggle">
              <button
                onClick={() => changeUnits("metric")}
                className={units === "metric" ? "active" : ""}
              >
                ml / m
              </button>
              <button
                onClick={() => changeUnits("imperial")}
                className={units === "imperial" ? "active" : ""}
              >
                oz / miles
              </button>
            </span>
          </small>
        </p>
      </div>
      <br />
      {w.sessions.map((s, i) => (
        <div key={s.name} className="old-box session">
          <p>
            <span className={tagClass(s.kind)}>{s.kind}</span>{" "}
            <b>
              Session {i + 1}: {s.name}
            </b>
            {s.beer && <span> <span className="burst">drink option</span></span>}
            <br />
            <small>
              ~{s.minutes} mins. Goal: {t(s.goal)}
            </small>
          </p>
          <p>
            <small>
              <b>How to do it:</b> {t(s.howTo ?? howToFor(s.kind))}
            </small>
          </p>
          <ol>
            {s.steps.map((step) => (
              <li key={step}>{t(step)}</li>
            ))}
          </ol>
        </div>
      ))}
      <br />
      <div style={{ textAlign: "center" }}>
        <p>
          <small>
            <Link href="/quiz" className="old-link">
              retake questionnaire
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
}
