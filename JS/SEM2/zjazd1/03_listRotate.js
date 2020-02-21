/*
Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
Try solving this without creating a copy of the list.
*/

let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.rotate = function(range) {
  const rangeIndex = this.indexOf(range);

  return this.slice(rangeIndex + 1, this.length).concat(
    this.slice(0, rangeIndex + 1)
  );
};

console.log(arr.rotate(2));
