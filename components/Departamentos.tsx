import { departamentos } from "@/data/content";

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export default function Departamentos() {
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
          {departamentos.map((d, i) => (
            <article key={d.name} className={"depa " + d.cls + " reveal" + (i ? " d1" : "")}>
              <div className="u">{d.u}</div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "22px", marginBottom: "8px" }}>
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
              <a
                href={`mailto:${d.email}?subject=${encodeURIComponent(
                  `Renta en ${d.name}`
                )}`}
                aria-label={`Escribir a ${d.name} por correo`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  marginTop: "18px",
                  color: "#fff",
                  fontSize: ".8rem",
                  letterSpacing: ".05em",
                  padding: "9px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,.5)",
                  whiteSpace: "nowrap",
                }}
              >
                <MailIcon /> Correo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
