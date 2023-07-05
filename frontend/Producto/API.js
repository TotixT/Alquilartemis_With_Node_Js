const url = "http://localhost:5000/api/productos/";


export const obtainProductos = async () => {
    try {
        const productos = await fetch(url,{
            method: "GET"
        });
        const datosProductos = productos.json();
        return datosProductos;
    } catch (error) {
        console.log(error);
    }
};


export const nuevoProducto = async (categoria) => {
  
};


export const deleteProducto = async (id) => {
  
};



export const obtenerProducto = async (id) => {
 
};



export const editarProducto = async (category) => {
 
};





