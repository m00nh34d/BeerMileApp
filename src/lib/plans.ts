import type { PlanBase } from "./quiz";

export type SessionKind = "CHUG" | "GUT" | "JOG" | "SIM";

export interface PlanSession {
  name: string;
  kind: SessionKind;
  minutes: number;
  beer: boolean; // true = this session MAY use a real drink (max 1/week)
  goal: string;
  howTo?: string;
  steps: string[];
}

export interface PlanWeek {
  week: number;
  theme: string;
  pep: string;
  sessions: PlanSession[];
}

export interface PersonalisedPlan {
  code: string;
  title: string;
  subtitle: string;
  sessionsPerWeek: string;
  chugTarget: string;
  gutRule: string;
  runRule: string;
  weeks: PlanWeek[];
}

const WATER =
  "Default: fizzy drink straight from the can or bottle. Time every chug with your phone. Same drink, same container, every time. Cups hide the hard part — cans and bottles do not.";
const BEER_NOTE =
  "Max 1 session with alcohol per week, only where you are of legal drinking age. Otherwise use a non-alcoholic beer or fizzy drink in a can. Eat 2–3 hrs before, sip water between reps, stop if you feel unwell.";
const GUT_NOTE =
  "Gut-first rule: no sprinting on a full fizzy stomach. Walk 20 steps + 3 nose-breaths after every chug.";

