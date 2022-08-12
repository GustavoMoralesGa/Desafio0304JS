const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 7,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

const propSection = document.querySelector('.propiedades');
const findButton = document.querySelector("#buttonFind");
const spanMod = document.querySelector('#totalSpan');

const filterByRooms = (data) => {
  const rooms = parseInt(document.querySelector('#input0').value);
  if (rooms) {
    const filteredRooms = data.filter((row) => row.rooms <= rooms);
    return filteredRooms;
  }
  return data;
}

const filterByM2From = (data) => {
  const m2From = parseInt(document.querySelector('#input1').value);
  if (m2From) {
    const filteredByM2From = data.filter((row) => row.m >= m2From);
    return filteredByM2From;
  }
  return data;
};

const filterByM2To = (data) => {
  const m2To = parseInt(document.querySelector('#input2').value);
  if (m2To) {
    const filteredByM2To = data.filter((row) => row.m <= m2To);
    return filteredByM2To;
  }
  return data;
};

const drawResult = (data) => {
  let html = '';
  for (const propiedad of data) {
    const HTMLTemplate = `
      <div class="propiedad">
        <div class='img' style="background-image: url('${propiedad.src}')" ></div>
        <section>
        <h5 id="name">${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p id="quantityRoom">Cuartos: ${propiedad.rooms}</p>
            <p id="quantityMts">Metros: ${propiedad.m}</p>
          </div>
          <p id="description" class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>
      `
    html += HTMLTemplate;
  }
  propSection.innerHTML = html
  spanMod.innerHTML = data.length;
  if (!data.length) {
    alert('No hay resultados a tu busqueda');
  }
};

const execute = () => {
  // Filtrar por cuartos
  const filterOne = filterByRooms(propiedadesJSON);
  // Filtrar por Metros desde
  const filterTwo = filterByM2From(filterOne);
  // Filtrar por metros hasta
  const filterThree = filterByM2To(filterTwo);
  // Pintar resultado + handle 0 search
  drawResult(filterThree)
};

const attachSearchButton = () => {
  findButton.addEventListener('click', execute);
};

const setMaxRoomsValue = () => {
  const maxValue = propiedadesJSON.map((row) => row.rooms).reduce((a, b) => Math.max(a, b));
  document.querySelector('#input0').max = maxValue;
};

setMaxRoomsValue();
execute();
attachSearchButton();
