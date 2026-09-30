// Formatea valores numéricos como moneda chilena.
export const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP"
    }).format(precio);
};