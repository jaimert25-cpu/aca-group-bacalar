"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { galleries, type Photo } from "@/data/content";

type Ctx = { openGallery: (key: string) => void };
const GalleryCtx = createContext<Ctx>({ openGallery: () => {} });

export const useGallery = () => useContext(GalleryCtx);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<Photo[]>([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const openGallery = useCallback((key: string) => {
    const g = galleries[key];
    if (!g || !g.length) return;
    setList(g);
    setIndex(0);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i + d + list.length) % list.length),
    [list.length]
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  const current = list[index];

  return (
    <GalleryCtx.Provider value={{ openGallery }}>
      {children}
      <div
        className={"lb" + (open ? " open" : "")}
        onClick={(e) => {
          if ((e.target as HTMLElement).classList.contains("lb")) close();
        }}
      >
        <div className="count">
          {list.length ? `${index + 1} / ${list.length}` : ""}
        </div>
        <button className="close" onClick={close} aria-label="Cerrar">
          ✕
        </button>
        <button className="prev" onClick={() => step(-1)} aria-label="Anterior">
          ‹
        </button>
        {current && <img src={current.src} alt={current.cap} />}
        <button className="next" onClick={() => step(1)} aria-label="Siguiente">
          ›
        </button>
        <div className="cap">{current?.cap ?? ""}</div>
      </div>
    </GalleryCtx.Provider>
  );
}
