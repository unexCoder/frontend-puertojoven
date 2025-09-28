# Sintaxis de JavaScript
## 1. Fundamentos Sintácticos
### 1.1 Estructura Básica
```javascript
// Comentarios de línea
/* Comentarios 
   de bloque */

// Declaraciones terminan con punto y coma (opcional pero recomendado)
let variable = "valor";

// JavaScript es case-sensitive
let Variable = "una variable";
let variable = "otra variable";
```

### 1.2 Identificadores
- Pueden contener letras, dígitos, _ y $
- No pueden empezar con dígitos
- No pueden ser palabras reservadas
- Convenciones: camelCase para variables, PascalCase para constructores

## 2. Declaración de Variables
### 2.1 Tipos de Declaración
```javascript
// var (function-scoped, hoisting)
var nombre = "Juan";

// let (block-scoped, no hoisting)
let edad = 25;

// const (block-scoped, immutable binding)
const PI = 3.14159;
```

### 2.2 Hoisting

Hoisting en JavaScript

Hoisting es el comportamiento por el cual JavaScript "eleva" las declaraciones de variables y funciones al inicio de su contexto de ejecución (scope) durante la fase de compilación, antes de que el código se ejecute.

```javascript
console.log(x); // undefined (no error)
var x = 5;

console.log(y); // ReferenceError
let y = 10;
```

## 3. Tipos de Datos
### 3.1 Tipos Primitivos
```javascript
// Number (IEEE 754 double precision)
let entero = 42;
let decimal = 3.14;
let exponencial = 1e6;
let hexadecimal = 0xFF;
let binario = 0b1010;
let octal = 0o755;

// String (UTF-16)
let simple = 'texto';
let doble = "texto";
let template = `Hola ${nombre}`;

// Boolean
let verdadero = true;
let falso = false;

// Null y Undefined
let nulo = null;
let indefinido = undefined;

// Symbol (ES6+)
let simbolo = Symbol('descripcion');
let simboloGlobal = Symbol.for('key');

// BigInt (ES2020+)
let enteroGrande = 123n;
let otraForma = BigInt(123);
```

### 3.2 Tipos de Referencia

```javascript
// Object
let objeto = {
    propiedad: "valor",
    metodo: function() { return this.propiedad; }
};

// Array
let arreglo = [1, 2, 3];
let arregloMixto = [1, "texto", true, {}];

// Function
function declarada() { return "función"; }
let expresion = function() { return "expresión"; };
let flecha = () => "arrow function";

// Date
let fecha = new Date();
let fechaEspecifica = new Date('2023-12-25');

// RegExp
let regex = /patron/flags;
let regexConstructor = new RegExp('patron', 'flags');
```

## 4. Operadores
### 4.1 Operadores Aritméticos
```javascript
let a = 10, b = 3;

// Básicos
a + b;  // 13 (suma)
a - b;  // 7 (resta)
a * b;  // 30 (multiplicación)
a / b;  // 3.333... (división)
a % b;  // 1 (módulo)
a ** b; // 1000 (exponenciación ES2016+)

// Incremento/Decremento
++a;    // Pre-incremento
a++;    // Post-incremento
--a;    // Pre-decremento
a--;    // Post-decremento
```

### 4.2 Operadores de Asignación

```javascript
let x = 5;
x += 3;   // x = x + 3
x -= 2;   // x = x - 2
x *= 4;   // x = x * 4
x /= 2;   // x = x / 2
x %= 3;   // x = x % 3
x **= 2;  // x = x ** 2
x &&= y;  // x = x && y (ES2021+)
x ||= y;  // x = x || y (ES2021+)
x ??= y;  // x = x ?? y (ES2021+)
```

### 4.3 Operadores de Comparación
```javascript
// Igualdad (con coerción de tipos)
5 == "5";    // true
0 == false;  // true

// Igualdad estricta (sin coerción)
5 === "5";   // false
0 === false; // false

// Desigualdad
5 != "5";    // false
5 !== "5";   // true

// Relacionales
5 > 3;       // true
5 >= 5;      // true
3 < 5;       // true
3 <= 3;      // true
```

### 4.4 Operadores Lógicos

```javascript
// AND lógico
true && true;   // true
true && false;  // false

// OR lógico
true || false;  // true
false || false; // false

// NOT lógico
!true;          // false
!false;         // true

// Nullish coalescing (ES2020+)
null ?? "default";      // "default"
undefined ?? "default"; // "default"
0 ?? "default";         // 0
```

### 4.5 Operadores Bitwise

```javascript
let a = 5, b = 3; // 101 y 011 en binario

a & b;   // 1 (AND)
a | b;   // 7 (OR)
a ^ b;   // 6 (XOR)
~a;      // -6 (NOT)
a << 1;  // 10 (left shift)
a >> 1;  // 2 (right shift)
a >>> 1; // 2 (unsigned right shift)
```

