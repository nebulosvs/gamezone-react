function Cart({
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito
}) {

    const formatearPrecio = (precio) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP"
        }).format(precio);
    };


    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );


    const precioTotal = carrito.reduce(
        (total, producto) =>
            total + producto.precioOferta * producto.cantidad,
        0
    );


    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="carritoOffcanvas"
            aria-labelledby="tituloCarrito"
        >

            <div className="offcanvas-header">

                <h2
                    className="offcanvas-title fs-4"
                    id="tituloCarrito"
                >
                    🛒 Tu carrito
                </h2>

                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Cerrar"
                />

            </div>


            <div className="offcanvas-body">

                {/* Renderizado condicional */}
                {carrito.length === 0 ? (

                    <div className="alert alert-light text-center">
                        Tu carrito está vacío.
                    </div>

                ) : (

                    <>
                        {carrito.map((producto) => (

                            <div
                                key={producto.id}
                                className="border-bottom py-3"
                            >

                                <strong>
                                    {producto.nombre}
                                </strong>

                                <div className="text-muted small mb-2">
                                    {formatearPrecio(producto.precioOferta)} c/u
                                </div>


                                <div className="d-flex justify-content-between align-items-center">

                                    <div
                                        className="btn-group"
                                        role="group"
                                    >

                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() =>
                                                disminuirCantidad(producto.id)
                                            }
                                        >
                                            −
                                        </button>

                                        <span className="btn btn-sm btn-light disabled">
                                            {producto.cantidad}
                                        </span>

                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() =>
                                                aumentarCantidad(producto.id)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <strong>
                                        {formatearPrecio(
                                            producto.precioOferta *
                                            producto.cantidad
                                        )}
                                    </strong>

                                </div>

                            </div>

                        ))}

                        <div className="d-flex justify-content-between mt-4">
                            <strong>
                                Productos:
                            </strong>

                            <strong>
                                {cantidadTotal}
                            </strong>
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                            <strong>
                                Total:
                            </strong>

                            <strong className="text-primary fs-5">
                                {formatearPrecio(precioTotal)}
                            </strong>
                        </div>

                        <button
                            className="btn btn-outline-danger w-100 mt-4"
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                    </>

                )}

            </div>

        </div>
    );
}

export default Cart;