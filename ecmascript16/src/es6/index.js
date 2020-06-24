
/*
parametros por defecto
*/
/*
Extencion para correr bloques de codigo dentro del editor
code runner
*/

//version tradicional

function newFunction(name, age, country) {
    var name = name || 'shenick';
    var age = age || '24';
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6

function newFunction2(name = 'shenick', age = '24', country = 'MXN') {
    console.log(name, age, country);
}
newFunction('shenya', 22, 'MXN');

// si no le pasos ningun parametro por defecto tomara los que asiganamos en la funcion
newFunction2();

/**
 * Templates literal
 * separan o unen varios elementos
 */

let hello = 'hola';
let world = 'mundo';

//forma tradicional
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
//es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

/*
multilinea
*/

//forma tradicional

let lorem = 'It was popularised in the 1960s with the release of Letraset sheets containing \n'
    + 'Lorem Ipsum passages, and more recently with desktop publishing';
console.log(lorem);

//es6

let lorem2 = `It was popularised in the 1960s with the release of Letraset sheets containing
Lorem Ipsum passages, and more recently with desktop publishing
`;
console.log(lorem2);

/*
destructuracion de elementos
*/

let person = {
    name: 'shenick',
    age: 24,
    country: 'MXN'
}

//forma tradicional
console.log(person.name, person.age, person.country);

//es6

let { name, age, country } = person;
//de esta forma extraemos los elementos que deseamos
console.log(name, age, country);

/*
operador de propagacion permite expandir varios elementos
*/

let team1 = ['alan', 'jorge', 'benardo'];
let team2 = ['shenick', 'sinuhe', 'alvixe'];

let fullStack = ['arturo', ...team1, ...team2];
//el operador spread ... permite juntar elementos de arrays
console.log(fullStack);

/*
    variables
    scope bloque de codigo que se hara el llamado
*/
{
    var globalVar = 'Global Var';
    // guardado de manera global
}

{
    let globalLet = 'Global let';
    //guarado dentro de este scope
    console.log(globalLet);
}

console.log(globalVar);
//como esta fuera de su scope no es accesible y es undefined
//console.log(globalLet);

/**
 * const 
 */

const a = 'b';
console.log(a);

// a= 'a';
// console.log(a);
//las constante son valores que no pueden ser reasignadas

/**
 * creacion de objetos
 */
let name2 = 'shenick';
let age2 = 24;

//forma tradicional
obj = {
    name: name,
    age: age
};
console.log(obj)

//es6
obj2 = {
    name,
    age
};
console.log(obj2)
//la llave valor pasa directamente ya que la toma de las variables creadas

/**
 * funciones flecha
 * this no vinculable
 */

const names = [
    { name: 'shenick', age: 24 },
    { name: 'patricia', age: 23 }
]
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
console.log(listOfNames)

let listOfNames2 = names.map(element => {
    console.log(element.name)
})
console.log(listOfNames2)

//segunda forma const si se pasan varios parametros
const listOfNames3 = (name, age, country) => {
    //...
}

//tercera forma si se pasa uno solo
const listOfNames4 = name => {
    //...
}

//cuarta forma obtine un parametro se hace la accion y la retorna
const square = num => num * num;

/**
 * promesas
 * valores que pueden estar o no en funcion de cierta logica
 */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (!!false) {
            resolve('Hey')
        } else {
            reject('ups')
        }
    })
}
helloPromise().then((response) => console.log(response))
    .catch(err => console.log(err))

class Calculator {
    //inicialiar la clase scope global
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2))

// modulos se pueden crear archivos con logicas separadas y despues mandarse a llamar en otroa lados
const hello2 = require('./module') // como se trabaja con node la importancion es con modulos require
hello2()

/*
generators es una funcion especial que retorna una serie de valores segun un algoritmo
yield guarda un estado interno donde se quedo y asi sucesivamente
*/

function* helloWorld(){
    if (true) {
        yield 'Hello, ' //guarda este estado por cada paso
    }
    if(true) {
        yield 'world'
    }
}
const generatorHello =  helloWorld()
//imprime el primer valor
console.log(generatorHello.next().value)
//imprime el segundo valor
console.log(generatorHello.next().value)
//imprime el tercer valor 
console.log(generatorHello.next().value)