// ---------------------------------------------------------------- STARTER (2x/week)
const starterWeeks: PlanWeek[] = [
  {
    week: 1,
    theme: "Hello, bubbles!",
    pep: "We teach your throat that fizz is just spicy air. No running heroics. Just sips with swagger.",
    sessions: [
      {
        name: "Fizz Tamer 101",
        kind: "CHUG",
        minutes: 20,
        beer: false,
        goal: "3 × 6oz water chugs, no coughing fit",
        howTo: "A chug session means drinking a set amount as quickly as is comfortable, then resting. Use water or a fizzy drink without alcohol.",
        steps: [WATER, "Pour 6oz fizzy water, let foam settle 3 secs.", "Tilt head back slightly, big mouthfuls: swallow-swallow-breathe.", "Log times. Ugly is fine — week 1 is about finishing."],
      },
      {
        name: "Waddle + Burp Walk",
        kind: "JOG",
        minutes: 25,
        beer: false,
        goal: "20 min walk-jog + burp practice",
        howTo: "Alternate short jogs with walking so you can still hold a conversation. After each effort, practise a small controlled burp while walking.",
        steps: ["Walk 4 min / jog 1 min × 4. Chatty pace only.", "After each jog bit: stop, 3 slow nose-breaths, tiny controlled burp.", GUT_NOTE],
      },
    ],
  },
  {
    week: 2,
    theme: "Swallow rhythm",
    pep: "Find your beat: gulp-gulp-breathe. Like drums, but throat.",
    sessions: [
      {
        name: "Rhythm School",
        kind: "CHUG",
        minutes: 20,
        beer: false,
        goal: "3 × 12oz water, steady rhythm",
        howTo: "Drink the same amount three times with a full rest between. Find a breathing pattern you can repeat.",
        steps: [WATER, "Same 12oz pour × 3, 5 min rest between.", "Count in head: swallow-swallow-breathe. No gasping.", "Pick your fastest technique — that is now YOUR technique."],
      },
      {
        name: "Chatty Mile",
        kind: "JOG",
        minutes: 30,
        beer: false,
        goal: "1 mile easy, can talk full sentences",
        howTo: "Jog slowly and walk whenever you need to. If you cannot speak in full sentences, slow down.",
        steps: ["Jog-walk 1 mile. If you can't talk, you're too fast.", "Finish with 20-step burp walk.", "Stretch calves. Drink plain water."],
      },
    ],
  },
  {
    week: 3,
    theme: "Burp Boss begins",
    pep: "Burps are not the enemy. Surprise burps are. We tame them.",
    sessions: [
      {
        name: "Burp Control Lab",
        kind: "GUT",
        minutes: 20,
        beer: false,
        goal: "Chug + 3 breaths + silent burp × 3",
        howTo: "A gut session trains your stomach to settle after fizz. Drink, breathe slowly through your nose, then release a small burp while walking.",
        steps: [WATER, "Chug 12oz, stand, 3 slow nose-breaths.", "Let out small controlled burp while walking 20 steps.", "Repeat × 3. Score yourself: silent = A+, trumpet = B (still fun)."],
      },
      {
        name: "Easy 1.5",
        kind: "JOG",
        minutes: 30,
        beer: false,
        goal: "1.5 miles, no huffing",
        howTo: "An easy jog-walk at conversation pace. Walk as much as you need.",
        steps: ["Easy jog-walk 1.5 mi.", "No watch pressure. Nose-breath first 5 min.", GUT_NOTE],
      },
    ],
  },
  {
    week: 4,
    theme: "Volume, but make it gentle",
    pep: "Two chugs in one session! Your stomach takes notes. Be nice to it.",
    sessions: [
      {
        name: "Double Sip Day",
        kind: "CHUG",
        minutes: 25,
        beer: false,
        goal: "2 × 12oz, 5 min apart",
        howTo: "Two timed drinks in one session with a walk between. Compare which felt smoother.",
        steps: [WATER, "Chug #1, burp walk 5 min, chug #2.", "Note: which felt better? That is your race pour speed.", BEER_NOTE],
      },
      {
        name: "Twenty-Minute Shuffle",
        kind: "JOG",
        minutes: 25,
        beer: false,
        goal: "20 min easy movement",
        howTo: "20 minutes of gentle jogging and walking on a flat route.",
        steps: ["Jog-walk 20 min. Flat route.", "Practice sipping water while walking — race-day skill!"],
      },
    ],
  },
  {
    week: 5,
    theme: "First combo meal",
    pep: "Chug + jog together at last! Slow is smooth, smooth is fast.",
    sessions: [
      {
        name: "Chug + Lap Lite × 2",
        kind: "SIM",
        minutes: 20,
        beer: true,
        goal: "2 × (12oz from can + 400m jog)",
        howTo: "A simulation (SIM) session links a drink with a lap, like race day. Drink, pause to settle, then jog one lap slowly.",
        steps: [WATER, "Chug 12oz → 3 breaths → jog 400m chatty pace → walk 3 min.", "Repeat once. Total 2 combos.", "Transitions under 30 secs is a win this week."],
      },
      {
        name: "Easy 1.5 Again",
        kind: "JOG",
        minutes: 30,
        beer: false,
        goal: "Keep legs happy",
        steps: ["1.5 mi easy.", "Finish with ginger tea if you like — gut's best friend."],
      },
    ],
  },
  {
    week: 6,
    theme: "Gut tolerance",
    pep: "Fizzy volume training. Like lifting weights, but burps.",
    sessions: [
      {
        name: "Fizz Ladder",
        kind: "GUT",
        minutes: 30,
        beer: false,
        goal: "24oz fizzy over 20 min + walk",
        steps: ["Sip-chug 8oz, walk 5 min, repeat × 3.", "Stay upright 20 min after. No lying down!", "Plain carbs before (toast/rice). No dairy/spice 3 hrs prior."],
      },
      {
        name: "Easy Two",
        kind: "JOG",
        minutes: 35,
        beer: false,
        goal: "2 miles conversational",
        steps: ["Jog-walk 2 mi.", "Last 5 min walk + nose-breathing."],
      },
    ],
  },
  {
    week: 7,
    theme: "Beer sim debut (optional!)",
    pep: "One beer, one lap. The real thing — or NA. Both count. Both are brave.",
    sessions: [
      {
        name: "★ Beer Sim #1 ★",
        kind: "SIM",
        minutes: 15,
        beer: true,
        goal: "1 × (beer/NA from can + 1 easy lap)",
        steps: [BEER_NOTE, "Chill can, pour with foam, wait 3 secs, chug.", "3 breaths, jog 400m easy. Walk after. Done = legend.", "Log chug time + how gut felt 1–10."],
      },
      {
        name: "Water Time Trial",
        kind: "CHUG",
        minutes: 20,
        beer: false,
        goal: "3 × 12oz water, beat last week's best",
        steps: [WATER, "Same setup, race the clock gently.", "Winner gets… pride. And less foam next time."],
      },
    ],
  },
  {
    week: 8,
    theme: "Keep-it-down week",
    pep: "Deload-ish. Technique polish. Your gut sends thank-you notes.",
    sessions: [
      {
        name: "Chug-Jog × 2",
        kind: "SIM",
        minutes: 20,
        beer: true,
        goal: "Smooth combos, no drama",
        steps: [WATER, "2 × (12oz + 800m jog-walk).", "Focus: breathing in first 100m after chug — nose only."],
      },
      {
        name: "Ginger + Shuffle",
        kind: "JOG",
        minutes: 25,
        beer: false,
        goal: "Recovery + routine",
        steps: ["20 min easy jog-walk.", "Practice your pre-race routine: same snack, same warm-up, same burp walk."],
      },
    ],
  },
  {
    week: 9,
    theme: "Double trouble",
    pep: "Two combos back-to-back. This is where Beer Milers are made.",
    sessions: [
      {
        name: "Back-to-Back Combos",
        kind: "SIM",
        minutes: 20,
        beer: true,
        goal: "2 × (12oz from can + 400m) with short rest",
        steps: [WATER, "Combo 1, walk 5 min, combo 2.", "If gut sloshes: walk longer. Finishing > speed.", GUT_NOTE],
      },
      {
        name: "Easy Two + Strides",
        kind: "JOG",
        minutes: 35,
        beer: false,
        goal: "2 mi + 4 × 15-sec pickups",
        steps: ["Easy 2 mi, then 4 relaxed 15-sec faster bits with full walk-back.", "Not sprinting — just waking legs up."],
      },
    ],
  },
  {
    week: 10,
    theme: "Dress rehearsal lite",
    pep: "Two beers, two laps. Costume optional. Game face required.",
    sessions: [
      {
        name: "★ Beer Sim #2 ★",
        kind: "SIM",
        minutes: 20,
        beer: true,
        goal: "2 × (beer/NA from can + lap), short rest",
        steps: [BEER_NOTE, "Same race-day setup: shoes, can, chug spot.", "Transitions: can down → 3 breaths → jog. Target <20 secs.", "Walk 10 min between reps. Log everything!"],
      },
      {
        name: "Burp Refresher",
        kind: "GUT",
        minutes: 20,
        beer: false,
        goal: "Technique tune-up",
        steps: [WATER, "1 × 12oz + burp walk. Easy.", "Visualise race: calm lap 1, brave lap 4."],
      },
    ],
  },
  {
    week: 11,
    theme: "Peak gut",
    pep: "Fastest chugs of your life (so far). Then rest like a champ.",
    sessions: [
      {
        name: "Water Grand Prix",
        kind: "CHUG",
        minutes: 25,
        beer: false,
        goal: "3 × 12oz, all-out smooth",
        steps: [WATER, "Warm up with 6oz easy, then 3 timed 12oz with 5 min rest.", "Goal: every rep within 5 secs of each other = pacing master."],
      },
      {
        name: "★ Beer Sim #3 (single) ★",
        kind: "SIM",
        minutes: 15,
        beer: true,
        goal: "1 × beer/NA from can + 1 lap, sharp transitions",
        steps: [BEER_NOTE, "Practice the first 60 seconds of race day only.", "Can down → 3 breaths → jog. Target transition <15 secs."],
      },
    ],
  },
  {
    week: 12,
    theme: "Race week!!",
    pep: "Taper. Carbs. Sleep. Shine your chug goggles. YOU ARE READY.",
    sessions: [
      {
        name: "Shakeout (2 days before)",
        kind: "JOG",
        minutes: 20,
        beer: false,
        goal: "Loose + confident",
        steps: ["10 min jog + 1 × 6oz water chug + burp walk.", "Lay out race kit. Charge phone. Chill can overnight."],
      },
      {
        name: "★ RACE DAY ★ 4 × (beer + lap)",
        kind: "SIM",
        minutes: 15,
        beer: true,
        goal: "Finish with a smile (and nothing else coming up)",
        steps: [BEER_NOTE, "Lap 1: EASY. Do not sprint. Calm chug wins.", "Laps 2–3: steady. Burp-walk first 20 steps of each lap.", "Lap 4: empty the tank (and the can). High-five the line!"],
      },
    ],
  },
];

