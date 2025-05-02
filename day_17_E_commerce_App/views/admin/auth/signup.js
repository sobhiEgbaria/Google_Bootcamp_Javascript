const layout = require("./layout");

const getErr = (err, prop) => {
  // prop = "Email or password of PasswordConfirmation"
  try {
    return err.mapped()[prop].msg;
  } catch (error) {
    return "";
  }
};

module.exports = ({ req, err }) => {
  return layout({
    content: `
      ${req.session.userId}
      }
      <form method="POST">
         <div>
          <input name = "Email" placeholder="Email" />
          ${getErr(err, "Email")}
          <input name = "Password" placeholder="Password" />
          ${getErr(err, "Password")}
          <input name = "PasswordConfirmation" placeholder="Password Confirmation" />
          ${getErr(err, "PasswordConfirmation")}
          <button>Sign Up</button>
        </div>
      </form>
      `,
  });
};