## 5. Estructuras de Control
### 5.1 Condicionales
```javascript
// if-else
if (condicion) {
    // código
} else if (otraCondicion) {
    // código
} else {
    // código
}

// Operador ternario
let resultado = condicion ? valorSiTrue : valorSiFalse;

// switch
switch (valor) {
    case 1:
        // código
        break;
    case 2:
    case 3:
        // código para 2 o 3
        break;
    default:
        // código por defecto
}
```

### 5.2 Bucles

```javascript
// for tradicional
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for...in (propiedades enumerables)
for (let propiedad in objeto) {
    console.log(propiedad, objeto[propiedad]);
}

// for...of (valores iterables ES6+)
for (let valor of iterable) {
    console.log(valor);
}

// while
while (condicion) {
    // código
}

// do-while
do {
    // código
} while (condicion);

// Control de flujo
break;    // Sale del bucle
continue; // Salta a la siguiente iteración
```

## 6. Funciones
### 6.1 Declaración de Funciones

```javascript
// Declaración de función (hoisted)
function nombre(parametro1, parametro2 = valorDefault) {
    return parametro1 + parametro2;
}

// Expresión de función
let funcion = function(parametros) {
    return valor;
};

// Arrow functions (ES6+)
let flecha = (param) => param * 2;
let flechaBloque = (a, b) => {
    let resultado = a + b;
    return resultado;
};

// Sin parámetros
let sinParams = () => "Hola mundo";

// Un parámetro (paréntesis opcionales)
let unParam = x => x * x;
```

### 6.2 Características Avanzadas de Funciones

```javascript
// Parámetros rest (ES6+)
function suma(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}

// Destructuring en parámetros
function procesar({nombre, edad}) {
    console.log(`${nombre} tiene ${edad} años`);
}

// Función como valor de retorno
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Ejecutada inmediatamente");
})();

// Método shorthand (ES6+)
let objeto = {
    metodo() {
        return "método abreviado";
    }
};
```

## 7. Objetos y Propiedades
### 7.1 Creación de Objetos
```javascript
// Literal de objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};

// Constructor Object
let obj = new Object();
obj.propiedad = "valor";

// Object.create()
let prototipo = {metodo: function() {}};
let objeto = Object.create(prototipo);

// Factory function
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        saludar() { return `Hola, soy ${this.nombre}`; }
    };
}
```

### 7.2 Acceso a Propiedades

```javascript
let obj = {propiedad: "valor", "clave-especial": 123};

// Notación punto
obj.propiedad;

// Notación corchetes
obj["propiedad"];
obj["clave-especial"];

// Propiedades dinámicas
let clave = "propiedad";
obj[clave];

// Optional chaining (ES2020+)
obj?.propiedad?.subPropiedad;
```

### 7.3 Métodos de Objeto

```javascript
// Definir propiedades
Object.defineProperty(obj, 'propiedad', {
    value: 'valor',
    writable: true,
    enumerable: true,
    configurable: true
});

// Obtener descriptores
Object.getOwnPropertyDescriptor(obj, 'propiedad');

// Claves y valores
Object.keys(obj);       // Array de claves
Object.values(obj);     // Array de valores (ES2017+)
Object.entries(obj);    // Array de [clave, valor] (ES2017+)

// Asignación
Object.assign(destino, fuente1, fuente2);

// Freeze, seal, prevent extensions
Object.freeze(obj);
Object.seal(obj);
Object.preventExtensions(obj);
```

## 8. Arrays
### 8.1 Creación y Acceso
```javascript
// Literal
let arr = [1, 2, 3];

// Constructor
let arr2 = new Array(5); // Array vacío de longitud 5
let arr3 = new Array(1, 2, 3); // [1, 2, 3]

// Array.from() (ES6+)
let arrFromString = Array.from("hello"); // ['h','e','l','l','o']

// Array.of() (ES6+)
let arrOf = Array.of(1, 2, 3); // [1, 2, 3]

// Acceso
arr[0]; // primer elemento
arr[arr.length - 1]; // último elemento
```
### 8.2 Métodos de Array

