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
