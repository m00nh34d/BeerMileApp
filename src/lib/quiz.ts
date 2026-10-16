export type PlanBase = "starter" | "steady" | "iron";

export interface QuizOption {
  label: string;
  blurb: string;
  points: 1 | 2 | 3;
}

export interface QuizQuestion {
  id: string;
  title: string;
  prompt: string;
  options: QuizOption[];
}

export const QUIZ: QuizQuestion[] = [
  {
    id: "fizz",
    title: "Q1 — The Fridge Test",
    prompt:
      "Someone hands you an ice-cold fizzy soda that has just been shaken. What happens next?",
    options: [
      {
        label: "I sip it like hot tea",
        blurb: "Small sips. Eye contact with the floor. No rush.",
        points: 1,
      },
      {
        label: "Big gulps, minor drama",
        blurb: "Gets it down. Some coughing. A little foam art.",
        points: 2,
      },
      {
        label: "Tilt back, gone in 10 seconds",
        blurb: "No flinch. No foam. The can fears you.",
        points: 3,
      },
      {
        label: "I don't do fizz",
        blurb: "Still water only. Bubbles are spicy air.",
        points: 1,
      },
    ],
  },
  {
    id: "run",
    title: "Q2 — Your relationship with running",
    prompt: "Be honest. When someone suggests going for a short run, what happens?",
    options: [
      {
        label: "Running? I thought you said something else",
        blurb: "My cardio is walking to the fridge.",
        points: 1,
      },
      {
        label: "I jog when I need to and survive",
        blurb: "One lap? Fine. Easy pace. Slightly warm.",
        points: 2,
      },
      {
        label: "I run 5km for fun",
        blurb: "Easy runs, regular routes, more than one pair of shoes.",
        points: 3,
      },
      {
        label: "I race. Like, actually race",
        blurb: "Watch, splits, strong finish. Proper nerd stuff.",
        points: 3,
      },
    ],
  },
  {
    id: "burp",
    title: "Q3 — Burp science",
    prompt: "Burps. Everyone gets them. Where are you on the burp spectrum?",
    options: [
      {
        label: "Burps control me",
        blurb: "Loud, surprising, badly timed. Every time.",
        points: 1,
      },
      {
        label: "Hold it, then trumpet",
        blurb: "I can delay it ~30 seconds. Then: jazz solo.",
        points: 2,
      },
      {
        label: "Silent ninja burps on command",
        blurb: "Tiny sips of air out. No one ever knows.",
        points: 3,
      },
    ],
  },
  {
    id: "carnival",
    title: "Q4 — Fairground ride after food",
    prompt: "You just ate something filling. A spinning ride is calling. What do you do?",
    options: [
      {
        label: "Watching from the bench",
        blurb: "Holding everyone's bags. Happy about it.",
        points: 1,
      },
      {
        label: "One ride, then a sit-down",
        blurb: "Fun! Now I need shade and a minute.",
        points: 2,
      },
      {
        label: "Three spins, no problem",
        blurb: "Stomach of steel. Bring a cold drink too.",
        points: 3,
      },
    ],
  },
  {
    id: "spicy",
    title: "Q5 — The spicy food incident",
    prompt: "Something very spicy arrives. How does this story end?",
    options: [
      {
        label: "Mild sauce makes me sweat",
        blurb: "Ketchup is spicy. I said what I said.",
        points: 1,
      },
      {
        label: "Spicy food, drink nearby",
        blurb: "I cope. I survive. I learn nothing.",
        points: 2,
      },
      {
        label: "Extra hot? No problem",
        blurb: "Sweating is for other people. I'm fine.",
        points: 3,
      },
    ],
  },
  {
    id: "chug",
    title: "Q6 — Drinking quickly",
    prompt: "Be honest: how quickly can you finish a drink?",
    options: [
      {
        label: "Never tried, not even water",
        blurb: "Clean record. Fresh lungs. Big potential.",
        points: 1,
      },
      {
        label: "Quick sips under pressure",
        blurb: "Team player. Fine with party games.",
        points: 2,
      },
      {
        label: "Very fast, crowd approved",
        blurb: "People have seen me do it. Enough said.",
        points: 3,
      },
    ],
  },
  {
    id: "nerves",
    title: "Q7 — Event-day nerves",
    prompt: "The start signal goes. The crowd is loud. Your stomach is doing what?",
    options: [
      {
        label: "I feel ill watching others feel ill",
        blurb: "Empathy, but unhelpful.",
        points: 1,
      },
      {
        label: "Nervous, but I settle in",
        blurb: "Nervous, then settled after the first lap.",
        points: 2,
      },
      {
        label: "Big crowd, big performance",
        blurb: "Give me a start line and a finish.",
        points: 3,
      },
    ],
  },
];

export function scoreToBase(total: number): PlanBase {
  // 7 questions, each 1-3 pts => total 7-21
  if (total <= 11) return "starter";
  if (total <= 16) return "steady";
  return "iron";
}

export interface QuizResult {
  answers: Record<string, number>; // questionId -> points
  total: number;
  base: PlanBase;
  finishedAt: string;
}

export function buildResult(answers: Record<string, number>): QuizResult {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  return {
    answers,
    total,
    base: scoreToBase(total),
    finishedAt: new Date().toISOString(),
  };
}


