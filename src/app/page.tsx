import Link from "next/link";

export default function Home() {
  return (
    <div className="old-box" style={{ textAlign: "center" }}>
      <span className="burst">4 drinks + 4 laps</span>
      <h1>Beer Mile Training</h1>
      <div className="speech" style={{ textAlign: "left" }}>
        A personal 12-week training plan to get you round a beer mile. Four drinks, four laps. Whether it is your first go or you have done it before, answer a few questions and you will get a plan that fits where you are starting from.
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
