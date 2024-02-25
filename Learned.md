// LEARNIGN DATES 

let val;
const today = new Date();
//val = String(today);
let aniv = new Date('8-28-1992 11:25:00');

aniv = new Date('August 20 1992');
aniv = new Date('9/10/1981');
val = aniv;

val = today.getMonth();
val = today.getDate();

// aqui retorna os dias em 0- domin, 1- segunda ... 
val = today.getDay(); 

val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

 // retorna o data em timestamp or miliseconds
 // posso usar ele como ID bases
//val = today.getTime();

let an = aniv.setMonth(2);
an = aniv.setDate(12);

an = aniv.getFullYear(1992);
an = aniv.setHours(23); 
an = aniv.setMinutes(30);
an = aniv.setSeconds(59);
an = aniv.setMilliseconds(55);
console.log(an);


// TRABALHANDO COM FUNCTIONS EM JS

let val;
// functions declarations 
function greet(firstName = 'BTS', lastName = 'Band'){
  return `Your name is ${firstName} ${lastName}`;
}

val = greet('adilson','Smith');

// functions expression 
const squareValues = function (n) {
  return Math.pow(n,2);
}

val = squareValues(8);

// IIFES - IMEDIATILY INVOKE FUNCT EXPRSSION 
// elas funcionam como metodos do algoritmos pois nao retorna nada.

(function(){

})();


(function(){
  console.log(' testando IIFES sem argumentos');
})();

(function(pais = 'Angola'){
      console.log(`O pais chama-se ${pais}`);
})('Brazil')

console.clear();

const todo = {
  add: function(){
      console.log(' ADD crud');
  },
  edit: function(id = null){
      console.log(`Edit ID values ${id}`);
  }
}

val = todo.add();
val = todo.edit(23);

todo.delete = function (){
    console.log('Delete element CRUD');
};

val = todo.delete();

console.log(val);
console.log(todo);