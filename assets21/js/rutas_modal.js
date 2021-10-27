const rutas = [
    {
      id: 'ruta1',
      titulo: "METRO",
      img: "assets21/img/rutas/rutas_sm/metro.webp",
      imglg: "assets21/img/rutas/metro.webp",
    },
    {
      id: 'ruta2',
      titulo: "METROBÚS",
      img: "assets21/img/rutas/rutas_sm/metrobus.webp",
      imglg: "assets21/img/rutas/metrobus.webp",
    },
    {
      id: 'ruta3',
      titulo: "TROLEBÚS",
      img: "assets21/img/rutas/rutas_sm/trolebus.webp",
      imglg: "assets21/img/rutas/trolebus.webp",
    },
    {
      id: 'ruta4',
      titulo: "SUBURBANO",
      img: "assets21/img/rutas/rutas_sm/suburbano.webp",
      imglg: "assets21/img/rutas/suburbano.webp",
    },
    {
      id: 'ruta5',
      titulo: "TREN LIGERO",
      img: "assets21/img/rutas/rutas_sm/tren-ligero.webp",
      imglg: "assets21/img/rutas/tren-ligero.webp",
    },
    {
      id: 'ruta6',
      titulo: "CONEXIÓN BUENAVISTA",
      img: "assets21/img/rutas/rutas_sm/conexion-buenavista.webp",
      imglg: "assets21/img/rutas/conexion-buenavista.webp",
    },
    {
      id: 'ruta7',
      titulo: "CONEXIONES SUBURBANO",
      img: "assets21/img/rutas/rutas_sm/conexiones-suburbano.webp",
      imglg: "assets21/img/rutas/conexiones-suburbano.webp",
    },
  ];
  
  const agregar = document.querySelector("#rutas");
  agregar.innerHTML = rutas.map(
    (ruta) =>
      `
        <div class="col-sm-6 col-md-4 col-lg-3 col-6">
            <div class="card_ruta">
                <img data-bs-toggle="modal" href="#${ruta.id}" src=${ruta.img} alt="ruta metro" width="100%" class="../imgruta">
                <div class="ru_titulo text-center">
                    ${ruta.titulo}
                </div>
            </div>
        </div>
        <div class="modal fade" id="${ruta.id}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ru_customcontent">
                    <div class=" d-flex justify-content-between ">
                        <div class="modal-title ru_customheader"> ${ruta.titulo}</div>
                        <i class="fas fa-times fa-2x" data-bs-dismiss="modal" style="cursor: pointer; color: white;"></i>
                        
                    </div>
                    <div class="modal-body">
                        <img src=${ruta.imglg} alt="${ruta.titulo}" width="100%" class="../imglgruta">
                    </div>
                </div>
            </div>
        </div>


      `
  ).join('');