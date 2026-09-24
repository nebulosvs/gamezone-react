function ProductCard({ producto, agregarAlCarrito }) {

    const formatearPrecio = (precio) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP"
        }).format(precio);
    };

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <article className="card h-100 shadow-sm">

                <img
                    src={producto.imagen}
                    className="card-img-top producto-imagen"
                    alt={producto.nombre}
                />

                <div className="card-body d-flex flex-column">

                    <h2 className="card-title h5">
                        {producto.nombre}
                    </h2>

                    <p className="card-text text-muted">
                        {producto.descripcion}
                    </p>

                    <div className="mt-auto">

                        <p className="precio-normal mb-1">
                            {formatearPrecio(producto.precioNormal)}
                        </p>

                        <p className="precio-oferta fs-4 fw-bold mb-3">
                            {formatearPrecio(producto.precioOferta)}
                        </p>

                        <button
                            className="btn btn-primary w-100"
                            onClick={() => agregarAlCarrito(producto)}
                        >
                            Agregar al carrito
                        </button>

                    </div>

                </div>

            </article>
        </div>
    );
}

export default ProductCard;