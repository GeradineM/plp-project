//login field
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitInput = document.getElementById("submit");

//create account
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmsignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

signupButton.addEventListener("click", function(){
  main.style.display = "none";
  createacct.style.display = "block";
})