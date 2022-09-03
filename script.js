//time
var time = document.getElementById("time");
var date = document.getElementById("date");
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

function update(time, date) {
  const d = new Date();

  if (d.getHours() > 12) {
    time.textContent = (d.getHours() - 12) + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " pm";
  } else {
    time.textContent = d.getHours() + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " am";
  }

  date.textContent = daysOfWeek[d.getDay()] + ", " + monthsOfYear[d.getMonth()] + " " + d.getDate();
}

update(time, date);

setInterval(update, 750, time, date);

var optionsPage = document.getElementById("options-page");

function toggleOptions() {
  if(optionsPage.style.display==="none") {
    openOptions();
  } else {
    closeOptions();
  }
}

function openOptions() {
  console.log("a");
  optionsPage.style.display = "flex";
}

function closeOptions() {
  optionsPage.style.display = "none";
}


closeOptions();
window.onclick = function (event) {
  if (!event.target.matches("#options")) {
    closeOptions();
  }
}