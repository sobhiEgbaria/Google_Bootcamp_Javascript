const hole1 = document.getElementById("1");
const hole2 = document.getElementById("2");
const hole3 = document.getElementById("3");
const hole4 = document.getElementById("4");
const hole5 = document.getElementById("5");
const lawn = document.getElementById("lawn");
const score = document.getElementById("score");
const time = document.getElementById("time");

const elements_id = [hole1, hole2, hole3, hole4, hole5];
let counter = 30;
const time_counter = () => {
  time.innerHTML = `${parseInt(time.innerText) - 1}`;
  counter--;
};

setInterval(() => {
  if (counter != 0) {
    time_counter();
  } else {
    clearInterval();
  }
}, 1000);

const render_page = (elements_id) => {
  id = Math.floor(Math.random() * 5);

  elements_id[id].className = "hole up";

  setTimeout(() => {
    elements_id[id].className = "hole";
  }, 1500);
};

lawn.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className == "hole up") {
    e.target.className = "hole sad";
    score.innerHTML = `${parseInt(score.innerText) + 10}`;
  }
});

setInterval(() => {
  render_page(elements_id);
}, 900);
