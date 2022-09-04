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

//options
var optionsPage = document.getElementById("options-page");
var options = document.getElementsByClassName("options-button")[0];

function toggleOptions() {
  if (optionsPage.style.display === "none") {
    optionsPage.style.display = "flex";
    options.setAttribute("id", "options-button-pressed");
  } else {
    optionsPage.style.display = "none";
    if (options.hasAttribute("id")) {
      options.removeAttribute("id");
    }
  }
}

optionsPage.style.display = "none";

//theme-selector
var themeSelector = document.getElementById("theme-selector");
var themeSelectorWrapper = document.getElementById("theme-selector-wrapper");
var timer = 10;

themeSelector.style.visibility = "hidden";

function openThemeSelector() {
  themeSelectorWrapper.style.backdropFilter = "brightness(30%)";
  themeSelector.style.visibility = "visible";
  timer = 10;

  var x = setInterval(
    () => { timer--; if (timer <= 0) { clearInterval(x) } },
    10
  );


}

function closeThemeSelector() {
  themeSelectorWrapper.style.backdropFilter = "none";
  themeSelector.style.visibility = "hidden";
}

//mouse handling
window.onclick = function (event) {
  if (!event.target.matches(".options-button")) {
    optionsPage.style.display = "none";
    if (options.hasAttribute("id")) {
      options.removeAttribute("id");
    }
  }

  if (timer <= 0 && themeSelector.style.visibility === "visible" && !event.target.matches("#theme-selector") && !event.target.matches("theme-selector-categories")) {
    closeThemeSelector();
  }
}