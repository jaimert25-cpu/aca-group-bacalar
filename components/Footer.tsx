import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fcol">
            <div className="mark">Grupo ACA</div>
            <p className="tagline">
              Hoteles, hostal, restaurantes, muelle y departamentos frente a la
              Laguna de los Siete Colores. Bacalar, Quintana Roo, México.
            </p>
          </div>
          <div className="fcol">
            <h5>Hospedaje</h5>
            <ul>
              <li><a href="#hospedaje">Maya Cabaña</a></li>
              <li><a href="#hospedaje">Tropic Bacalar</a></li>
              <li><a href="#hospedaje">Aldea Chee-eek</a></li>
              <li><a href="#hospedaje">Xa&apos;an</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Explora</h5>
            <ul>
              <li><a href="#muelle">El Muelle</a></li>
              <li><a href="#restaurantes">Restaurantes</a></li>
              <li><a href="#departamentos">Departamentos</a></li>
              <li><a href="#bacalar">Bacalar</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Contacto</h5>
            <ul>
              <li><a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/tropicbacalar" target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>© 2026 Grupo ACA · acagroupbacalar.com</span>
          <span>Aviso de privacidad · Términos y condiciones</span>
        </div>
      </div>
    </footer>
  );
}
