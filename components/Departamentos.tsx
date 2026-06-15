import { departamentos } from "@/data/content";

export default function Departamentos() {
  return (
    <section className="pad depas" id="departamentos">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow reveal">Estancias largas</p>
            <h2 className="reveal d1">Departamentos en renta</h2>
          </div>
          <p className="reveal d2">
            16 departamentos amueblados en dos edificios, para quienes se quedan
            a vivir Bacalar por temporadas.
          </p>
        </div>
        <div className="layout">
          {departamentos.map((d, i) => (
            <article key={d.name} className={"depa " + d.cls + " reveal" + (i ? " d1" : "")}>
              <div className="u">{d.u}</div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <div className="from">
                {d.from} <span>MXN / mes · desde</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
