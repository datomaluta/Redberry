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

    //   firstName.value.length > 2 &&
    //   lastName.value.length > 2 &&
    //   ValidateEmail(email.value)
    // ) {
    //   console.log("right credentials");
    //   window.location.href = `http://127.0.0.1:5500/pages/page${
    //     currentPageNumber + 1
    //   }.html`;
    // } else {
    //   console.log(" sheavse kargad");

    //   if (firstName.value.length <= 2) {
    //     errorDisplay(
    //       "fn-error",
    //       "Please enter correctly. more than two letters in the field"
    //     );
    //   } else {
    //     errorDisplay("fn-error", "");
    //   }
    //   if (lastName.value.length <= 2) {
    //     errorDisplay(
    //       "ln-error",
    //       "Please enter correctly. more than two letters in the field"
    //     );
    //   } else {
    //     errorDisplay("ln-error", "");
    //   }

    //   if (ValidateEmail(email.value) == false) {
    //     errorDisplay(
    //       "email-error",
    //       "Please, enter correctly. Does not match Email format"
    //     );
    //   } else {
    //     errorDisplay("email-error", "");
    //   }

    // errorDisplay(
    //   "fn-error",
    //   "Please enter correctly. more than two letters in the field"
    // );
    // errorDisplay(
    //   "ln-error",
    //   "Please enter correctly. more than two letters in the field"
    // );
    // errorDisplay("email-error", "Does not match E-Mail format");
    // errorDisplay(
    //   "phone-error",
    //   "Incorrect Number, Please follow '+995 5' standart"
    // );
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

    if (document.getElementById("sairme").checked) {
      localStorage.removeItem("work_preference");
      localStorage.setItem("work_preference", "from_office");
    } else if (document.getElementById("home").checked) {
      localStorage.removeItem("work_preference");
      localStorage.setItem("work_preference", "from_home");
    } else if (document.getElementById("hybrid").checked) {
      localStorage.removeItem("work_preference");
      localStorage.setItem("work_preference", "hybrid");
    }

    if (document.getElementById("vaccine-yes").checked) {
      localStorage.removeItem("had_covid");
      localStorage.setItem("had_covid", true);
      localStorage.setItem(
        "had_covid_at",
        document.getElementById("covidAt").value
      );
    } else if (document.getElementById("vaccine-no").checked) {
      // localStorage.removeItem("had_covid");
      localStorage.setItem("had_covid", false);
      // localStorage.removeItem("had_covid_at");
      // localStorage.setItem("had_covid_at", "");
    }

    if (document.getElementById("vaccine-yes").checked) {
      localStorage.removeItem("vaccinated");
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

    // if (
    //   document.getElementById("covid-yes").checked &&
    //   document.getElementById("covidAt").value
    // ) {
    //   console.log("მეორე ვალიდაცია გაიარა");
    // } else if (document.getElementById("covid-no")) {
    //   console.log("მეორე ვალიდაცია გაიარა მაინც");
    // } else {
    //   console.log("მეორე ვალიდაცია ჩააგდო");
    // }

    // if (document.getElementById("covid-yes").checked) {
    //   if (document.getElementById("covidAt").value) {
    //     console.log("მეორე ვალიდაციაც გაიარა");
    //   } else {
    //     console.log("მეორე ვალიდაცია ვერ გაიარა");
    //   }
    // } else if (document.getElementById("covid-no")) {
    //   console.log("ნო-ზე გადის მაინც");
    // }
    // if (document.getElementById("vaccine-yes").checked) {
    //   if (document.getElementById("vaccineAt")) {
    //     console.log("მესამე ვალიდაციაც გაიარა");
    //   } else {
    //     console.log("მესამეზე ჩავარდა");
    //   }
    // } else if (document.getElementById("vaccine-no")) {
    //   console.log("გააქ ამაზე ვაქცინა ნო-ზე");
    // }
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
      // localStorage.removeItem("will_organize_devtalk");
      localStorage.setItem("will_organize_devtalk", true);
      localStorage.setItem(
        "devtalk_topic",
        document.getElementById("devtalk-text").value
      );
    } else if (document.getElementById("dev-talk-no").checked) {
      // localStorage.removeItem("will_organize_devtalk");
      localStorage.setItem("will_organize_devtalk", false);
    }
    localStorage.setItem(
      "something_special",
      document.getElementById("special-text").value
    );
  }
});

// localstorage-ის კაიფი

