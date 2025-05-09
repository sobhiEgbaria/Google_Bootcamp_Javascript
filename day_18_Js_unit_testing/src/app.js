const checkNumber = (number) => {
  return number > 0 ? number : 0;
};

const sum = (a, b) => {
  return a + b;
};

const sayHello = (word) => {
  return `hello ${word}`;
};

const array = (firstName, lastName, family, ID) => {
  return [firstName, lastName, family, ID];
};

const Undefined = () => {
  const arg = undefined;
  return arg;
};

const obj = ({ name, id }) => {
  return { name, id };
};

const logIn = (email) => {
  id = 1;
  if (!email) {
    throw new Error("invalid email");
  }
  return { id, email };
};

module.exports = { checkNumber, sayHello, array, Undefined, obj, logIn, sum };
