const url = "http://localhost:5000/api/empleados/";


export const obtainEmpleados = async () => {
    try {
        const constructoras = await fetch(url,{
            method: "GET"
        });
        const datosConstructoras = constructoras.json();
        return datosConstructoras;
    } catch (error) {
        console.log(error);
    }
};


export const nuevaEmpleado = async (categoria) => {
  
};


export const deleteEmpleado = async (id) => {
  
};



export const obtenerEmpleado = async (id) => {
 
};



export const editarEmpleado = async (category) => {
 
};





