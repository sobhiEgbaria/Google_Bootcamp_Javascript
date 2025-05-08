it("show autocomplete input", () => {
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        { Title: "titanic2" },
        { Title: "titanic3" },
        { Title: "titanic2" },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
  const dropdown = document.querySelector9(".dropdown");
  expect(dropdown.className).not.to.include("is-active");
});

// {
//     renderOption, onOptionSelect, inputValue, ;
// }
