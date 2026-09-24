function Navbar({ cantidadCarrito, cambiarCategoria }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <a
                    className="navbar-brand"
                    href="#"
                    onClick={(evento) => {
                        evento.preventDefault();
                        cambiarCategoria("todos");
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
                                onClick={() => cambiarCategoria("todos")}
                            >
                                Inicio
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link"
                                onClick={() => cambiarCategoria("consolas")}
                            >
                                Consolas
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link"
                                onClick={() => cambiarCategoria("accesorios")}
                            >
                                Accesorios
                            </button>
                        </li>

                    </ul>

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

                </div>
            </div>
        </nav>
    );
}

export default Navbar;