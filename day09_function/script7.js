function forEach(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function map(callback, arr) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    const x = callback(arr[i]);
    returnArr.push(x);
  }
  return returnArr;
}
