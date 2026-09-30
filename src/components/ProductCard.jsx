import { useEffect, useState } from "react";
import { formatearPrecio } from "../utils/formatters";


function ProductCard({
    producto,
    agregarAlCarrito
}) {

    const [agregado, setAgregado] = useState(false);


    // Agrega el producto al carrito y muestra
    // una confirmación visual temporal.
    const manejarAgregar = () => {

        agregarAlCarrito(producto);

        setAgregado(true);
    };


    // Después de 2 segundos, el botón vuelve
    // automáticamente a su estado original.
    useEffect(() => {

        if (!agregado) {
            return;
        }

        const temporizador = setTimeout(() => {
            setAgregado(false);
        }, 2000);

        return () => {
            clearTimeout(temporizador);
        };

    }, [agregado]);


    return (
        <div className="col">

            <div className="card h-100 shadow-sm">

                <img
                    src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                    className="card-img-top producto-imagen"
                    alt={producto.nombre}
                />


                <div className="card-body d-flex flex-column">

                    <h5 className="card-title">
                        {producto.nombre}
                    </h5>


                    <p className="card-text text-muted">
                        {producto.descripcion}
                    </p>


                    <div className="mt-auto">

                        <p className="precio-normal mb-1">
                            {formatearPrecio(
                                producto.precioNormal
                            )}
                        </p>


                        <p className="precio-oferta fs-4 fw-bold mb-3">
                            {formatearPrecio(
                                producto.precioOferta
                            )}
                        </p>


                        <button
                            className={
                                agregado
                                    ? "btn btn-success w-100"
                                    : "btn btn-primary w-100"
                            }
                            onClick={manejarAgregar}
                        >
                            {agregado
                                ? "✓ Agregado"
                                : "Agregar al carrito"}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;