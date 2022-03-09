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
    token: "2f50bd03-8103-451a-9b41-091bc5055a5e",
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
  window.location.href = "http://127.0.0.1:5500/pages/thanks.html";
  //   setTimeout(() => {
  //     console.log("ჰელო ფეშენ ტივი");
  //   }, 3000);
});

// getBtn.addEventListener("click", function () {
//   //   console.log("migebulia serrrrr");
//   fetch(
//     "https://bootcamp-2022.devtest.ge/api/applications?token=2f50bd03-8103-451a-9b41-091bc5055a5e",
//     {
//       method: "GET",
//     }
//   )
//     .then((respnse) => respnse.json())
//     .then((data) => console.log(data));
// });

// function sendApp() {
//   fetch("https://bootcamp-2022.devtest.ge/api/application", {
//     method: "POST",
//     body: JSON.stringify({
//       token: "385a3ffc-8856-4ef6-92ee-57a84f709dcc",
//       first_name: "Nugo",
//       last_name: "Jashi",
//       email: "gelashvili@gela.ge",
//       phone: "+995591933382",
//       skills: [
//         {
//           id: 1,
//           experience: 3,
//         },
//       ],
//       work_preference: "from_home",
//       had_covid: true,
//       had_covid_at: "2022-02-23",
//       vaccinated: true,
//       vaccinated_at: "2022-02-23",
//       will_organize_devtalk: true,
//       devtalk_topic: "I would ...",
//       something_special: "I am special!",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       //   console.log(typeof response);
//       return response;
//     })
//     .then((data) => {
//       //   console.log(typeof data);
//       console.log(data);
//     });
// }

// sendApp();

// function getApps() {
//   fetch(
//     "https://bootcamp-2022.devtest.ge/api/applications?token=385a3ffc-8856-4ef6-92ee-57a84f709dcc",
//     {
//       method: "GET",
//     }
//   )
//     .then((respnse) => respnse.json())
//     .then((data) => console.log(data));
// }
// getApps();

// console.log(localStorage.getItem("skills"));
