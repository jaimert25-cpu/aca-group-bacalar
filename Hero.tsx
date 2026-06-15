import Image from "next/image";
import { muelle } from "@/data/content";

export default function Muelle() {
  return (
    <section className="muelle" id="muelle">
      <div className="bg">
        <Image
          className="muelle-img"
          src={muelle.bg}
          alt="Muelle de Tropic Bacalar sobre la laguna"
          fill
          sizes="100vw"
        />
      </div>
      <div className="wrap inner">
        <p className="eyebrow reveal">{muelle.eyebrow}</p>
        <h2 className="reveal d1">
          {muelle.title[0]}
          <em>{muelle.title[1]}</em>
        </h2>
        <p className="reveal d2">{muelle.desc}</p>
        <div className="stats">
          {muelle.stats.map((s, i) => (
            <div key={s.l} className={"stat reveal d" + (i + 2)}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <p className="fleet reveal d4">
          {muelle.fleet.text}{" "}
          <a
            href={muelle.fleet.ig}
            target="_blank"
            rel="noopener"
            style={{ color: "var(--shallow)", textDecoration: "underline" }}
          >
            {muelle.fleet.igText}
          </a>
        </p>
      </div>
    </section>
  );
}
