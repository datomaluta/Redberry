"use strict";

const devTalkYes = document.getElementById("dev-talk-yes");
const devTalksNo = document.getElementById("dev-talk-no");

devTalkYes.addEventListener("change", function () {
  document.getElementById("devtalk-textarea-div").style.display = "block";
});
devTalksNo.addEventListener("change", function () {
  document.getElementById("devtalk-textarea-div").style.display = "none";
});
