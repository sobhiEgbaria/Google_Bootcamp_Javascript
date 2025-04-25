const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

// key: e4f0af8b ==> api = "http://www.omdbapi.com/?apikey=e4f0af8b&s=titanic";
