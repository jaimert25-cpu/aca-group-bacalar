// =============================================================
//  CONTENIDO DEL SITIO  ·  Grupo ACA · Bacalar
//  Todo el contenido vive aquí. Los componentes solo lo recorren.
//  Para añadir/editar un hotel, restaurante, tour o foto:
//  cambia este archivo y listo — el diseño se repite solo.
//
//  (Cuando agreguemos inglés en la etapa 2, estos textos se
//   moverán a archivos de traducción; la estructura ya está lista.)
// =============================================================

export type Photo = { src: string; cap: string };

// ---- Galerías de fotos (clave -> lista de fotos) ----
export const galleries: Record<string, Photo[]> = {
  xaan: [
    { src: "/images/xaan-1.jpg", cap: "Xa'an · Alberca rodeada de palmeras y jardín" },
    { src: "/images/xaan-2.jpg", cap: "Xa'an · Fachada del hotel con alberca" },
    { src: "/images/xaan-3.jpg", cap: "Xa'an · Alberca entre vegetación tropical" },
    { src: "/images/xaan-4.jpg", cap: "Xa'an · Palapa común con hamacas" },
    { src: "/images/xaan-5.jpg", cap: "Xa'an · Gran palapa con bar y mesas" },
    { src: "/images/xaan-6.jpg", cap: "Xa'an · Pasillo de habitaciones con techo de palma" },
    { src: "/images/xaan-7.jpg", cap: "Xa'an · Hamaca con vista al jardín" },
    { src: "/images/xaan-8.jpg", cap: "Xa'an · Habitación con camas" },
    { src: "/images/xaan-9.jpg", cap: "Xa'an · Recepción" },
    { src: "/images/xaan-10.jpg", cap: "Xa'an · Rincón de lectura" },
    { src: "/images/xaan-11.jpg", cap: "Xa'an · Tinas al aire libre entre la naturaleza" },
  ],
  maya: [
    { src: "/images/maya-1.jpg", cap: "Maya Cabaña · Taquería y bar al anochecer" },
    { src: "/images/maya-2.jpg", cap: "Maya Cabaña · Tacos de la casa" },
    { src: "/images/maya-3.jpg", cap: "Maya Cabaña · Bar de micheladas" },
    { src: "/images/maya-4.jpg", cap: "Maya Cabaña · Piña colada frente al mural" },
  ],
  tropic: [
    { src: "/images/tropic-1.jpg", cap: "Tropic Bacalar · Jardín y muelle privado sobre la laguna" },
    { src: "/images/tropic-2.jpg", cap: "Tropic Bacalar · Muelle hacia la palapa sobre el agua" },
    { src: "/images/tropic-3.jpg", cap: "Tropic Bacalar · El hotel entre palmeras" },
    { src: "/images/tropic-4.jpg", cap: "Tropic Bacalar · Michelada con vista a la laguna" },
  ],
  aldea: [
    { src: "/images/aldea-1.jpg", cap: "Aldea Chee-eek · Alberca natural entre la selva" },
    { src: "/images/aldea-2.jpg", cap: "Aldea Chee-eek · Yoga bajo la gran palapa" },
    { src: "/images/aldea-3.jpg", cap: "Aldea Chee-eek · Cabaña con vigas de madera" },
    { src: "/images/aldea-4.jpg", cap: "Aldea Chee-eek · Tinas de piedra al aire libre" },
  ],
};

// ---- Hospedaje ----
export type Hotel = {
  name: string;
  tag: string;
  meta: string;
  desc: string;
  price: string;
  instagram: string;
  gallery: string | null; // clave de galleries, o null si aún no hay fotos
  cover: string | null;   // foto de portada
  tone: string;           // gradiente de respaldo si no hay foto
};

export const hotels: Hotel[] = [
  {
    name: "Maya Cabaña",
    tag: "Hostal · social",
    meta: "Hostal · 5 habitaciones",
    desc: "Dormitorios compartidos con nombres mayas y una habitación privada. El alma social y mochilera del grupo, con restaurante de terraza propio.",
    price: "$300",
    instagram: "https://www.instagram.com/maya_cabana",
    gallery: "maya",
    cover: "/images/maya-1.jpg",
    tone: "t1",
  },
  {
    name: "Tropic Bacalar",
    tag: "Frente a la laguna",
    meta: "Hotel · 7 habitaciones",
    desc: "Habitaciones con nombres de frutas, varias con vista directa a la Laguna de los Siete Colores. Nuestro hotel junto al agua.",
    price: "$1,600",
    instagram: "https://www.instagram.com/tropicbacalar",
    gallery: "tropic",
    cover: "/images/tropic-3.jpg",
    tone: "t3",
  },
  {
    name: "Aldea Chee-eek",
    tag: "Boutique · cabañas",
    meta: "Hotel boutique · 9 cabañas",
    desc: "Cabañas independientes entre jardines, pensadas para desconectarse. Intimidad y naturaleza a un paso del centro de Bacalar.",
    price: "$1,050",
    instagram: "https://www.instagram.com/aldeacheeek",
    gallery: "aldea",
    cover: "/images/aldea-1.jpg",
    tone: "t2",
  },
  {
    name: "Xa'an",
    tag: "Acogedor",
    meta: "Hotel · 8 habitaciones",
    desc: "Habitaciones dobles y triples, sencillas y cómodas. La opción cálida y accesible para descubrir Bacalar sin gastar de más.",
    price: "$650",
    instagram: "https://www.instagram.com/xaanbacalar_",
    gallery: "xaan",
    cover: "/images/xaan-1.jpg",
    tone: "t5",
  },
];

