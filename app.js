
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