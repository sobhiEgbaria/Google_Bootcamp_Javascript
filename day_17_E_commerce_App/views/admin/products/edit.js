const layout = require("../layout");
const getErr = (err, prop) => {
  // prop = "Email or password of PasswordConfirmation"
  try {
    return err.mapped()[prop].msg;
  } catch (error) {
    return "";
  }
};
module.exports = ({ product, err }) => {
  return layout({
    content: `
      <form method="POST">
        <input name="title" value="${product.title}" />
        ${getErr(err, "title")}
        <input name="price" value="${product.price}" />
        ${getErr(err, "price")}
        <input name="image" type="file" /> 
        <button>Submit</button>
      </form>
    `,
  });
};
