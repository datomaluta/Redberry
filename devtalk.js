"use strict";

const devTalkYes = document.getElementById("dev-talk-yes");
const devTalksNo = document.getElementById("dev-talk-no");

devTalkYes.addEventListener("change", function () {
  document.getElementById("devtalk-textarea-div").style.display = "block";
});
devTalksNo.addEventListener("change", function () {
  document.getElementById("devtalk-textarea-div").style.display = "none";
});

// document.querySelector(".test-devtalk").addEventListener("click", function () {
//   if (devTalkYes.checked) {
//     // localStorage.removeItem("will_organize_devtalk");
//     localStorage.setItem("will_organize_devtalk", true);
//     localStorage.setItem(
//       "devtalk_topic",
//       document.getElementById("devtalk-text").value
//     );
//   } else if (devTalksNo.checked) {
//     // localStorage.removeItem("will_organize_devtalk");
//     localStorage.setItem("will_organize_devtalk", false);
//   }
//   localStorage.setItem(
//     "something_special",
//     document.getElementById("special-text").value
//   );
// });