// ---------------------------------------------------------------- STEADY (2x weeks 1-4, 3x weeks 5-12)
const steadyWeeks: PlanWeek[] = [
  {
    week: 1,
    theme: "Baseline bubbles",
    pep: "You can jog. Now we make you a chugger who jogs. Different sport, same legs.",
    sessions: [
      { name: "Chug Baseline", kind: "CHUG", minutes: 20, beer: false, goal: "3 × 12oz water, log avg", steps: [WATER, "3 × 12oz with 4 min rest. Log each time.", "Find your rhythm: swallow-swallow-breathe."] },
      { name: "Easy 2", kind: "JOG", minutes: 30, beer: false, goal: "2 mi chatty", steps: ["2 mi easy.", "20-step burp walk practice at the end (pretend!)."] },
    ],
  },
  {
    week: 2,
    theme: "Burp school",
    pep: "Controlled burps = free speed. Uncontrolled burps = comedy. We want speed.",
    sessions: [
      { name: "Burp Drills", kind: "GUT", minutes: 20, beer: false, goal: "Silent burps on command", steps: [WATER, "12oz chug → 3 nose-breaths → tiny burp while walking.", "× 3. Grade yourself like a strict but loving teacher."] },
      { name: "Easy 2.5", kind: "JOG", minutes: 35, beer: false, goal: "2.5 mi easy", steps: ["Jog-walk 2.5 mi.", "Nose-breathe first 800m."] },
    ],
  },
  {
    week: 3,
    theme: "Combo starter",
    pep: "Chug THEN jog. The order matters. Ask anyone who did it backwards.",
    sessions: [
      { name: "Combo × 2 (water)", kind: "SIM", minutes: 30, beer: false, goal: "2 × (12oz + 400m)", steps: [WATER, "Chug → 3 breaths → 400m easy → 3 min walk. × 2.", "Transitions <30 secs."] },
      { name: "Easy 3", kind: "JOG", minutes: 40, beer: false, goal: "3 mi easy", steps: ["3 mi conversational.", GUT_NOTE] },
    ],
  },
  {
    week: 4,
    theme: "Volume + calm",
    pep: "More fizz, same chill. Stomach capacity is a trainable skill. Who knew.",
    sessions: [
      { name: "Fizz Ladder", kind: "GUT", minutes: 30, beer: false, goal: "32oz over 25 min", steps: ["8oz × 4 with 5-min walks between.", "Upright after. Plain carbs before."] },
      { name: "Easy 2 + Strides", kind: "JOG", minutes: 30, beer: false, goal: "Loose legs", steps: ["2 mi easy + 4 × 15-sec relaxed pickups."] },
    ],
  },
  {
    week: 5,
    theme: "Three-day era begins!",
    pep: "Now 3 sessions: chug, gut, jog. The holy trinity of not puking.",
    sessions: [
      { name: "Speed Chugs", kind: "CHUG", minutes: 20, beer: false, goal: "4 × 12oz, consistent", steps: [WATER, "4 × 12oz, 4 min rest. All within 5 secs = elite pacing."] },
      { name: "Gut Walk", kind: "GUT", minutes: 25, beer: false, goal: "Fizz + walk tolerance", steps: ["16oz fizzy over 15 min while walking 1 mile.", "Practice sipping air out (micro-burps). Very glamorous."] },
      { name: "Easy 3", kind: "JOG", minutes: 40, beer: false, goal: "Aerobic base", steps: ["3 mi easy.", "Last mile: breathe through nose when you can."] },
    ],
  },
  {
    week: 6,
    theme: "Beer sim #1",
    pep: "Real can, real lap, real glory (or real NA — still glory).",
    sessions: [
      { name: "★ Beer Sim #1 ★", kind: "SIM", minutes: 30, beer: true, goal: "2 × (beer/NA + lap), 8 min apart", steps: [BEER_NOTE, "Chug → 3 breaths → easy lap. Walk between.", "Log chug + lap + gut 1–10."] },
      { name: "Burp + Breath", kind: "GUT", minutes: 20, beer: false, goal: "First-100m breathing", steps: [WATER, "1 × 12oz + 800m jog focusing on nose-breath start."] },
      { name: "Easy 3.5", kind: "JOG", minutes: 45, beer: false, goal: "Long-ish easy", steps: ["3.5 mi easy. Flat. Chatty."] },
    ],
  },
  {
    week: 7,
    theme: "Back-to-backs",
    pep: "Two combos, short rest. Your gut learns to multitask.",
    sessions: [
      { name: "Combo Double (water)", kind: "SIM", minutes: 35, beer: false, goal: "3 × (12oz + 400m)", steps: [WATER, "3 combos, 4 min walk between.", "Middle one should feel boring = perfect pacing."] },
      { name: "Fizz Tolerance", kind: "GUT", minutes: 25, beer: false, goal: "24oz + movement", steps: ["Drink 24oz fizzy across a 20-min walk.", "No sprinting. Ever. On this one."] },
      { name: "Easy 3 + Strides", kind: "JOG", minutes: 40, beer: false, goal: "3 mi + 6 strides", steps: ["3 mi easy + 6 × 20-sec relaxed pickups."] },
    ],
  },
  {
    week: 8,
    theme: "Deload + polish",
    pep: "Half volume, full swagger. Sharpen the transitions.",
    sessions: [
      { name: "Transition Practice", kind: "CHUG", minutes: 20, beer: false, goal: "Can down → jog in <15 secs × 3", steps: [WATER, "Set can down, 3 breaths, jog 100m. × 3.", "Lay can in same spot every time — creature of habit wins."] },
      { name: "Gut Reset Walk", kind: "GUT", minutes: 25, beer: false, goal: "Easy + ginger routine", steps: ["20-min walk + 12oz fizzy sipped.", "Test pre-race snack timing."] },
      { name: "Easy 2.5", kind: "JOG", minutes: 35, beer: false, goal: "Fresh legs", steps: ["2.5 mi very easy."] },
    ],
  },
  {
    week: 9,
    theme: "Beer sim #2: the double",
    pep: "Two beers, two laps, one legend (you).",
    sessions: [
      { name: "★ Beer Sim #2 ★", kind: "SIM", minutes: 35, beer: true, goal: "2 × (beer/NA + lap) + 1 water combo", steps: [BEER_NOTE, "2 beer combos 10 min apart, then 1 water combo.", "Target transitions <20 secs. Walk the rest."] },
      { name: "Speed Chugs II", kind: "CHUG", minutes: 20, beer: false, goal: "Beat week 5 avg", steps: [WATER, "4 × 12oz. Race the clock, keep form."] },
      { name: "Easy 4", kind: "JOG", minutes: 50, beer: false, goal: "Longest easy run", steps: ["4 mi easy. This is your running peak — it is intentionally modest. Chug wins races."] },
    ],
  },
  {
    week: 10,
    theme: "Triple combo week",
    pep: "Three water combos. If you can do three, you can do four. Maths!",
    sessions: [
      { name: "Triple (water)", kind: "SIM", minutes: 40, beer: false, goal: "3 × (12oz + 400m), 5 min rest", steps: [WATER, "Steady chugs, chatty laps.", "Third combo is the race preview — stay calm, stay upright."] },
      { name: "Gut Armor", kind: "GUT", minutes: 25, beer: false, goal: "32oz tolerance walk", steps: ["32oz fizzy over a 25-min walk.", "Note bloat 1–10 every 8oz. Learn your number."] },
      { name: "Easy 3 + Strides", kind: "JOG", minutes: 40, beer: false, goal: "Sharp but chill", steps: ["3 mi + 6 × 20-sec pickups."] },
    ],
  },
  {
    week: 11,
    theme: "Peak week",
    pep: "Fastest chugs + final beer sim. Then we rest like royalty.",
    sessions: [
      { name: "Water Grand Prix", kind: "CHUG", minutes: 25, beer: false, goal: "4 × 12oz PB chase", steps: [WATER, "Warm 6oz, then 4 timed reps. Consistency = crown."] },
      { name: "★ Beer Sim #3 ★", kind: "SIM", minutes: 35, beer: true, goal: "3 × (beer/NA + lap)", steps: [BEER_NOTE, "Full dress rehearsal minus 1 rep. Race shoes, race can.", "Walk 8 min between. Practice everything, including celebrating."] },
      { name: "Easy 2 Shakeout", kind: "JOG", minutes: 30, beer: false, goal: "Flush legs", steps: ["2 mi very easy + burp walk."] },
    ],
  },
  {
    week: 12,
    theme: "Race week!!",
    pep: "Taper time. You did the work. Now trust the gut (literally).",
    sessions: [
      { name: "Shakeout (2 days out)", kind: "JOG", minutes: 20, beer: false, goal: "Loose + smiling", steps: ["10-min jog + 1 × 6oz water chug.", "Prep kit. Chill cans. Sleep 8 hrs."] },
      { name: "Burp Walk (day before)", kind: "GUT", minutes: 15, beer: false, goal: "Calm nerves", steps: ["15-min walk + breathing. Visualise 4 calm chugs.", "No new foods. Boring dinner = fast race."] },
      { name: "★ RACE DAY ★", kind: "SIM", minutes: 15, beer: true, goal: "4 × beer + 4 laps. Glory.", steps: [BEER_NOTE, "Lap 1 EASY — bank calm, not time.", "Laps 2–3 steady with burp-walk starts.", "Lap 4: everything you have. Finish with empty held high!"] },
    ],
  },
];

