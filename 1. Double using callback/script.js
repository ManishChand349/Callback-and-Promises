function doubleArray(arr, callback) {
  const doubledArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(callback(arr[i]));
  }
  return doubledArr;
}

const Arrays = [1, 2, 3, 4, 5];
const doubledArray = doubleArray(Arrays, function(num) {
  return num * 2;
});
console.log(doubledArray); 
