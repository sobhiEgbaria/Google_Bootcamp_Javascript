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

// render function that change the "up mole" location every time we call it.
// we will call this function with setInterval every 0.5 sec.

const render_page = (holes_list) => {
  holes_list[index].className = "hole";
  index = Math.floor(Math.random() * 5);
  holes_list[index].className = "hole up";
};

// game over function will stop every eventListener,
// and Returns the first look of the moles.
const game_over = () => {
  lawn.removeEventListener("click", hit, false);
  time.innerHTML = "---";
  hole_start.className = "hole start";
  hole_up.className = "hole up";
  hole_sad.className = "hole sad";
  hole_hit.className = "hole hit";
  hole.className = "hole";
};

`
// the start eventListener, contain all the functional of the game.

`;
hole_start.addEventListener("click", () => {
  // set every hole as an empty hole
  // start the time in 30 sec
  hole_start.className = "hole";
  hole_up.className = "hole";
  hole_sad.className = "hole";
  hole_hit.className = "hole";
  hole.className = "hole";
  time.innerHTML = "30";

  // the timer function, 30 sec,
  //and when the function end they call a game over function
  setInterval(() => {
    if (timer != 0) {
      time.innerHTML = `${parseInt(time.innerText) - 1}`;
      timer--;
    } else {
      game_over();
      clearInterval();
    }
  }, 1000);

  // the render timer. that call render_page function every 0.5 sec
  setInterval(() => {
    if (timer != 0) {
      render_page(holes_list);
    } else {
      clearInterval();
    }
  }, 500);

  // the main listener, listen to all the holes.
  //and change the mole reaction with every click according to the hit
  // hit mole up --> sad reaction,
  //hit empty hole --> funny reaction
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
