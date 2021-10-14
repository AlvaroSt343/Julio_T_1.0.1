var valor = obtener_valor("id");

const url55 = "https://api.themoviedb.org/3/movie/"+ valor +"/reviews?api_key=15c78749fb202cfe47bdd8f4989396e2&language=es";

//"https://api.themoviedb.org/3/movie/"+valor+"/credits?api_key=15c78749fb202cfe47bdd8f4989396e2&language=es";

fetch(url55)
  .then((rest) => rest.json())
  .then((json) => {
    console.log(json.results);
    const agregar = document.querySelector("#resenas");
    if(json.results.length > 0){
        agregar.innerHTML=
        json.results.map( resena => 
        `
            <div class="col-12">
                <div class="resena-autor">
                <i class="bi bi-person-circle me-3" style="font-size: 4vh; color: blue;"></i> <strong>${resena.author}</strong>
                </div>                
            </div>
            <div class="col-12">
                <div class="resena-contenido mb-3">
                    ${resena.content.slice(0,200)} ... <br />
                    <a class="verenlace" target="_blank" href="${resena.url}">Ver más...</a>
                </div>                
            </div>
        `
      )
      .join('') 
    }else{
        agregar.innerHTML= 
        `
            <div class="col-12">
                <div class="resena-contenido mb-3">
                    Aun no tenemos reseñas en español para este titulo.
                </div>                
            </div>
        `
    }
    
  });

 