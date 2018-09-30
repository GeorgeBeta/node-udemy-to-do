const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion: descripcion,
        completado: true
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if(err) console.log(`Error ${err}`);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;
}

module.exports = {
    crear,
    guardarDB,
    cargarDB,
    getListado,
    actualizar
}