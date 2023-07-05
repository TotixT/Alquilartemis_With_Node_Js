import { obtainConstructoras, nuevaConstructora, deleteConstructora, obtenerConstructora, editarConstructora } from "./API.js";

const construct = document.querySelector("#constructor");

document.addEventListener("DOMContentLoaded", () => {
    cargarConstructoras();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarConstructoras(){
    const categorias = await obtainConstructoras();
    categorias.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_constructora}</td>
        <td>${element.nombre_constructora}</td>
        <td>${element.nit_constructora}</td>
        <td>${element.nombre_representante}</td>
        <td>${element.email_contacto}</td>
        <td>${element.telefono_contacto}</td>
        <td><a class="btn btn-warning" href="editCamper.html?id=${element.id_constructora}">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_constructora}">Eliminar</button></td>
        <td>a</td>
    </tr>
    `;
    construct.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


