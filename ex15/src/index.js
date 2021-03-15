function convertToInt(str){
    return parseInt(str, 16);
}

console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezons"));
module.exports = convertToInt;