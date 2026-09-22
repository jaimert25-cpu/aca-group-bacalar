"use client";

import { experiencia } from "@/data/content";

const WaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z" />
  </svg>
);

export default function Experiencias() {
  return (
    <section className="pad experiencias" id="experiencias">
      <div className="wrap">
        <div className="exp-layout">
          <div className="exp-video reveal">
            <video
              src={experiencia.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="exp-text">
            <p className="eyebrow reveal">{experiencia.eyebrow}</p>
            <h2 className="reveal d1">{experiencia.title}</h2>
            <p className="reveal d2">{experiencia.desc}</p>
            <a
              className="reveal d2"
              href={`${experiencia.whatsapp}?text=${encodeURIComponent(
                "Hola, me interesa el masaje en Aldea Chee-eek."
              )}`}
              target="_blank"
              rel="noopener"
              aria-label="Reservar el masaje en Aldea Chee-eek por WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "var(--teal)",
                color: "#fff",
                fontSize: ".8rem",
                letterSpacing: ".05em",
                padding: "10px 18px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                marginTop: "10px",
              }}
            >
              <WaIcon /> Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
