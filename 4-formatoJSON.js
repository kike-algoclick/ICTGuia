//Ejercicio 4.1

/* const libro = {'titulo':'Las flipantes aventuras de Messi','autor': 'Carlos', 'año':'2012'}
 const objectToString = JSON.stringify(libro)
 console.log(objectToString) */

//Ejercicio 4.2

let jsonText = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}'

let jsonToObject = JSON.parse(jsonText)
console.log('La edad es: ', jsonToObject.edad)

//Ejercicio 4.3
 const json = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]'

 const object = JSON.parse(json)

 const products = object.forEach(e => {
    console.log(e.producto)
 });
 