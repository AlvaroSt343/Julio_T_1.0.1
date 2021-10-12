function ejceutar() {
  let categoria = document.querySelector("#categoria").value;
  let selected = document.querySelector("#select").value;

  if (categoria == "") {
    categoria = "7110578";
  }

  const url =
    "https://api.themoviedb.org/4/list/" +
    categoria +
    "?page=1&api_key=15c78749fb202cfe47bdd8f4989396e2&language=es&sort_by=" +
    selected +
    "";

  fetch(url)
    .then((rest) => rest.json())
    .then((json) => {
      const resultados = json.results;
      const agregar = document.querySelector("#proyectos");
      agregar.innerHTML = resultados
        .map(
          (resultado) =>
            `
                <div class="col-sm-12 col-md-6 mb-3">
                    <div class="cardP p-4">
                        
                        
                        <img class="proyectosimg" src="https://image.tmdb.org/t/p/w500${resultado.backdrop_path?resultado.backdrop_path:resultado.poster_path}" 
                         alt="poster de pelicula" 
                         width="100%"
                         onclick="${resultado.id}"
                        />
                        <div class="titulo">
                            ${resultado.name ? resultado.name : resultado.title}
                        </div>
                        <div class="calificacion mb-3">
                            <div class="input-group">
                                <div class="minicard">    
                                    <img src="/assets21/img/swiper-slider/imdb.png" alt="" /> <strong>${
                                      resultado.vote_average
                                    }</strong>/10
                                </div>
                                <div class="minicard mx-4">
                                    <strong style="color: #6A6A6A;">HD</strong>
                                </div>
                                <div class="minicard">
                                    <strong style="color: #6A6A6A;">16+</strong>
                                </div>
                            </div>
                        </div>
                        <div class="lanzamiento">
                            Lanzamiento: <strong style="color: #101010;">${
                              resultado.release_date
                                ? resultado.release_date
                                : ""
                            }</strong>
                        </div>
                    </div>
                </div>

            `
        )
        .join("");
    });
}

ejceutar();