// ---------------------------------------------------------------- IRON (3x/week)
const ironWeeks: PlanWeek[] = [
  {
    week: 1,
    theme: "Carbonation audit",
    pep: "You can run. Prove you can chug. Runners lose Beer Miles in lap 1 — not you.",
    sessions: [
      { name: "Chug Time Trial", kind: "CHUG", minutes: 25, beer: false, goal: "5 × 12oz water, log avg + spread", steps: [WATER, "5 × 12oz, 3 min rest. Avg + fastest.", "Spread <5 secs = pro pacing already."] },
      { name: "Gut Baseline Walk", kind: "GUT", minutes: 25, beer: false, goal: "24oz + 1.5-mi walk", steps: ["Sip 24oz fizzy across walk.", "Note bloat curve. Data = speed later."] },
      { name: "Easy 3 (capped!)", kind: "JOG", minutes: 40, beer: false, goal: "3 mi, NOT fast", steps: ["Cap at chatty pace. No heroics — speed trap warning.", "Strides 6 × 20 sec relaxed."] },
    ],
  },
  {
    week: 2,
    theme: "Burp mastery",
    pep: "Silent burps, fast transitions. The boring stuff that wins.",
    sessions: [
      { name: "Transition Reps", kind: "CHUG", minutes: 25, beer: false, goal: "5 × (12oz + 100m jog), <15-sec changeovers", steps: [WATER, "Can down → 3 breaths → 100m. × 5.", "Same can spot every rep. Boring = fast."] },
      { name: "Fizz Ladder 32", kind: "GUT", minutes: 30, beer: false, goal: "32oz tolerance", steps: ["8oz × 4 with 4-min walks.", "Upright 20 min after."] },
      { name: "Easy 3.5", kind: "JOG", minutes: 45, beer: false, goal: "Aerobic, easy", steps: ["3.5 mi chatty + 6 strides."] },
    ],
  },
  {
    week: 3,
    theme: "Combo volume",
    pep: "Water combos × 3. Smooth like a vending machine.",
    sessions: [
      { name: "Triple (water)", kind: "SIM", minutes: 40, beer: false, goal: "3 × (12oz + 400m)", steps: [WATER, "4-min walk between. Middle rep should feel automatic."] },
      { name: "Speed Chugs", kind: "CHUG", minutes: 20, beer: false, goal: "Chase sub-15s reps", steps: [WATER, "5 × 12oz. Form first, clock second."] },
      { name: "Easy 4", kind: "JOG", minutes: 50, beer: false, goal: "Long easy (running peak-ish)", steps: ["4 mi easy. This is plenty — chug is the sport here."] },
    ],
  },
  {
    week: 4,
    theme: "Beer sim #1 + deload jog",
    pep: "First real-can test. Then easy legs. Science!",
    sessions: [
      { name: "★ Beer Sim #1 ★", kind: "SIM", minutes: 35, beer: true, goal: "3 × (beer/NA + lap), 8 min apart", steps: [BEER_NOTE, "Race setup. Log chug/lap/gut.", "Walk between. Transitions <20 secs."] },
      { name: "Burp + Breath Lab", kind: "GUT", minutes: 20, beer: false, goal: "First-100m nose-breathing", steps: [WATER, "12oz + 800m with nasal start. × 2."] },
      { name: "Easy 3", kind: "JOG", minutes: 40, beer: false, goal: "Flush + strides", steps: ["3 mi + 6 × 20-sec pickups."] },
    ],
  },
  {
    week: 5,
    theme: "Gut armor",
    pep: "Bigger fizzy volume. Your stomach gets a gym membership.",
    sessions: [
      { name: "Fizz 40 Walk", kind: "GUT", minutes: 35, beer: false, goal: "40oz over 30-min walk", steps: ["Steady sipping + walking. Note your bloat number.", "Ginger tea after. Very civilised."] },
      { name: "Chug Ladder", kind: "CHUG", minutes: 25, beer: false, goal: "6oz-12oz-12oz-6oz", steps: [WATER, "Climb up and down. Practice gear changes."] },
      { name: "Easy 3.5 + Strides", kind: "JOG", minutes: 45, beer: false, goal: "3.5 mi + 8 strides", steps: ["Easy miles, snappy (not sprinty) strides."] },
    ],
  },
  {
    week: 6,
    theme: "Beer sim #2",
    pep: "Three beers, three laps. The full almost-thing.",
    sessions: [
      { name: "★ Beer Sim #2 ★", kind: "SIM", minutes: 40, beer: true, goal: "3 × (beer/NA + lap)", steps: [BEER_NOTE, "Full race routine minus final rep.", "Practice celebration. Important."] },
      { name: "Water Grand Prix Lite", kind: "CHUG", minutes: 20, beer: false, goal: "4 × 12oz consistent", steps: [WATER, "Chase tight spread over raw speed."] },
      { name: "Easy 4", kind: "JOG", minutes: 50, beer: false, goal: "4 mi easy", steps: ["Chatty. Flat. Done."] },
    ],
  },
  {
    week: 7,
    theme: "Heat + hills (gentle)",
    pep: "A little adversity training. Still chug-first, still easy running.",
    sessions: [
      { name: "Warm-Weather Combo", kind: "SIM", minutes: 35, beer: false, goal: "3 × (12oz + 400m) warm", steps: [WATER, "Midday warmth if safe. Sip water extra.", "Slow laps — heat + fizz demands respect."] },
      { name: "Hill Burp Walk", kind: "GUT", minutes: 25, beer: false, goal: "Fizz + gentle hill", steps: ["12oz + walk hilly mile. Burp on the ups, breathe on the downs."] },
      { name: "Easy 3 + Strides", kind: "JOG", minutes: 40, beer: false, goal: "3 mi + 8 strides", steps: ["Easy + relaxed pickups."] },
    ],
  },
  {
    week: 8,
    theme: "Deload week",
    pep: "Half volume. Full naps. Sharpen the knife (the knife is your throat).",
    sessions: [
      { name: "Technique Polish", kind: "CHUG", minutes: 20, beer: false, goal: "3 × 12oz silky", steps: [WATER, "Film yourself (optional, hilarious). Fix pour angle + head tilt."] },
      { name: "Gut Reset", kind: "GUT", minutes: 20, beer: false, goal: "Easy tolerance", steps: ["16oz over 15-min walk. Boring dinner test."] },
      { name: "Easy 2.5", kind: "JOG", minutes: 35, beer: false, goal: "Fresh!", steps: ["2.5 mi very easy."] },
    ],
  },
  {
    week: 9,
    theme: "Beer sim #3: full dress",
    pep: "Race shoes, race can, race brain. Almost showtime.",
    sessions: [
      { name: "★ Beer Sim #3 ★", kind: "SIM", minutes: 45, beer: true, goal: "4 × (beer/NA + lap) — FULL RACE", steps: [BEER_NOTE, "Full 4×4. Walk 5 min between laps 2–3 if needed (race wouldn't, but practice can).", "Log everything. This predicts race day within ~30 secs."] },
      { name: "Shakeout Chugs", kind: "CHUG", minutes: 15, beer: false, goal: "2 × 6oz easy", steps: [WATER, "Two days later: tiny flush chugs. Stay sharp."] },
      { name: "Easy 3", kind: "JOG", minutes: 40, beer: false, goal: "Flush legs", steps: ["3 mi easy + burp walk."] },
    ],
  },
  {
    week: 10,
    theme: "Speed + steel",
    pep: "Chase chug PBs. Running stays chill — discipline!",
    sessions: [
      { name: "Chug PB Hunt", kind: "CHUG", minutes: 25, beer: false, goal: "Fastest 12oz ever (smooth!)", steps: [WATER, "Warm 2 × 6oz, then 3 all-out-smooth 12oz.", "PB gets a sticker. Sticker gets pride."] },
      { name: "Triple (water) Sharp", kind: "SIM", minutes: 40, beer: false, goal: "3 × fast-transition combos", steps: [WATER, "Transitions <12 secs. Practice like it's lap 4."] },
      { name: "Easy 3.5", kind: "JOG", minutes: 45, beer: false, goal: "3.5 mi easy", steps: ["Easy + 8 strides. No timing the run — time the chugs."] },
    ],
  },
  {
    week: 11,
    theme: "Peak + final sim",
    pep: "Last big week. Leave nothing (except, you know, everything stays down).",
    sessions: [
      { name: "★ Beer Sim #4 ★", kind: "SIM", minutes: 40, beer: true, goal: "3 × (beer/NA + lap), race pace", steps: [BEER_NOTE, "Sharp, confident, calm lap 1.", "Nail transitions. Then rest 2 days."] },
      { name: "Gut Armor Final", kind: "GUT", minutes: 25, beer: false, goal: "32oz walk, easy", steps: ["Confidence-builder volume. You've done harder."] },
      { name: "Easy 2", kind: "JOG", minutes: 30, beer: false, goal: "Taper begins", steps: ["2 mi very easy. Sleep 8 hrs from here on."] },
    ],
  },
  {
    week: 12,
    theme: "Race week!!",
    pep: "Taper. Shine. Chug. Glory. Your gut is a temple (a fizzy temple).",
    sessions: [
      { name: "Shakeout (2 days out)", kind: "JOG", minutes: 20, beer: false, goal: "Loose + lethal", steps: ["10-min jog + 1 × 6oz water.", "Prep kit. Chill cans. Early bed."] },
      { name: "Calm Walk (day before)", kind: "GUT", minutes: 15, beer: false, goal: "Nerves → excitement", steps: ["15-min walk. Visualise 4 perfect chugs.", "Boring dinner. Hydrate."] },
      { name: "★ RACE DAY ★", kind: "SIM", minutes: 40, beer: true, goal: "Glory. Top-half chug splits.", steps: [BEER_NOTE, "Lap 1: controlled fury. Chug smooth, jog EASY.", "Laps 2–3: burp-walk starts, steady.", "Lap 4: empty can, empty tank, full send!"] },
    ],
  },
];

