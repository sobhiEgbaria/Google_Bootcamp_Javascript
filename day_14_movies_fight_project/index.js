// key: e4f0af8b ==> api = "http://www.omdbapi.com/?apikey=e4f0af8b&s=titanic";
const input = document.querySelector("#searchInput");
const container = document.querySelector("#container");

const fetchData = async (term) => {
  const api = "http://www.omdbapi.com/";
  const res = await axios.get(api, {
    params: {
      apikey: "e4f0af8b",
      s: term,
    },
  });
  if (res.data.Error) {
    return [];
  }
  return res.data.Search;
};

input.addEventListener(
  "input",
  Debounce(async (event) => {
    const movies = await fetchData(event.target.value);
    console.log(movies);
    renderMovies(movies);
  })
);

const renderMovies = (movies) => {
  for (let movie of movies) {
    console.log(movie.Title);

    const div = document.createElement("div");
    div.innerHTML = `
     <img src="${movie.Poster}" alt="">
      <h1>${movie.Title}</h1> 
    `;
    container.appendChild(div);
  }
};
