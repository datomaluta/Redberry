"use strictt";

const submitBtn = document.querySelector(".submit-button");

submitBtn.addEventListener("click", function () {
  const had_covid = localStorage.getItem("had_covid") === "true" ? true : false;

  const vaccinated =
    localStorage.getItem("vaccinated") === "true" ? true : false;

  const will_organize_devtalk =
    localStorage.getItem("will_organize_devtalk") === "true" ? true : false;

  const phone = localStorage.getItem("phone")
    ? localStorage.getItem("phone")
    : "+995 5__ ___ ___";

  const testObj = {
    token: "23cb3ac6-d45a-4cf7-bf1a-4d782a7f9318",
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

  console.log(testObj.will_organize_devtalk);
  console.log(testObj.devtalk_topic);
  console.log(testObj.something_special);
  fetch("https://bootcamp-2022.devtest.ge/api/application", {
    method: "POST",
    body: JSON.stringify(testObj),
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
    // setTimeout(() => {
    //   console.log("works");
    // }, 3000);
  }, 1000);
  localStorage.clear();

  // window.location.href = "http://127.0.0.1:5500/pages/thanks.html";
  // setTimeout(() => {
  //   console.log("ჰელო ფეშენ ტივი");
  // }, 3000);
});