// document.querySelector(".test-btn").addEventListener("click", function () {
//   console.log("ebe");
// localStorage.setItem("firstname", firstName.value);
// localStorage.setItem("lastname", lastName.value);
// localStorage.setItem("email", email.value);
// });

/// radio buttons check - ეს უკვე გადატანილი მაქვს ხომმმმმმმმმ
// ეს მერე ანკომენტ და იქით
// const covidYesRadio = document.getElementById("covid-yes");
// const covidNoRadio = document.getElementById("covid-no");
// covidYesRadio.addEventListener("change", function () {
//   console.log("კოვიდი მქონდა");
//   document.getElementById("last-covid-case").style.display = "block";
// });
// covidNoRadio.addEventListener("change", function () {
//   document.getElementById("last-covid-case").style.display = "none";
// });

// const vaccineYesRadio = document.getElementById("vaccine-yes");
// const vaccineNoRadio = document.getElementById("vaccine-no");

// vaccineYesRadio.addEventListener("change", function () {
//   document.getElementById("vaccine-div").style.display = "block";
// });

// vaccineNoRadio.addEventListener("change", function () {
//   document.getElementById("devtalk-textarea-div").style.display = "block";
// });

///// devtalk radio check - ესეც გონია გადავიტანე ხომმმ
// ეს მერე ანკომენტ და იქით
// const devTalkYes = document.getElementById("dev-talk-yes");
// const devTalksNo = document.getElementById("dev-talk-no");

// devTalkYes.addEventListener("change", function () {
//   document.getElementById("devtalk-textarea-div").style.display = "block";
// });
// devTalksNo.addEventListener("change", function () {
//   document.getElementById("devtalk-textarea-div").style.display = "none";
// });

/////// the end //////

// document.querySelector(".test-btn").addEventListener("click", function () {
//   console.log(phoneNumber.value);
// });
// !!xx!!!xxx!!!x!!!!!!!!!??????

///////////// apo skilll ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const testArr = [];

// function getSkills() {
//   fetch("https://bootcamp-2022.devtest.ge/api/skills", {
//     method: "GET",
//   })
//     .then(function (response) {
//       if (response.status !== 200) {
//         throw response;
//       }

//       return response.json();
//     })
//     .then(function (responseData) {
//       // console.log(responseData);
//       var fragment = document.createDocumentFragment();
//       responseData.forEach((element) => {
//         testArr.push({ name: element.title, id: element.id });
//         // console.log(element.title);
//         let option = document.createElement("option");
//         option.textContent = element.title;
//         option.classList.add("option-class");
//         fragment.appendChild(option);
//       });
//       document.querySelector(".select-class").appendChild(fragment);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// getSkills();
// console.log(testArr);

// /////// skill display ///

// const selected = document.querySelector(".select-class");
// // console.log(selected.value);

// const addLanguageBtn = document.querySelector(".add-pl-button");
// ///// მერე არ
// const experience = document.querySelector(".experience");
// const skilebisMasivi = [];
// addLanguageBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let skill = selected.value;
//   let expYear = experience.value;

//   // if (document.querySelector(".skill-div-wrapper").childElementCount > 0) {
//   //   bb.addEventListener("click", function () {
//   //     console.log("click");
//   //   });
//   // }

//   // document.querySelector(".skill-display").innerHTML = skill + "" + expYear;

//   let skillDiv = document.createElement("div");
//   skillDiv.classList.add("skill-div");

//   let pForLanguage = document.createElement("p");
//   pForLanguage.innerHTML = skill;
//   pForLanguage.classList.add("programming-language");

//   let pForExperience = document.createElement("p");
//   pForExperience.innerHTML = "Years of Experience: " + expYear;
//   pForExperience.classList.add("Experience");

//   let delBtn = document.createElement("button");
//   delBtn.classList.add("remove-button");
//   let delImg = document.createElement("img");
//   delImg.setAttribute("src", "../img/Remove.svg");
//   delBtn.appendChild(delImg);

//   skillDiv.appendChild(pForLanguage);
//   skillDiv.appendChild(pForExperience);
//   skillDiv.appendChild(delBtn);

//   document.querySelector(".skill-div-wrapper").appendChild(skillDiv);

