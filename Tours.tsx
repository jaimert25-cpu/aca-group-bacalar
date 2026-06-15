"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hospedaje", label: "Hospedaje" },
  { href: "#muelle", label: "El Muelle" },
  { href: "#restaurantes", label: "Restaurantes" },
  { href: "#departamentos", label: "Departamentos" },
  { href: "#bacalar", label: "Bacalar" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={solid ? "solid" : ""}>
      <div className="wrap nav">
        <a href="#top" className="logo">
          <span className="mark">ACA</span>
          <span className="sub">Grupo · Bacalar</span>
        </a>
        <nav className={"links" + (menuOpen ? " open" : "")}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#reservar" className="btn" onClick={() => setMenuOpen(false)}>
            Reservar
          </a>
        </nav>
        <div className="burger" onClick={() => setMenuOpen((o) => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
