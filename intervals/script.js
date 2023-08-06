// Get references to the message and time elements
const messageElement = document.getElementById("message");
const timeElement = document.getElementById("time");

// Track the time spent on the page
let seconds = 0;
const updateTime = () => {
  seconds++;
  timeElement.textContent = seconds;
};

// Update the time every second
setInterval(updateTime, 1000);
