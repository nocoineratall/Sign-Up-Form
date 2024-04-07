const submitBtn = document.querySelector(".submit-btn");
const warnMsg = document.querySelector(".pwd-check-message");
const pwds = document.querySelector(".password");

//fix this!
pwds.forEach((pwd) => {
  if (pwd.value != undefined && pwd2.value == pwd1.value) {
    warnMsg.textContent = "";
    submitBtn.setAttribute("disabled", "ciao");
  } else {
    let warning = "*Passwords do not match";
    warnMsg.textContent = warning;
  }
});
