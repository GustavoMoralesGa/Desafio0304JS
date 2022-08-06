const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
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

let html = '';  
const propSection = document.querySelector('.propiedades');
const findButton = document.querySelector("#buttonFind");
const spanMod = document.querySelector('#totalSpan');


for (let propiedad of propiedadesJSON) {
 html += ` 
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
  propSection.innerHTML = html
  spanMod.innerHTML = 6
} 

findButton.addEventListener("click", () => {
  const quantityRoom = document.querySelector('#input0').value;
  const quantityMinMts = document.querySelector('#input1').value;
  const quantityMaxMts = document.querySelector('#input2').value;

  if (quantityRoom == '' || quantityMinMts == '' || quantityMaxMts == '') {
    alert('Debes llenar todos los campos') }
      for (let propiedad of propiedadesJSON) {
          if (quantityRoom >= 2 && quantityRoom <= 5) {
            for (let propiedad of propiedadesJSON) {
              html += ` 
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
          }    // terminar de ver el valor de la consola con los datos de los rooms y ver combinaciones del finder-
    }}
  });

//