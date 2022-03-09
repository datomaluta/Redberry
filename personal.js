// "use strict";
firstName.value = localStorage.getItem("firstname");
lastName.value = localStorage.getItem("lastname");
email.value = localStorage.getItem("email");

if (localStorage.getItem("phone")) {
  phoneNumber.value = localStorage.getItem("phone");
}
