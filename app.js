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



