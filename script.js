let days = document.getElementsByClassName("days")[0].textContent * 1;
let hours = document.getElementsByClassName("hours")[0].textContent * 1;
let minutes = document.getElementsByClassName("minutes")[0].textContent * 1;
let seconds = document.getElementsByClassName("seconds")[0].textContent * 1;

const interval = setInterval(() => {
  if (seconds > 0) {
    seconds -= 1;
  }

  if (seconds === 0) {
    if (minutes > 0) {
      minutes -= 1;
      seconds = 60;
    } else if (hours > 0) {
      hours -= 1;
      minutes = 59;
      seconds = 60;
    } else if (days > 0) {
      days -= 1;
      hours = 23;
      minutes = 59;
      seconds = 60;
    }
  }
  document.getElementsByClassName("seconds")[0].textContent =
    seconds < 10 && seconds > 0 ? "0" + seconds.toString() : seconds.toString();

  document.getElementsByClassName("minutes")[0].textContent =
    minutes < 10 && minutes > 0 ? "0" + minutes.toString() : minutes.toString();

  document.getElementsByClassName("hours")[0].textContent =
    hours < 10 && hours > 0 ? "0" + hours.toString() : hours.toString();

  document.getElementsByClassName("days")[0].textContent =
    days < 10 && days > 0 ? "0" + days.toString() : days.toString();
}, 1000);

if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
  clearInterval(interval);
}
