const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, lista=false, hasta) => {


    try {
        

        let salida= '';
        let consola= '';
        if (hasta) {
            for (let i = 1; i <= hasta; i++){
                salida += `${base} X ${i} = ${base*i}\n`; //Backslash n \n nos sirve para hacer un salto de line
                consola += `${base} ${"X".blue} ${i}  ${"=".blue} ${base*i}\n`; //Backslash n \n nos sirve para hacer un salto de line
            };

            fs.writeFileSync(`./salida/tabla-${base}-hasta-${hasta}.txt`, salida);
            fs.writeFileSync()

            
        } else {
            for (let i = 1; i <= 10; i++){
                salida += `${base} X ${i} = ${base*i}\n`; 
                consola += `${base} ${"X".blue} ${i}  ${"=".blue} ${base*i}\n`; 
            };
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );

        }

        

        

        if (lista) {
            console.log('======================='.zebra)
            console.log( '    '.zebra, `Tabla del:`, base, '    '.zebra)
            console.log('=======================\n'.zebra)

            console.log(consola) 
        }


        /*
            Tenemos que importar el fs, para interactuar con los archivos(fs de fileSystem)
            Luego tiene varios métodos, uno de estos es .writeFile('nombre del archivo, lo que se va a grabar, (err)=>{if (err) throw err;})
        */

        return (`tabla-${base}-hasta-${hasta}.txt`.bgBrightCyan)
        
    } catch (error) {
        throw error
    }

    

}
    
module.exports = {
 crearArchivo
}