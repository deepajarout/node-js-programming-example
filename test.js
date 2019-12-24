//Assertion Testing

var assert = require('assert');

function add (a, b) {  
  return a + b;  
}  
var expected = add(5,2);  
assert( expected === 7, 'one plus two is three');  