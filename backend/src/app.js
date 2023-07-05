//primero debemos indicarle en el package json que la app va a ser de tipo module
//importamos nuestro framework express
import express from "express";
//importamos nuestros router, como es export default le podemos cambiar el nombre como nos convenga
import categoriasRoutes from "./routes/categorias.routes.js";
import constructorasRoutes from "./routes/constructoras.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import cors from "cors";


//almacenamos a nuestro framework en una constante para poder importarlo a los demas modulos
const app = express();

//indicamos el puerto donde se va a ejecutar
app.set("port", 5000);

//Middleware
//parsea de JSON
const corsOption={
    methods: ["GET","POST","PUT","DELETE"],
}   
app.use(express.json());

app.use(cors(corsOption));

//Routes
//use es un metodo de node JS que entiende todos los metodos http(POST,GET,PUT, etc)
//el primer argumento es para enrutar las routes
app.use("/api/categorias", categoriasRoutes);
app.use("/api/constructoras", constructorasRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/productos", productosRoutes);

//exportamos nuestra constante para que este disponible desde cualquier lugar de la aplicacion
export default app;
