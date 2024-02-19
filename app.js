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