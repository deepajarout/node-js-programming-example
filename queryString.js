var querystring = require('querystring');  
const obj1=querystring.parse('name=sonoo&company=javatpoint');  
const obj2=querystring.stringify({ name: 'sonoo', company: 'javatpoint' }); 
console.log(obj1);
console.log(obj2);