function showComments(){
    $.ajax({
        url: "/blog-api/comentarios",
        method: "GET",
        dataType: "json",
        success: function (responseJSON){
            $('.comments').empty();
            for(let i = 1; i<=responseJSON.length; i++){
                $(".comments").append(`
                    <h3>${responseJSON[i].titulo}</h3>
                
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

function init(){
    showComments();
}

init();