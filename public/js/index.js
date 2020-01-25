function showComments(){
    $.ajax({
        url: "/blog-api/comentarios",
        method: "GET",
        dataType: "json",
        success: function (responseJSON){
            $('#commentSection').empty();
            for(let i = 0; i<=responseJSON.length; i++){
                $("#commentSection").append(`
                    <section class="commentFormat">
                        <div class="commentHeader">
                            <h2>${responseJSON[i].autor}</h2>
                        </div>
                        <div class="commentTitle">
                            <h3>${responseJSON[i].titulo}</h3>
                        </div>
                        <div class="commentContent">
                            <p>${responseJSON[i].contenido}</p>
                        </div>
                        <div class="commentDate">
                            <p>${responseJSON[i].fecha}</p>
                        </div>
                        <div class="commentFooter">
                            <p>${responseJSON[i].id}</p>
                        </div>
                    </section>                
                `);
            }
            /*responseJSON.each(function(comentario){
                $(".comments").append(`
                    <h3>${comentario.titulo}</h3>
                
                `);
            }); */
        },
        error: function(err){
            console.log(err);
        }
    });
}

function addComment(){

}

function init(){
    showComments();
}

init();