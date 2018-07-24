

const square= x=>{
return x*x;
}
const sum=(a,b)=>{
    return a+b;
}
const printFullName=(firstName, lastName)=>{
    return firstName +lastName;
}
console.log('i am in module.js');

module.exports={
    square:square,
    sum:sum,
    printFullName:printFullName
}

exports.myDateTime = function () {
    return Date();
};
module.exports.square=square;
module.exports.sum=sum;
module.exports.printFullName=printFullName;

console.log(module.exports)
