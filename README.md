# Magic: The Gathering - SPA con React

## 👨‍💻 Integrantes del grupo

- FAI-3147 Almiron Abigail Juliana
- FAI-1440 Avila Dante
- FAI-4393 Caretta Nicolás

## Link a Vercel

https://react-2-flame.vercel.app/

## Objetivo

Este proyecto es una Single Page Application (SPA) desarrollada en React que consume datos de la API pública de Magic: The Gathering. Permite explorar cartas, ver detalles, agregar favoritas, buscar y alternar entre Español e Inglés.

---

## 📦 Instalación del proyecto

**Clonar el repositorio:**

git clone https://github.com/Nico9220/React-2.git
cd React-2
npm install
npm run dev

## Funcionalidades

### Página principal `/cartas`

- Hace un `fetch` a `https://api.magicthegathering.io/v1/cards`.
- Muestra cartas en una grilla responsive.
- Cada carta tiene botón para agregar a favoritos (guardado en Local Storage).
- Incluye campo de búsqueda por nombre.
- Muestra mensaje si no hay resultados.

### Página de detalles `/cartas/:id`

- Muestra información detallada de la carta seleccionada.
- Si el ID no existe, redirige a página **Error 404**.
- Incluye botón para volver al listado.

### Página de favoritos `/favoritos`

- Consume las cartas favoritas desde Local Storage.
- Renderiza en grilla.
- Si no hay favoritas, muestra mensaje.
- Se guarda solo el `id` para evitar sobrecarga del almacenamiento.

### Idioma

- Implementada con `react-i18next`.
- Alternancia entre **Español** e **Inglés**.
- Traducciones aplicadas a títulos, botones y texto dinámico.

### Estilos

- **Tailwind CSS**.
- Banner visual con fondo.
- Diseño totalmente responsive.

---

## Consideraciones

- La API de MTG puede devolver error 500 para IDs inválidos. Fue manejado con redirección a 404.
- El `localStorage` solo almacena los IDs de cartas favoritas, no toda la carta.
- El fetch inicial puede tardar unos segundos debido al tamaño de la API.
- La API de MTG por defecto devuelve solo las primeras **100 cartas** por request.
  - Para obtener más cartas, se deberían realizar llamadas paginadas usando el parámetro `page` y `pageSize`, pero en este proyecto se optó por limitar la carga a las primeras 100 por simplicidad.

```

```
