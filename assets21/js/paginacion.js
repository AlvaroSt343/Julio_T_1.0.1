function paginacion() {
    let categoria = document.querySelector("#categoria").value;
  
    if (categoria == "") {
        categoria = "7110578";
    }
  
  
    const url66 = "https://api.themoviedb.org/4/list/" + categoria + "?api_key=15c78749fb202cfe47bdd8f4989396e2";

    fetch(url66)
      .then((rest) => rest.json())
      .then((json) => {
        const paginas = json.total_pages;

        let itemspaginacion = "";
        for (let i = 1; i <= paginas; i++) {
            itemspaginacion = itemspaginacion + "<li class='page-item pag'><a href='#regresa' class='page-link' onclick='ejceutar("+i+")'>"+i+"</a></li> ";
        };

        const agregar = document.querySelector("#paginacion");
        agregar.innerHTML=
        `
        <div class="col-12 my-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled flechas">
                        <a class="page-link ">Paginas: </a>
                    </li>

                    ${itemspaginacion}

                </ul>
            </nav>
        </div>
        `
  });
}
  
  
  