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


