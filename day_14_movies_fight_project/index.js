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

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");

    option.classList.add("dropdown-item");
    option.innerHTML = `
      <img src="${movie.Poster}" />
      ${movie.Title}
    `;
    resultsWrapper.appendChild(option);
    console.log(movie.Title);
  }
};
input.addEventListener("click", debounce(onInput, 1000));
