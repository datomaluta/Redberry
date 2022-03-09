"use strict";
const covidYesRadio = document.getElementById("covid-yes");
const covidNoRadio = document.getElementById("covid-no");
covidYesRadio.addEventListener("change", function () {
  console.log("კოვიდი მქონდა");
  document.getElementById("last-covid-case").style.display = "block";
});
covidNoRadio.addEventListener("change", function () {
  document.getElementById("last-covid-case").style.display = "none";
});

const vaccineYesRadio = document.getElementById("vaccine-yes");
const vaccineNoRadio = document.getElementById("vaccine-no");

vaccineYesRadio.addEventListener("change", function () {
  document.getElementById("vaccine-div").style.display = "block";
});

vaccineNoRadio.addEventListener("change", function () {
  document.getElementById("vaccine-div").style.display = "none";
});

console.log("satestoooo");
