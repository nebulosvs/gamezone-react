const products = [
    {
        id: 1,
        nombre: "PlayStation 5",
        precioNormal: 599990,
        precioOferta: 549990,
        categoria: "consolas",
        imagen: `${import.meta.env.BASE_URL}img/playstation5.jpg`,
        descripcion: "Consola PlayStation 5 de nueva generación."
    },
    {
        id: 2,
        nombre: "Xbox Series X",
        precioNormal: 579990,
        precioOferta: 529990,
        categoria: "consolas",
        imagen: `${import.meta.env.BASE_URL}img/xbox-series-x.jpg`,
        descripcion: "Potencia y rendimiento de nueva generación con Xbox Series X."
    },
    {
        id: 3,
        nombre: "Nintendo Switch",
        precioNormal: 369990,
        precioOferta: 329990,
        categoria: "consolas",
        imagen: `${import.meta.env.BASE_URL}img/nintendo-switch.jpg`,
        descripcion: "Disfruta tus juegos favoritos en casa o donde quieras."
    },
    {
        id: 4,
        nombre: "Control DualSense",
        precioNormal: 84990,
        precioOferta: 74990,
        categoria: "accesorios",
        imagen: `${import.meta.env.BASE_URL}img/dualsense.png`,
        descripcion: "Control inalámbrico DualSense compatible con PlayStation 5."
    },
    {
        id: 5,
        nombre: "Control Xbox Wireless",
        precioNormal: 74990,
        precioOferta: 64990,
        categoria: "accesorios",
        imagen: `${import.meta.env.BASE_URL}img/xbox-controller.jpg`,
        descripcion: "Control inalámbrico Xbox para disfrutar tus juegos con comodidad."
    },
    {
        id: 6,
        nombre: "Nintendo Switch Pro Controller",
        precioNormal: 79990,
        precioOferta: 69990,
        categoria: "accesorios",
        imagen: `${import.meta.env.BASE_URL}img/switch-pro-controller.jpg`,
        descripcion: "Control Pro para Nintendo Switch con diseño ergonómico."
    }
];

export default products;