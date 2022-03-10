"use strict";

let conta = document.querySelector(".container");
fetch(
  "https://bootcamp-2022.devtest.ge/api/applications?token=23cb3ac6-d45a-4cf7-bf1a-4d782a7f9318",
  {
    method: "GET",
  }
)
  .then((respnse) => respnse.json())
  .then((data) => {
    let counter = 1;
    console.log(data);
    data.forEach((element) => {
      let saidanvmushaob1 = "";
      let saidanvmushaob2 = "";
      let saidanvmushaob3 = "";
      const ofisidan = "From Office";
      const saxlidan = "From Home";
      const hibridruli = "Hybrid";
      if (element.work_preference == "from_office") {
        saidanvmushaob1 = ofisidan.padStart(ofisidan.length + 1, "●");
        saidanvmushaob2 = saxlidan.padStart(saxlidan.length + 1, "○");
        saidanvmushaob3 = hibridruli.padStart(hibridruli.length + 1, "○");
      } else if (element.work_preference == "from_home") {
        saidanvmushaob1 = ofisidan.padStart(ofisidan.length + 1, "○");
        saidanvmushaob2 = saxlidan.padStart(saxlidan.length + 1, "●");
        saidanvmushaob3 = hibridruli.padStart(hibridruli.length + 1, "○");
      } else if (element.work_preference == "hybrid") {
        saidanvmushaob1 = ofisidan.padStart(ofisidan.length + 1, "○");
        saidanvmushaob2 = saxlidan.padStart(saxlidan.length + 1, "○");
        saidanvmushaob3 = hibridruli.padStart(hibridruli.length + 1, "●");
      }
      ///////////////////////////////////////////////////
      ////////////////////////////////////////////////////

      let hadcovidyes = "";
      let hadcovidno = "";
      let positive = "Yes";
      let negative = "No";
      if (element.had_covid == true) {
        hadcovidyes = positive.padStart(positive.length + 1, "●");
        hadcovidno = negative.padStart(negative.length + 1, "○");
      } else if (element.had_covid == false) {
        hadcovidyes = positive.padStart(positive.length + 1, "○");
        hadcovidno = negative.padStart(negative.length + 1, "●");
      }

      //////////////////////////////////////////
      //////////////////////////////////////

      //   console.log(element.had_covid_at);
      let covidDateOnPage = "";
      if (element.had_covid_at === null) {
        covidDateOnPage = "no-date";
      } else {
        covidDateOnPage = element.had_covid_at;
      }

      ///////////////////////////////////////////
      /////////////////////////////////////////

      let hadvaccineyes = "";
      let hadvaccineno = "";
      let positive_vacc = "Yes";
      let negative_vacc = "No";
      if (element.vaccinated == true) {
        hadvaccineyes = positive_vacc.padStart(positive_vacc.length + 1, "●");
        hadvaccineno = negative_vacc.padStart(negative_vacc.length + 1, "○");
      } else if (element.vaccinated == false) {
        hadvaccineyes = positive_vacc.padStart(positive_vacc.length + 1, "○");
        hadvaccineno = negative_vacc.padStart(negative_vacc.length + 1, "●");
      }

      ///////////////////////////////////////
      ////////////////////////////////////////////////////

      let vaccDateOnPage = "";
      if (element.vaccinated_at === null) {
        vaccDateOnPage = "no-date";
      } else {
        vaccDateOnPage = element.vaccinated_at;
      }

      ////////////////////////////////////////////////
      ////////////////////////////////////////////////
      ////////////////////////////////////////////////
      let rowdiv = document.createElement("div");
      // let idskill;
      // let expskill;
      // let divforskill = document.createElement("div");
      // divforskill.setAttribute("class", "row-for-skill");
      // let pforskill = document.createElement("p");
      // let pforexp = document.createElement("p");
      // pforexp.setAttribute("class", "skill-p");
      element.skills.forEach((item) => {
        // let rowdiv = document.createElement("div");
        let idskill;
        let expskill;
        let divforskill = document.createElement("div");
        divforskill.setAttribute("class", "row-for-skill");
        let pforskill = document.createElement("p");
        let pforexp = document.createElement("p");
        pforexp.setAttribute("class", "skill-p");
        idskill = item.id;
        expskill = item.experience;
        if (idskill == 1) {
          pforskill.textContent = "HTML";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 2) {
          pforskill.textContent = "CSS";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 3) {
          pforskill.textContent = "PHP";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 4) {
          pforskill.textContent = "Laravel";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 5) {
          pforskill.textContent = "React.JS";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 6) {
          pforskill.textContent = "Vue.JS";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 7) {
          pforskill.textContent = "Svelte";
          pforexp.textContent = "Years of Experience: " + expskill;
        } else if (idskill == 8) {
          pforskill.textContent = "Angular";
          pforexp.textContent = "Years of Experience: " + expskill;
        }

        // pforid.textContent = "skill id: " + idskill;
        // pforexp.textContent = "experience: " + expskill;

        divforskill.appendChild(pforskill);
        divforskill.appendChild(pforexp);
        rowdiv.appendChild(divforskill);
      });
      // console.log(rowdiv);

      ////////////////////////////////////////////////
      ////////////////////////////////////////////////
      //////////////////////////////////////////////////////

      let devtalkyes = "";
      let devtalkno = "";
      let positivetalk = "Yes";
      let negativetalk = "No";
      if (element.had_covid == true) {
        devtalkyes = positivetalk.padStart(positivetalk.length + 1, "●");
        devtalkno = negativetalk.padStart(negativetalk.length + 1, "○");
      } else if (element.had_covid == false) {
        devtalkyes = positivetalk.padStart(positivetalk.length + 1, "○");
        devtalkno = negativetalk.padStart(negativetalk.length + 1, "●");
      }

      ////////////////////////////////////////////////

      conta.insertAdjacentHTML(
        "afterbegin",
        `      
      <div class="dropdown">
        <button class="dropbtn">Application:  ${counter++}   &downarrow;</button>
        <div class="dropdown-content">
        <div class="personal-information">
        <h3 class="topic">Personal Information</h3>
        <div class="row">
          <p class="pers-p">FirstName</p>
          <p id="firstname">${element.first_name}</p>
        </div>
        <div class="row">
          <p class="pers-p">LastName</p>
          <p>${element.last_name}</p>
        </div>
        <div class="row">
            <p class="pers-p-bottom">E-Mail</p>
            <p>${element.email}</p>
        </div>
        <div class="row">
            <p class="pers-p-bottom">Phone</p>
            <p>${element.phone}</p>
        </div>
      </div>

      <div class="covid-situation">
        <h3 class="topic">Covid Situation</h3>
        <h3>How would you prefer to work?</h3>
        <p class="radios">${saidanvmushaob1}</p>
        <p class="radios">${saidanvmushaob2}</p>
        <p class="radios">${saidanvmushaob3}</p>
        

        <div class="covid-yes-or-no">
          <h3>Did you have covid 19?</h3>
          <p class="radios">${hadcovidyes}</p>
          <p class="radios">${hadcovidno}</p>
        </div>

        <div class="covid-at-date">
          <h3>When did you have covid 19?</h3>
          
          <div class="date-div">
            ${covidDateOnPage}
            <img class="calendar" src="../img/calendar.svg" alt="calendar" />
          </div>
        </div>

        <div class="vaccine-yes-or-no">
          <h3>Have you been vaccinated?</h3>
          <p class="radios">${hadvaccineyes}</p>
          <p class="radios">${hadvaccineno}</p>
        </div>

        <div class="vaccinate-date">
          <h3>When did you get covid vaccine?</h3>
          <div class="date-div">
          ${vaccDateOnPage}
          <img class="calendar" src="../img/calendar.svg" alt="calendar" />
        </div>
        </div>
      </div>

      <div class="skillset">
        <h3 class="topic">Skillset</h3>
        ${rowdiv.innerHTML}
      </div>

      <div class="insights">
        <h3 class="topic">Insights</h3>
        <h3>Would you attend Devtalks and maybe also organize your own?</h3>
        <p class="radios">${devtalkyes}</p>
        <p class="radios">${devtalkno}</p>
        <div class="devtalk">
          <h3>What would you speak about at Devtalk?</h3>
          <div class="devtalk-text-div">
            ${element.devtalk_topic}
          </div>

        </div>
        <div class="special">
          <h3>Tell us somthing special</h3>
          <div class="special-text-div">
            ${element.something_special}
          </div>
        </div>
      </div>
        </div>
        </div>`
      );
    });
    // document.getElementById("firstname").textContent = data[0].first_name;
    // document.getElementById("sub-covid-at-date").value = data[0].had_covid_at;
    const dropbuttons = document.querySelectorAll(".dropbtn");
    const drcontents = document.querySelectorAll(".dropdown-content");
    console.log(dropbuttons);
    dropbuttons.forEach((element) => {
      element.addEventListener("click", function () {
        // console.log(document.querySelector(".dropdown-content"));
        console.log(element);
        console.log(element.nextElementSibling);
        element.nextElementSibling.classList.toggle("show");
        // document.querySelector(".dropdown-content").classList.toggle("show");
        console.log("კლიკი");
      });
    });
  });
