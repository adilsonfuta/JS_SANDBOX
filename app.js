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

val = arranjo.find(function (n) {
  return n<50;
})

function under50(params) {
  return params<3;
}
function over50(params) {
  return params>50;
}
val = arranjo.find(over50);

console.log(val);
//console.log(num);