import { useState, useEffect, type CSSProperties } from "react";
import { Link } from "react-router-dom";

function App() {
  const launchDate = new Date("2027-01-01T00:00:00");

  const calcTimeLeft = () => {
    const diff = launchDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  });

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.logo}>EngineeriT</span>
        <Link to="/clients" style={styles.navLink}>
          Clients
        </Link>
      </nav>

      <main style={styles.main}>
        <p style={styles.label}>COMING SOON</p>

        <h1 style={styles.heading}>
          Something great is
          <br />
          being built.
        </h1>

        <p style={styles.sub}>
          We're working behind the scenes to bring you something exceptional.
        </p>

        <div style={styles.divider} />

        <div style={styles.timer}>
          {(["days", "hours", "minutes", "seconds"] as const).map(
            (unit, i) => (
              <div key={unit} style={styles.timerBlock}>
                <span style={styles.timerValue}>
                  {pad(timeLeft[unit])}
                  {i < 3 && <span style={styles.timerSep}>:</span>}
                </span>
                <span style={styles.timerLabel}>{unit}</span>
              </div>
            )
          )}
        </div>

        <div style={styles.divider} />

        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const email = fd.get("email");
            if (email) alert(`Thanks! We'll notify ${email} when we launch.`);
          }}
        >
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            style={styles.input}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "#111")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "#e0e0e0")
            }
          />
          <button type="submit" style={styles.button}>
            Notify Me
          </button>
        </form>
      </main>

      <footer style={styles.footer}>
        &copy; 2022 EngineeriT
      </footer>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100%",
    background: "#fff",
    color: "#111",
    fontFamily:
      "'Century Gothic', CenturyGothic, AppleGothic, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)",
  },

  nav: {
    width: "100%",
    maxWidth: 560,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: "clamp(4rem, 10vh, 8rem)",
  },

  logo: {
    fontSize: "1.1rem",
    fontWeight: 900,
    letterSpacing: "-0.03em",
    color: "#111",
    fontFamily:
      "'Century Gothic Bold', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif",
  },

  navLink: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "#999",
    textDecoration: "none",
    letterSpacing: "0.04em",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 560,
    flex: 1,
  },

  label: {
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.25em",
    color: "#bbb",
    marginBottom: "1.5rem",
  },

  heading: {
    fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    color: "#111",
    margin: 0,
  },

  sub: {
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    lineHeight: 1.8,
    color: "#999",
    maxWidth: 400,
    marginTop: "1.25rem",
  },

  divider: {
    width: 40,
    height: 1,
    background: "#e0e0e0",
    margin: "2.5rem 0",
  },

  timer: {
    display: "flex",
    alignItems: "flex-start",
    gap: "clamp(0.25rem, 2vw, 0.5rem)",
  },

  timerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 52,
  },

  timerValue: {
    fontSize: "clamp(1.5rem, 4.5vw, 2.25rem)",
    fontWeight: 700,
    fontVariantNumeric: "tabular-nums",
    letterSpacing: "-0.02em",
    color: "#111",
  },

  timerSep: {
    color: "#ddd",
    fontWeight: 300,
    marginLeft: "clamp(0.25rem, 1.5vw, 0.5rem)",
  },

  timerLabel: {
    fontSize: "0.55rem",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#ccc",
    marginTop: "0.3rem",
  },

  form: {
    display: "flex",
    gap: "0.5rem",
    width: "100%",
    maxWidth: 380,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  input: {
    flex: "1 1 200px",
    padding: "0.7rem 0",
    fontSize: "0.85rem",
    border: "none",
    borderBottom: "1px solid #e0e0e0",
    background: "transparent",
    color: "#111",
    outline: "none",
    transition: "border-color 0.2s",
    textAlign: "center",
  },

  button: {
    padding: "0.65rem 1.75rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "0",
    border: "1px solid #111",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },

  footer: {
    marginTop: "auto",
    paddingTop: "clamp(3rem, 8vh, 6rem)",
    fontSize: "0.65rem",
    color: "#ccc",
    letterSpacing: "0.04em",
  },
};

export default App;
