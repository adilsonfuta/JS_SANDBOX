console.log('VECT FUNCTS JS');

const array = [12,3,4,56,7,6,8,null];
let soma = 0;
const element = 0;


// crud de um vetor

const crudVetor = {
  create: function (vetor, valor) {
    if(Array.isArray(vetor))
    vetor.push(valor);
  },
  read: function(vetor){
    if(Array.isArray(vetor))
    console.log(vetor);
  },
  update: function(vetor, valor, pos){
    pos = pos - 1;
      const tam = vetor.length;
      if(Array.isArray(vetor) && typeof Number(pos)){
        if( pos >= 0 && pos <= tam){
          vetor[pos] = valor;
        } 
      }
   },
  delete: function(vetor,pos){
    pos = pos - 1;
    if(Array.isArray(vetor) && typeof Number(pos)){
        if(pos >= 0 &&  pos<=vetor.length)
        vetor[pos] = null;

        // vetor.push(vetor[pos]);
        // vetor.pop();

    }
  
}
};
// as funcoes pra manuesar arrays

function ArraysMethods(vetor){
if(Array.isArray(vetor))
for (let i = 0; i < vetor.length; i++) {
  
  if(i !== 4){
    //console.log('Nao chegou no 4');
    soma += vetor[i];
    continue;
  }else{
    //console.log('chegou no 4');
    soma = vetor[i];
    break;
    // nesse caso ele ignora os numeros 6 e 8 
  }
}
return soma;
}

function QtdPares(vetor){
  let qtd = 0;
  if(Array.isArray(vetor)){
    for(let k = 0; k <= vetor.length; k++){
        if(vetor[k] % 2 == 0 )
        qtd++;
    }
  }
  return qtd;
}



// implementacao arrays

( function(){

      console.log(array);
      console.log(ArraysMethods(array));
      console.log(QtdPares(array));

        
      console.log(array);
      crudVetor.update(array,200,8);
      console.log(array);

      console.log(array);
      crudVetor.delete(array,3);
      console.log(array);

      crudVetor.read(array);

      crudVetor.create(array,3000);
      crudVetor.read(array);
})();


