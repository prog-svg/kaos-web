# kaos-web

Sitio público de KAOS Pantalones, publicado con GitHub Pages.

## Por qué daba 404

El repositorio no tenía ningún `index.html`. Todo lo que había era un `README.md`
y un `.gitignore`, y encima quedaron dentro de una subcarpeta (`kaos-web/kaos-web-main/`)
porque al subir se arrastró la carpeta completa en vez de su contenido.

El workflow anterior además intentaba `npm install && npm run build` dentro de esa
subcarpeta, donde no existe ningún `package.json`, y luego publicaba `dist/`, que
nunca se generaba. Resultado: GitHub Pages publicaba un paquete vacío y la URL
respondía 404.

## Cómo subirlo bien

Los archivos van en la **raíz** del repositorio. Debe quedar así:

```
kaos-web/
├── .github/workflows/deploy.yml
├── brand/
│   ├── kaos-logo.png
│   └── kaos-monogram.png
├── .nojekyll
├── index.html          ← este archivo es el que evita el 404
└── README.md
```

Y **no** así:

```
kaos-web/
└── kaos-web-main/      ← esta carpeta de más es el problema
    └── index.html
```

Luego, en GitHub: **Settings → Pages → Source → GitHub Actions**.

## Si más adelante el sitio necesita compilarse

El workflow publica la raíz tal cual, sin compilar. Si cambias a un proyecto con
build (Vite, Astro, etc.), abre `.github/workflows/deploy.yml`, descomenta el bloque
`Setup Node / Install / Build` y cambia `path: .` por `path: ./dist`.

## Sobre `.nojekyll`

GitHub Pages pasa los sitios por Jekyll, que ignora las carpetas y archivos que
empiezan con guion bajo. El archivo vacío `.nojekyll` apaga ese comportamiento.
No lo borres.
