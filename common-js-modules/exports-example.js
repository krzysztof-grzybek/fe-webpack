function firstFunction() { console.log('first'); }
function secondFunction() { console.log('second'); }

const MY_CONSTANT = 10;
module.exports = {
    firstFunction,
    secondFunction
}
module.exports.additionalConstant = MY_CONSTANT