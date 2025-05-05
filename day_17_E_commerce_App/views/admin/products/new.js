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
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Create a Product</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Title</label>
              <input class="input" placeholder="Title" name="title">
              <p class="help is-danger">${getErr(err, "title")}</p>
            </div>
            
            <div class="field">
              <label class="label">Price</label>
              <input class="input" placeholder="Price" name="price">
              <p class="help is-danger">${getErr(err, "price")}</p>
            </div>
            
            <div class="field">
              <label class="label">Image</label>            
              <input type="file" name="image" />
            </div>
            <br />
            <button class="button is-primary">Create</button>
          </form>
        </div>
      </div>
    `,
  });
};