export function planForBase(base: PlanBase): PersonalisedPlan {
  if (base === "steady") {
    return {
      code: "steady",
      title: "Your Personalised Chug-Builder Plan",
      subtitle:
        "Built from your quiz: solid base, wobbly fizz skills. 12 weeks, 2 sessions/week for a month, then 3. Chug-first, gut-always.",
      sessionsPerWeek: "Weeks 1–4: 2 sessions · Weeks 5–12: 3 sessions",
      chugTarget: "Water 12oz → under 20s by week 11",
      gutRule: "Max 1 beer/NA sim per week · 21+ only · water otherwise",
      runRule: "Every run chatty-easy · walk breaks always OK · never sprint lap 1",
      weeks: steadyWeeks,
    };
  }
  if (base === "iron") {
    return {
      code: "iron",
      title: "Your Personalised Carbonation-Master Plan",
      subtitle:
        "Built from your quiz: strong gut + engine. 12 weeks, 3 sessions/week. We sharpen chug speed and transitions — running stays easy on purpose.",
      sessionsPerWeek: "3 sessions every week",
      chugTarget: "Water 12oz → under 15s, tight spread",
      gutRule: "Max 1 beer/NA sim per week · 21+ only · water otherwise",
      runRule: "Easy miles only + relaxed strides · speed trap: don't race lap 1",
      weeks: ironWeeks,
    };
  }
  return {
    code: "starter",
    title: "Your Personalised Gut-First Foundation Plan",
    subtitle:
      "Built from your quiz: fresh throat, brave heart. 12 weeks, 2 sessions/week. We build chug skill + iron stomach first — running stays gentle.",
    sessionsPerWeek: "2 sessions every week",
    chugTarget: "Water 12oz → under 25s by week 11",
    gutRule: "Max 1 beer/NA sim per week · 21+ only · water otherwise",
    runRule: "Walk-jog always OK · chatty pace · flat routes",
    weeks: starterWeeks,
  };
}
