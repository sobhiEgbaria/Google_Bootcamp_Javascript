const axios = require("axios");

// make request using fetch
// api : (( https://jsonplaceholder.typicode.com/todos/ ))

// const res = fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => {
//     return res.json();
//   })
//   .then((tasks) => {
//     console.log(tasks[0]);
//   })
//   .catch((err) => {
//     console.log("error happened");
//     console.log(err);
//   });
// ========================================================================================
// make request using axios
// api : (( https://jsonplaceholder.typicode.com/todos/ ))
// axios
//   .get("https://jsonplaceholder.typicode1.com/todos/")
//   .then((res) => {
//     console.log(res.data[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//The Async and await
// api : (( https://jsonplaceholder.typicode.com/todos/ ))

async function data() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    console.log(res.data[0]);
  } catch (error) {
    console.log(error.status);
  }
}
data();

// Promise.all to make Parallel Requests
// PARALLEL REQUESTS!
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();
