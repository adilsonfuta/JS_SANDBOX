# CONCEITOS 

- LOGS 
-  VAR LET CONST
-  DATA TYPE (PRIMITY AND REFERENCE)
-  TYPE CONVERSIONS NUMBER AND STRINGS
-  MATH AND NUMBER
-  STRINGS OPERATIONS AND FUNCTIONS
-  template Literal
-  Arrays 
-  object Literal


//alert('hello alerts');
//document.querySelector('h1').style.color = 'blue'
// const letra = 'hello jetour 2024'; console.log(letra);
// console.log([1,2,3,4]); console.log({a:1,b:2,c:3});

console.table({a:1,b:2,c:3});
console.error('error on loading');
console.warn('error on loading');
console.clear();

console.time('times calc');
  console.log('count-time');
  console.log('count-time');
  console.log('count-time');
  console.log('count-time');
  console.log('count-time');
  console.log('count-time');
console.timeEnd('times calc');

----------------------

// var let const 

var nome = 'Adilson Futa';
console.log(nome);
nome = 'Futa';
console.log(nome);

var veja;
console.log(veja);
veja = 'ola';
console.log(veja);

// use multi word vars = camel case or underscore

var firstName = 'beto'; // camel case
var first_name = nome; //  underscore
var FirstName = 'quim'; // Pascal case or object
var firstname = 'Pedro';

----------------------

/*
let nome;
nome = 'Adilson Futa';
console.log(nome);
nome = 'Futa';
console.log(nome);
*/

const nome = 'Pedro';
console.log(nome);
 // const nao pode renomeado
 // nome = 'joao'
// const deve ser sempre inicializado
// const test; const test =1112313;

// object usando const 
const person = {
  nome: 'pedro',
  idade : 30
}

console.log(person);
  person.nome = 'Adilson';
  person.idade = 32;
console.log(person);

// usando array com const 
  const numbers = [1,2,3,4,5,6];
console.log(numbers);
  numbers.push(7);
console.log(numbers);


// primitive 

const nome = 'John doe';
const num = 12;
const logic = true;
const car = null;
let test;
//const sym = symbol();

console.log(typeof nome);
console.log(typeof num);
console.log(typeof logic);
console.log(typeof car);
console.log(typeof test);
//console.log(typeof sym);

// REFERNCE TYPE

console.table({a:1});

const hobbies = ['movies','programmers'];
const enderec = {
  cidade: 'Luanda',
  estado: 'LDA'
};

const today =new Date();
console.log(today);


console.log(typeof hobbies);
console.log(typeof enderec);
console.log(typeof today);



// type converions  parseInto

let val; 
// num to string = String or toString 
val = String(5688999);
val = String(4+4);
val = String(true);
val = String(new Date());
val =String([1,2,3,5]);

val =(1992).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

console.clear();
// string to num  = Number or parseInt

val = Number('54');
val = Number(true);
val = Number(null);
val = Number('hellow world')
val = Number([1,2,3,5]);

val = parseInt(100);
val = parseFloat(2000.31);


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

----------------------


const num1 = 1000;
const num2 = 200;
let val;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//val = num1 + num2;
console.clear();

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4));
console.log(Math.ceil(2.7));
console.log(Math.floor(2.8));
console.log(Math.sqrt(49));

console.log(Math.abs(-99));
console.log(Math.pow(6,3));
console.log(Math.min(2,3,45,56,7,8,1,-3));
console.log(Math.max(2,3,45,536,7,8,1));
/*
const valores = [2,3,45,56,7,8,1];
console.log(Number(Math.max(valores)));

const valores = [2,3, 45, 56,4,9,0];
const tr = valores.splice(',');
console.log(tr);
console.log(tr.sort());
*/

const valor = 20;
/* 
let result = Math.random()*valor+1
console.log(result.toFixed(2));
*/

console.log(Math.floor(Math.random()*valor+1));

--------  Learning Strings
const firstName = 'Adilson';
const lastName = 'Futa';
const age = 36;
let valor;

