"use client";

import Image from "next/image";
import { restaurants } from "@/data/content";
import { useGallery } from "./GalleryProvider";

export default function Dining() {
  const { openGallery } = useGallery();

  return (
    <section className="pad dining" id="restaurantes">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow reveal">Dónde comer y beber</p>
            <h2 className="reveal d1">Sabor de Bacalar, frente al agua</h2>
          </div>
          <p className="reveal d2">
            Dos restaurantes y un bar, abiertos a huéspedes y a todo el que pase
            a visitarnos.
          </p>
        </div>
        <div className="grid-dining">
          {restaurants.map((r, i) => {
            const clickable = !!(r.cover && r.gallery);
            return (
              <article key={r.name} className={"dish reveal" + (i ? " d" + i : "")}>
                <div
                  className="ph"
                  style={clickable ? { cursor: "pointer" } : undefined}
                  onClick={clickable ? () => openGallery(r.gallery!) : undefined}
                >
                  {r.cover ? (
                    <Image
                      className="cover"
                      src={r.cover}
                      alt={r.name}
                      fill
                      sizes="(max-width:920px) 100vw, 33vw"
                    />
                  ) : (
                    <div className={"tone " + r.tone} />
                  )}
                </div>
                <div className="body">
                  <div className="cui">{r.cui}</div>
                  <h3>{r.name}</h3>
                  <p>{r.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
