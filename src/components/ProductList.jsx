import ProductCard from "./ProductCard";


function ProductList({
    productos,
    agregarAlCarrito,
    eliminarProducto
}) {

    if (productos.length === 0) {

        return (
            <section
                id="productos"
                className="container my-5"
            >

                <div
                    className="alert alert-warning text-center"
                    role="alert"
                >
                    No se encontraron productos.
                </div>

            </section>
        );
    }


    return (
        <section
            id="productos"
            className="container my-5"
        >

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {productos.map((producto) => (

                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={agregarAlCarrito}
                        eliminarProducto={eliminarProducto}
                    />

                ))}

            </div>

        </section>
    );
}


export default ProductList;