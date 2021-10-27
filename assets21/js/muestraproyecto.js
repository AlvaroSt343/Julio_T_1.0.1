var valor = obtener_valor("id");

const url22 = "https://api.themoviedb.org/3/movie/" + valor + "?api_key=15c78749fb202cfe47bdd8f4989396e2&language=es";


fetch(url22)
  .then((rest) => rest.json())
  .then((json) => {
    const agregar = document.querySelector("#proyectos");
    agregar.innerHTML=
      `
      <div class="col-sm-12 col-md-5 mb-3">
            ${json.poster_path?
            `
                <img class="imgview" src="https://image.tmdb.org/t/p/w500${json.poster_path}" alt="imagen" width="100%"></img>
            `
            :
            `
                <img class="imgview" src="/assets21/img/no-film-full.webp" alt="imagen" width="100%"></img>
            `
            }
          
      </div>
      <div class="col-sm-12 col-md-7">
          <div class="row contenido p-3">
              <div class="col-sm-12 col-md-12 mb-3 titulo">
                  ${json.title}
              </div>
              <div class="col-sm-12 col-md-12 col-lg-3 mb-2">
                  <strong>Dirección:</strong>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-9 mb-2" id="director">
                  <!--Se añade director por id, a partir de archivo js-->
              </div>
              <div class="col-sm-12 col-md-12 col-lg-3 mb-2">
                  <strong>Lanzamiento:</strong>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-9 mb-2">
                  ${json.release_date}
              </div>
              <div class="col-sm-12 col-md-12 col-lg-3 mb-2">
                  <strong>Productores:</strong>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-9 mb-2">
                  ${json.production_companies.map(
                    productor=>(productor.name)
                  )}
              </div>
              <div class="col-sm-12 col-md-12 col-lg-3 mb-2">
                  <strong>Idiomas:</strong>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-9 mb-2">
                  ${json.spoken_languages.map(
                    lenguajes=>(lenguajes.name)
                  )}
              </div>
              <div class="col-12 my-5">
                  <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descripcion</button>
                          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Elenco</button>
                          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Opiniones</button>
                      </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active  my-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                          ${json.overview}
                      </div>
                      <div class="tab-pane fade my-4" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                          <div class="row" id="elenco">
                              <!--se agrega el elenco a partir del id, en archivo js-->
                          </div>
                      </div>
                      <div class="tab-pane fade my-4" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">                                    
                          <div class="row" id="resenas">
                            <!--se agrega las reseñas a partir del id, en archivo js-->
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `
  });

 