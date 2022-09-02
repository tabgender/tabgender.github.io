class Clock {

  constructor(time, date) {
    this.time = time;
    this.date = date;
  }

  start() {
    this.update();
    const d = new Date();

    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthsOfYear = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    this.date.textContent = daysOfWeek[d.getDay()] + ", " + monthsOfYear[d.getMonth()] + " " + d.getDate();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const d = new Date();

    if (d.getHours() > 12) {
      this.time.textContent = (d.getHours()-12) + ":" + d.getMinutes() + " pm";
    } else {
      this.time.textContent = d.getHours() + ":" + d.getMinutes() + " am";
    }
  }

}
console.log(document.getElementById("time"));
const clock = new Clock(document.getElementById("time"), document.getElementById("date"));
clock.start();

const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  if (searchBar.value && clearIcon.style.visibility != "visible") {
    clearIcon.style.visibility = "visible";
  } else if (!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})

function dropInfo() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.oneclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.container('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }




}