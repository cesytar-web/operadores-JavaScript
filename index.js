//arrays ejercios
//ejercicio 1
let arrayVacio = [];
//ejercicio 2
let arrayNumeros =[0,1,2,3,4,5,6,7,8,9];
//ejercicio 3
const arrayNumerosPares = [0, 2, 4, 6, 8];
//EJERCICIO 4
const arrayBidimensional = [[1, 2, 5, 6 ],['a', 'b', 'c']];

//funciones
// ejercicios 5
function suma (a, b) {
    return a + b
}

//ejercicio 6
function potenciacion (a, b) {
    return a ** b
}

//ejercicio 7
function separarPalabra (cadenaTexo) {
    let arrayPalabrasSeparadas = cadenaTexo.split(' ');
    return arrayPalabrasSeparadas;
}
    console.log(separarPalabra("hola nuevo alumno"));

// ejercicio 8
function repetirString (cadenaTexto, numeroEntero){
    return cadenaTexto.repeat(numeroEntero);
}

console.log("Hola".repeat(3));

//ejercicio 9
function esPrimo (unNumero) {
    if (unNumero < 2){
         return false
    }
    else {
        for (let i = 2; i <= unNumero ; i++){
            if (unNumero%i==0){
                return true
            }
        }
        return false
    }
}

//mezclando Arrays y funciones
// ejercicio 10
function ordenarArray (numerosArray) {
    return numerosArray.sort(function(a, b) {
        return a - b;
    });
}

//ejercicio 11
function obtenerPares (arrayNumero){
    return arrayNumero.filter ((numero) => numero % 2 === 0);
}

//ejercicio 12
function pintarArray (array){
    return `[${array.join(', ')}]`;
}


// ejercicio 13
function arrayMapi (array, funcion) {
    let arrayfuncion = [];
    for (let i = 0; i < array.length; i++){
        arrayfuncion [i] = funcion(array[i]);
    }
}


// ejercici0 14
function eliminarDuplicados (unArray){
    return [newArgument (array)
];
}


//Arrays
// ejercicio 15
const arrayNumeroNegativo = [0, -1, -2,-3,-4, -5, -6, -7, -8, -9];

//ejercicio 16
const holaMundo = ["Hola", "Mundo"];

//ejercicio 17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//ejercicio 18
const arrayDeArray = [ [756, "nombre"],  [225, "apellido"],  [298, "direccion"], ];
  

//Funciones:
//ejercicio 19
function multiplication (a, b) {
    return a * b;
}

//ejercicio 20
function division (a, b) {
    return a / b;
}

//ejercicio 21
function esPar(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

 //ejercicio 22
 arrayFunction = [suma, resta, multiplicacion];
 function suma (a, b) {
    return a + b;
 }
 function resta (a, b) {
    return a - b;
 }
 function multiplicacion (a, b) {
    return a * b;
 }


 //mezclando arrays y funciones 2:
 // ejercicio 23
 function ordenarArray2(arr2) {
    return arr2.sort(function (a, b) {
      return b - a;
    });
}

//ejercicio 24
function obtenerImpares (arrayNumeros) {
    return arrayNumeros.filter((number) => number % 2 !== 0);
}

//ejecicio 25
function sumarArray (arrayNumerico){
    let sumaTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        sumaTotal += arr[i];
      }
      return sumaTotal;
    }

//ejercicio 26
function multiplicarArray (arrayNum){
    let multiplicacionTotal = 1;
    for (let i= 1; i < arr.length; i++) {
        multiplicacionTotal += arr[1];
    }
        return multiplicacionTotal;
    
}

