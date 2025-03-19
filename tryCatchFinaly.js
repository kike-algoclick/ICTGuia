/* //Ejercicio 5.1

    function dividir(a, b) {
    try {

        if (a == 0 |b == 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
        
    } catch (error) {
        return error.message;
    }
}

console.log(dividir(0, 12)); */

//Ejercicio 5.2

try {
    let a = 12
    let b 

    let result = a + b

    if (b === undefined){
        throw new Error("Variable no definida");
    }

    console.log(result);

} catch (error) {
    console.log(error.message);
}

//Ejercicio 5.3

try {
    let a = 12
    let b      // asignale un valor a "b" y ejecuta el código 

    let result = a + b

    if (b === undefined){
        throw new Error("Variable no definida");
    }

    console.log(result);

} catch (error) {
    console.log(error.message);
}finally{
    console.log('El programa ha finalizado')
}
