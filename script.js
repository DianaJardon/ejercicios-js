const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
console.log(`_-----------------------------------------------------------------`);
console.log(`Padawan -> Diana Esmeralda Jardon Vilchis`);
console.log(`_-----------------------------------------------------------------`);
console.log('Ejercicio 1, determinar numero primo de un previo arreglo de números ');

ejercicio1.forEach( (num) => {
  let valores = 0;

  for (let divisor = 1; divisor <= num; divisor++){
    if (num % divisor === 0){
      valores++;
    };
  };

    if (valores ==2){
      console.log(`El numero ${num} es primo`);
    };
})

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

console.log(" ");

console.log("Ejercicio 2, determinar los invitados a la fiesta de ramón:");
for (let i = 0; i < ejercicio2.length; i++) {

  if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar == true) {
    console.log(ejercicio2[i].nombre);
  }
}
    console.log("Todos los anteriores son invitados a la fiesta xD");

console.log(" ");

console.log("Ejercicio 3, Sucesión de Fibonacci:");
//TODO: Imprimir el primer 1
  let a = 0;
  let b = 1;
  let s = 0;
  console.log(`${b}`);
for (let i = 0; i <= 50; i++) {
 s = a + b;
 a =b;
 b = s;
 console.log(`${s}`);

  }
