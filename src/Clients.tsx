import { Link } from "react-router-dom";
import type { CSSProperties } from "react";

const clients = [
  { name: "Coinz.us", logo: "/logos/coinz-us.png", href: "https://coinz.us" },
  { name: "VegasBuilder", logo: "/logos/vegasbuilder.png", href: "https://vegasbuilder.com" },
  { name: "Joya.us", logo: "/logos/joya-us.png", href: "https://play.google.com/store/apps/details?id=com.prismplay.geotap&pcampaignid=web_share" },
  { name: "Daruma.us", logo: "/logos/daruma-us.png", href: "https://darumacasino.us" },
  { name: "SlotHub", logo: "/logos/slothub.png", href: "https://www.slotshub13.com/" },
  { name: "LuckySlots.us", logo: "/logos/luckyslots-us.png", href: "https://luckyslots.us" },
  { name: "TheBrn.ai", logo: "/logos/thebrn-ai.png", href: "https://thebrn.ai/" },
  { name: "fm:systems", logo: "/logos/fmsystems.png", href: "https://fmsystems.com/" },
  { name: "Rifiniti", logo: "/logos/rifiniti.png", href: "https://fmsystems.com/" },
  { name: "Infinite Lambda", logo: "/logos/infinite-lambda.png", href: "https://infinitelambda.com/" },
  { name: "RSK", logo: "/logos/rsk.png", href: "https://rskgroup.com/" },
  { name: "Volkswagen", logo: "/logos/volkswagen.png", href: "https://www.vw.com/en.html" },
  { name: "Adastra", logo: "/logos/adastra.png", href: "https://adastracorp.com/" },
  { name: "Estafet", logo: "/logos/estafet.png", href: "https://estafet.com/" },
  { name: "Elsevier", logo: "/logos/elsevier.png", href: "https://www.elsevier.com/" },
];

function Clients() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLogo}>
          EngineeriT
        </Link>
        <span style={styles.navCurrent}>Clients</span>
      </nav>

      <main style={styles.main}>
        <p style={styles.label}>PORTFOLIO</p>
        <h1 style={styles.heading}>Our Clients</h1>
        <p style={styles.sub}>
          Brands we've partnered with to deliver exceptional digital
          experiences.
        </p>

        <div style={styles.divider} />

        <div style={styles.grid}>
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#111";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#eee";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={styles.logo}
              />
            </a>
          ))}
        </div>
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
    maxWidth: 900,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: "clamp(3rem, 8vh, 5rem)",
  },

  navLogo: {
    fontSize: "1.1rem",
    fontWeight: 900,
    color: "#111",
    textDecoration: "none",
    letterSpacing: "-0.03em",
    fontFamily:
      "'Century Gothic Bold', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif",
  },

  navCurrent: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "#999",
    letterSpacing: "0.04em",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: 900,
    flex: 1,
  },

  label: {
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.25em",
    color: "#bbb",
    marginBottom: "1.25rem",
  },

  heading: {
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
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
    maxWidth: 420,
    marginTop: "1rem",
  },

  divider: {
    width: 40,
    height: 1,
    background: "#e0e0e0",
    margin: "2.5rem 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1rem",
    width: "100%",
  },

  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1.5rem",
    border: "1px solid #eee",
    background: "#fff",
    transition: "border-color 0.25s, transform 0.25s",
    cursor: "pointer",
  },

  logo: {
    maxWidth: "100%",
    maxHeight: 60,
    objectFit: "contain",
  },

  footer: {
    marginTop: "auto",
    paddingTop: "clamp(3rem, 8vh, 6rem)",
    fontSize: "0.65rem",
    color: "#ccc",
    letterSpacing: "0.04em",
  },
};

export default Clients;