```javascript
let arr = [1, 2, 3, 4, 5];

// Mutadores (modifican el array original)
arr.push(6);        // Agregar al final
arr.pop();          // Quitar del final
arr.unshift(0);     // Agregar al inicio
arr.shift();        // Quitar del inicio
arr.splice(1, 2, 'a', 'b'); // Eliminar/insertar elementos
arr.sort();         // Ordenar
arr.reverse();      // Invertir

// No mutadores (retornan nuevo array)
arr.concat([6, 7]); // Concatenar
arr.slice(1, 3);    // Extraer porción
arr.join(', ');     // Unir como string

// Iteración (ES5+)
arr.forEach(item => console.log(item));
arr.map(x => x * 2);
arr.filter(x => x > 2);
arr.reduce((acc, curr) => acc + curr, 0);
arr.find(x => x > 3);
arr.findIndex(x => x > 3);
arr.some(x => x > 3);
arr.every(x => x > 0);

// ES6+
arr.includes(3);
arr.fill(0, 1, 3); // Llenar con valor
arr.copyWithin(0, 3, 4); // Copiar elementos

// ES2019+
arr.flat();     // Aplanar un nivel
arr.flatMap(x => [x, x * 2]);

// ES2022+
arr.at(-1);     // Acceso con índices negativos
```

## 9. Destructuring (ES6+)
### 9.1 Array Destructuring
```javascript
let [a, b, c] = [1, 2, 3];
let [primero, , tercero] = [1, 2, 3]; // Saltar elementos
let [x, y, ...resto] = [1, 2, 3, 4, 5]; // Rest pattern
let [p = 0, q = 0] = [1]; // Valores por defecto

// Intercambio de variables
[a, b] = [b, a];
```
### 9.2 Object Destructuring

```javascript
let {nombre, edad} = persona;
let {nombre: n, edad: e} = persona; // Renombrar
let {nombre, edad = 18} = persona; // Valor por defecto
let {nombre, ...otrasProps} = persona; // Rest pattern

// Destructuring anidado
let {direccion: {calle, ciudad}} = persona;

// En parámetros de función
function saludar({nombre, edad}) {
    return `Hola ${nombre}, tienes ${edad} años`;
}
```

## 10. Template Literals (ES6+)
```javascript
let nombre = "Juan";
let edad = 30;

// Template literal básico
let saludo = `Hola, soy ${nombre}`;

// Multilínea
let html = `
    <div>
        <h1>${nombre}</h1>
        <p>Edad: ${edad}</p>
    </div>
`;

// Expresiones complejas
let mensaje = `El año que viene tendré ${edad + 1} años`;

// Tagged template literals
function highlight(strings, ...values) {
    return strings.map((str, i) => 
        str + (values[i] ? `<mark>${values[i]}</mark>` : '')
    ).join('');
}

let resaltado = highlight`Su nombre es ${nombre} y tiene ${edad} años`;
```

## 11. Spread y Rest Operators (ES6+)
### 11.1 Spread Operator
```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
let copia = [...arr1]; // Copia superficial

// Objetos (ES2018+)
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3}; // {a: 1, b: 2, c: 3}

// Función
function suma(a, b, c) { return a + b + c; }
suma(...arr1); // Equivale a suma(1, 2, 3)
```

### 11.2 Rest Operator
```javascript
// En parámetros
function miFuncion(primero, ...resto) {
    console.log(resto); // Array con el resto de argumentos
}

// En destructuring
let [primero, ...otros] = [1, 2, 3, 4];
let {a, ...otrasProps} = {a: 1, b: 2, c: 3};
```

## 12. Clases (ES6+)

```javascript
class Persona {
    // Constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Método de instancia
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
    
    // Getter
    get informacion() {
        return `${this.nombre}, ${this.edad} años`;
    }
    
    // Setter
    set nuevaEdad(edad) {
        if (edad > 0) this.edad = edad;
    }
    
    // Método estático
    static especie() {
        return "Homo sapiens";
    }
    
    // Campo privado (ES2022+)
    #secreto = "valor privado";
    
    // Método privado (ES2022+)
    #metodoPrivado() {
        return this.#secreto;
    }
}

// Herencia
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad); // Llamar al constructor padre
        this.grado = grado;
    }
    
    // Override
    saludar() {
        return `${super.saludar()}, estoy en ${this.grado}`;
    }
}

// Instanciación
let persona = new Persona("Ana", 25);
let estudiante = new Estudiante("Luis", 20, "Universidad");
```

## 13. Módulos (ES6+)
### 13.1 Export

```javascript
// Named exports
export const PI = 3.14159;
export function saludar(nombre) {
    return `Hola ${nombre}`;
}

export class MiClase {
    constructor() {}
}

// Export al final
const variable = "valor";
function funcion() {}
export {variable, funcion};

// Export con alias
export {variable as miVariable, funcion as miFuncion};

// Default export
export default function() {
    return "Función por defecto";
}

// Re-export
export {algo} from './otro-modulo.js';
export * from './otro-modulo.js';
```

### 13.2 Import
```javascript
// Named imports
import {PI, saludar, MiClase} from './modulo.js';

// Import con alias
import {saludar as saludo} from './modulo.js';

// Import todo
import * as modulo from './modulo.js';

// Default import
import funcionDefault from './modulo.js';

// Import mixto
import funcionDefault, {PI, saludar} from './modulo.js';

// Dynamic import (ES2020+)
const modulo = await import('./modulo.js');
```

