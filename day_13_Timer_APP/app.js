const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("#circle");

const circleParam = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", circleParam);

let starting_time;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(total_time) {
    starting_time = total_time;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (circleParam * timeRemaining) / starting_time - circleParam
    );

    console.log("tick tack");
  },
});
