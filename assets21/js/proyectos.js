function ejceutar (){
    fetch('https://api.themoviedb.org/4/list/7110578?page=1&api_key=15c78749fb202cfe47bdd8f4989396e2&language=es&sort_by=title.asc').then(rest=>rest.json()).then(json=>console.log(json.results))
}

ejceutar();