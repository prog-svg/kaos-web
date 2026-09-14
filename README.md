# kaos-web

Tienda de KAOS Pantalones. Catálogo con carrito; los pedidos salen por WhatsApp.
Publicada con GitHub Pages, sin servidor ni base de datos.

## Lo único que tienes que editar: `productos.js`

Ahí está todo: el número de WhatsApp, el mínimo de piezas para mayoreo, y los
siete productos con sus precios. No hace falta tocar `index.html` para nada.

### 1. Tu número de WhatsApp

```js
const WHATSAPP = "522381234567";   // <-- cámbialo
```

Código de país + número, sin espacios, guiones ni el signo `+`.
México es `52`.

### 2. Precios

Cada producto tiene dos:

```js
precio: 499,          // por pieza, venta al público
precioMayoreo: 349,   // por pieza, al llegar al mínimo
```

El mínimo se define una sola vez arriba:

```js
const MIN_MAYOREO = 6;
```

El carrito cambia solo de un precio al otro cuando el total de piezas llega al
mínimo. El cliente puede combinar modelos distintos: lo que cuenta es la suma.

### 3. Ocultar un producto sin borrarlo

```js
activo: false,
```

## Cómo subir cambios

```powershell
cd $HOME\Documents\kaos-web
git add -A
git commit -m "Actualiza catalogo"
git push
```

En un minuto está publicado.

## Agregar un producto nuevo

1. Guarda la foto en `products/` (vertical, proporción 3:4, máx 900px de ancho).
2. Copia un bloque de `productos.js`, pégalo y cambia sus datos.
3. El `id` debe ser único y sin espacios ni acentos.

## Estructura

```
kaos-web/
├── .github/workflows/deploy.yml   publicación automática
├── .nojekyll
├── index.html                     la tienda (diseño y carrito)
├── productos.js                   catálogo y WhatsApp  ← lo que editas
├── brand/                         logo y monograma
└── products/                      fotos de producto
```

## Qué hace y qué no

Hace: catálogo, filtro por categoría, carrito, precio de mayoreo automático,
y un mensaje de WhatsApp con el pedido armado.

No hace: cobrar en línea, guardar los pedidos, ni llevar inventario. El pedido
llega a tu WhatsApp y de ahí lo tomas tú. Si más adelante quieres que los pedidos
se guarden solos y se administren desde un panel, eso pide una base de datos
(Firebase) — el diseño de esta tienda se puede conservar tal cual.
