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

document.querySelector(".checklocal").addEventListener("click", function () {
  // console.log(document.getElementById("covidAt").value);
  // if (document.getElementById("sairme").checked) {
  //   localStorage.removeItem("work_preference");
  //   localStorage.setItem("work_preference", "from_office");
  // } else if (document.getElementById("home").checked) {
  //   localStorage.removeItem("work_preference");
  //   localStorage.setItem("work_preference", "from_home");
  // } else if (document.getElementById("hybrid").checked) {
  //   localStorage.removeItem("work_preference");
  //   localStorage.setItem("work_preference", "hybrid");
  // }
  // if (covidYesRadio.checked) {
  //   localStorage.removeItem("had_covid");
  //   localStorage.setItem("had_covid", true);
  //   localStorage.setItem(
  //     "had_covid_at",
  //     document.getElementById("covidAt").value
  //   );
  // } else if (covidNoRadio.checked) {
  //   // localStorage.removeItem("had_covid");
  //   localStorage.setItem("had_covid", false);
  //   // localStorage.removeItem("had_covid_at");
  //   // localStorage.setItem("had_covid_at", "");
  // }
  // if (vaccineYesRadio.checked) {
  //   localStorage.removeItem("vaccinated");
  //   localStorage.setItem("vaccinated", true);
  //   localStorage.setItem(
  //     "vaccinated_at",
  //     document.getElementById("vaccineAt").value
  //   );
  // } else if (vaccineNoRadio.checked) {
  //   // localStorage.removeItem("vaccinated");
  //   localStorage.setItem("vaccinated", false);
  //   // localStorage.setItem("vaccinated_at", "");
  //   // localStorage.removeItem("vaccinated_at");
  // }
});

console.log("satestoooo");
