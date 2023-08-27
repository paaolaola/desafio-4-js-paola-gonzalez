// Array / Objetos
const propiedades = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170,
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130,
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80,
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6,
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200,
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500,
    },
];

// Elementos
const cards = document.querySelector("#cards");
const cuartos = document.querySelector("#roomsNumber");
const desde = document.querySelector("#desde");
const hasta = document.querySelector("#hasta");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

// Funcion para crear una tarjeta
const crearTarjeta = (propiedad) => {
    const card = document.createElement("section");
    card.classList.add("card");

    const template = `
        <img src="${propiedad.src}">
        <h5>${propiedad.name}</h5>
        <div class= card-data>
        <p> Dorm: ${propiedad.rooms}</p>
        <p> Metros: ${propiedad.m}</p>
        </div>
        <p>${propiedad.description}</p>
        <button class="btn-info">Ver más</button>
        `;

    card.innerHTML = template;
    cards.appendChild(card);
};

// Recorrer data

for (let propiedad of propiedades) {
    crearTarjeta(propiedad);
}

// Filtro

btn.addEventListener("click", () => {
    if (cuartos.value === "" || desde.value === "" || hasta.value === "") {
        alert("Faltan campos por llenar");
        return;
    }

    cards.innerHTML = "";
    let resultado = 0;

    const cuartosSeleccionados = Number(cuartos.value);
    const metrosDesde = Number(desde.value);
    const metrosHasta = Number(hasta.value);
    for (let propiedad of propiedades) {
        if (propiedad.rooms == cuartosSeleccionados && propiedad.m >= metrosDesde && propiedad.m <= metrosHasta) {
            crearTarjeta(propiedad);
            resultado = resultado + 1;
        }
        document.getElementById("resultado").innerHTML = ` ${resultado}`;
    }

    if (cards.innerHTML === "") {
        cards.innerHTML = "<h5>No hay resultados</h5>";
    }
});
