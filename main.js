// ? 1

console.log(`1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.`)

const restoPar = (num) => {
    if ((num % 2) == 0) {
        console.log(`El número ${num} es par.`)
    } else {
        console.log(`El número ${num} es impar.`)
    }
}

restoPar(10)

// ? 2

console.log(`2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.`)

const determinarMayor = (num1,num2) => {
    if (num1>num2) {
        console.log(`El número ${num1} es mayor al número ${num2}.`)
    } else {
        console.log(`El número ${num2} es mayor al número ${num1}.`)
    }
}

determinarMayor(3,10)

// ? 3

console.log(`3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.`)

const determinarMultiplo5 = (num) => {
    if ((num % 5)==0) {
        console.log(`El número ${num} si es multiplo de 5.`)
    } else {
        console.log(`El número ${num} no es multiplo de 5.`)
    }
}

determinarMultiplo5(155)

// ? 4

console.log(`4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.`)

const imprimirNums0 = (num) => {
    for (let i = 0; i <= num; i++) {
        console.log(i)
        
    }
}

imprimirNums0(12)

// ? 5

console.log(`5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.`)

const repetirPalabra = (num,palabra) => {
    for (let i = 0; i < num; i++) {
        console.log(`${palabra} (${i+1}).`)
    }
}

repetirPalabra(10,`Casa`)

// ? 6

console.log(`6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.`)

let array1 = [2,4,8,16,32,64,128,256,512,1024]
// let array1 = [1,2,3,4,5,6,7,8,9,10]

// const imprimirArray = (array) => {
//     console.log(array)
// }
// No sabia si hacerlo asi es incorrecto, entonces tambien lo hice con for of.


const imprimirArray = (array) => {
    for (const valor of array) {
        console.log(valor)
    }
}

imprimirArray(array1)

// ? 7

console.log(`7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".`)

const imprimirArrayMenos5 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (i == 4) {
            continue
        }
        console.log(array[i])
    }
}

imprimirArrayMenos5 (array1)

// ? 8

console.log(`8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.`)

const multiplicarArray = (array,num) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]} multiplicado por ${num} es igual a ${array[i]*num}.`)
    }
}

multiplicarArray(array1,3)