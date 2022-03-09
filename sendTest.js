"use strictt";

// const postBtn = document.querySelector(".post-method");
// const getBtn = document.querySelector(".get-method");
const submitBtn = document.querySelector(".submit-button");

// const had_covid = localStorage.getItem("had_covid") === "true" ? true : false;

// const vaccinated = localStorage.getItem("vaccinated") === "true" ? true : false;

// const will_organize_devtalk =
//   localStorage.getItem("will_organize_devtalk") === "true" ? true : false;
// console.log(localStorage.getItem("will_organize_devtalk"));
// console.log("aqeeeet", will_organize_devtalk);
// const had_covid_at =
//   had_covid == true ? localStorage.getItem("had_covid_at") : "str";

// console.log(testObj);

submitBtn.addEventListener("click", function () {
  const had_covid = localStorage.getItem("had_covid") === "true" ? true : false;

  const vaccinated =
    localStorage.getItem("vaccinated") === "true" ? true : false;

  const will_organize_devtalk =
    localStorage.getItem("will_organize_devtalk") === "true" ? true : false;

  const phone = localStorage.getItem("phone")
    ? localStorage.getItem("phone")
    : "NaN";

  const testObj = {
    token: "398ebcac-b19a-438d-b1b7-66828d8b7937",
    first_name: localStorage.getItem("firstname"),
    last_name: localStorage.getItem("lastname"),
    email: localStorage.getItem("email"),
    phone: phone,
    skills: JSON.parse(localStorage.getItem("skills")),
    work_preference: localStorage.getItem("work_preference"),
    had_covid: had_covid,
    had_covid_at: localStorage.getItem("had_covid_at"),
    vaccinated: vaccinated,
    vaccinated_at: localStorage.getItem("vaccinated_at"),
    will_organize_devtalk: will_organize_devtalk,
    devtalk_topic: localStorage.getItem("devtalk_topic"),
    something_special: localStorage.getItem("something_special"),
  };

  if (had_covid == false) {
    delete testObj.had_covid_at;
  }
  if (vaccinated == false) {
    delete testObj.vaccinated_at;
  }
  if (will_organize_devtalk == false) {
    delete testObj.devtalk_topic;
  }
  //   console.log(Boolean(localStorage.getItem("had_covid")));
  //   console.log(JSON.parse(localStorage.getItem("skills")));
  //   console.log(localStorage.getItem("phone"));
  //   console.log(typeof localStorage.getItem("vaccinated_at"));
  console.log(testObj.will_organize_devtalk);
  console.log(testObj.devtalk_topic);
  console.log(testObj.something_special);
  fetch("https://bootcamp-2022.devtest.ge/api/application", {
    method: "POST",
    body: JSON.stringify(
      testObj
      //   last_name: localStorage.getItem("lastname"),
      //   email: localStorage.getItem("email"),
      //   phone: localStorage.getItem("phone"),
      //   skills: localStorage.getItem("skills"),
      //   work_preference: localStorage.getItem("work_preference"),
      //   had_covid: localStorage.getItem("had_covid"),
      //   had_covid_at: localStorage.getItem("had_covid_at"),
      //   vaccinated: localStorage.getItem("vaccinated"),
      //   vaccinated_at: localStorage.getItem("vaccinated_at"),
      //   will_organize_devtalk: localStorage.getItem("will_organize_devtalk"),
      //   devtalk_topic: localStorage.getItem("devtalk_topic"),
      //   something_special: localStorage.getItem("something_special"),
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
  })
    .then((response) => {
      //   console.log(typeof response);
      return response;
    })
    .then((data) => {
      //   console.log(typeof data);
      console.log(data);
    });

  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/pages/thanks.html";
    setTimeout(() => {
      console.log("works");
    }, 3000);
  }, 2000);
  localStorage.clear();

  // window.location.href = "http://127.0.0.1:5500/pages/thanks.html";
  // setTimeout(() => {
  //   console.log("ჰელო ფეშენ ტივი");
  // }, 3000);
});
