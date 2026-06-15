"use client";

import { hotels } from "@/data/content";

export default function Booking() {
  return (
    <div className="booking" id="reservar">
      <div className="booking-card reveal">
        <div className="field">
          <label>Hospedaje</label>
          <select>
            <option>Todos los hoteles</option>
            {hotels.map((h) => (
              <option key={h.name}>{h.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Llegada</label>
          <input
            type="text"
            placeholder="Selecciona fecha"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => {
              if (!e.currentTarget.value) e.currentTarget.type = "text";
            }}
          />
        </div>
        <div className="field">
          <label>Salida</label>
          <input
            type="text"
            placeholder="Selecciona fecha"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => {
              if (!e.currentTarget.value) e.currentTarget.type = "text";
            }}
          />
        </div>
        <button className="book-btn">Ver disponibilidad</button>
      </div>
    </div>
  );
}
