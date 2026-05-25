const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", (e) => {
  window.location.href = "./index.html";
});

// const features = ['Add Money','Cash out','Transfer Money','Get Bonus','Pay Bill','Transactions']
// features.map(feature=> '<div>')

const validAccount = 12345678901;
const validPin = 1234;
const validCoupon = "getbonus";
const validUser = validAccount;

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
function removeInput(id, id2, id3) {
  getElement(id).value = "";
  getElement(id2).value = "";
  getElement(id3).value = "";
  return;
}
function showForms(id) {
  return getElement(id).classList.remove("hidden");
}

function activeBtn(id) {
  getElements(".features-btn").forEach((btn) => {
    btn.classList.remove("border-blue-400");
    btn.classList.add("border-gray-200");
  });
  getElement(id).classList.remove("border-gray-200");
  getElement(id).classList.add("border-blue-400");
}

function hideForms() {
  const forms = getElements(".forms");
  forms.forEach((form) => form.classList.add("hidden"));
}
function showAlert(val, amount) {
  alert(`${val} RM${amount} successfully!`);
  return;
}
function getData() {
  console.log();
}
const data = [];
function storeTransaction(transact) {
  data.unshift(transact);
  console.log(data);
  getElement("transaction-container").innerHTML = "";
  data.map((e) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="flex justify-between items-center border-2 p-2 my-2 rounded-2xl border-gray-300">
                    <div>
                        <p class="font-bold">${e.method}</p>
                        <p>${e.time}</p>
                    </div>
                    <div>
                        <p class="font-bold ${e.amount.includes("+") ? "text-green-600" : "text-red-600"}">${e.amount}</p>
                    </div>
                </div>`;
    getElement("transaction-container").append(card);
  });
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
      showAlert("Add", addAmount);
      storeTransaction({
        method: bank,
        accountNumber: accountNumber,
        amount: "+" + addAmount,
        time: new Date().toLocaleString(),
      });
      return;
    } else {
      alert("Invalid Amount");
    }
  } else {
    alert("Invalid Credentials");
  }
}
getElement("add-money").addEventListener("click", (e) => {
  hideForms();
  showForms("add-money-form");
  activeBtn("add-money");
});

getElement("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addMoney();
  removeInput("account-number", "pin-number", "add-money-amount");
});

getElement("cash-out").addEventListener("click", (e) => {
  hideForms();
  showForms("cash-out-form");
  activeBtn("cash-out");
});

getElement("cash-out-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = getElement("cashout-bank-name").value;
  cashOut(
    "cashout-account-number",
    "cashout-pin-number",
    "cashout-amount",
    bank,
    "Cash Out",
  );
  removeInput("cashout-account-number", "cashout-pin-number", "cashout-amount");
});

function cashOut(account, pin, amount, bank, payment) {
  let balance = parseInt(getElement("primary-balance").innerText);
  const accountNumber = parseInt(getElement(account).value);
  const pinNumber = parseInt(getElement(pin).value);
  const cashOutAmount = parseInt(getElement(amount).value);
  // console.log(account, pin, amount, bank, payment);
  if (bank !== "" && accountNumber === validAccount && pinNumber === validPin) {
    if(balance <= 0){
      // showAlert('Insufficient Balance')
      alert('Insufficient Balance!')
      return;
    }
    if (cashOutAmount > 0 && typeof cashOutAmount === "number") {
      const newBalance = balance - cashOutAmount;
      setBalance(newBalance);
      showAlert(payment, cashOutAmount);
      storeTransaction({
        method: bank,
        accountNumber: accountNumber,
        amount: "-" + cashOutAmount,
        time: new Date().toLocaleString(),
      });
      return;
    } else {
      alert("Invalid Amount");
    }
  } else {
    alert("Invalid Credentials");
  }
}

getElement("transfer").addEventListener("click", (e) => {
  hideForms();
  showForms("transfer-form");
  activeBtn("transfer");
});

getElement("transfer-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = getElement("transfer-bank-name").value;
  cashOut(
    "transfer-account-number",
    "transfer-pin-number",
    "transfer-amount",
    bank,
    "Transferred",
  );
  // alert('Amount Transfer successfully')
  removeInput(
    "transfer-account-number",
    "transfer-pin-number",
    "transfer-amount",
  );
});

getElement("bonus").addEventListener("click", (e) => {
  hideForms();
  showForms("bonus-form");
  activeBtn("bonus");
});

function getBonus() {
  let balance = parseInt(getElement("primary-balance").innerText);
  const couponNumber = getElement("coupon-number").value;

  if (couponNumber === validCoupon) {
    const newBalance = balance + 200;
    setBalance(newBalance);
    storeTransaction({
      method: "Bonus",
      amount: "+" + 200,
      time: new Date().toLocaleString(),
    });
    alert("Bonus Added Successfully");
    return;
  } else {
    alert("Invalid Coupon");
  }
}

getElement("get-bonus-btn").addEventListener("click", (e) => {
  e.preventDefault();
  getBonus();
  getElement("coupon-number").value = "";
});

getElement("pay-bill").addEventListener("click", (e) => {
  hideForms();
  showForms("bill-form");
  activeBtn("pay-bill");
});

getElement("bill-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const billMethod = getElement("bill-name").value;
  cashOut(
    "bill-user-number",
    "bill-pin-number",
    "bill-amount",
    billMethod,
    `${billMethod} Paid`,
  );
  removeInput("bill-user-number", "bill-pin-number", "bill-amount");
});

getElement("transaction-form-btn").addEventListener("click", (e) => {
  hideForms();
  showForms("transaction-form");
  activeBtn("transaction-form-btn");
});
