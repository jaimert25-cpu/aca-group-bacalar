"use client";

import Image from "next/image";
import { departamentos, galleries } from "@/data/content";
import { useGallery } from "./GalleryProvider";

const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z" />
  </svg>
);

export default function Departamentos() {
  const { openGallery } = useGallery();

  return (
    <section className="pad depas" id="departamentos">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow reveal">Estancias flexibles</p>
            <h2 className="reveal d1">Departamentos en renta</h2>
          </div>
          <p className="reveal d2">
            Departamentos amueblados con opciones de renta por noche o por mes,
            ideales para disfrutar Bacalar a tu propio ritmo.
          </p>
        </div>
        <div className="layout">
          {departamentos.map((d, i) => {
            const count = d.gallery && galleries[d.gallery] ? galleries[d.gallery].length : 0;
            const clickable = !!(d.cover && d.gallery);
            return (
              <article key={d.name} className={"depa " + d.cls + " reveal" + (i ? " d1" : "")}>
                {d.cover && (
                  <div
                    className="depa-photo"
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/10",
                      borderRadius: "12px",
                      overflow: "hidden",
                      marginBottom: "24px",
                      cursor: clickable ? "pointer" : "default",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                    }}
                    onClick={clickable ? () => openGallery(d.gallery!) : undefined}
                  >
                    <Image
                      src={d.cover}
                      alt={`${d.name}, Bacalar`}
                      fill
                      sizes="(max-width:920px) 100vw, 640px"
                      style={{ objectFit: "cover" }}
                    />
                    {clickable && (
                      <span
                        className="gal-badge"
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          zIndex: 2,
                          background: "rgba(6, 42, 53, 0.85)",
                          color: "#fff",
                          backdropFilter: "blur(6px)",
                          fontSize: "0.74rem",
                          letterSpacing: "0.06em",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          border: "1px solid rgba(255, 255, 255, 0.25)",
                        }}
                      >
                        Ver fotos · {count}
                      </span>
                    )}
                  </div>
                )}
                <div className="u">{d.u}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px", marginBottom: "22px" }}>
                  {d.modalities.map((m) => (
                    <span
                      key={m}
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(6px)",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        fontWeight: 500,
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.35)",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={`${d.whatsapp}?text=${encodeURIComponent(
                      `Hola, me interesa información y disponibilidad para Casa 24.`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Contactar a ${d.name} por WhatsApp`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#fff",
                      color: "var(--deep)",
                      fontSize: ".82rem",
                      fontWeight: 600,
                      letterSpacing: ".05em",
                      padding: "10px 20px",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                    }}
                  >
                    <WaIcon /> WhatsApp (+52 1 983 120 8637)
                  </a>
                  {clickable && (
                    <button
                      type="button"
                      onClick={() => openGallery(d.gallery!)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "transparent",
                        color: "#fff",
                        fontSize: ".82rem",
                        letterSpacing: ".05em",
                        padding: "9px 18px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Ver galería ({count})
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
