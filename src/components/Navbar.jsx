function Navbar({
    cantidadCarrito,
    cambiarCategoria,
    esAdmin,
    cerrarSesionAdmin
}) {

    const irAContacto = () => {

        const seccionContacto =
            document.getElementById("contacto");

        if (seccionContacto) {

            seccionContacto.scrollIntoView({
                behavior: "smooth"
            });
        }
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <a
                    className="navbar-brand"
                    href="#"
                    onClick={(evento) => {

                        evento.preventDefault();

                        cambiarCategoria("todos");

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}
                >
                    🎮 GameZone
                </a>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarGameZone"
                    aria-controls="navbarGameZone"
                    aria-expanded="false"
                    aria-label="Abrir menú"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse"
                    id="navbarGameZone"
                >

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <button
                                className="nav-link active btn btn-link"
                                onClick={() => {

                                    cambiarCategoria("todos");

                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                Inicio
                            </button>

                        </li>


                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={() =>
                                    cambiarCategoria("consolas")
                                }
                            >
                                Consolas
                            </button>

                        </li>

                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={() => cambiarCategoria("videojuegos")}
                            >
                                Videojuegos
                            </button>

                        </li>


                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={() =>
                                    cambiarCategoria("accesorios")
                                }
                            >
                                Accesorios
                            </button>

                        </li>


                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={irAContacto}
                            >
                                Contacto
                            </button>

                        </li>

                    </ul>


                    <div className="d-flex gap-2">

                        <button
                            className="btn btn-outline-light"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#carritoOffcanvas"
                            aria-controls="carritoOffcanvas"
                        >
                            🛒 Carrito

                            <span className="badge bg-danger ms-2">
                                {cantidadCarrito}
                            </span>
                        </button>


                        {!esAdmin ? (

                            <button
                                className="btn btn-outline-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#adminLoginModal"
                                title="Acceso administrador"
                                aria-label="Acceso administrador"
                            >
                                ⚙️
                            </button>

                        ) : (

                            <div className="d-flex gap-2">

                                <button
                                    className="btn btn-outline-warning"
                                    type="button"
                                    onClick={() => {

                                        const panel =
                                            document.getElementById(
                                                "administrar-productos"
                                            );

                                        if (panel) {
                                            panel.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        }
                                    }}
                                >
                                    ➕ Añadir producto
                                </button>

                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    onClick={cerrarSesionAdmin}
                                >
                                    ⚙️ Cerrar admin
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;