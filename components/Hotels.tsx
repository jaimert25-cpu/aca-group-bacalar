"use client";

import Image from "next/image";
import { hotels, galleries } from "@/data/content";
import { useGallery } from "./GalleryProvider";

const Arrow = () => (
  <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
    <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const WaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z" />
  </svg>
);

export default function Hotels() {
  const { openGallery } = useGallery();

  return (
    <section className="pad hotels" id="hospedaje">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow reveal">Dónde dormir</p>
            <h2 className="reveal d1">Cuatro maneras de despertar en Bacalar</h2>
          </div>
          <p className="reveal d2">
            Cada propiedad tiene su propio carácter, del presupuesto mochilero a
            la cabaña con jardín. Elige cómo quieres vivir la laguna.
          </p>
        </div>

        <div className="grid-hotels">
          {hotels.map((h, i) => {
            const count = h.gallery ? galleries[h.gallery].length : 0;
            const clickable = !!(h.cover && h.gallery);
            return (
              <article key={h.name} className={"hotel reveal" + (i % 2 ? " d1" : "")}>
                <div
                  className="photo"
                  style={clickable ? { cursor: "pointer" } : undefined}
                  onClick={clickable ? () => openGallery(h.gallery!) : undefined}
                >
                  {h.cover ? (
                    <Image
                      className="cover"
                      src={h.cover}
                      alt={`${h.name}, Bacalar`}
                      fill
                      sizes="(max-width:920px) 100vw, 50vw"
                    />
                  ) : (
                    <div className={"tone " + h.tone} />
                  )}
                  <span className="tag">{h.tag}</span>
                  {clickable && (
                    <span className="gal-badge">Ver fotos · {count}</span>
                  )}
                </div>
                <div className="body">
                  <div className="meta">{h.meta}</div>
                  <h3>{h.name}</h3>
                  <p>{h.desc}</p>
                  <div className="foot" style={{ flexWrap: "wrap", rowGap: "14px" }}>
                    <div className="price">
                      {h.price} <span>MXN / noche · desde</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <a
                        href={`${h.whatsapp}?text=${encodeURIComponent(
                          `Hola, me interesa reservar en ${h.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Reservar ${h.name} por WhatsApp`}
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
                        }}
                      >
                        <WaIcon /> WhatsApp
                      </a>
                      <a
                        className="more"
                        href={h.instagram}
                        target="_blank"
                        rel="noopener"
                      >
                        Instagram <Arrow />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
