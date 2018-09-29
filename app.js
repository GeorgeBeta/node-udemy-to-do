const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const color = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====================='.green);
            console.log(tarea.descripcion);
            console.log(`Estado : ${tarea.completado}`);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        console.log('Definir si completado o pendiente una tarea');
        break;
    default:
        console.log('Comando no definido');
        break;
};

