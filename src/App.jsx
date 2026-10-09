import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import AdminProducts from "./components/AdminProducts";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";

import "./App.css";


function App() {

    // ==========================================
    // ESTADOS DE LA APLICACIÓN
    // ==========================================

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    const [busqueda, setBusqueda] = useState("");
    const [esAdmin, setEsAdmin] = useState(false);

    // Estados relacionados con la carga dinámica.
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    // ==========================================
    // CARGA DINÁMICA DE PRODUCTOS
    // ==========================================

    useEffect(() => {

        const controller = new AbortController();

        const cargarProductos = async () => {

            try {

                setCargando(true);
                setError(null);

                const respuesta = await fetch(
                    `${import.meta.env.BASE_URL}data/productos.json`,
                    {
                        signal: controller.signal
                    }
                );

                if (!respuesta.ok) {
                    throw new Error(
                        "No fue posible cargar los productos."
                    );
                }

                const datos = await respuesta.json();

                setProductos(datos);

            } catch (errorCarga) {

                if (errorCarga.name !== "AbortError") {

                    console.error(
                        "Error al cargar los productos:",
                        errorCarga
                    );

                    setError(
                        "No fue posible cargar el catálogo de productos."
                    );
                }

            } finally {

                if (!controller.signal.aborted) {
                    setCargando(false);
                }
            }
        };

        cargarProductos();

        return () => {
            controller.abort();
        };

    }, []);


    // ==========================================
    // AGREGAR PRODUCTO AL CATÁLOGO
    // ==========================================

    const agregarProducto = (nuevoProducto) => {

        setProductos((productosActuales) => {

            const nuevoId =
                productosActuales.length > 0
                    ? Math.max(
                        ...productosActuales.map(
                            (producto) => producto.id
                        )
                    ) + 1
                    : 1;

            return [
                ...productosActuales,
                {
                    ...nuevoProducto,
                    id: nuevoId
                }
            ];
        });
    };


    // ==========================================
    // ELIMINAR PRODUCTO DEL CATÁLOGO
    // ==========================================

    const eliminarProducto = (id) => {

        setProductos((productosActuales) =>
            productosActuales.filter(
                (producto) => producto.id !== id
            )
        );

        // Si el producto estaba en el carrito,
        // también se elimina para mantener consistencia.
        setCarrito((carritoActual) =>
            carritoActual.filter(
                (producto) => producto.id !== id
            )
        );
    };


    // ==========================================
    // AGREGAR PRODUCTO AL CARRITO
    // ==========================================

    const agregarAlCarrito = (producto) => {

        setCarrito((carritoActual) => {

            const productoExistente = carritoActual.find(
                (item) => item.id === producto.id
            );

            if (productoExistente) {

                return carritoActual.map((item) =>
                    item.id === producto.id
                        ? {
                            ...item,
                            cantidad: item.cantidad + 1
                        }
                        : item
                );
            }

            return [
                ...carritoActual,
                {
                    ...producto,
                    cantidad: 1
                }
            ];
        });
    };


    // ==========================================
    // AUMENTAR CANTIDAD
    // ==========================================

    const aumentarCantidad = (id) => {

        setCarrito((carritoActual) =>
            carritoActual.map((producto) =>
                producto.id === id
                    ? {
                        ...producto,
                        cantidad: producto.cantidad + 1
                    }
                    : producto
            )
        );
    };


    // ==========================================
    // DISMINUIR CANTIDAD
    // ==========================================

    const disminuirCantidad = (id) => {

        setCarrito((carritoActual) => {

            const producto = carritoActual.find(
                (item) => item.id === id
            );

            if (!producto) {
                return carritoActual;
            }

            if (producto.cantidad > 1) {

                return carritoActual.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            cantidad: item.cantidad - 1
                        }
                        : item
                );
            }

            return carritoActual.filter(
                (item) => item.id !== id
            );
        });
    };


    // ==========================================
    // VACIAR CARRITO
    // ==========================================

    const vaciarCarrito = () => {
        setCarrito([]);
    };


    // ==========================================
    // CONTADOR TOTAL DEL CARRITO
    // ==========================================

    const cantidadCarrito = carrito.reduce(
        (total, producto) =>
            total + producto.cantidad,
        0
    );


    // ==========================================
    // CAMBIAR CATEGORÍA
    // ==========================================

    const cambiarCategoria = (nuevaCategoria) => {
        setCategoria(nuevaCategoria);
        setBusqueda("");
    };


    // ==========================================
    // FILTRADO DE PRODUCTOS
    // ==========================================

    const productosFiltrados = productos.filter((producto) => {

        const coincideCategoria =
            categoria === "todos" ||
            producto.categoria === categoria;

        const textoBusqueda = busqueda
            .trim()
            .toLowerCase();

        const coincideBusqueda =
            producto.nombre
                .toLowerCase()
                .includes(textoBusqueda) ||

            producto.descripcion
                .toLowerCase()
                .includes(textoBusqueda);

        return coincideCategoria && coincideBusqueda;
    });

    // ==========================================
    // SESIÓN DE ADMINISTRADOR
    // ==========================================

    const iniciarSesionAdmin = () => {
        setEsAdmin(true);
    };


    const cerrarSesionAdmin = () => {
        setEsAdmin(false);
    };


    return (
        <>

            <Navbar
                cantidadCarrito={cantidadCarrito}
                cambiarCategoria={cambiarCategoria}
                esAdmin={esAdmin}
                cerrarSesionAdmin={cerrarSesionAdmin}
            />

            <AdminLogin
                iniciarSesion={iniciarSesionAdmin}
            />


            <header className="hero text-white text-center py-5">

                <div className="container">

                    <h1 className="display-4 fw-bold">
                        Bienvenido a GameZone
                    </h1>

                    <p className="lead mb-0">
                        Tu tienda de videojuegos y consolas
                    </p>

                </div>

            </header>

            <main>


                <SearchBar
                    busqueda={busqueda}
                    setBusqueda={setBusqueda}
                />


                {/* Estado de carga */}
                {cargando && (

                    <div className="container my-5 text-center">

                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">
                                Cargando...
                            </span>
                        </div>

                        <p className="mt-3">
                            Cargando productos...
                        </p>

                    </div>

                )}


                {/* Estado de error */}
                {error && (

                    <div className="container my-5">

                        <div
                            className="alert alert-danger text-center"
                            role="alert"
                        >
                            {error}
                        </div>

                    </div>

                )}


                {/* Catálogo cargado correctamente */}
                {!cargando && !error && (
                    <>
                        <ProductList
                            productos={productosFiltrados}
                            agregarAlCarrito={agregarAlCarrito}
                            eliminarProducto={
                                esAdmin
                                    ? eliminarProducto
                                    : null
                            }
                        />

                        {esAdmin && (
                            <AdminProducts
                                agregarProducto={agregarProducto}
                            />
                        )}
                    </>
                )}

                <ContactForm />

            </main>

            <Cart
                carrito={carrito}
                aumentarCantidad={aumentarCantidad}
                disminuirCantidad={disminuirCantidad}
                vaciarCarrito={vaciarCarrito}
            />



            <Footer />

        </>
    );
}

export default App;