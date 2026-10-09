# 🎮 GameZone - Tienda de Videojuegos

Proyecto desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)**.

GameZone es una aplicación web de comercio electrónico desarrollada con **React, Vite, JavaScript y Bootstrap**, orientada a la venta de videojuegos, consolas y accesorios.

La aplicación permite explorar un catálogo dinámico, filtrar productos por categoría, realizar búsquedas, administrar un carrito de compras, utilizar un formulario de contacto y acceder a funciones administrativas para agregar o eliminar productos del catálogo.

---

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Bootstrap 5
- JSON
- Git
- GitHub
- GitHub Pages

---

## ✨ Funcionalidades

### 🛍️ Catálogo de productos

Los productos se cargan dinámicamente desde el archivo:

```text
public/data/productos.json
```

El catálogo contiene diferentes categorías:

- Consolas
- Videojuegos
- Accesorios

Cada producto presenta:

- Imagen
- Nombre
- Descripción
- Categoría
- Precio normal
- Precio de oferta
- Botón para agregar al carrito

El catálogo se genera dinámicamente mediante componentes de React.

---

### 🔎 Búsqueda de productos

La aplicación incorpora un buscador que permite filtrar productos por nombre.

Los resultados se actualizan dinámicamente a medida que el usuario realiza la búsqueda.

Si no existen coincidencias, la aplicación muestra un mensaje indicando que no se encontraron productos.

---

### 🗂️ Filtro por categorías

La barra de navegación permite filtrar el catálogo mediante las siguientes opciones:

- Inicio
- Consolas
- Videojuegos
- Accesorios

Al seleccionar una categoría, React actualiza automáticamente los productos visibles sin necesidad de recargar la página.

---

### 🛒 Carrito de compras

Los usuarios pueden agregar productos al carrito desde el catálogo.

El carrito permite:

- Agregar productos.
- Incrementar cantidades.
- Disminuir cantidades.
- Eliminar productos.
- Vaciar completamente el carrito.
- Visualizar la cantidad total de productos.
- Visualizar el precio total de la compra.

El carrito se presenta mediante el componente **Offcanvas de Bootstrap**.

Cuando un mismo producto se agrega nuevamente, su cantidad aumenta en lugar de duplicar el elemento.

Si la cantidad de un producto llega a cero, este se elimina automáticamente del carrito.

---

### ✅ Confirmación al agregar productos

Cuando un producto es agregado al carrito, el botón cambia temporalmente para entregar retroalimentación visual al usuario.

Ejemplo:

```text
✓ Agregado
```

Después de unos segundos, el botón vuelve automáticamente a su estado original.

---

## 📩 Formulario de contacto

GameZone incluye un formulario de contacto desarrollado con React.

El formulario solicita:

- Nombre
- Correo electrónico
- Mensaje

Se implementaron validaciones para impedir el envío de información incorrecta o incompleta.

Entre las validaciones se encuentran:

- Nombre obligatorio.
- Correo electrónico obligatorio.
- Formato válido de correo electrónico.
- Mensaje obligatorio.

Cuando los datos son válidos, la aplicación muestra una confirmación de envío.

---

## ⚙️ Modo administrador

La aplicación incluye una interfaz administrativa de demostración.

El acceso se realiza desde el botón:

```text
⚙️
```

ubicado en la barra de navegación.

### Credenciales de demostración

```text
Usuario: admin
Contraseña: gz123
```

> **Importante:** este acceso corresponde únicamente a una simulación de autenticación en el frontend con fines académicos. Las credenciales se encuentran en el código del cliente y no representan un sistema de autenticación seguro para un entorno de producción.

Al iniciar sesión como administrador se habilitan funciones adicionales para gestionar dinámicamente el catálogo.

---

### ➕ Agregar productos

El administrador puede agregar nuevos productos mediante un formulario.

Se solicitan los siguientes datos:

- Nombre
- Categoría
- Precio normal
- Precio de oferta
- Descripción
- Ruta de la imagen

El formulario incorpora diferentes validaciones, entre ellas:

- Todos los datos requeridos deben estar completos.
- El nombre debe tener una longitud mínima.
- Los precios deben ser mayores que cero.
- El precio de oferta debe ser menor que el precio normal.
- La descripción debe cumplir una longitud mínima.
- La ruta de imagen es obligatoria.

Cuando los datos son válidos, el nuevo producto se incorpora dinámicamente al catálogo mediante el estado de React.

---

### 🗑️ Eliminar productos

Cuando el modo administrador está activo, cada producto muestra la opción:

```text
Eliminar del catálogo
```

Antes de realizar la eliminación, la aplicación solicita una confirmación para evitar eliminaciones accidentales.

Si el producto eliminado también se encontraba en el carrito, se elimina automáticamente del carrito para mantener la información sincronizada.

---

## ⚛️ Uso de React

La aplicación utiliza componentes reutilizables para separar las diferentes responsabilidades de la interfaz.

Entre los principales componentes se encuentran:

