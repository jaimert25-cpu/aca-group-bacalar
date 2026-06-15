import { destino } from "@/data/content";

export default function Destino() {
  return (
    <section className="pad destino" id="bacalar">
      <div className="wrap">
        <div className="layout">
          <div className="visual reveal">
            <span className="cap">Laguna de los Siete Colores</span>
          </div>
          <div>
            <p className="eyebrow reveal">{destino.eyebrow}</p>
            <h2 className="reveal d1">{destino.title}</h2>
            <p className="reveal d2">{destino.desc}</p>
            <div className="features">
              {destino.features.map((f, i) => (
                <div key={f.h} className={"feature reveal d" + (i < 2 ? 2 : 3)}>
                  <h4>{f.h}</h4>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
