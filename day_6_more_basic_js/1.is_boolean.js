const isBoolean = (boolean) => {
  let answer = typeof boolean === "string" ? "yes string" : "no string";

  return answer;
};

console.log(isBoolean("sobhi"));
