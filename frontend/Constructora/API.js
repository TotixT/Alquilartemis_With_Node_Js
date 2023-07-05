const url = "http://localhost:5000/api/constructoras/";


export const obtainConstructoras = async () => {
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


export const nuevaConstructora = async (categoria) => {
  
};


export const deleteConstructora = async (id) => {
  
};



export const obtenerConstructora = async (id) => {
 
};



export const editarConstructora = async (category) => {
 
};





