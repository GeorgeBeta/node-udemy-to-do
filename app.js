const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar la lista de tareas');
        break;
    case 'actualizar':
        console.log('Definir si completado o pendiente una tarea');
        break;
    default:
        console.log('Comando no definido');
        break;
};

