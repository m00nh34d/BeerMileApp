import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-8 text-white shadow">
        <h1 className="text-4xl font-black tracking-tight">
          Train for the Beer Mile 🍺🏃
        </h1>
        <p className="mt-3 max-w-2xl text-white/90">
          4 beers. 4 laps. 1 mile. Build your custom training profile, follow a
          plan matched to your fitness, and log every lap and chug.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/profile"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Create Training Profile
          </Link>
          <Link
            href="/training"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90"
          >
            View Training Plan
          </Link>
          <Link
            href="/log"
            className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            Log a Run
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Custom Profile",
            desc: "Age, mile time, chug speed, weekly volume, and goal time. Stored locally in your browser.",
            href: "/profile",
          },
          {
            title: "Adaptive Plan",
            desc: "Beginner, intermediate, or advanced schedules with runs, intervals, and chug practice.",
            href: "/training",
          },
          {
            title: "Lap Tracker",
            desc: "Log 4 laps + 4 chugs per Beer Mile, track totals, and watch progress over time.",
            href: "/log",
          },
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-bold text-lg">{c.title}</h2>
            <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>
            <span className="mt-3 inline-block text-sm font-semibold underline">
              Open →
            </span>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border bg-white p-6">
        <h2 className="font-bold">Official Beer Mile Rules (summary)</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
          <li>Drink 4 beers and run 4 laps (1 mile total), starting with a beer.</li>
          <li>Beer must be 12oz (355ml), 5%+ ABV, in a can — no shotgunning or wide-mouth vessels.</li>
          <li>One penalty lap per vomit (max 1 extra lap).</li>
          <li>Finish with an empty — chug zone discipline wins races.</li>
        </ul>
        <p className="mt-3 text-xs text-neutral-500">
          Placeholder summary — replace with official rules link if needed. 21+ only, drink responsibly.
        </p>
      </section>
    </div>
  );
}
