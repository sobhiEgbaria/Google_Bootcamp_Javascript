const hole_start = document.getElementById("1");
const hole_hit = document.getElementById("2");
const hole_sad = document.getElementById("3");
const hole_up = document.getElementById("4");
const hole = document.getElementById("5");
const lawn = document.getElementById("lawn");
const score = document.getElementById("score");
const time = document.getElementById("time");

// the game parameters
const holes_list = [hole, hole_hit, hole_sad, hole_up, hole_start];
let index = 0;
let timer = 30;

const render_page = (holes_list) => {
  holes_list[index].className = "hole";
  index = Math.floor(Math.random() * 5);
  holes_list[index].className = "hole up";
};

const game_over = () => {
  lawn.removeEventListener("click", hit, false);
  time.innerHTML = "---";
  hole_start.className = "hole start";
  hole_up.className = "hole up";
  hole_sad.className = "hole sad";
  hole_hit.className = "hole hit";
  hole.className = "hole";
};

hole_start.addEventListener("click", () => {
  hole_start.className = "hole";
  hole_up.className = "hole";
  hole_sad.className = "hole";
  hole_hit.className = "hole";
  hole.className = "hole";
  time.innerHTML = "30";

  setInterval(() => {
    if (timer != 0) {
      time.innerHTML = `${parseInt(time.innerText) - 1}`;
      timer--;
    } else {
      game_over();
      clearInterval();
    }
  }, 1000);

  setInterval(() => {
    if (timer != 0) {
      render_page(holes_list);
    } else {
      clearInterval();
    }
  }, 500);

  lawn.addEventListener(
    "click",
    (hit = (e) => {
      if (e.target.className == "hole up") {
        e.target.className = "hole sad";
        setTimeout(() => {
          e.target.className = "hole";
        }, 250);
        score.innerHTML = `${parseInt(score.innerText) + 10}`;
      } else if (e.target.className == "hole") {
        holes_list[index].className = "hole hit";
        setTimeout(() => {
          e.target.className = "hole";
        }, 250);
      }
    })
  );
});
