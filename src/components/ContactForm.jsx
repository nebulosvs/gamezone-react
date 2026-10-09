import { useState } from "react";

function ContactForm() {
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (event) => {
        const { name, value } = event.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));

        // Elimina el error del campo cuando el usuario vuelve a escribir.
        setErrores((anteriores) => ({
            ...anteriores,
            [name]: ""
        }));

        setEnviado(false);
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!formulario.nombre.trim()) {
            nuevosErrores.nombre = "Ingresa tu nombre.";
        }

        if (!formulario.email.trim()) {
            nuevosErrores.email = "Ingresa tu correo electrónico.";
        } else {
            const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!expresionEmail.test(formulario.email)) {
                nuevosErrores.email =
                    "Ingresa un correo electrónico válido.";
            }
        }

        if (!formulario.mensaje.trim()) {
            nuevosErrores.mensaje = "Ingresa un mensaje.";
        }

        return nuevosErrores;
    };

    const manejarEnvio = (event) => {
        event.preventDefault();

        const nuevosErrores = validarFormulario();

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            setEnviado(false);
            return;
        }

        setErrores({});
        setEnviado(true);

        // Simulación de envío del formulario.
        setFormulario({
            nombre: "",
            email: "",
            mensaje: ""
        });
    };

    return (
        <section id="contacto" className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <h2 className="text-center mb-4">Contáctanos</h2>

                    <p className="text-center text-muted mb-4">
                        ¿Tienes alguna consulta? Envíanos un mensaje.
                    </p>

                    {enviado && (
                        <div
                            className="alert alert-success"
                            role="alert"
                        >
                            ✓ Mensaje enviado correctamente.
                        </div>
                    )}

                    <form
                        onSubmit={manejarEnvio}
                        noValidate
                        className="card shadow-sm p-4"
                    >
                        <div className="mb-3">
                            <label
                                htmlFor="nombre"
                                className="form-label"
                            >
                                Nombre
                            </label>

                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className={`form-control ${
                                    errores.nombre ? "is-invalid" : ""
                                }`}
                                value={formulario.nombre}
                                onChange={manejarCambio}
                                placeholder="Ingresa tu nombre"
                            />

                            {errores.nombre && (
                                <div className="invalid-feedback">
                                    {errores.nombre}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="form-label"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`form-control ${
                                    errores.email ? "is-invalid" : ""
                                }`}
                                value={formulario.email}
                                onChange={manejarCambio}
                                placeholder="correo@ejemplo.com"
                            />

                            {errores.email && (
                                <div className="invalid-feedback">
                                    {errores.email}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="mensaje"
                                className="form-label"
                            >
                                Mensaje
                            </label>

                            <textarea
                                id="mensaje"
                                name="mensaje"
                                className={`form-control ${
                                    errores.mensaje ? "is-invalid" : ""
                                }`}
                                value={formulario.mensaje}
                                onChange={manejarCambio}
                                rows="5"
                                placeholder="Escribe tu mensaje"
                            />

                            {errores.mensaje && (
                                <div className="invalid-feedback">
                                    {errores.mensaje}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;