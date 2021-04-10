const exported = require('./exports-example');
const path = require('path');

console.log(path.resolve('./math.js'))

console.log(exported)
exported.firstFunction();
exported.secondFunction();
console.log(exported.additionalConstant)