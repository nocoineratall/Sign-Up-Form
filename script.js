const submitBtn = document.querySelector(".submit-btn");
const warnMsg = document.querySelector(".pwd-check-message");
const pwd1 = document.querySelector("#password1");
const pwd2 = document.querySelector("#password2");

pwd1.addEventListener("focusout", () => {
  if (pwd1.value != undefined && pwd1.value == pwd2.value) {
    warnMsg.textContent = "";
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
    let warning = "*Passwords do not match";
    warnMsg.textContent = warning;
  }
});

pwd2.addEventListener("focusout", () => {
  if (pwd2.value != undefined && pwd1.value == pwd2.value) {
    warnMsg.textContent = "";
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
    let warning = "*Passwords do not match";
    warnMsg.textContent = warning;
  }
});
