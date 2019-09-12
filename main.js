const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");
const lapsButton = document.querySelector(".laps-button")
const startTime = document.querySelector(".time");
const lapsTime = document.querySelector("ol");
const stopwatchButton = document.querySelector(".stopwatch-button");
const timerButton = document.querySelector(".timer-button");


let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");
let mils = document.querySelector(".mil");

let run;
let interval = false;

const displayStartTime = () => {
  if (interval === false) {
    run = setInterval(function () {
      mils.innerHTML++;
      if (mils.innerHTML == 100) {
        mils.innerHTML = 0;
        secs.innerHTML++
      };
      if (secs.innerHTML == 60) {
        secs.innerHTML = 0;
        mins.innerHTML++
      };
      if (mils.innerHTML.length == 1) mils.innerHTML = `0${mils.innerHTML}`
      if (secs.innerHTML.length == 1) secs.innerHTML = `0${secs.innerHTML}`
      if (mins.innerHTML.length == 1) mins.innerHTML = `0${mins.innerHTML}`
    }, 10)
  }
  interval = true;
}

const addLap = () => {
  lapsTime.innerHTML += `<li>${mins.innerHTML}:${secs.innerHTML}:${mils.innerHTML}</li>`
}

const displayStopTime = () => {
  clearInterval(run);
  interval = false
}

const resetTime = () => {
  if (interval === false) {
    mins.innerHTML = "00";
    secs.innerHTML = "00";
    mils.innerHTML = "00";
    lapsTime.innerHTML = null
  }
}

const showStopWatch = () => {
  document.querySelector(".stopwatch").classList.remove("hidden");
  document.querySelector(".timer").classList.add("hidden")
}

const showTimer = () => {
  document.querySelector(".stopwatch").classList.add("hidden");
  document.querySelector(".timer").classList.remove("hidden")
}

startButton.addEventListener("click", displayStartTime);
stopButton.addEventListener("click", displayStopTime);
resetButton.addEventListener("click", resetTime);
lapsButton.addEventListener("click", addLap);
timerButton.addEventListener("click", showTimer);
stopwatchButton.addEventListener("click", showStopWatch)