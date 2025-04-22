// // Here is your key: e4f0af8b

// // Please append it to all of your API requests,

// // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e4f0af8b

// // Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=e61e3907-8f66-4794-9a3b-33c2eb8845ff
// // If you did not make this request, please disregard this email.

// const api = "http://www.omdbapi.com/?apikey=e4f0af8b&s=titanic";

const fetchData = async () => {
  const api = "http://www.omdbapi.com/";
  const res = await axios.get(api, {
    params: {
      apikey: "e4f0af8b",
      s: "casino",
    },
  });
  console.log(res.data.Search);
};

const input = document.querySelector("#searchInput");

input.addEventListener("input", (e) => {
  fetchData();
});
