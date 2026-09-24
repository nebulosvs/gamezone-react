function SearchBar({ busqueda, setBusqueda }) {

    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <div className="input-group">

                        <input
                            type="search"
                            className="form-control"
                            placeholder="Buscar productos..."
                            value={busqueda}
                            onChange={(evento) =>
                                setBusqueda(evento.target.value)
                            }
                            aria-label="Buscar productos"
                        />

                        <span className="input-group-text">
                            🔎
                        </span>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default SearchBar;