// ---- Restaurantes y bar ----
export type Dining = {
  name: string;
  cui: string;
  desc: string;
  gallery: string | null;
  cover: string | null;
  tone: string;
};

export const restaurants: Dining[] = [
  {
    name: "Maya Cabaña Restaurante",
    cui: "Terraza · dentro del hostal",
    desc: "Cocina abierta en terraza y salón principal, dentro del hostal Maya Cabaña.",
    gallery: "maya",
    cover: "/images/maya-2.jpg",
    tone: "t2",
  },
  {
    name: "Choco Peek",
    cui: "Restaurante",
    desc: "Un salón íntimo con barra, para comidas con calma a cualquier hora del día.",
    gallery: null,
    cover: null,
    tone: "t1",
  },
  {
    name: "Cache Cache",
    cui: "Bar · lounge",
    desc: "Coctelería y zona lounge para terminar el día. Reservable para grupos.",
    gallery: null,
    cover: null,
    tone: "t4",
  },
];

// ---- Paseos por la laguna ----
export type Tour = { name: string; cui: string; price: string | null; desc: string; tone: string };

export const tours: Tour[] = [
  {
    name: "Tour 7 Colores",
    cui: "4 horas · snorkel + refrigerio",
    price: "$650 / persona",
    desc: "Recorrido por los cenotes principales de la laguna. Incluye equipo de snorkel y un refrigerio a bordo.",
    tone: "t3",
  },
  {
    name: "Atardecer en velero",
    cui: "2 horas · fines de semana",
    price: "$850 / persona",
    desc: "Paseo en velero para ver la puesta de sol sobre el agua. Mínimo dos personas.",
    tone: "t4",
  },
  {
    name: "Renta de embarcaciones",
    cui: "Renta por hora",
    price: null,
    desc: "¿Prefieres tu propio recorrido? Renta el catamarán, la lancha o el velero por hora para armar tu día en la laguna.",
    tone: "t1",
  },
];

// ---- Departamentos en renta ----
export type Depa = { name: string; u: string; desc: string; from: string; cls: string };

export const departamentos: Depa[] = [
  {
    name: "Xula",
    u: "Edificio · 8 departamentos",
    desc: "Estudios y departamentos de una recámara, en planta baja y alta, para dos personas.",
    from: "$5,000",
    cls: "a",
  },
  {
    name: "Casa 24",
    u: "Edificio · 8 departamentos",
    desc: "Estudios y departamentos de una recámara con vista al jardín, cómodos y bien ubicados.",
    from: "$7,500",
    cls: "b",
  },
];

// ---- El Muelle ----
export const muelle = {
  eyebrow: "La experiencia ACA",
  title: ["El muelle, donde ", "empieza la laguna"], // 2do tramo va en cursiva
  desc: "Desde nuestro muelle salen los recorridos en catamarán, lancha y velero para conocer los siete colores del agua y los atardeceres más buscados de Bacalar.",
  bg: "/images/tropic-2.jpg",
  stats: [
    { n: "3", l: "embarcaciones en la flota" },
    { n: "2", l: "paseos guiados" },
    { n: "8", l: "personas en el catamarán" },
  ],
  fleet: {
    text: "Flota desde Tropic Bacalar: Catamarán Brisa (8 pax) · Lancha Coral (6 pax) · Velero Azul (6 pax) —",
    igText: "reserva por Instagram",
    ig: "https://www.instagram.com/tropicbacalar",
  },
};

// ---- Bacalar (el destino) ----
export const destino = {
  eyebrow: "El destino",
  title: "Bacalar, el Pueblo Mágico del agua",
  desc: "A orillas de una de las lagunas más bellas de México, Bacalar combina naturaleza, cenotes, fuerte histórico y una calma que la diferencia de la Riviera Maya. Grupo ACA es tu base para descubrirla.",
  features: [
    { h: "Recorridos en laguna", p: "Catamarán, lancha y velero desde el muelle." },
    { h: "Cenotes y rápidos", p: "El Cenote Negro y los Rápidos a minutos." },
    { h: "Fuerte de San Felipe", p: "Historia pirata frente al Canal de los Piratas." },
    { h: "Cómo llegar", p: "3.5 h desde Cancún · 40 min desde Chetumal." },
  ],
};

// ---- Hero / contacto ----
export const site = {
  hero: "/images/tropic-1.jpg",
  whatsapp: "https://wa.me/521", // TODO: número real
  email: "hola@acagroupbacalar.com",
};
