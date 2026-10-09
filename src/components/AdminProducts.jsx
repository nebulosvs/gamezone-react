import { useState } from "react";


function AdminProducts({ agregarProducto }) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        categoria: "consolas",
        precioNormal: "",
        precioOferta: "",
        descripcion: "",
        imagen: ""
    });

    const [errores, setErrores] = useState({});
    const [productoAgregado, setProductoAgregado] = useState(false);


    // ==========================================
    // MANEJAR CAMBIOS DEL FORMULARIO
    // ==========================================

    const manejarCambio = (evento) => {

        const { name, value } = evento.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));

        // Elimina el error del campo cuando
        // el administrador vuelve a modificarlo.
        setErrores((anteriores) => ({
            ...anteriores,
            [name]: ""
        }));

        setProductoAgregado(false);
    };


    // ==========================================
    // VALIDAR FORMULARIO
    // ==========================================

    const validarFormulario = () => {

        const nuevosErrores = {};

        const precioNormal =
            Number(formulario.precioNormal);

        const precioOferta =
            Number(formulario.precioOferta);


        // Nombre
        if (!formulario.nombre.trim()) {

            nuevosErrores.nombre =
                "Ingresa el nombre del producto.";

        } else if (
            formulario.nombre.trim().length < 2
        ) {

            nuevosErrores.nombre =
                "El nombre debe tener al menos 2 caracteres.";
        }


        // Precio normal
        if (formulario.precioNormal === "") {

            nuevosErrores.precioNormal =
                "Ingresa el precio normal.";

        } else if (
            !Number.isFinite(precioNormal) ||
            precioNormal <= 0
        ) {

            nuevosErrores.precioNormal =
                "El precio normal debe ser mayor que $0.";
        }


        // Precio oferta
        if (formulario.precioOferta === "") {

            nuevosErrores.precioOferta =
                "Ingresa el precio de oferta.";

        } else if (
            !Number.isFinite(precioOferta) ||
            precioOferta <= 0
        ) {

            nuevosErrores.precioOferta =
                "El precio de oferta debe ser mayor que $0.";

        } else if (
            formulario.precioNormal !== "" &&
            precioNormal > 0 &&
            precioOferta >= precioNormal
        ) {

            nuevosErrores.precioOferta =
                "El precio de oferta debe ser menor que el precio normal.";
        }


        // Descripción
        if (!formulario.descripcion.trim()) {

            nuevosErrores.descripcion =
                "Ingresa una descripción.";

        } else if (
            formulario.descripcion.trim().length < 10
        ) {

            nuevosErrores.descripcion =
                "La descripción debe tener al menos 10 caracteres.";
        }


        // Imagen
        if (!formulario.imagen.trim()) {

            nuevosErrores.imagen =
                "Ingresa la ruta de la imagen.";
        }


        return nuevosErrores;
    };


    // ==========================================
    // AGREGAR PRODUCTO
    // ==========================================

    const manejarEnvio = (evento) => {

        evento.preventDefault();

        const nuevosErrores =
            validarFormulario();


        if (Object.keys(nuevosErrores).length > 0) {

            setErrores(nuevosErrores);
            setProductoAgregado(false);

            return;
        }


        const nuevoProducto = {

            nombre: formulario.nombre.trim(),

            categoria:
                formulario.categoria,

            precioNormal:
                Number(formulario.precioNormal),

            precioOferta:
                Number(formulario.precioOferta),

            descripcion:
                formulario.descripcion.trim(),

            imagen:
                formulario.imagen.trim()
        };


        agregarProducto(nuevoProducto);


        setFormulario({
            nombre: "",
            categoria: "consolas",
            precioNormal: "",
            precioOferta: "",
            descripcion: "",
            imagen: ""
        });

        setErrores({});
        setProductoAgregado(true);
    };


    return (
        <section
            id="administrar-productos"
            className="container my-5"
        >

            <div className="row justify-content-center">

                <div className="col-12 col-lg-8">

                    <h2 className="text-center mb-2">
                        Administrar catálogo
                    </h2>

                    <p className="text-center text-muted mb-4">
                        Agrega nuevos productos al catálogo de GameZone.
                    </p>


                    <div className="card shadow-sm p-4">

                        {productoAgregado && (

                            <div
                                className="alert alert-success"
                                role="alert"
                            >
                                ✓ Producto agregado correctamente.
                            </div>

                        )}


                        <form
                            onSubmit={manejarEnvio}
                            noValidate
                        >

                            {/* Nombre */}
                            <div className="mb-3">

                                <label
                                    htmlFor="nombreProducto"
                                    className="form-label"
                                >
                                    Nombre
                                </label>

                                <input
                                    type="text"
                                    id="nombreProducto"
                                    name="nombre"
                                    className={`form-control ${errores.nombre
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    value={formulario.nombre}
                                    onChange={manejarCambio}
                                    placeholder="Nombre del producto"
                                />

                                {errores.nombre && (

                                    <div className="invalid-feedback">
                                        {errores.nombre}
                                    </div>

                                )}

                            </div>


                            <div className="row">

                                {/* Categoría */}
                                <div className="col-md-4 mb-3">

                                    <label
                                        htmlFor="categoriaProducto"
                                        className="form-label"
                                    >
                                        Categoría
                                    </label>

                                    <select
                                        id="categoriaProducto"
                                        name="categoria"
                                        className="form-select"
                                        value={formulario.categoria}
                                        onChange={manejarCambio}
                                    >

                                        <option value="consolas">
                                            Consolas
                                        </option>

                                        <option value="accesorios">
                                            Accesorios
                                        </option>

                                        <option value="videojuegos">
                                            Videojuegos
                                        </option>

                                    </select>

                                </div>


                                {/* Precio normal */}
                                <div className="col-md-4 mb-3">

                                    <label
                                        htmlFor="precioNormal"
                                        className="form-label"
                                    >
                                        Precio normal
                                    </label>

                                    <input
                                        type="number"
                                        id="precioNormal"
                                        name="precioNormal"
                                        min="1"
                                        step="1"
                                        className={`form-control ${errores.precioNormal
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        value={formulario.precioNormal}
                                        onChange={manejarCambio}
                                        placeholder="599990"
                                    />

                                    {errores.precioNormal && (

                                        <div className="invalid-feedback">
                                            {errores.precioNormal}
                                        </div>

                                    )}

                                </div>


                                {/* Precio oferta */}
                                <div className="col-md-4 mb-3">

                                    <label
                                        htmlFor="precioOferta"
                                        className="form-label"
                                    >
                                        Precio oferta
                                    </label>

                                    <input
                                        type="number"
                                        id="precioOferta"
                                        name="precioOferta"
                                        min="1"
                                        step="1"
                                        className={`form-control ${errores.precioOferta
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        value={formulario.precioOferta}
                                        onChange={manejarCambio}
                                        placeholder="549990"
                                    />

                                    {errores.precioOferta && (

                                        <div className="invalid-feedback">
                                            {errores.precioOferta}
                                        </div>

                                    )}

                                </div>

                            </div>


                            {/* Descripción */}
                            <div className="mb-3">

                                <label
                                    htmlFor="descripcionProducto"
                                    className="form-label"
                                >
                                    Descripción
                                </label>

                                <textarea
                                    id="descripcionProducto"
                                    name="descripcion"
                                    rows="3"
                                    className={`form-control ${errores.descripcion
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    value={formulario.descripcion}
                                    onChange={manejarCambio}
                                    placeholder="Descripción del producto"
                                />

                                {errores.descripcion && (

                                    <div className="invalid-feedback">
                                        {errores.descripcion}
                                    </div>

                                )}

                            </div>


                            {/* Imagen */}
                            <div className="mb-3">

                                <label
                                    htmlFor="imagenProducto"
                                    className="form-label"
                                >
                                    Ruta de imagen
                                </label>

                                <input
                                    type="text"
                                    id="imagenProducto"
                                    name="imagen"
                                    className={`form-control ${errores.imagen
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    value={formulario.imagen}
                                    onChange={manejarCambio}
                                    placeholder="img/playstation5.jpg"
                                />

                                {errores.imagen ? (

                                    <div className="invalid-feedback">
                                        {errores.imagen}
                                    </div>

                                ) : (

                                    <div className="form-text">
                                        Utiliza una imagen disponible
                                        en la carpeta public/img.
                                    </div>

                                )}

                            </div>


                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                ➕ Agregar videojuego
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default AdminProducts;