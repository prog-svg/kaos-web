/* ============================================================
   CATÁLOGO KAOS
   ============================================================
   Este es el único archivo que necesitas tocar para cambiar
   productos, precios o el número de WhatsApp.

   Después de editarlo:
     git add productos.js
     git commit -m "Actualiza catalogo"
     git push
   ============================================================ */


/* --- TU NÚMERO DE WHATSAPP ---------------------------------
   Formato: código de país + número, sin espacios ni signos.
   México es 52. Ejemplo para un número de Tehuacán:
     52238XXXXXXX
   ----------------------------------------------------------- */
const WHATSAPP = "522361136534";   // +52 236 113 6534


/* --- MÍNIMO DE PIEZAS PARA PRECIO DE MAYOREO --------------- */
const MIN_MAYOREO = 6;


/* --- PRODUCTOS ---------------------------------------------
   precio        = venta al público, por pieza
   precioMayoreo = por pieza, al llegar al mínimo de arriba
   activo        = false lo oculta sin borrarlo
   ----------------------------------------------------------- */
const PRODUCTOS = [
  {
    id: "wide-leg-aura",
    nombre: "Wide Leg Aura",
    etiqueta: "Wide leg · lavado claro",
    categoria: "Mujer",
    descripcion: "Mezclilla clara de pierna ancha y tiro alto. Cae recto desde la cadera.",
    precio: 499,
    precioMayoreo: 349,
    imagen: "products/wide-leg-aura.jpg",
    activo: true,
  },
  {
    id: "wide-leg-noche",
    nombre: "Wide Leg Noche",
    etiqueta: "Wide leg · azul oscuro",
    categoria: "Mujer",
    descripcion: "Mezclilla azul profunda con degradado. Pierna ancha y largo al piso.",
    precio: 549,
    precioMayoreo: 389,
    imagen: "products/wide-leg-noche.jpg",
    activo: true,
  },
  {
    id: "recto-cielo",
    nombre: "Recto Cielo",
    etiqueta: "Corte recto · azul cielo",
    categoria: "Mujer",
    descripcion: "Mezclilla clara de corte recto y tiro medio. El básico que combina con todo.",
    precio: 479,
    precioMayoreo: 339,
    imagen: "products/recto-cielo.jpg",
    activo: true,
  },
  {
    id: "denim-horizonte",
    nombre: "Denim Horizonte",
    etiqueta: "Baggy · azul medio",
    categoria: "Hombre",
    descripcion: "Mezclilla holgada de pierna amplia. Caída relajada sobre el tenis.",
    precio: 599,
    precioMayoreo: 429,
    imagen: "products/denim-horizonte.jpg",
    activo: true,
  },
  {
    id: "denim-claro",
    nombre: "Denim Claro",
    etiqueta: "Amplio · lavado claro",
    categoria: "Hombre",
    descripcion: "Mezclilla lavada en tono claro, pierna amplia y tiro cómodo.",
    precio: 549,
    precioMayoreo: 399,
    imagen: "products/denim-claro.jpg",
    activo: true,
  },
  {
    id: "lino-nube",
    nombre: "Lino Nube",
    etiqueta: "Amplio · blanco crudo",
    categoria: "Hombre",
    descripcion: "Pantalón blanco de caída suelta y textura ligera. Para clima cálido.",
    precio: 529,
    precioMayoreo: 379,
    imagen: "products/lino-nube.jpg",
    activo: true,
  },
  {
    id: "chino-arena",
    nombre: "Chino Arena",
    etiqueta: "Chino recto · arena",
    categoria: "Hombre",
    descripcion: "Chino de corte recto en tono arena. Vestir sin dejar de ser cómodo.",
    precio: 459,
    precioMayoreo: 329,
    imagen: "products/chino-arena.jpg",
    activo: true,
  },
];
