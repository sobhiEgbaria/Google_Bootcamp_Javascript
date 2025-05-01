const layout = require("./layout");
module.exports = () => {
  return layout({
    content: `
      <form method="POST">
         <div>
          <input name = "Email" placeholder="Email" />
          <input name = "Password" placeholder="Password" />
           <button>Sign in</button>
        </div>
      </form>
       
      `,
  });
};
