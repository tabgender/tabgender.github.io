//time
var time = document.getElementById("time");
var date = document.getElementById("date");
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

function update(time, date) {
  const d = new Date();

  if (d.getHours() > 12) {
    time.textContent = (d.getHours() - 12) + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " pm";
  } else if (d.getHours() == 12) {
    time.textContent = 12 + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " pm";
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

//choose what category of theme selector to engage
function selectThisThemeCategory(category) {
  document.getElementById("selected-theme-category").removeAttribute("id");
  category.setAttribute("id", "selected-theme-category");
}

//choose what color to select
root = document.documentElement;

function selectThisColorOption(option) {
  document.getElementsByClassName("selected-color-option")[0].classList.remove("selected-color-option");
  option.classList.add("selected-color-option");

  switch (option.id) {
    case "red-color-option":
      root.style.setProperty("--bg-color-top-left", "rgb(226, 131, 131)");
      root.style.setProperty("--bg-color-bottom-right", "rgb(151, 15, 15)");

      root.style.setProperty("--dark-color-0", "rgb(109, 3, 3)");
      root.style.setProperty("--dark-color-1", "rgb(245, 90, 90)");
      root.style.setProperty("--dark-color-2", "rgb(207, 83, 83)");
      root.style.setProperty("--dark-color-3", "rgb(248, 177, 177)");

      root.style.setProperty("--light-color", "rgb(252, 237, 237)");

      break;

    case "orange-color-option":
      root.style.setProperty("--bg-color-top-left", "rgb(227, 183, 131)");
      root.style.setProperty("--bg-color-bottom-right", "rgb(255, 140, 0)");

      root.style.setProperty("--dark-color-0", "rgb(212, 121, 10)");
      root.style.setProperty("--dark-color-1", "rgb(255, 187, 103)");
      root.style.setProperty("--dark-color-2", "rgb(255, 157, 37)");
      root.style.setProperty("--dark-color-3", "rgb(255, 191, 112)");

      root.style.setProperty("--light-color", "rgb(252, 237, 237)");

      option
      break;

    case "yellow":

      break;

    case "green-color-option":
      root.style.setProperty("--bg-color-top-left", "rgb(163, 250, 146)");
      root.style.setProperty("--bg-color-bottom-right", "rgb(10, 100, 2)");

      root.style.setProperty("--dark-color-0", "rgb(12, 87, 16)");
      root.style.setProperty("--dark-color-1", "rgb(77, 214, 64)");
      root.style.setProperty("--dark-color-2", "rgb(87, 128, 89)");
      root.style.setProperty("--dark-color-3", "rgb(177, 184, 248)");

      root.style.setProperty("--light-color", "rgb(239, 255, 239)");
      break;

    case "blue-color-option":
      root.style.setProperty("--bg-color-top-left", "rgb(146, 162, 250)");
      root.style.setProperty("--bg-color-bottom-right", "rgb(0, 0, 136)");

      root.style.setProperty("--dark-color-0", "rgb(5, 3, 109)");
      root.style.setProperty("--dark-color-1", "rgb(108, 106, 245)");
      root.style.setProperty("--dark-color-2", "rgb(75, 64, 230)");
      root.style.setProperty("--dark-color-3", "rgb(177, 184, 248)");

      root.style.setProperty("--light-color", "rgb(239, 249, 255)");
      break;

    case "purple-color-option":
      root.style.setProperty("--bg-color-top-left", "rgb(211, 179, 236)");
      root.style.setProperty("--bg-color-bottom-right", "rgb(80, 0, 145)");

      root.style.setProperty("--dark-color-0", "rgb(78, 9, 124)");
      root.style.setProperty("--dark-color-1", "rgb(182, 74, 253)");
      root.style.setProperty("--dark-color-2", "rgb(192, 149, 228)");
      root.style.setProperty("--dark-color-3", "rgb(216, 177, 248)");

      root.style.setProperty("--light-color", "rgb(252, 237, 242)");
      break;
  }

}

//mouse handling
window.onclick = function (event) {
  if (!event.target.matches(".options-button")) {
    optionsPage.style.display = "none";
    if (options.hasAttribute("id")) {
      options.removeAttribute("id");
    }
  }

  if (timer <= 0 && themeSelector.style.visibility === "visible" && !event.target.matches("#theme-selector") && !event.target.matches("#theme-selector-categories") && !event.target.matches("#color-selector") && !event.target.matches(".theme-selector-category") && !event.target.matches(".color-option")) {
    closeThemeSelector();
  }
}