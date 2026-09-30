import ProductCard from "./ProductCard";


function ProductList({
    productos,
    agregarAlCarrito
}) {

    if (productos.length === 0) {

        return (
            <main className="container my-5">

                <div
                    className="alert alert-warning text-center"
                    role="alert"
                >
                    No se encontraron productos.
                </div>

            </main>
        );
    }


    return (
        <main className="container my-5">

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {productos.map((producto) => (

                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={agregarAlCarrito}
                    />

                ))}

            </div>

        </main>
    );
}

export default ProductList;