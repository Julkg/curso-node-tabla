
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Hasta donde llega la tabla'
    })
    .check( (argv, options) => {
        if (isNaN(argv.base)) {
            throw 'Hasta donde se multiplica'
        } else {
            return true
        }
    })
    .argv;


module.exports = argv;