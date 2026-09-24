# 🎮 GameZone - eCommerce React

GameZone es una aplicación web de eCommerce orientada a la venta de videojuegos, consolas y accesorios.

Este proyecto corresponde a la evolución de una versión anterior de GameZone, incorporando **React** para construir una interfaz basada en componentes funcionales, manejo de estados mediante **Hooks**, eventos y renderizado condicional.

La aplicación permite explorar productos, filtrar por categoría, realizar búsquedas y administrar un carrito de compras de manera interactiva.

---

## 🌐 Sitio publicado

La aplicación se encuentra desplegada mediante GitHub Pages:

👉 https://nebulosvs.github.io/gamezone-react/

---

## 🚀 Funcionalidades

### 🛍️ Catálogo de productos

Cada producto presenta:

- Imagen.
- Nombre.
- Descripción.
- Precio normal.
- Precio de oferta.
- Botón para agregar al carrito.

El catálogo incluye consolas y accesorios de videojuegos.

### 🔎 Búsqueda de productos

La aplicación cuenta con un buscador dinámico desarrollado con React.

Los productos se filtran mientras el usuario escribe utilizando el evento `onChange` y un estado administrado con `useState`.

Si no existen productos que coincidan con la búsqueda, se muestra un mensaje mediante renderizado condicional.

### 🎯 Filtrado por categorías

Desde la barra de navegación se pueden visualizar:

- Todos los productos.
- Consolas.
- Accesorios.

El cambio de categoría actualiza dinámicamente los productos mostrados.

### 🛒 Carrito de compras

El carrito permite:

- Agregar productos.
- Incrementar la cantidad de un producto.
- Disminuir la cantidad.
- Eliminar un producto cuando su cantidad llega a cero.
- Vaciar completamente el carrito.
- Visualizar la cantidad total de productos.
- Calcular automáticamente el precio total de la compra.

Los cálculos se realizan utilizando el precio de oferta de cada producto.

Cuando el carrito está vacío, React muestra un mensaje mediante renderizado condicional.

---

## ⚛️ Implementación con React

La aplicación utiliza componentes funcionales para separar las distintas responsabilidades de la interfaz.

Los principales componentes son:

- `Navbar`: navegación, categorías y contador del carrito.
- `SearchBar`: búsqueda dinámica de productos.
- `ProductList`: listado y renderizado condicional de productos.
- `ProductCard`: representación reutilizable de cada producto.
- `Cart`: administración visual del carrito.
- `Footer`: información final del sitio.

El componente `App` administra los principales estados y funciones de la aplicación.

---

## 🪝 Manejo de estados

Se utiliza el Hook `useState` para manejar información dinámica de la aplicación.

Entre los estados utilizados se encuentran:

- Productos agregados al carrito.
- Categoría seleccionada.
- Texto ingresado en el buscador.

Cuando estos estados cambian, React actualiza automáticamente los componentes correspondientes.

---

## 🖱️ Eventos

La aplicación utiliza eventos de React para permitir la interacción del usuario.

Entre ellos:

- `onClick` para agregar productos.
- `onClick` para aumentar y disminuir cantidades.
- `onClick` para vaciar el carrito.
- `onClick` para seleccionar categorías.
- `onChange` para realizar búsquedas dinámicas.

---

## 🔀 Renderizado condicional

Se implementó renderizado condicional para adaptar la interfaz según el estado de la aplicación.

Por ejemplo:

- Si el carrito está vacío, se muestra un mensaje informativo.
- Si una búsqueda no encuentra productos, se informa al usuario.
- Si existen productos, se generan dinámicamente sus respectivas tarjetas.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- React Hooks
- Vite
- Bootstrap 5
- Git
- GitHub
- GitHub Pages

---

## 📁 Estructura del proyecto

```text
gamezone-react/
│
├── public/
│   └── img/
│       ├── playstation5.jpg
│       ├── xbox-series-x.jpg
│       ├── nintendo-switch.jpg
│       ├── dualsense.png
│       ├── xbox-controller.jpg
│       └── switch-pro-controller.jpg
│
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 💻 Instalación y ejecución local

Para ejecutar el proyecto localmente es necesario tener instalado Node.js.

### 1. Clonar el repositorio

```bash
git clone https://github.com/nebulosvs/gamezone-react.git
```

### 2. Ingresar al proyecto

```bash
cd gamezone-react
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local donde se encuentra disponible la aplicación.

---

## 📦 Compilación de producción

Para generar la versión de producción:

```bash
npm run build
```

Para comprobar localmente la versión compilada:

```bash
npm run preview
```

---

## 🌐 Despliegue

El proyecto utiliza `gh-pages` para desplegar la aplicación React en GitHub Pages.

El despliegue se ejecuta mediante:

```bash
npm run deploy
```

Vite genera la versión de producción en `dist` y `gh-pages` publica su contenido en la rama correspondiente.

---

## 📱 Diseño responsive

La interfaz utiliza Bootstrap y estilos personalizados para adaptarse a distintos tamaños de pantalla.

El sitio puede utilizarse desde:

- Computadores de escritorio.
- Tablets.
- Dispositivos móviles.

---

## 📸 Evidencias

### Catálogo de productos

Vista principal del catálogo, mostrando imagen, nombre, descripción, precio normal, precio de oferta y opción para agregar productos al carrito.

![Catálogo de productos](evidencia/01-catalogo.PNG)

### Carrito de compras

El carrito permite agregar productos, modificar sus cantidades y visualizar tanto la cantidad total de productos como el precio total de la compra.

![Carrito de compras](evidencia/02-carrito.PNG)

### Búsqueda y renderizado condicional

El buscador utiliza el evento `onChange` para actualizar dinámicamente los resultados. Cuando no existen coincidencias, se muestra un mensaje mediante renderizado condicional.

![Búsqueda sin resultados](evidencia/03-busqueda-sin-resultados.PNG)

### Filtrado por categoría

La aplicación permite filtrar dinámicamente los productos según su categoría.

![Filtro de accesorios](evidencia/04-filtro-accesorios.PNG)

### Diseño responsive

La interfaz se adapta a diferentes tamaños de pantalla utilizando Bootstrap y estilos personalizados.

![Vista responsive móvil](evidencia/05-responsive-movil.PNG)

---

## 👩‍💻 Autor

Sofía Medina.
Proyecto desarrollado como actividad académica para la asignatura **Desarrollo Frontend I**.

---

## 📄 Licencia

Proyecto desarrollado con fines académicos y educativos.