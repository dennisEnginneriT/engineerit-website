import { useState, useEffect, type CSSProperties } from "react";

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
      <div style={styles.glow} aria-hidden />

      <main style={styles.main}>
        <span style={styles.logo}>EngineeriT</span>
        <span style={styles.badge}>COMING SOON</span>

        <h1 style={styles.heading}>
          Something great is
          <br />
          being built.
        </h1>

        <p style={styles.sub}>
          We're working hard behind the scenes to bring you something
          exceptional. Stay tuned.
        </p>

        <div style={styles.timer}>
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} style={styles.timerBlock}>
              <span style={styles.timerValue}>{pad(timeLeft[unit])}</span>
              <span style={styles.timerLabel}>{unit}</span>
            </div>
          ))}
        </div>

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
            placeholder="Enter your email"
            style={styles.input}
            onFocus={(e) =>
              Object.assign(e.currentTarget.style, styles.inputFocus)
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
            }
          />
          <button type="submit" style={styles.button}>
            Notify Me
          </button>
        </form>
      </main>

      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} EngineeriT &middot; All rights reserved
      </footer>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100%",
    background: "#0f172a",
    color: "#ffffff",
    fontFamily:
      "'Century Gothic', CenturyGothic, AppleGothic, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "2rem",
  },

  glow: {
    position: "absolute",
    top: "-40%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "min(900px, 140vw)",
    height: "min(900px, 140vw)",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    pointerEvents: "none" as const,
  },

  main: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 640,
    gap: "2rem",
  },

  logo: {
    fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
    fontWeight: 900,
    letterSpacing: "-0.03em",
    color: "rgb(165,180,252)",
    fontFamily:
      "'Century Gothic Bold', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif",
  },

  badge: {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    padding: "0.4rem 1rem",
    borderRadius: "9999px",
    border: "1px solid rgba(99,102,241,0.4)",
    color: "rgb(165,180,252)",
    background: "rgba(99,102,241,0.08)",
  },

  heading: {
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
  },

  sub: {
    fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.55)",
    maxWidth: 480,
  },

  timer: {
    display: "flex",
    gap: "clamp(0.75rem, 3vw, 2rem)",
  },

  timerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.35rem",
    minWidth: 60,
  },

  timerValue: {
    fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
    fontWeight: 700,
    fontVariantNumeric: "tabular-nums",
    letterSpacing: "-0.02em",
  },

  timerLabel: {
    fontSize: "0.65rem",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "rgba(255,255,255,0.35)",
  },

  form: {
    display: "flex",
    gap: "0.75rem",
    width: "100%",
    maxWidth: 420,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  input: {
    flex: "1 1 220px",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    borderRadius: "0.5rem",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
  },

  inputFocus: {
    borderColor: "rgb(99,102,241)",
  },

  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    borderRadius: "0.5rem",
    border: "none",
    background: "rgb(99,102,241)",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.2s",
    whiteSpace: "nowrap",
  },

  footer: {
    position: "relative",
    zIndex: 1,
    marginTop: "auto",
    paddingTop: "3rem",
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.25)",
  },
};

export default App;
