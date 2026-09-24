import { useState } from "react";

import products from "./data/products";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

import "./App.css";


function App() {

    // ==========================================
    // ESTADOS
    // ==========================================

    const [carrito, setCarrito] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    const [busqueda, setBusqueda] = useState("");


    // ==========================================
    // AGREGAR PRODUCTO
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
    // CANTIDAD TOTAL DEL CARRITO
    // ==========================================

    const cantidadCarrito = carrito.reduce(
        (total, producto) =>
            total + producto.cantidad,
        0
    );


    // ==========================================
    // FILTRAR POR CATEGORÍA
    // ==========================================

    const productosFiltrados = products.filter((producto) => {

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

    const cambiarCategoria = (nuevaCategoria) => {
        setCategoria(nuevaCategoria);
        setBusqueda("");
    };


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


            <ProductList
                productos={productosFiltrados}
                agregarAlCarrito={agregarAlCarrito}
            />


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