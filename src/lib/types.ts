export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export interface TrainingProfile {
  name: string;
  age: number | "";
  experience: ExperienceLevel;
  mileTime: string; // mm:ss
  beerPreference: string;
  weeklyRuns: number;
  goalTime: string; // mm:ss
  chugTime: string; // seconds, avg per beer
  createdAt: string;
}

export interface LapEntry {
  lap: number; // 1-4
  runTime: string; // mm:ss
  chugTime: string; // seconds
  notes?: string;
}

export interface WorkoutLog {
  id: string;
  date: string;
  type: "beer-mile" | "training-run" | "chug-practice" | "interval";
  laps?: LapEntry[];
  totalTime?: string;
  distanceMiles?: number;
  notes?: string;
}

export const defaultProfile: TrainingProfile = {
  name: "",
  age: "",
  experience: "beginner",
  mileTime: "",
  beerPreference: "",
  weeklyRuns: 3,
  goalTime: "",
  chugTime: "",
  createdAt: new Date().toISOString(),
};

export function parseTimeToSeconds(t: string): number | null {
  if (!t) return null;
  const parts = t.trim().split(":");
  if (parts.length === 1) {
    const s = Number(parts[0]);
    return Number.isFinite(s) ? s : null;
  }
  if (parts.length === 2) {
    const m = Number(parts[0]);
    const s = Number(parts[1]);
    if (!Number.isFinite(m) || !Number.isFinite(s)) return null;
    return m * 60 + s;
  }
  return null;
}

export function formatSeconds(total: number): string {
  const m = Math.floor(total / 60);
  const s = Math.round(total % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