//   let skillWrapperCount =
//     document.querySelector(".skill-div-wrapper").childElementCount;
//   let countWeWant = skillWrapperCount + 1;
//   if (countWeWant > 0) {
//     // console.log(document.querySelector(".skill-div-wrapper").childElementCount);
//     let del = document.querySelectorAll(".remove-button");
//     del.forEach((btn) => {
//       // console.log(btn);
//       btn.addEventListener("click", function () {
//         console.log("ელემენტი წაიშალა");
//         // console.log("მშობელი ელემენტი");
//         // console.log(btn.parentElement);
//         btn.parentElement.remove();
//         // skilebisMasivi.pop();
//         // console.log(skilebisMasivi);
//         // console.log(
//         //   document.querySelector(".skill-div-wrapper").childElementCount
//         // );
//       });
//     });
//   }
//   // console.log(document.querySelectorAll(".skill-div"));
//   // if (skillWrapperCount > 1) {
//   const nodeToArr = [...document.querySelectorAll(".skill-div")];
//   nodeToArr.pop();
//   nodeToArr.forEach((item) => {
//     if (skill == item.firstChild.textContent) {
//       console.log("meordeba");
//       document.querySelector(".error-skill").innerHTML =
//         "This skill is already taken";
//       item.remove();
//       skilebisMasivi.pop();
//     } else {
//       console.log("dasashvebia");
//       document.querySelector(".error-skill").innerHTML = "";
//       // if (skill == "HTML") {
//       //   skilebisMasivi.push({ id: 1, experience: experience.value });
//       // } else if (skill == "CSS") {
//       //   skilebisMasivi.push({ id: 2, experience: experience.value });
//       // }
//     }
//     // console.log(skill);
//     // console.log(item.firstChild.textContent);
//   });

//   // }

//   // console.log(document.querySelectorAll(".skill-div"));

//   ///////
//   // const nodeToArr = [...document.querySelectorAll(".skill-div")];
//   // nodeToArr.pop();
//   // console.log(nodeToArr);

//   //////////////////

//   // console.log(nodeToArr.pop());
//   // console.log(nodeToArr);
//   // const skillDivs = nodeToArr.map((item) => item);
//   // console.log(skillDivs);

//   // console.log(skill.value);

//   if (skill == "HTML") {
//     skilebisMasivi.push({ id: 1, experience: experience.value });
//   } else if (skill == "CSS") {
//     skilebisMasivi.push({ id: 2, experience: experience.value });
//   } else if (skill == "PHP") {
//     skilebisMasivi.push({ id: 3, experience: experience.value });
//   } else if (skill == "Laravel") {
//     skilebisMasivi.push({ id: 4, experience: experience.value });
//   } else if (skill == "React.JS") {
//     skilebisMasivi.push({ id: 5, experience: experience.value });
//   } else if (skill == "Vue.JS") {
//     skilebisMasivi.push({ id: 6, experience: experience.value });
//   } else if (skill == "Svelte") {
//     skilebisMasivi.push({ id: 7, experience: experience.value });
//   } else if (skill == "Angular") {
//     skilebisMasivi.push({ id: 8, experience: experience.value });
//   }
//   console.log(skilebisMasivi);
//   localStorage.setItem("skills", JSON.stringify(skilebisMasivi));
//   // console.log(localStorage.getItem("skills"));
// });

// language remove button logic - ეს დიდი ალბათობით ნაგავია

// let delBtn = document.querySelector(".remove-button");
// delBtn.addEventListener("clicl", function () {
//   console.log("works");
// });

// function f1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(document.querySelector(".remove-button"));
//     }, 7000);
//   });
// }

// async function f2() {
//   console.log("...loading");
//   var result = await f1();
//   console.log(result);
// }

// f2();

// console.log(document.querySelector(".skill-div-wrapper").childElementCount);

// const deleteBtn = document.querySelector(".remove-button");

// if (document.querySelector(".skill-div-wrapper").childElementCount > 0) {
//   deleteBtn.addEventListener("click", function () {
//     console.log("hi");
//   });
// }

// const selectBtn = function () {
//   document.querySelector(".remove-button");
// };

// async function deleteskill() {
//   await selectBtn();
//   console.log(res);
// }

// deleteskill();

// const deleteBtn = document.querySelector(".remove-button");
// console.log(deleteBtn);

// deleteBtn.then(function () {
//   return deleteBtn.addEventListener("click", function () {
//     console.log("imedia eg ari");
//   });
// });

// deleteBtn.addEventListener("click", function () {
//   console.log(deleteBtn.parentElement);
// });

// if (deleteBtn) {
//   deleteBtn.addEventListener("click", function () {
//     console.log(deleteBtn.parentElement);
//   });
// }

////////////////////
