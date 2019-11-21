// TASK 1: Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

const iife = (function(){
    let value;  // initialize variable - not visible in global scope
    const setValue = function(newValue){
        if (newValue === undefined) {
            console.log("Please, provide a value first.")
        } else {
            return value = newValue
        };
    }
    const showValue = function(){
        if (value === undefined) {
            console.log("'showValue()' function not avaliable. Please use 'setValue(value)' function to set a value first.")
        } else console.log(`Value typeof ${(typeof value).toUpperCase()} provided: ${value}`);
        
    }
    const reverseValue = function(){
        if (value === undefined) {
            console.log("'reverseValue()' function not avaliable. Please use 'setValue(value)' function to set a value first.")
        } else if (typeof value === 'number'){
            value = (value * (-1));
        } else { value = value.split("").reverse().join(""); //builtin methods to revert a string
        }
    }
    return {setValue, showValue, reverseValue} //return object
})();

iife.setValue('kotek');
iife.reverseValue();
iife.showValue();