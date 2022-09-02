//time
class Clock {

  constructor(time, date) {
    this.time = time;
    this.date = date;

    this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.monthsOfYear = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  }

  start() {

    this.update();

    setInterval(() => {
      this.update();
    }, 750);
  }

  update() {
    const d = new Date();

    if (d.getHours() > 12) {
      this.time.textContent = (d.getHours() - 12) + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " pm";
    } else {
      this.time.textContent = d.getHours() + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " am";
    }

    this.date.textContent = daysOfWeek[d.getDay()] + ", " + monthsOfYear[d.getMonth()] + " " + d.getDate();
  }

}
console.log(document.getElementById("time"));
const clock = new Clock(document.getElementById("time"), document.getElementById("date"));
clock.start();

function dropInfo() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.oneclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.container('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}