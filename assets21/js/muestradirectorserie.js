var valor = obtener_valor("id");

const url33 =
  "https://api.themoviedb.org/3/tv/"+valor+"/credits?api_key=15c78749fb202cfe47bdd8f4989396e2&language=es";

fetch(url33)
  .then((rest) => rest.json())
  .then((json) => {
    const agregar = document.querySelector("#director");
    agregar.innerHTML=
      `
      ${json.crew.filter(solo=>{return solo.known_for_department==='Directing' || solo.known_for_department==='Production'}).map(
     nombre=>(

         `
         <strong>${nombre.department}:</strong>   ${nombre.name} <br />
         `  
         )
      ).join(' ')}
        
      `
  });

 