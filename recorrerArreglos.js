//  Ejercicio 2.1

let array1 = [3, 7, 2, 9, 5];
 let suma = 0
for(let i = 0; i < array.length; i++){
    suma += array[i];
    
}
console.log(suma)

//Ejericio 2.2

let numbers =  [12, 45, 6, 23,89]

let HigherNumber = 0

for(i = 0; i < numbers.length; i++){
    if ( numbers[i] > HigherNumber){
        HigherNumber = numbers[i]
    }
}

console.log(HigherNumber)




//Ejercicio 2.3
let array2 = [15, 3, 8, 12, 1]

let minorTen = []

for(i = 0; i < array.length; i++){
    if(array[i] < 10){
        minorTen.push(array[i])
    }
}
console.log(minorTen)