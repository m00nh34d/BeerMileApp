"use client";

import { useEffect, useState } from "react";
import { defaultProfile, type TrainingProfile } from "@/lib/types";
import { KEYS, load, save } from "@/lib/storage";
import { parseTimeToSeconds, formatSeconds } from "@/lib/types";

export default function ProfilePage() {
  const [profile, setProfile] = useState<TrainingProfile>(defaultProfile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setProfile(load<TrainingProfile>(KEYS.profile, defaultProfile));
  }, []);

  function update<K extends keyof TrainingProfile>(k: K, v: TrainingProfile[K]) {
    setProfile((p) => ({ ...p, [k]: v }));
    setSaved(false);
  }

  function onSave(e: React.FormEvent) {
    e.preventDefault();
    save(KEYS.profile, { ...profile, createdAt: new Date().toISOString() });
    setSaved(true);
  }

  const mileSec = parseTimeToSeconds(profile.mileTime);
  const chugSec = Number(profile.chugTime) || 0;
  const goalSec = parseTimeToSeconds(profile.goalTime);
  const estimate =
    mileSec != null ? mileSec + chugSec * 4 + (profile.experience === "beginner" ? 60 : profile.experience === "intermediate" ? 30 : 15) : null;

  const input =
    "w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400";
  const label = "text-sm font-semibold";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black">Custom Training Profile</h1>
        <p className="text-sm text-neutral-600 mt-1">
          Personalize your Beer Mile training. Saved locally in your browser — no account needed.
        </p>
      </div>

      <form onSubmit={onSave} className="rounded-2xl border bg-white p-6 grid gap-4 md:grid-cols-2 shadow-sm">
        <div>
          <label className={label}>Name</label>
          <input className={input} value={profile.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Alex" />
        </div>
        <div>
          <label className={label}>Age</label>
          <input className={input} type="number" min={21} max={100} value={profile.age} onChange={(e) => update("age", e.target.value === "" ? "" : Number(e.target.value))} placeholder="21+" />
        </div>
        <div>
          <label className={label}>Experience</label>
          <select className={input} value={profile.experience} onChange={(e) => update("experience", e.target.value as TrainingProfile["experience"])}>
            <option value="beginner">Beginner — new to running / chugging</option>
            <option value="intermediate">Intermediate — runs regularly</option>
            <option value="advanced">Advanced — sub-6 mile / fast chug</option>
          </select>
        </div>
        <div>
          <label className={label}>Current Mile Time (mm:ss)</label>
          <input className={input} value={profile.mileTime} onChange={(e) => update("mileTime", e.target.value)} placeholder="e.g. 6:30" />
        </div>
        <div>
          <label className={label}>Avg Chug Time per Beer (seconds)</label>
          <input className={input} type="number" min={0} value={profile.chugTime} onChange={(e) => update("chugTime", e.target.value)} placeholder="e.g. 12" />
        </div>
        <div>
          <label className={label}>Beer Preference</label>
          <input className={input} value={profile.beerPreference} onChange={(e) => update("beerPreference", e.target.value)} placeholder="e.g. Lager 5%" />
        </div>
        <div>
          <label className={label}>Runs per Week</label>
          <input className={input} type="number" min={1} max={7} value={profile.weeklyRuns} onChange={(e) => update("weeklyRuns", Number(e.target.value))} />
        </div>
        <div>
          <label className={label}>Goal Beer Mile Time (mm:ss)</label>
          <input className={input} value={profile.goalTime} onChange={(e) => update("goalTime", e.target.value)} placeholder="e.g. 7:30" />
        </div>
        <div className="md:col-span-2 flex items-center gap-3 pt-2">
          <button type="submit" className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800">
            Save Profile
          </button>
          {saved && <span className="text-sm text-green-600 font-medium">✓ Saved!</span>}
        </div>
      </form>

      <div className="rounded-2xl border bg-amber-50 p-6">
        <h2 className="font-bold">Your Estimate</h2>
        {estimate != null ? (
          <div className="mt-2 text-sm space-y-1">
            <p>Estimated Beer Mile: <strong>{formatSeconds(estimate)}</strong></p>
            {goalSec != null && (
              <p>
                Gap to goal ({profile.goalTime}):{" "}
                <strong className={estimate <= goalSec ? "text-green-600" : "text-orange-600"}>
                  {estimate <= goalSec ? "On target! 🎉" : `+${formatSeconds(estimate - goalSec)} to cut`}
                </strong>
              </p>
            )}
            <p className="text-neutral-600">Formula: mile + 4×chug + transition penalty ({profile.experience}).</p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-neutral-600">Enter mile time + chug time to see your estimate.</p>
        )}
      </div>
    </div>
  );
}
