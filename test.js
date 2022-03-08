"use strict";

const nextBtn = document.querySelector(".prev-btn");
console.log(nextBtn);

nextBtn.addEventListener("click", function () {
  if (currentURL == "http://127.0.0.1:5500/pages/page1.html") {
    if (
      firstName.value.length > 2 &&
      lastName.value.length > 2 &&
      ValidateEmail(email.value) &&
      phoneNumber.value.length > 0
    ) {
      console.log("right credentials");
      window.location.href = `http://127.0.0.1:5500/pages/page${
        currentPageNumber + 1
      }.html`;
    } else {
      console.log(" sheavse kargad");

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
    }
  } else if (currentURL == "http://127.0.0.1:5500/pages/page2.html") {
  }
});
