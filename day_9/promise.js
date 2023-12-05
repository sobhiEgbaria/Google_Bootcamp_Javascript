const promise = fetch("https://jsonplaceholder.typicode.com/comments");

const res_jason = promise.then((res) => {
  return res.json();
});

const data2 = res_jason.then((data) => {
  // return data;
  console.log(data);
});

// console.log(data2);
