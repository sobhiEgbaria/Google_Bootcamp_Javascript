const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#m-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#input-form").classList.remove("hide");

  const message_input = document.querySelector("#message-input");
  const link_input = document.querySelector("#link-input");
  const enc_message = btoa(message_input.value);
  link_input.value = `${window.location}#${enc_message}`;
  link_input.select();
});
