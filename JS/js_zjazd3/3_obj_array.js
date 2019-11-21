// TASK 3: Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 
// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]

let arr = [
    {x: 5, y: 2},
    {x: 9, y: -1},
    {x: 23, y: 123},
    {x: 476, y: 0}
];

let BaseObject = {
    x: 0,
    y: 0,
    sum: function(){
        return this.x + this.y
    }
};

arr.forEach(function(element){
    let sum = BaseObject.sum.bind(element);
    console.log(sum());
});