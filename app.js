// Learning Template Literal or / Template String  es5

const nome = 'John';
const age = 30;
const job = 'web Developer';
const city = 'Luanda';

let html;

html = '<ul><li>Nome: '+ nome +'</li><li>Idade: '+age+'</li><li>Trabalho: '+job+'</li><li>Cidade: '+city+'</li></ul>';

html = '<h1> Template Literal (ES5)</h1>'+ 
      '<ul>'+
      '<li>Nome: '+ nome +'</li>'+
      '<li>Idade: '+age+'</li>'+
      '<li>Trabalho: '+job+'</li>'+
      '<li>Cidade: '+city+'</li>'+
      '</ul>';

      function Hello() {
          return 'hello word';
      }

      html += `
      <h1>Template String / Literal (ES6)</h1> 
      <ul>
      <li>Nome: ${nome}</li>
      <li>Idade: ${age}</li>
      <li>Trabalho: ${job}</li>
      <li>Cidade: ${city}</li>
      <li>${Hello()}</li>
      <li>${age>20 ? 'kota': ' Puto'}</li>
      </ul>
      `;    

document.body.innerHTML=html;

