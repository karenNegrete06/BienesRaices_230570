import express from 'express';
const router = express.Router();

router.get("/",function(req,res){
    res.send("Hola mundo desde Node, atraves del Navegador")
})


router.get("/QuienSoy",function(req,res){
    res.json({"Estudiante": "Karen Lizbeth Negrete Hernández",
    "carrera": "TI DSM",
    "grado": "4°",
    "grupo": "B",
    "asignatura": "aplicaciones web orientada a servicios (AWOS)"

})
})

export default router
