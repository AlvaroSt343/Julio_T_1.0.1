var valor = obtener_valor("id");

const url44 =
  "https://api.themoviedb.org/3/tv/"+valor+"/credits?api_key=15c78749fb202cfe47bdd8f4989396e2&language=es";

fetch(url44)
  .then((rest) => rest.json())
  .then((json) => {
    console.log(json.cast);
    const agregar = document.querySelector("#elenco");
    agregar.innerHTML=
      `
      ${json.cast.filter(solo=>{return solo.known_for_department==='Acting'}).map(
        actor=>(
   
            `
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="castcards p-3 mb-4">
                        ${
                          actor.profile_path ?
                          `
                          <img class="imgview mb-3" src="https://image.tmdb.org/t/p/w500/${actor.profile_path}" alt="" width="100%">
                          `
                        : 
                          `
                          <img class="imgview mb-3" src="assets21/img/default-1.jpg" alt="" width="100%">
                          `
                        }  

                        <div class="nombre">
                            ${actor.original_name}
                        </div>
                        <div class="personaje">
                        ${actor.character}
                        </div>
                    </div>
                </div>
            `  
            )
         ).slice(0,6).join(' ')}
        
      `
  });

 