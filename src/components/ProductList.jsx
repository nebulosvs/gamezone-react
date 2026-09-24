import ProductCard from "./ProductCard";

function ProductList({ productos, agregarAlCarrito }) {

    return (
        <section id="productos" className="container my-5">

            <h2 className="text-center mb-4">
                Nuestros productos
            </h2>

            {productos.length > 0 ? (

                <div className="row g-4">

                    {productos.map((producto) => (
                        <ProductCard
                            key={producto.id}
                            producto={producto}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    ))}

                </div>

            ) : (

                <div className="alert alert-warning text-center">
                    No se encontraron productos.
                </div>

            )}

        </section>
    );
}

export default ProductList;