const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome')  
                   .digest('hex');  
console.log(hash); 

const cipher = crypto.createCipher('aes192',secret);  
var encrypted = cipher.update('Hello', 'utf8', 'hex');  
encrypted += cipher.final('hex');  
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', secret);  
var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted); 