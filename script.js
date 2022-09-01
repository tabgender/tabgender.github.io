class DigitalClock {
  
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";

    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-ampm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12
    };
  }
}

class ColorChange {

  constructor(element) {
    this.element = element;
    this.currentColor = [0, 0, 0];
    this.targetColor = [255, 255, 255];
    this.blend = 0;
  }

  start() {
    this.update();

    setInterval(() => {this.update();}, 0);
    
  }

update() {

  if(this.blend >= 0.6) {
    this.targetColor[0] = Math.random()*255;
    this.targetColor[1] = Math.random()*255;
    this.targetColor[2] = Math.random()*255;

    this.blend = 0;
  }

  this.currentColor[0] = (1-this.blend)*this.currentColor[0] + this.blend*this.targetColor[0];
  this.currentColor[1] = (1-this.blend)*this.currentColor[1] + this.blend*this.targetColor[1];
  this.currentColor[2] = (1-this.blend)*this.currentColor[2] + this.blend*this.targetColor[2];

  this.blend += 0.001;

  this.element.style.setProperty('--a-color', "rgb(" + Math.floor(this.currentColor[0]) +"," + Math.floor(this.currentColor[1]) + "," + Math.floor(this.currentColor[2]) + ")")    
  }  
}




const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

const colorChange = new ColorChange(clockElement);
colorChange.start();

clockObject.start();




const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})



