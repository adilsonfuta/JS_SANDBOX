// Learning Template Literal or / Template String  es5

const nome = 'John';
const age = 30;
const job = 'web Developer';
const city = 'Luanda';

let html;

html = '<ul><li>Nome: '+ nome +'</li><li>Idade: '+age+'</li><li>Trabalho: '+job+'</li><li>Cidade: '+city+'</li></ul>';

document.body.innerHTML=html;

