var valor = obtener_valor("id");

const url22 = "https://api.themoviedb.org/3/movie/"+valor+"?api_key=15c78749fb202cfe47bdd8f4989396e2";
// const url = "https://api.themoviedb.org/3/movie/206647/credits?api_key=15c78749fb202cfe47bdd8f4989396e2";

fetch(
    url22  
)
.then((rest) => rest.json())
.then((json) => {
  console.log(json);
  
});