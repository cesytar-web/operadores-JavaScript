// Variables
var numeroUno = 5;
let texto = 'Hola, mundo!';
numeroUno = 10; // Cambiando el valor de numeroUno

const array = [1, 2, 3, 'cuatro', 'cinco'];
let numeroDos = 7;

// Operadores
console.log(numeroUno + numeroDos); // Suma
console.log(numeroUno * numeroDos); // Multiplicación
console.log(numeroUno - numeroDos); // Resta
console.log(numeroUno / numeroDos); // División
console.log(numeroUno ** 3); // Elevación al cubo
console.log(numeroUno % numeroDos); // Resto

// Bucles
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log('La suma de los números es:', suma);

let maximo = Math.max(...numeros);
console.log('El número más alto es:', maximo);

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 5) {
    numeros[i] += 1;
    console.log(
      numeros[i] - 1,
      'es mayor o igual a 5. El resultado es',
      numeros[i]
    );
  } else {
    numeros[i] -= 1;
    console.log(numeros[i] + 1, 'es menor a 5. El resultado es', numeros[i]);
  }
}

console.log('El total de elementos en el array es:', numeros.length);

const palabras = ['hola', 'mundo', 'hola', 'mundo', 'hola', 'hola'];
const repeticiones = {};

palabras.forEach((palabra) => {
  repeticiones[palabra] = (repeticiones[palabra] || 0) + 1;
});

console.log('Repeticiones de palabras:', repeticiones);
