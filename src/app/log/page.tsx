"use client";

import { useEffect, useState } from "react";
import type { LapEntry, WorkoutLog } from "@/lib/types";
import { KEYS, load, save } from "@/lib/storage";
import { parseTimeToSeconds, formatSeconds } from "@/lib/types";

const emptyLaps: LapEntry[] = [1, 2, 3, 4].map((lap) => ({
  lap,
  runTime: "",
  chugTime: "",
  notes: "",
}));

export default function LogPage() {
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [type, setType] = useState<WorkoutLog["type"]>("beer-mile");
  const [laps, setLaps] = useState<LapEntry[]>(emptyLaps);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [distance, setDistance] = useState("1");

  useEffect(() => {
    setLogs(load<WorkoutLog[]>(KEYS.logs, []));
  }, []);

  function updateLap(i: number, k: keyof LapEntry, v: string | number) {
    setLaps((prev) => prev.map((l, idx) => (idx === i ? { ...l, [k]: v } : l)));
  }

  function total(): string | null {
    if (type !== "beer-mile") return null;
    let s = 0;
    for (const l of laps) {
      const r = parseTimeToSeconds(l.runTime);
      const c = Number(l.chugTime) || 0;
      if (r == null) return null;
      s += r + c;
    }
    return formatSeconds(s);
  }

  function onSave(e: React.FormEvent) {
    e.preventDefault();
    const entry: WorkoutLog = {
      id: crypto.randomUUID(),
      date,
      type,
      notes,
      laps: type === "beer-mile" ? laps : undefined,
      totalTime: total() ?? undefined,
      distanceMiles: type === "beer-mile" ? 1 : Number(distance) || undefined,
    };
    const next = [entry, ...logs];
    setLogs(next);
    save(KEYS.logs, next);
    setNotes("");
    if (type === "beer-mile") setLaps(emptyLaps);
  }

  function onDelete(id: string) {
    const next = logs.filter((l) => l.id !== id);
    setLogs(next);
    save(KEYS.logs, next);
  }

  const input =
    "w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black">Log a Run</h1>
        <p className="text-sm text-neutral-600 mt-1">
          Track Beer Miles lap-by-lap or log training runs. Stored locally.
        </p>
      </div>

      <form onSubmit={onSave} className="rounded-2xl border bg-white p-6 space-y-4 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-sm font-semibold">Date</label>
            <input type="date" className={input} value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-semibold">Type</label>
            <select className={input} value={type} onChange={(e) => setType(e.target.value as WorkoutLog["type"])}>
              <option value="beer-mile">Beer Mile (4× beer + lap)</option>
              <option value="training-run">Training Run</option>
              <option value="chug-practice">Chug Practice</option>
              <option value="interval">Intervals</option>
            </select>
          </div>
          {type !== "beer-mile" && (
            <div>
              <label className="text-sm font-semibold">Distance (miles)</label>
              <input className={input} value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="e.g. 3" />
            </div>
          )}
        </div>

        {type === "beer-mile" && (
          <div className="grid gap-3 md:grid-cols-2">
            {laps.map((l, i) => (
              <div key={l.lap} className="rounded-xl border bg-neutral-50 p-4 space-y-2">
                <div className="font-bold text-sm">Lap {l.lap} + Beer {l.lap}</div>
                <div className="grid grid-cols-2 gap-2">
                  <input className={input} placeholder="Run mm:ss" value={l.runTime} onChange={(e) => updateLap(i, "runTime", e.target.value)} />
                  <input className={input} placeholder="Chug sec" type="number" min={0} value={l.chugTime} onChange={(e) => updateLap(i, "chugTime", e.target.value)} />
                </div>
              </div>
            ))}
            <div className="md:col-span-2 text-sm">
              Total: <strong>{total() ?? "— enter all 4 laps"}</strong>
            </div>
          </div>
        )}

        <div>
          <label className="text-sm font-semibold">Notes</label>
          <textarea className={input} rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="How did it feel? Splits, beer, stomach..." />
        </div>

        <button type="submit" className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800">
          Save Workout
        </button>
      </form>

      <div className="space-y-3">
        <h2 className="font-bold text-lg">History ({logs.length})</h2>
        {logs.length === 0 && <p className="text-sm text-neutral-500">No workouts yet. Log your first one above!</p>}
        {logs.map((w) => (
          <div key={w.id} className="rounded-2xl border bg-white p-4 shadow-sm flex justify-between gap-4">
            <div className="text-sm">
              <div className="font-bold">
                {w.date} · {w.type} {w.totalTime ? `· ${w.totalTime}` : ""} {w.distanceMiles ? `· ${w.distanceMiles} mi` : ""}
              </div>
              {w.laps && (
                <div className="mt-1 text-neutral-600">
                  {w.laps.map((l) => `L${l.lap}: ${l.runTime || "?"} + ${l.chugTime || "?"}s`).join(" | ")}
                </div>
              )}
              {w.notes && <div className="mt-1 text-neutral-600">{w.notes}</div>}
            </div>
            <button onClick={() => onDelete(w.id)} className="text-xs text-red-600 hover:underline h-fit">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
