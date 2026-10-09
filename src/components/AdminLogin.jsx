import { useState } from "react";


function AdminLogin({ iniciarSesion }) {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const credencialesCorrectas =
        usuario === "admin" &&
        password === "gz123";


    const manejarEnvio = (evento) => {

        evento.preventDefault();

        if (!credencialesCorrectas) {

            setError(
                "Usuario o contraseña incorrectos."
            );

            return;
        }

        iniciarSesion();

        setUsuario("");
        setPassword("");
        setError("");
    };


    return (
        <div
            className="modal fade"
            id="adminLoginModal"
            tabIndex="-1"
            aria-labelledby="adminLoginModalLabel"
            aria-hidden="true"
        >

            <div className="modal-dialog modal-dialog-centered">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5
                            className="modal-title"
                            id="adminLoginModalLabel"
                        >
                            ⚙️ Acceso administrador
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Cerrar"
                        ></button>

                    </div>


                    <div className="modal-body">

                        <form onSubmit={manejarEnvio}>

                            <div className="mb-3">

                                <label
                                    htmlFor="usuarioAdmin"
                                    className="form-label"
                                >
                                    Usuario
                                </label>

                                <input
                                    type="text"
                                    id="usuarioAdmin"
                                    className="form-control"
                                    value={usuario}
                                    onChange={(evento) => {

                                        setUsuario(
                                            evento.target.value
                                        );

                                        setError("");
                                    }}
                                    autoComplete="username"
                                />

                            </div>


                            <div className="mb-3">

                                <label
                                    htmlFor="passwordAdmin"
                                    className="form-label"
                                >
                                    Contraseña
                                </label>

                                <input
                                    type="password"
                                    id="passwordAdmin"
                                    className="form-control"
                                    value={password}
                                    onChange={(evento) => {

                                        setPassword(
                                            evento.target.value
                                        );

                                        setError("");
                                    }}
                                    autoComplete="current-password"
                                />

                            </div>


                            <div
                                className="alert alert-secondary py-2 small"
                                role="note"
                            >
                                <strong>
                                    Cuenta de demostración:
                                </strong>

                                <br />

                                Usuario: <code>admin</code>
                                {" | "}
                                Contraseña: <code>gz123</code>
                            </div>


                            {error && (

                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {error}
                                </div>

                            )}


                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                data-bs-dismiss={
                                    credencialesCorrectas
                                        ? "modal"
                                        : undefined
                                }
                            >
                                Iniciar sesión
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default AdminLogin;