function muestradata(id) {
    
    console.log(id);
    const url = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=15c78749fb202cfe47bdd8f4989396e2";
    // const url = "https://api.themoviedb.org/3/movie/206647/credits?api_key=15c78749fb202cfe47bdd8f4989396e2";
    console.log(url);

  fetch(
    url  
  )
    .then((rest) => rest.json())
    .then((json) => {
      console.log(json);
      
    });
}