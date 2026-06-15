"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // el hero y el buscador se muestran de inmediato
    document
      .querySelectorAll(".hero .reveal, .booking .reveal")
      .forEach((el) => el.classList.add("in"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(".reveal:not(.in)")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
