//Ejercicio 6.1
async function esperarSegundos(segundos) {
  await setTimeout(_ => {console.log('Han pasado', segundos ,'segundos'), segundos});
 console.log('ya estoy')
}


esperarSegundos(3)
console.log('Hola afuera')
