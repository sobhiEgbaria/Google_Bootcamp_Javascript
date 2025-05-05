const layout = require("../../layout");

const getErr = (err, prop) => {
  // prop = "Email or password of PasswordConfirmation"
  try {
    return err.mapped()[prop].msg;
  } catch (error) {
    return "";
  }
};

module.exports = ({ err }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Sign Up</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" name = "Email" placeholder="Email" />
                <p class="help is-danger">${getErr(err, "Email")}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" name = "Password" placeholder="Password" type="password" />
                <p class="help is-danger">${getErr(err, "Password")}</p>
              </div>
              <div class="field">
                <label class="label">Password Confirmation</label>
                <input required class="input" name = "PasswordConfirmation" placeholder="Password Confirmation" type="password" />
                <p class="help is-danger">${getErr(
                  err,
                  "PasswordConfirmation"
                )}</p>
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <a href="/signin">Have an account? Sign In</a>
          </div>
        </div>
      </div>
    `,
  });
};
