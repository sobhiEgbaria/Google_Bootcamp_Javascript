const layout = require("../../layout");
const getErr = (err, prop) => {
  // prop = "Email or password of PasswordConfirmation"
  try {
    return err.mapped()[prop].msg;
  } catch (error) {
    return "";
  }
};
module.exports = ({ errors }) => {
  return layout({
    content: `
      <form method="POST">
        <input placeholder="Title" name="title" />
        <input placeholder="Price" name="price" />
        <input type="file" name="image" />
        <button>Submit</button>
      </form>
    `,
  });
};
