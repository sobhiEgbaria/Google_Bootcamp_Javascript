// using fetch

// api : (( https://jsonplaceholder.typicode.com/todos/ ))

const res = fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => {
    res.json().then((tasks) => {
      console.log(tasks);
    });
  })
  .catch((err) => {
    console.log("error happened");
    console.log(err);
  });
