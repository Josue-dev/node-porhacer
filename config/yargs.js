const crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}
const borrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}




const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', crear)
    .command('actualizar', 'Actualizar tareas', actualizar)
    .command('borrar', 'Eliminar tareas', borrar)
    .help()
    .argv;

//exportamos el modulo para que sean utilizados por demas archivos
module.exports = {
    argv
}