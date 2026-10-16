"use client";

import { useEffect, useState } from "react";
import { defaultProfile, type TrainingProfile } from "@/lib/types";
import { KEYS, load } from "@/lib/storage";
import Link from "next/link";

interface Day {
  day: string;
  workout: string;
  detail: string;
}

function planFor(p: TrainingProfile): { title: string; weeks: Day[][] } {
  if (p.experience === "advanced") {
    return {
      title: "Advanced — 4 weeks to sub-7",
      weeks: [
        [
          { day: "Mon", workout: "Intervals 8×400m", detail: "At mile pace, 90s jog rest. + 2× chug practice (water)." },
          { day: "Tue", workout: "Easy 4 mi", detail: "Conversational pace + strides 6×20s." },
          { day: "Wed", workout: "Tempo 3 mi", detail: "Comfortably hard. Practice burp control." },
          { day: "Thu", workout: "Rest / mobility", detail: "Foam roll, hips, core 15 min." },
          { day: "Fri", workout: "Beer simulation (2 beers + 2 laps)", detail: "Use light beer. Focus on transitions <10s." },
          { day: "Sat", workout: "Long run 7 mi", detail: "Easy, last mile steady." },
          { day: "Sun", workout: "Rest", detail: "Hydrate, sleep." },
        ],
      ],
    };
  }
  if (p.experience === "intermediate") {
    return {
      title: "Intermediate — 4 weeks to finish strong",
      weeks: [
        [
          { day: "Mon", workout: "Intervals 6×400m", detail: "Mile pace, 2 min jog rest." },
          { day: "Tue", workout: "Easy 3 mi", detail: "Easy + 4× strides." },
          { day: "Wed", workout: "Chug practice", detail: "3× 12oz water chugs, timed. Target <15s each." },
          { day: "Thu", workout: "Tempo 2 mi", detail: "Steady hard effort." },
          { day: "Fri", workout: "Rest", detail: "Mobility + core." },
          { day: "Sat", workout: "Sim: 2 beers + 2 laps", detail: "Practice pacing, no sprinting lap 1." },
          { day: "Sun", workout: "Long run 5 mi", detail: "Easy." },
        ],
      ],
    };
  }
  return {
    title: "Beginner — 4 weeks to finish your first Beer Mile",
    weeks: [
      [
        { day: "Mon", workout: "Run/walk 2 mi", detail: "4 min run / 1 min walk." },
        { day: "Tue", workout: "Rest or walk", detail: "Mobility 10 min." },
        { day: "Wed", workout: "Intervals 4×400m", detail: "Slightly hard, 3 min walk rest." },
        { day: "Thu", workout: "Chug practice (water)", detail: "2× 12oz timed, practice breathing." },
        { day: "Fri", workout: "Rest", detail: "Sleep + hydrate." },
        { day: "Sat", workout: "Easy 3 mi", detail: "Conversational." },
        { day: "Sun", workout: "Sim: 1 beer + 1 lap ×2", detail: "Learn transitions, don't race." },
      ],
    ],
  };
}

export default function TrainingPage() {
  const [profile, setProfile] = useState<TrainingProfile>(defaultProfile);

  useEffect(() => {
    setProfile(load<TrainingProfile>(KEYS.profile, defaultProfile));
  }, []);

  const plan = planFor(profile);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black">Training Plan</h1>
        <p className="text-sm text-neutral-600 mt-1">
          Matched to: <strong>{profile.experience}</strong>
          {profile.name ? ` — ${profile.name}` : ""} · {profile.weeklyRuns} runs/week · Goal: {profile.goalTime || "—"}
          {" "}<Link href="/profile" className="underline">Edit profile</Link>
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="font-bold text-lg">{plan.title}</h2>
        <p className="text-sm text-neutral-600">Repeat weekly for 4 weeks, adding ~10% volume. 21+ only for beer workouts — otherwise use water / NA.</p>
        <div className="mt-4 grid gap-3">
          {plan.weeks[0].map((d) => (
            <div key={d.day} className="rounded-xl bg-neutral-50 border p-4 flex gap-4">
              <div className="w-12 font-black">{d.day}</div>
              <div>
                <div className="font-semibold text-sm">{d.workout}</div>
                <div className="text-sm text-neutral-600">{d.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="font-bold">Tips</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
          <li>Never sprint lap 1 — carbonation + speed = trouble.</li>
          <li>Practice tilting + breathing; fastest chug wins more than fastest mile.</li>
          <li>Simulate race day weekly: shoes, can, chug zone, transitions.</li>
          <li>Log every session in <Link href="/log" className="underline">Log Run</Link>.</li>
        </ul>
      </div>
    </div>
  );
}
