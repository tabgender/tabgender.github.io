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