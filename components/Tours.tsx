import { tours } from "@/data/content";

export default function Tours() {
  return (
    <section className="pad tours">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow reveal">Paseos por la laguna</p>
            <h2 className="reveal d1">Sal al agua con nosotros</h2>
          </div>
          <p className="reveal d2">
            Recorridos guiados que salen directo de nuestro muelle. Precio por
            persona.
          </p>
        </div>
        <div className="grid-dining">
          {tours.map((t, i) => (
            <article key={t.name} className={"dish reveal" + (i ? " d" + i : "")}>
              <div className="ph">
                <div className={"tone " + t.tone} />
                {t.price && <span className="pill-price">{t.price}</span>}
              </div>
              <div className="body">
                <div className="cui">{t.cui}</div>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
