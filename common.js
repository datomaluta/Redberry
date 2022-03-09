"use strict";

///// 385a3ffc-8856-4ef6-92ee-57a84f709dcc

const nextBtn = document.querySelector(".next-btn");
console.log(nextBtn);

const prevBtn = document.querySelector(".prev-btn");
console.log(prevBtn);

const dot1 = document.querySelector(".dot1");
console.log(dot1);

const dot2 = document.querySelector(".dot2");

const dot3 = document.querySelector(".dot3");

const dot4 = document.querySelector(".dot4");

const dot5 = document.querySelector(".dot5");

const firstName = document.getElementById("firstName");

const lastName = document.getElementById("lastName");

const email = document.getElementById("email");
console.log(email);

const phoneNumber = document.getElementById("phoneNumber");

// const covidYesRadio = document.getElementById("covid-yes");
// const covidNoRadio = document.getElementById("covid-no");

// const vaccineYesRadio = document.getElementById("vaccine-yes");
// const vaccineNoRadio = document.getElementById("vaccine-no");

let currentPageNumber = Number(
  window.location.href.split("/")[4].split(".")[0].slice(-1)
);
console.log(window.location.href);

// nextBtn.addEventListener("click", function () {
//   window.location.href = `http://127.0.0.1:5500/pages/page${
//     currentPageNumber + 1
//   }.html`;
// });

prevBtn.addEventListener("click", function () {
  window.location.href = `http://127.0.0.1:5500/pages/page${
    currentPageNumber - 1
  }.html`;
});

//////////////////////////////

////// dot /////////

dot1.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = `http://127.0.0.1:5500/pages/page1.html`;
});

dot2.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = `http://127.0.0.1:5500/pages/page2.html`;
});

dot3.addEventListener("click", function () {
  window.location.href = `http://127.0.0.1:5500/pages/page3.html`;
});

dot4.addEventListener("click", function () {
  window.location.href = `http://127.0.0.1:5500/pages/page4.html`;
});

//////////////////////////////

//////////////

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    console.log("email is correct");
    return true;
  } else {
    console.log("email is incorrect");
    return false;
  }
}

function validatePhoneNumber(inputText) {
  let splitted = inputText.split("");

  if (
    splitted.length == 13 &&
    splitted[0] == "+" &&
    splitted[1] == 9 &&
    splitted[2] == 9 &&
    splitted[3] == 5 &&
    splitted[4] == 5
  ) {
    console.log("validuria nomeri");
    return true;
  } else {
    console.log("ar aros validuri nomneri");
    return false;
  }
}
// validatePhoneNumber("+995591921669");

const errorDisplay = function (id, message) {
  document.getElementById(id).innerHTML = message;
};

const currentURL = window.location.href;

