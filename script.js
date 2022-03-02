"use strict";

const startBtn = document.querySelector(".start-button");
console.log(startBtn);

startBtn.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/pages/personInfo.html";
});
