import Image from "next/image";
import { site } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <Image
          className="hero-img"
          src={site.hero}
          alt="Laguna de los Siete Colores, Bacalar"
          fill
          priority
          sizes="100vw"
        />
        <div className="shimmer" />
      </div>
      <div className="wrap hero-inner">
        <p className="eyebrow reveal d1">
          Bacalar · Quintana Roo · Pueblo Mágico
        </p>
        <h1 className="reveal d2">
          Vive Bacalar frente a la{" "}
          <em>Laguna de los Siete Colores</em>
        </h1>
        <p className="lede reveal d3">
          Hoteles, hostal, restaurantes y un muelle con paseos por la laguna.
          Una sola familia de negocios para tu viaje: Grupo ACA.
        </p>
      </div>
    </section>
  );
}
