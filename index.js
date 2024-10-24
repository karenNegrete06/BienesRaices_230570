
import express from 'express';
import generalRoutes from './Routers/generalRoutes.js'
import userRoutes from './Routers/userRoutes.js'

//const express = require(`express`); //importar la libreria 
const app = express()

//configuramos nuestro servidor web 
const port =3000;
app.listen(port,()=>{
    console.log(`La aplicacion ha iniciado en el puerto: ${port}`);
})

//Routing - Enrutamiento.
app.use('/',generalRoutes);
app.use('/usuario',userRoutes);
// Probamos las rutas para poder presentar mensajes al usuario a través del navegador