## 14. Asincronía
### 14.1 Promises (ES6+)

```javascript
// Crear Promise
let promesa = new Promise((resolve, reject) => {
    // Operación asíncrona
    if (exito) {
        resolve("Resultado exitoso");
    } else {
        reject("Error");
    }
});

// Consumir Promise
promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error))
    .finally(() => console.log("Siempre se ejecuta"));

// Promise.all (todas deben resolverse)
Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => console.log(resultados));

// Promise.allSettled (ES2020+)
Promise.allSettled([promesa1, promesa2])
    .then(resultados => console.log(resultados));

// Promise.race (la primera que se resuelve)
Promise.race([promesa1, promesa2])
    .then(resultado => console.log(resultado));
```

### 14.2 Async/Await (ES2017+)

```javascript
// Función async
async function miFuncionAsincrona() {
    try {
        let resultado = await promesa;
        let otroResultado = await otraPromesa;
        return resultado + otroResultado;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// Arrow function async
const funcionFlecha = async () => {
    return await promesa;
};

// Await en loops
async function procesarArray(items) {
    // Secuencial
    for (let item of items) {
        await procesar(item);
    }
    
    // Paralelo
    let resultados = await Promise.all(
        items.map(item => procesar(item))
    );
}

// Top-level await (ES2022+)
let datos = await fetch('/api/datos');
```

## 15. Manejo de Errores

```javascript
// try-catch-finally
try {
    // Código que puede fallar
    let resultado = operacionRiesgosa();
} catch (error) {
    // Manejo del error
    if (error instanceof TypeError) {
        console.log("Error de tipo");
    } else if (error instanceof ReferenceError) {
        console.log("Error de referencia");
    } else {
        console.log("Error desconocido:", error.message);
    }
} finally {
    // Siempre se ejecuta
    limpiar();
}

// Lanzar errores
throw new Error("Mensaje de error");
throw new TypeError("Tipo incorrecto");

// Error personalizado
class MiError extends Error {
    constructor(message) {
        super(message);
        this.name = "MiError";
    }
}

throw new MiError("Error personalizado");

// Error handling con Promises
promesa.catch(error => {
    console.error("Error en promesa:", error);
});

// Error handling con async/await
async function conManejo() {
    try {
        await operacionAsincrona();
    } catch (error) {
        console.error("Error async:", error);
    }
}
```
## 16. Expresiones Regulares

```javascript
// Sintaxis literal
let regex = /patron/flags;

// Constructor
let regex2 = new RegExp('patron', 'flags');

// Flags comunes
let caseSensitive = /patron/;      // Sin flags
let caseInsensitive = /patron/i;   // i = ignore case
let global = /patron/g;            // g = global (todas las coincidencias)
let multiline = /patron/m;         // m = multiline
let sticky = /patron/y;            // y = sticky (ES6+)
let unicode = /patron/u;           // u = unicode (ES6+)
let dotAll = /patron/s;            // s = dotAll (ES2018+)

// Métodos
let texto = "Hola mundo";
regex.test(texto);          // boolean
regex.exec(texto);          // array o null
texto.match(regex);         // array o null
texto.search(regex);        // índice o -1
texto.replace(regex, 'nuevo'); // string
texto.split(regex);         // array

// Grupos de captura
let emailRegex = /(\w+)@(\w+\.\w+)/;
let match = "user@domain.com".match(emailRegex);
// match[0] = "user@domain.com"
// match[1] = "user"
// match[2] = "domain.com"

// Named capture groups (ES2018+)
let namedRegex = /(?<usuario>\w+)@(?<dominio>\w+\.\w+)/;
let namedMatch = "user@domain.com".match(namedRegex);
// namedMatch.groups.usuario = "user"
// namedMatch.groups.dominio = "domain.com"
```

17. JSON (Java Script Object Notation)

```javascript
// Objeto a JSON string
let objeto = {nombre: "Juan", edad: 30};
let jsonString = JSON.stringify(objeto);

// JSON string a objeto
let objetoRecuperado = JSON.parse(jsonString);

// Opciones avanzadas de stringify
JSON.stringify(objeto, null, 2); // Indentación de 2 espacios

// Replacer function
JSON.stringify(objeto, (key, value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
});

// Reviver function en parse
JSON.parse(jsonString, (key, value) => {
    if (key === 'fecha') {
        return new Date(value);
    }
    return value;
});

// Método toJSON personalizado
let objConToJSON = {
    nombre: "Juan",
    secreto: "no debería aparecer",
    toJSON() {
        return {nombre: this.nombre};
    }
};
```
