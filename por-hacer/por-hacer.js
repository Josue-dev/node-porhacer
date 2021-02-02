const fs = require('fs');
const { resolve } = require('path');


let listadoPorHacer = [];

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);

        console.log(data);

        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`data.json`)
                //console.log('El archivo a sido creado');
        });
    })

}

const cargarDB = () => {

        try {
            listadoPorHacer = require('../db/data.json');
        } catch (error) {
            listadoPorHacer = [];
        }


    }
    //creamos los elementos para insertarlos
const crear = (descripcion) => {
        let porHacer = {
            descripcion,
            completado: false
        };
        cargarDB(); //con esto ya evitamos que se sobreescriba el objeto insertado
        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    }
    //mostramos todos los elementos del listado
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}