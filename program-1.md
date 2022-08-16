# Steamroller

Flatten a nested array. You must account for varying levels of nesting.

* **`steamrollArray([[["a"]], [["b"]]])` should return `["a", "b"]`.**
* **`steamrollArray([1, [2], [3, [[4]]]])` should return `[1, 2, 3, 4]`.**
* **`steamrollArray([1, [], [3, [[4]]]])` should return `[1, 3, 4]`.**
* **`steamrollArray([1, {}, [3, [[4]]]])` should return `[1, {}, 3, 4]`.**
* **Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.**


steamrollArray([1, [2], [3, [[4]]]]);
<!--code-->
function steamrollArray(arr) {
    let flattened = [];
  arr.map(val)=> {
      if(!Array.isArray(val)){
        flattened.push(val);
      }
      else{
        flattened.push(...streamrollArray(val));
      }
  })
  return flattened;
}