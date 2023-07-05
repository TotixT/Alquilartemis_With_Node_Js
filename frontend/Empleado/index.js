import { obtainEmpleados, nuevaEmpleado, deleteEmpleado, obtenerEmpleado, editarEmpleado } from "./API.js";

const emplead = document.querySelector("#employees");

document.addEventListener("DOMContentLoaded", () => {
    cargarEmpleados();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarEmpleados(){
    const empleados = await obtainEmpleados();
    empleados.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_empleado}</td>
        <td>${element.nombre_empleado}</td>
        <td>${element.email_empleado}</td>
        <td>${element.celular_empleado}</td>
        <td>${element.password_empleado}</td>
        <td><a class="btn btn-warning" href="editCamper.html?id=${element.id_empleado}">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_empleado}">Eliminar</button></td>
        <td>a</td>
    </tr>
    `;
    emplead.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


