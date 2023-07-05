//importamos la conexion
import getConnection from "./../db/database.js";

//creamos una funcion asyncrona para que espere que alla conexion para ejecutarse
const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection(); //garantiza la conexion
    //.query es un metodo de la dependencia promise-mysql
    const result = await connection.query(//consulta los datos
      "SELECT * FROM categorias"
    );
    console.log(result);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Metodo POST para agregar categorias
const addCategorias = async(req, res) =>{
  try {
    //se destructura la request para almacenar sus datos en un objeto
    const {nombre_categoria,descripcion_categoria, img_categoria} = req.body;
    //se almacenan los datos en un literal object enhancement para enviarlos a mi query
    const category = {nombre_categoria, descripcion_categoria, img_categoria};
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO categorias SET ?", category);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getCategoria = async (req, res)=>{
  try {
      const {id} = req.params
      const connection = await getConnection();
      const result = await connection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias WHERE id_categoria = ?",id );
      console.log(result);
      res.json(result);
      return result;
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
     
} 

const deleteCategoria = async (req, res)=>{
  try {
      const {id} = req.params
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ?",id);
      console.log(result);
      res.json(result); 
      return result;
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
     
} 

const updateCategorias = async (req, res)=>{
  try {
      const {id} = req.params;
      const {nombre_categoria,descripcion_categoria,img_categoria} = req.body;

      const category = { nombre_categoria, descripcion_categoria, img_categoria }

      const connection = await getConnection();
      
      const result = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?", [category, id]);

      res.json(result);
      return result;
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
}

//exportamos el metodo para ejecutarlo desde app.js
export const methodsHTTP = {
  getCategorias,
  addCategorias,
  getCategoria,
  deleteCategoria,
  updateCategorias
};
