const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", (e) => {
  window.location.href = "./index.html";
});

// const features = ['Add Money','Cash out','Transfer Money','Get Bonus','Pay Bill','Transactions']
// features.map(feature=> '<div>')

const validAccount = 12345678901;
const validPin = 1234;

// add money functionalities
function getElement(id) {
  return document.getElementById(id);
}
function getElements(className) {
  return document.querySelectorAll(className);
}
function setBalance(balance) {
  return (getElement("primary-balance").innerText = balance);
}
function removeInput() {
  getElement("account-number").value = "";
  getElement("pin-number").value = "";
  getElement("add-money-amount").value = "";
  return;
}
function showForms(id) {
  return getElement(id).classList.remove("hidden");
}
function addMoney() {
  let balance = parseInt(getElement("primary-balance").innerText);
  const bank = getElement("bank-name").value;
  const accountNumber = parseInt(getElement("account-number").value);
  const pinNumber = parseInt(getElement("pin-number").value);
  const addAmount = parseInt(getElement("add-money-amount").value);

  if (bank !== "" && accountNumber === validAccount && pinNumber === validPin) {
    if (addAmount > 0 && typeof addAmount === "number") {
      const newBalance = balance + addAmount;
      setBalance(newBalance);
      return;
    } else {
      alert("Invalid Amount");
    }
  } else {
    alert("Invalid Credentials");
  }
}
function activeBtn (id){
    getElements('.features-btn').forEach(btn => {
        btn.classList.remove('border-blue-400')
        btn.classList.add('border-gray-200')
    })
    getElement(id).classList.remove('border-gray-200')
    getElement(id).classList.add('border-blue-400')
}

getElement("add-money").addEventListener("click", (e) => {
  const forms = getElements(".forms");
  forms.forEach((form) => form.classList.add("hidden"));
  showForms("add-money-form");
  activeBtn('add-money')
});

getElement("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addMoney();
  removeInput();
});

getElement("cash-out").addEventListener("click", (e) => {
  const forms = getElements(".forms");
  forms.forEach((form) => form.classList.add("hidden"));
//   showForms("add-money-form");
  activeBtn('cash-out')
});