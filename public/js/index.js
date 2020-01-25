function showComments(){
    $.ajax({
        url: "/blog-api/comentarios",
        method: "GET",
        dataType: "json",
        success: response =>{    
            $('#commentSection').empty();
            response.forEach(comentario => {
                $("#commentSection").append(`
                    <section class="commentFormat">
                        <div class="commentHeader">
                            <h2>${comentario.autor}</h2>
                        </div>
                        <div class="commentTitle">
                            <h3>${comentario.titulo}</h3>
                        </div>
                        <div class="commentContent">
                            <p>${comentario.contenido}</p>
                        </div>
                        <div class="commentDate">
                            <p>${comentario.fecha}</p>
                        </div>
                        <div class="commentFooter">
                            <p>${comentario.id}</p>
                        </div>
                    </section>                
                `);
            });

        },
        error: function(err){
            console.log(err);
        }
    });
}

function addComment(){
    $('#commentCreation').on('submit', function(e){
        
        e.preventDefault();

        let titulo = $('.textTitulo').val();
        let contenido = $('.textContenido').val();
        let autor = $('.textAutor').val();

        $.ajax({
            type: "POST",
            url: "/blog-api/nuevo-comentario",
            contentType: "application/json",
            data: JSON.stringify({ titulo, contenido, autor }),
            dataType: "json",
            success: function(response) {
              location.reload();
            },
            error: function ({status, errorMessage}) {
                alert(`Error ${status}: ${errorMessage}`);
            }
          
        });

    });
} 

function modifyComment(){
    $('#commentModification').on('submit', function(e){

        e.preventDefault();

        let id = $('#idMod').val();
        let titulo = $('#tituloMod').val();
        let contenido = $('#contenidoMod').val();
        let autor = $('#autorMod').val();
        
        console.log("hola2");
        $.ajax({
            type: "PUT",
            url: `/blog-api/actualizar-comentario/`+id,
            contentType: "application/json",
            data: JSON.stringify({id, titulo, contenido, autor }),
            dataType: "json",
            success: function(response) {
                console.log("suc");
              location.reload();
            },
            error: function ({status, errorMessage}) {
                console.log("err");
                alert(`Error ${status}: ${errorMessage}`);
            }
          
        });
        console.log("fin");

    });
} 

function init(){
    showComments();
    addComment();
    modifyComment();
}

init();