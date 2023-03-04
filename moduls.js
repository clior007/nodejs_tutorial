
const sum = (num1, num2) => num1+num2;
const PI = 3.14;
class SomeMAthObject{
    constructor() {
        console.log('object created');
    }
}

function varLetScope(){
    var x = 2;
    console.log('var x = %d', x)

    if (x == 2){
        let x = 3
        console.log('let x = %d', x)
    }

    console.log('var x = %d', x)
}

module.exports = {sum : sum, PI : PI, SomeMAthObject : SomeMAthObject, varLetScope : varLetScope};