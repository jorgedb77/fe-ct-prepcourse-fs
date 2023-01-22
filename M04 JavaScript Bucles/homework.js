/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retornar el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años ó más debe retornar el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}

function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  switch (status) {
    case 1:
      return "Online";
      break;
    case 2:
      return "Away";
      break;
    default:
      return "Offline";
  }
}

function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;

    case "mandarin":
      return "Ni Hao!";
      break;

    case "ingles":
      return "Hello!";
      break;

    default:
      return "Hola!";
  }
}

function colors(color) {
  // La función recibe un color. Retornar el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // IMPORTANTE: utilizar el statement SWITCH.
  // Tu código:
  switch (color) {
    case "blue":
      return "This is blue";
      break;

    case "red":
      return "This is red";
      break;

    case "green":
      return "This is green";
      break;

    case "orange":
      return "This is orange";
      break;

    default:
      return "Color not found";
  }
}

function esDiezOCinco(num) {
  // Retornar "true" si "num" es 10 o 5.
  // De lo contrario, retornar "false".
  // Tu código:
  if (num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
}

function estaEnRango(num) {
  // Retornar "true" si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar "false".
  // Tu código:
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
}

function esEntero(num) {
  // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna "false".
  // Tu código:
  if (Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // De lo contrario, retorna el número.
  // Tu código:4
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  // Si alguno de los argumentos es cero, retornar ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retornar false.
  // Tu código:
  if (num1 === 0 || num2 === 0 || num3 === 0) return "Error";
  if (num1 > num2 && num1 > num3 && num1 > 0)
    return "Numero 1 es mayor y positivo";
  if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  if (num3 > num1 && num3 > num2) return num3 + 1;
  return false;
}

function esPrimo(num) {
  // Retornar True si "num" es primo.
  // De lo contrario retorna False.
  // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
  // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
  // [Nota]: los números negativos, 0 y 1 NO son números primos.
  // Tu código:

  //Los numeros primos son numeros enteros y tienen 2 divisores el 1 y ellos mismos;
  //el resultado de la division tiene que ser un numero entero
  // Ej de numeros primos  2, 3,5,7,11,13,17,19,23,29,31,37,41,43
  // No son primos         0,1,4,6,8,9,10,12,14,15,16,18,20,21,22

  if (num === 2) {
    return true;
  } else if (num < 2) {
    //no son primos 0,1 y todos los negativos
    return false;
  }
  for (var i = 2; i < num; i++) {
    //busco divisores entre el 1 y el numero -1
    if (num % i === 0) {
      // con esto pregunto si el numero es divisible en numeros entre el 1 y numero-1
      return false;
    }
  }
  return true;
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor === true) return "Soy verdadero";
  return "Soy falso";
}

function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos retornar True.
  // Caso contrario, retornar False.
  // Tu código:
  if (num > 99 && num < 1000) return true;
  return false;
}

function doWhile(num) {
  // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
  // Retornar el valor final.
  // Utilizar el bucle Do-While.
  // Tu código:
  var a = numero; //guardo en numero que recibo por argumento en la variable a
  var i = 0; // mi contador
  do {
    //el do while se ejecuta al menos una vez!!!
    i = i + 1; //aumento mi contador en 1
    a = a + 5; //al numero le sumo 5
  } while (i < 8); //mientras el contador sea menor que 8 se hace todo lo que esta dentro del do !!!
  return a; //caso contrario cuando el contador sea = 8 va retornar a
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile,
};