```text
App
├── Navbar
├── AdminLogin
├── SearchBar
├── ProductList
│   └── ProductCard
├── AdminProducts
├── Cart
├── ContactForm
└── Footer
```

React se utiliza para administrar dinámicamente:

- Catálogo de productos.
- Carrito de compras.
- Cantidades.
- Categorías.
- Búsquedas.
- Estado de carga.
- Manejo de errores.
- Formulario de contacto.
- Sesión administrativa.
- Creación de productos.
- Eliminación de productos.

---

## 🔄 Carga dinámica con JSON

Los productos iniciales se encuentran almacenados en:

```text
public/data/productos.json
```

La aplicación utiliza `fetch()` junto con `useEffect()` para cargar los datos cuando se inicia la aplicación.

Esto permite mantener los datos del catálogo separados de los componentes de presentación.

También se implementan estados para controlar:

```text
Cargando...
```

y posibles errores durante la lectura de los productos.

---

## 🧩 Props y State

La comunicación entre componentes se realiza mediante **props**.

Por ejemplo, los datos y funciones necesarios para agregar productos al carrito se transmiten desde los componentes superiores hacia los componentes encargados de mostrar cada producto.

La aplicación utiliza `useState` para gestionar distintos estados, entre ellos:

- Productos.
- Carrito.
- Categoría seleccionada.
- Texto de búsqueda.
- Estado de carga.
- Errores.
- Formularios.
- Estado administrativo.

Las actualizaciones se realizan de forma inmutable utilizando operaciones como:

```javascript
map()
filter()
find()
```

---

## 🎨 Bootstrap

Bootstrap se encuentra instalado mediante npm y se utiliza para construir una interfaz adaptable y consistente.

Entre los componentes y utilidades utilizadas se encuentran:

- Navbar
- Cards
- Buttons
- Forms
- Alerts
- Badges
- Modal
- Offcanvas
- Spinner
- Grid
- Flex
- Containers
- Responsive utilities

---

## 📱 Diseño responsive

La interfaz utiliza el sistema Grid de Bootstrap para adaptarse a diferentes tamaños de pantalla.

El catálogo modifica automáticamente la cantidad de columnas dependiendo del dispositivo.

Ejemplo:

```jsx
row-cols-1 row-cols-md-2 row-cols-lg-3
```

Esto permite visualizar:

- 1 columna en dispositivos pequeños.
- 2 columnas en dispositivos medianos.
- 3 columnas en pantallas grandes.

También se utilizan clases responsive de Bootstrap en formularios, navegación y otros componentes de la aplicación.

---

## 📁 Estructura principal del proyecto

```text
gamezone-react/
│
├── public/
│   ├── data/
│   │   └── productos.json
│   │
│   └── img/
│       └── ...
│
├── src/
│   ├── components/
│   │   ├── AdminLogin.jsx
│   │   ├── AdminProducts.jsx
│   │   ├── Cart.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── utils/
│   │   └── formatters.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/nebulosvs/gamezone-react.git
```

### 2. Entrar al proyecto

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

Por ejemplo:

```text
http://localhost:5173/gamezone-react/
```

---

## 🏗️ Generar versión de producción

Para generar el proyecto optimizado:

```bash
npm run build
```

Los archivos generados se almacenarán en:

```text
dist/
```

---

## 🌐 GitHub Pages

El proyecto está configurado para ser publicado mediante GitHub Pages utilizando la rama:

```text
gh-pages
```

Para desplegar una nueva versión:

```bash
npm run deploy
```

---

## ⚠️ Consideraciones

Los productos agregados o eliminados desde el modo administrador se gestionan mediante el estado de React.

Por este motivo, estos cambios son temporales y se restablecen al recargar la aplicación.

El archivo:

```text
productos.json
```

representa el catálogo inicial de la aplicación.

La persistencia permanente de cambios requeriría un backend o una base de datos, lo cual se encuentra fuera del alcance de esta implementación frontend.

Del mismo modo, el acceso administrativo corresponde a una simulación académica y no debe considerarse un mecanismo de autenticación para producción.

---

## 🧪 Pruebas funcionales

Durante el desarrollo se verificaron las siguientes funcionalidades:

- Carga inicial del catálogo.
- Filtrado por Consolas.
- Filtrado por Videojuegos.
- Filtrado por Accesorios.
- Búsqueda de productos.
- Búsqueda sin resultados.
- Agregar productos al carrito.
- Incrementar y disminuir cantidades.
- Eliminar productos del carrito.
- Vaciar el carrito.
- Cálculo del total.
- Validación del formulario de contacto.
- Inicio de sesión administrativo.
- Validación de credenciales incorrectas.
- Agregar productos al catálogo.
- Validación de precios y datos del producto.
- Eliminación de productos con confirmación.
- Sincronización entre catálogo y carrito.

---

## 👩‍💻 Autor

Sofia Medina.
Proyecto desarrollado como parte de la asignatura:

**Desarrollo Frontend I - PFY2201**

Duoc UC.