let express = require( 'express' );
let morgan = require( 'morgan' );
let bodyParser = require( 'body-parser');
let uuidv4 = require('uuid/v4');
let jsonParser = bodyParser.json(); //middleware

let app = express();


app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    if (req.method === "OPTIONS") {
        return res.send(204);
    }

}); 

app.use(express.static('public')); // Significa que va a haber una parte publica
app.use( morgan( 'dev' ) );
uuidv4();

let comentarios = [{
    id: uuidv4(),
    titulo: "saludo",
    contenido: "hola como estas",
    autor: "Alfredo",
    fecha: "2018-07-20"
},
{
    id: uuidv4(),
    titulo: "queja",
    contenido: "no me gusto esto",
    autor: "Erica",
    fecha: "2019-10-09"
},
{
    id: uuidv4(),
    titulo: "despedida",
    contenido: "hasta luego",
    autor: "Diego",
    fecha: "2020-01-14"
}];


 //GET /blog-api/comentarios
 app.get( '/blog-api/comentarios', ( req, res )=>{
    console.log("hola");
    return res.status( 200 ).json( comentarios );
 });

 //GET
 app.get( '/blog-api/comentarios-por-autor', ( req, res ) =>{
    let autor = req.query.autor;

    if (!autor){
        res.statusMessage = "Nombre de autor no proporcionado";
        return res.status(406).send();

    }
    let result = comentarios.filter( (elemento)=>{
        if (elemento.autor === autor){
            console.log("elemento");
            return elemento;
        }
    });

    if (result.length > 0){
        return res.status(200).json(result);
    }
    else{
        res.statusMessage = "No hay comentarios de dicho autor";
        return res.status(404).send();
    }

 });

 //POST
 //app.put( '/blog-api/')





app.listen( 8080, () =>{
    console.log( "Servidor corriendo en puerto 8080." );
});