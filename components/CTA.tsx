import { site } from "@/data/content";

export default function CTA() {
  return (
    <section className="pad cta" id="contacto">
      <div className="wrap inner">
        <p className="eyebrow reveal">Reserva directa</p>
        <h2 className="reveal d1">
          Despierta frente a los <em>siete colores</em>
        </h2>
        <div className="actions reveal d2">
          <a href="#reservar" className="pill primary">
            Reservar ahora
          </a>
          <a href={site.whatsapp} className="pill ghost">
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
