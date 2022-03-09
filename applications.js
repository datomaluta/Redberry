"use strict";

let conta = document.querySelector(".container");
fetch(
  "https://bootcamp-2022.devtest.ge/api/applications?token=398ebcac-b19a-438d-b1b7-66828d8b7937",
  {
    method: "GET",
  }
)
  .then((respnse) => respnse.json())
  .then((data) => {
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
      console.log(element.skills);
      let idskill;
      let expskill;
      element.skills.forEach((item) => {
        idskill = item.id;
        expskill = item.experience;

        let pforid = document.createElement("p");
        let pforexp = document.createElement("p");
        pforid.textContent = "skill id: " + idskill;
        pforexp.textContent = "experience: " + expskill;
        rowdiv.appendChild(pforid);
        rowdiv.appendChild(pforexp);
      });
      console.log(rowdiv);

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
        <button class="dropbtn">Dropdown &downarrow;</button>
        <div class="dropdown-content">
        <div class="personal-information">
        <h3 class="topic">Personal Information</h3>
        <div class="row">
          <p>FirstName</p>
          <p id="firstname">${element.first_name}</p>
        </div>
        <div class="row">
          <p>LastName</p>
          <p>${element.last_name}</p>
        </div>
        <div class="row">
            <p>E-Mail</p>
            <p>${element.email}</p>
        </div>
        <div class="row">
            <p>Phone</p>
            <p>${element.phone}</p>
        </div>
      </div>

      <div class="covid-situation">
        <h3 class="topic">Covid Situation</h3>
        <h3>How would you prefer to work?</h3>
        <p>${saidanvmushaob1}</p>
        <p>${saidanvmushaob2}</p>
        <p>${saidanvmushaob3}</p>
        

        <div class="covid-yes-or-no">
          <h3>Did you have covid 19?</h3>
          <p>${hadcovidyes}</p>
          <p>${hadcovidno}</p>
        </div>

        <div class="covid-at-date">
          <h3>When did you have covid 19?</h3>
          
          <div class="date-div">
            ${covidDateOnPage}
          </div>
        </div>

        <div class="vaccine-yes-or-no">
          <h3>Have you been vaccinated?</h3>
          <p>${hadvaccineyes}</p>
          <p>${hadvaccineno}</p>
        </div>

        <div class="vaccinate-date">
          <h3>When did you get covid vaccine?</h3>
          <div class="date-div">
          ${vaccDateOnPage}
        </div>
        </div>
      </div>

      <div class="skillset">
        <h3 class="topic">Skillset</h3>
        ${rowdiv.innerHTML}
      </div>

      <div class="insights">
        <h3 class="topic">Insights</h3>
        <p>Would you attend Devtalks and maybe also organize your own?</p>
        <p>${devtalkyes}</p>
        <p>${devtalkno}</p>
        <div class="devtalk">
          <p>What would you speak about at Devtalk?</p>
          <div class="devtalk-text-div">
            ${element.devtalk_topic}
          </div>

        </div>
        <div class="special">
          <p>Tell us somthing special</p>
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
