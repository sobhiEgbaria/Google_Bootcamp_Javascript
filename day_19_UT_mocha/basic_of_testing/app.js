module.exports = {
  myForEtch(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i], i);
    }
  },

  myMap(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let res = func(arr[i], i);
      newArr.push(res);
    }
    return newArr;
  },
};
