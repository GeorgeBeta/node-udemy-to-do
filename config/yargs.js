const argv = require('yargs')
    .command('crear', 'Añadir una tarea a la lista de tareas',
        {descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Decripción de la tarea'
        }})
    .command('listar', 'Listar las tareas pendientes')
    .command('actualizar', 'Definir si una tarea está completada', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Decripción de la actividad a señalar como realizada'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marcar como completada la tarea'
        }
        })
    .command('borrar', 'Borrado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Boorado de la tarea selada por la descripción'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}