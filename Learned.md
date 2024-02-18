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

