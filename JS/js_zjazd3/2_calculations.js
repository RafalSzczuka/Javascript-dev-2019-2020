// TASK 2: Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y) and a function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a calculate() function that makes calculation and returns its value. 

const add = function(x,y){
    return x + y;
}
const subtract = function(x,y){
    return x - y;
}
const multiply = function(x,y){
    return x * y;
}
const divide = function(x,y){
    return x / y;
}

const calculator = (function(){
    let x, y, operator;
    return {
        setOperation: function(setX, setY, setOperator){
            x = setX;
            y = setY;
            operator = setOperator;
        },
        calculate: function() {
            return `Calculation result: ${operator(x,y)}`;
        }
    }
})();

calculator.setOperation(5,2,multiply);
console.log(calculator.calculate())