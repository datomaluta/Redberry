"use strict";
const testArr = [];

function getSkills() {
  fetch("https://bootcamp-2022.devtest.ge/api/skills", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response;
      }

      return response.json();
    })
    .then(function (responseData) {
      // console.log(responseData);
      var fragment = document.createDocumentFragment();
      responseData.forEach((element) => {
        testArr.push({ name: element.title, id: element.id });
        // console.log(element.title);
        let option = document.createElement("option");
        option.textContent = element.title;
        option.classList.add("option-class");
        fragment.appendChild(option);
      });
      document.querySelector(".select-class").appendChild(fragment);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getSkills();
console.log(testArr);

/////// skill display ///

const selected = document.querySelector(".select-class");
// console.log(selected.value);

const addLanguageBtn = document.querySelector(".add-pl-button");
///// მერე არ
const experience = document.querySelector(".experience");
const skilebisMasivi = [];
addLanguageBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let skill = selected.value;
  let expYear = experience.value;

  // if (document.querySelector(".skill-div-wrapper").childElementCount > 0) {
  //   bb.addEventListener("click", function () {
  //     console.log("click");
  //   });
  // }

  // document.querySelector(".skill-display").innerHTML = skill + "" + expYear;

  let skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-div");

  let pForLanguage = document.createElement("p");
  pForLanguage.innerHTML = skill;
  pForLanguage.classList.add("programming-language");

  let pForExperience = document.createElement("p");
  pForExperience.innerHTML = "Years of Experience: " + expYear;
  pForExperience.classList.add("Experience");

  let delBtn = document.createElement("button");
  delBtn.classList.add("remove-button");
  let delImg = document.createElement("img");
  delImg.setAttribute("src", "../img/Remove.svg");
  delBtn.appendChild(delImg);

  if (experience.value.length >= 1) {
    skillDiv.appendChild(pForLanguage);
    skillDiv.appendChild(pForExperience);
    skillDiv.appendChild(delBtn);
    document.querySelector(".skill-div-wrapper").appendChild(skillDiv);
  }

  let skillWrapperCount =
    document.querySelector(".skill-div-wrapper").childElementCount;
  let countWeWant = skillWrapperCount + 1;
  if (countWeWant > 0) {
    // console.log(document.querySelector(".skill-div-wrapper").childElementCount);
    let del = document.querySelectorAll(".remove-button");
    del.forEach((btn) => {
      // console.log(btn);
      btn.addEventListener("click", function () {
        console.log("ელემენტი წაიშალა");
        // console.log("მშობელი ელემენტი");
        // console.log(btn.parentElement);
        btn.parentElement.remove();
        // skilebisMasivi.pop();
        // console.log(skilebisMasivi);
        // console.log(
        //   document.querySelector(".skill-div-wrapper").childElementCount
        // );
      });
    });
  }
  // console.log(document.querySelectorAll(".skill-div"));
  // if (skillWrapperCount > 1) {
  const nodeToArr = [...document.querySelectorAll(".skill-div")];
  nodeToArr.pop();
  nodeToArr.forEach((item) => {
    if (skill == item.firstChild.textContent) {
      console.log("meordeba");
      document.querySelector(".error-skill").innerHTML =
        "This skill is already taken";
      item.remove();
      skilebisMasivi.pop();
    } else {
      console.log("dasashvebia");
      document.querySelector(".error-skill").innerHTML = "";
      // if (skill == "HTML") {
      //   skilebisMasivi.push({ id: 1, experience: experience.value });
      // } else if (skill == "CSS") {
      //   skilebisMasivi.push({ id: 2, experience: experience.value });
      // }
    }
    // console.log(skill);
    // console.log(item.firstChild.textContent);
  });

  // }

  // console.log(document.querySelectorAll(".skill-div"));

  ///////
  // const nodeToArr = [...document.querySelectorAll(".skill-div")];
  // nodeToArr.pop();
  // console.log(nodeToArr);

  //////////////////

  // console.log(nodeToArr.pop());
  // console.log(nodeToArr);
  // const skillDivs = nodeToArr.map((item) => item);
  // console.log(skillDivs);

  // console.log(skill.value);

  if (experience.value.length >= 1) {
    if (skill == "HTML") {
      skilebisMasivi.push({ id: 1, experience: experience.value });
    } else if (skill == "CSS") {
      skilebisMasivi.push({ id: 2, experience: experience.value });
    } else if (skill == "PHP") {
      skilebisMasivi.push({ id: 3, experience: experience.value });
    } else if (skill == "Laravel") {
      skilebisMasivi.push({ id: 4, experience: experience.value });
    } else if (skill == "React.JS") {
      skilebisMasivi.push({ id: 5, experience: experience.value });
    } else if (skill == "Vue.JS") {
      skilebisMasivi.push({ id: 6, experience: experience.value });
    } else if (skill == "Svelte") {
      skilebisMasivi.push({ id: 7, experience: experience.value });
    } else if (skill == "Angular") {
      skilebisMasivi.push({ id: 8, experience: experience.value });
    }
  }
  console.log(skilebisMasivi);
  localStorage.setItem("skills", JSON.stringify(skilebisMasivi));
  // console.log(localStorage.getItem("skills"));
});
