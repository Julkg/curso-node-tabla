const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');



/**
 * option('l')
 * opcional
 * boolean
 * default:false
 */


console.clear();


// console.log('base: yargs', argv.base);


//, que creamos en consola como node (nombre del archivo sin paréntesis) --(nombre de la variable)=(valor) todo sin paréntesis seria node app --base=5
// const [, , arg3 = 'base=5'] = process.argv; //El process.argv nos muestra las direcciones de nuestros archivos y lo que hay en memoria que es igual a un arreglo

//Luego desestructuramos 
// const [, base = 5] = arg3.split('=');


// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(
        'Congratulations'.bgBrightCyan,
        nombreArchivo,
        'creado'.bgBrightCyan))
    .catch(err => console.log(err));



 




