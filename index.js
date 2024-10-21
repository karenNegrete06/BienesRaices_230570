const express = require(`express`); //importar la libreria 

const app = express()

//configuramos nuestro servidor web 
const port =3000;
app.listen(port,()=>{
    console.log(`La aplicacion ha iniciado en el puerto: ${port}`);
})

// Probamos las rutas para poder presentar mensajes  al usario a traves del navegador 
app.get("/",function(req,res){
    res.send("Hola mundo desde Node, atraves del Navegador")
})


app.get("/QuienSoy",function(req,res){
    res.send({"Estudiante": "Karen Lizbeth Negrete Hernández",
    "carrera": "TI DSM",
    "grado": "4°",
    "grupo": "B",
    "asignatura": "aplicaciones web orientada a servicios (AWOS)"

})
})
