class Timer {
  constructor(durationInput, startBtn, pauseBtn, callback) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callback) {
      this.onStart = callback.onStart;
      this.onTick = callback.onTick;
      this.onCompleted = callback.onCompleted;
    }

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    this.onStart(this.timeRemaining);
    this.tick();
    this.intervalId = setInterval(this.tick, 50);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.onCompleted();
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      this.onTick(this.timeRemaining);
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
  pause = () => {
    clearInterval(this.intervalId);
  };
  onDurationChange = () => {};
}
