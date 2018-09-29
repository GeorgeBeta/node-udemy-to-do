const argv = require('yargs')
    .command('crear', 'Añadir una tarea a la lista de tareas',
        {descripcion: {
            demmand: true,
            alias: 'd',
            description: 'Decripción de la tarea'
        }})
    .command('listar', 'Listar las tareas pendientes')
    .command('actualizar', 'Definir si una tarea está completada', {
        descripcion: {
            demmand: true,
            alias: 'd',
            description: 'Decripción de la actividad a señalar como realizada'
        },
        completado: {
            default: true,
            alias: 'c',
            description: 'Marcar como completada la tarea'
        }
        })
    .help()
    .argv;

module.exports = {
    argv
}