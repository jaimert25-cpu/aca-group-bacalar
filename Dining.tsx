"use client";

import Image from "next/image";
import { hotels, galleries } from "@/data/content";
import { useGallery } from "./GalleryProvider";

const Arrow = () => (
  <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
    <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
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
                  <div className="foot">
                    <div className="price">
                      {h.price} <span>MXN / noche · desde</span>
                    </div>
                    <a
                      className="more"
                      href={h.instagram}
                      target="_blank"
                      rel="noopener"
                    >
                      Ver en Instagram <Arrow />
                    </a>
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
