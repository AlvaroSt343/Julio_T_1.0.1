function prueba(){
    
    const agregar = document.querySelector("#xxd");
    agregar.innerHTML=
      `
        <div class="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content modalcustomvideo">
                    <div class="modal-body">
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/HDaVWDuF9sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `
};