valor = firstName + ' '+ lastName;
console.log(valor);

let appendStr = 'Novo';
appendStr += ' Teste';

appendStr = 'Hello, my name is '+firstName+ ' and am '+age;
appendStr = " That 's awesome, i can't wait ";

appendStr = firstName.length;
appendStr = firstName.concat(' ',lastName);
appendStr = appendStr.toUpperCase(appendStr);
appendStr = appendStr.toLowerCase(appendStr);
appendStr = firstName[0];
appendStr = firstName.indexOf('l');
appendStr = firstName.lastIndexOf('l');
appendStr = firstName.charAt('5');
appendStr = firstName.charAt(firstName.length-1);
appendStr = firstName.substring(0,3);
appendStr = firstName.slice(0,5);
appendStr = firstName.slice(-3);

const str = 'Hello my name is Adeler';
appendStr = str.split(' ');
appendStr = str.replace('Adeler','Jack');
appendStr = str.includes('Hello');

console.log(appendStr);

------------------

// Learning Template Literal or / Template String  es5

const nome = 'John';
const age = 30;
const job = 'web Developer';
const city = 'Luanda';

let html;

html = '<ul><li>Nome: '+ nome +'</li><li>Idade: '+age+'</li><li>Trabalho: '+job+'</li><li>Cidade: '+city+'</li></ul>';

html = '<h1> Template Literal (ES5)</h1>'+ 
      '<ul>'+
      '<li>Nome: '+ nome +'</li>'+
      '<li>Idade: '+age+'</li>'+
      '<li>Trabalho: '+job+'</li>'+
      '<li>Cidade: '+city+'</li>'+
      '</ul>';

      function Hello() {
          return 'hello word';
      }

      html += `
      <h1>Template String / Literal (ES6)</h1> 
      <ul>
      <li>Nome: ${nome}</li>
      <li>Idade: ${age}</li>
      <li>Trabalho: ${job}</li>
      <li>Cidade: ${city}</li>
      <li>${Hello()}</li>
      <li>${age>20 ? 'kota': ' Puto'}</li>
      </ul>
      `;    

document.body.innerHTML=html;

--------

const num = [43,47,8,9,12,3,4,6,788];
const vect = new Array(2,3,4,5,88,1);
const frutas = ['apple','banana','orange','pear'];
const mixed = [22,'hello',true,undefined,null,num,{a:1,b:2},new Date()];

let val;

val = Array.isArray(num);
num[3]=100;
val = num[3];
val = num.indexOf(788);
num.push(2000);
num.unshift(100);

num.pop();
num.shift();
//num.splice(1,4);
num.reverse();
val = num.concat(mixed);
val = frutas.sort();
val = num.sort();

val = num.sort(function (a,b) {
  return a-b
})

const arranjo = [43,47,8,9,12,3,4,6,788];
// 1- passar tudo dentro 
val = arranjo.find(function (n) {
  return n<50;
})
// 2- passar separado  
function under50(params) {
  return params<3;
}
function over50(params) {
  return params>50;
}
val = arranjo.find(over50);

console.log(val);
//console.log(num);

-----------------------------------

// Object lITERals
var anoAtual = 2024;

const person = {
  firstName: 'Steve',
  lastName: 'Jonhson',
  age: 32,
  email: 'steve@novadev.ao',
  hobbies: ['music','technology','patins','viagem','explorar'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
   getAniversario : function () {
    //return 2024 - person.age;
    return anoAtual - this.age;
   } 
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person['age']
val = person.hobbies[3];
val = person.address.city;
val = person.address['state'];
val = person['address']['city'];
val = person.getAniversario();

console.log(val);

const people = [
  {
    city: 'Miami',
    state: 'FL'
  },
  {nome: 'Jhon', age: 30},
  {nome: 'PEDRO', age: 32},
  {nome: 'Beto', age: 44},
  {nome: 'Vadinho', age: 50}
 
];

const tam = people.length;
for (let i = 0; i < tam; i++) {
  //const element = people[i].nome;
  console.log(people[i].nome);
}