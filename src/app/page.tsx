import Link from "next/link";

export default function Home() {
  return (
    <div className="old-box" style={{ textAlign: "center" }}>
      <span className="burst">4 drinks + 4 laps</span>
      <h1>Beer Mile Training</h1>
      <div className="speech" style={{ textAlign: "left" }}>
        Complete the questionnaire to get your personal 12-week training plan.
      </div>
      <p style={{ marginTop: "24px" }}>
        <Link href="/quiz" className="old-btn">
          Start questionnaire
        </Link>
      </p>
      <p>
        <small>
          <Link href="/training" className="old-link">
            I already completed it - show my plan
          </Link>
        </small>
      </p>
    </div>
  );
}