nextBtn.addEventListener("click", function () {
  if (currentURL == "http://127.0.0.1:5500/pages/page1.html") {
    if (phoneNumber.value.length > 0) {
      if (
        validatePhoneNumber(phoneNumber.value) &&
        firstName.value.length > 2 &&
        lastName.value.length > 2 &&
        ValidateEmail(email.value)
      ) {
        window.location.href = `http://127.0.0.1:5500/pages/page${
          currentPageNumber + 1
        }.html`;
        localStorage.setItem("firstname", firstName.value);
        localStorage.setItem("lastname", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phoneNumber.value);
      } else {
        console.log("sheyvanlia magram validacias ver gadis");
        if (firstName.value.length <= 2) {
          errorDisplay(
            "fn-error",
            "Please enter correctly. more than two letters in the field"
          );
        } else {
          errorDisplay("fn-error", "");
        }
        if (lastName.value.length <= 2) {
          errorDisplay(
            "ln-error",
            "Please enter correctly. more than two letters in the field"
          );
        } else {
          errorDisplay("ln-error", "");
        }

        if (ValidateEmail(email.value) == false) {
          errorDisplay(
            "email-error",
            "Please, enter correctly. Does not match Email format"
          );
        } else {
          errorDisplay("email-error", "");
        }
        if (validatePhoneNumber(phoneNumber.value) == false) {
          errorDisplay("phone-error", "Please, enter correctly phone number");
        }
      }
    } else if (
      firstName.value.length > 2 &&
      lastName.value.length > 2 &&
      ValidateEmail(email.value)
    ) {
      window.location.href = `http://127.0.0.1:5500/pages/page${
        currentPageNumber + 1
      }.html`;
      localStorage.setItem("firstname", firstName.value);
      localStorage.setItem("lastname", lastName.value);
      localStorage.setItem("email", email.value);
    } else {
      console.log("rato toooo");
      if (firstName.value.length <= 2) {
        errorDisplay(
          "fn-error",
          "Please enter correctly. more than two letters in the field"
        );
      } else {
        errorDisplay("fn-error", "");
      }
      if (lastName.value.length <= 2) {
        errorDisplay(
          "ln-error",
          "Please enter correctly. more than two letters in the field"
        );
      } else {
        errorDisplay("ln-error", "");
      }

      if (ValidateEmail(email.value) == false) {
        errorDisplay(
          "email-error",
          "Please, enter correctly. Does not match Email format"
        );
      } else {
        errorDisplay("email-error", "");
      }
    }
  } else if (currentURL == "http://127.0.0.1:5500/pages/page2.html") {
    if (document.querySelector(".skill-div-wrapper").childElementCount > 0) {
      window.location.href = `http://127.0.0.1:5500/pages/page${
        currentPageNumber + 1
      }.html`;
    } else {
      console.log("მინ ერთი მაინც");
      document.querySelector(".error-skill").innerHTML =
        "Please, choose at least one skill";
    }
  } else if (currentURL == "http://127.0.0.1:5500/pages/page3.html") {
    // console.log("მესამე ფეიჯი");
    if (document.getElementById("sairme").checked) {
      // localStorage.removeItem("work_preference");
      localStorage.setItem("work_preference", "from_office");
    } else if (document.getElementById("home").checked) {
      // localStorage.removeItem("work_preference");
      localStorage.setItem("work_preference", "from_home");
    } else if (document.getElementById("hybrid").checked) {
      // localStorage.removeItem("work_preference");
      localStorage.setItem("work_preference", "hybrid");
    }

    // shemaq cvlilebebi
    if (document.getElementById("covid-yes").checked) {
      // localStorage.removeItem("had_covid");
      localStorage.setItem("had_covid", true);
      localStorage.setItem(
        "had_covid_at",
        document.getElementById("covidAt").value
      );

      //aqac shemqa
    } else if (document.getElementById("covid-no").checked) {
      // localStorage.removeItem("had_covid");
      localStorage.setItem("had_covid", false);
      // localStorage.removeItem("had_covid_at");
      // localStorage.setItem("had_covid_at", "");
    }

    if (document.getElementById("vaccine-yes").checked) {
      // localStorage.removeItem("vaccinated");
      localStorage.setItem("vaccinated", true);
      localStorage.setItem(
        "vaccinated_at",
        document.getElementById("vaccineAt").value
      );
    } else if (document.getElementById("vaccine-no").checked) {
      // localStorage.removeItem("vaccinated");
      localStorage.setItem("vaccinated", false);
      // localStorage.setItem("vaccinated_at", "");
      // localStorage.removeItem("vaccinated_at");
    }
    if (
      document.getElementById("sairme").checked ||
      document.getElementById("home").checked ||
      document.getElementById("hybrid").checked
    ) {
      console.log("პირველი ვალიდაცია გავლილაი");
      if (
        document.getElementById("covid-yes").checked &&
        document.getElementById("covidAt").value
      ) {
        console.log("მეორე ვალიდაცია გაიარა");
        // window.location.href = `http://127.0.0.1:5500/pages/page${
        //   currentPageNumber + 1
        // }.html`;
        if (
          document.getElementById("vaccine-yes").checked &&
          document.getElementById("vaccineAt")
        ) {
          console.log("მესამე ვალიდაციაც მიყვა");
          window.location.href = `http://127.0.0.1:5500/pages/page${
            currentPageNumber + 1
          }.html`;
        } else if (document.getElementById("vaccine-no").checked) {
          console.log("მესამე ვალიდაციაც ნო მაგრამ ეგაა");
          window.location.href = `http://127.0.0.1:5500/pages/page${
            currentPageNumber + 1
          }.html`;
        }
      } else if (document.getElementById("covid-no").checked) {
        console.log("მეორე ვალიდაცია გაიარა მაინც");
        // window.location.href = `http://127.0.0.1:5500/pages/page${
        //   currentPageNumber + 1
        // }.html`;
        if (document.getElementById("vaccine-no").checked) {
          console.log("მესამე ვალიდაცაია გაიარა მაინც");
          window.location.href = `http://127.0.0.1:5500/pages/page${
            currentPageNumber + 1
          }.html`;
        } else if (
          document.getElementById("vaccine-yes").checked &&
          document.getElementById("vaccineAt")
        ) {
          console.log("მესამე გაიარა");
          window.location.href = `http://127.0.0.1:5500/pages/page${
            currentPageNumber + 1
          }.html`;
        }
      } else {
        console.log("მეორე ვალიდაცია ჩააგდო");
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  } else if (currentURL == "http://127.0.0.1:5500/pages/page4.html") {
    if (
      document.getElementById("dev-talk-yes").checked &&
      document.getElementById("devtalk-text").value.length > 1
    ) {
      console.log("საბმითამდე ცოტა დარჩა");
      if (document.getElementById("special-text").value.length > 1) {
        console.log("მზადაა გასაშვებად");
        window.location.href = `http://127.0.0.1:5500/pages/page${
          currentPageNumber + 1
        }.html`;
      }
    } else if (document.getElementById("dev-talk-no").checked) {
      if (document.getElementById("special-text").value.length > 1) {
        console.log("მზადაა გასაშვებად");
        window.location.href = `http://127.0.0.1:5500/pages/page${
          currentPageNumber + 1
        }.html`;
      }
    }

    ///////////////////////////////////////////////////////////////

    if (document.getElementById("dev-talk-yes").checked) {
      localStorage.setItem("will_organize_devtalk", true);
      localStorage.setItem(
        "devtalk_topic",
        document.getElementById("devtalk-text").value
      );
    } else if (document.getElementById("dev-talk-no").checked) {
      localStorage.setItem("will_organize_devtalk", false);
    }
    localStorage.setItem(
      "something_special",
      document.getElementById("special-text").value
    );
  }
});
