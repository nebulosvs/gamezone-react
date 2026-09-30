import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import "./App.css";


function App() {

    // ==========================================
    // ESTADOS DE LA APLICACIÓN
    // ==========================================

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    const [busqueda, setBusqueda] = useState("");

    // Estados relacionados con la carga dinámica.
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    // ==========================================
    // CARGA DINÁMICA DE PRODUCTOS
    // ==========================================

    useEffect(() => {

        const cargarProductos = async () => {

            try {

                setCargando(true);
                setError(null);

                const respuesta = await fetch(
                    `${import.meta.env.BASE_URL}data/productos.json`
                );

                if (!respuesta.ok) {
                    throw new Error(
                        "No fue posible cargar los productos."
                    );
                }

                const datos = await respuesta.json();

                setProductos(datos);

            } catch (errorCarga) {

                console.error(
                    "Error al cargar los productos:",
                    errorCarga
                );

                setError(
                    "No fue posible cargar el catálogo de productos."
                );

            } finally {

                setCargando(false);
            }
        };

        cargarProductos();

    }, []);


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


    return (
        <>

            <Navbar
                cantidadCarrito={cantidadCarrito}
                cambiarCategoria={cambiarCategoria}
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

                <ProductList
                    productos={productosFiltrados}
                    agregarAlCarrito={agregarAlCarrito}
                />

            )}


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