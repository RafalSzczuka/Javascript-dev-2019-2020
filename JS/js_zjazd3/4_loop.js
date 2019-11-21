// TASK 4: Given an array of objects, for each object call operation() function in context of next object. If object is last, got back to start of the array for operation function. In loop;

let arr = [
    {x: 1,
    y: ' object one value',
    operation: function() {
        return 'operation one prefix ' + this.x + this.y}
    },
    {x: 2,
    y: ' object two value',
    operation: function() {
        return 'operation two prefix ' + this.x + this.y}
    },
    {x: 3,
    y: ' object three value',
    operation: function() {
        return 'operation three prefix ' + this.x + this.y}
    }
];

for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i].operation.call(arr[(i + 1) % 3]));
};