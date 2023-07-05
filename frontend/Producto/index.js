import { obtainProductos, nuevoProducto, deleteProducto, obtenerProducto, editarProducto } from "./API.js";

const produc = document.querySelector("#products");

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarProductos(){
    const productos = await obtainProductos();
    productos.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_producto}</td>
        <td>${element.nombre_producto}</td>
        <td>${element.precio_x_dia}</td>
        <td>${element.stock_producto}</td>
        <td>${element.nombre_categoria}</td>
        <td><a class="btn btn-warning" href="editCamper.html?id=${element.id_producto}">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_producto}">Eliminar</button></td>
        <td>a</td>
    </tr>
    `;
    produc.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


