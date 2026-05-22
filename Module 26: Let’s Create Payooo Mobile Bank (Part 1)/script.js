const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const validMobileNumber = 1234567890;
  const validPinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const pinNumberValue = document.getElementById("pin-number").value;

  const mobileNumber = parseInt(mobileNumberValue)
  const pinNumber = parseInt(pinNumberValue)

  if(validMobileNumber === mobileNumber && validPinNumber === pinNumber){
    // console.log('All value matched')
    window.location.href = './home.html'
  }else{
    console.log('Invalid Credentials')
  }
});
