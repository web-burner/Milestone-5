// console.log("hello");
function getElement(id) {
  return document.getElementById(id);
}
function setInnerText(id, value) {
  return (document.getElementById(id).innerText = value);
}
const data = [];
getElement("service-container").addEventListener("click", (e) => {
  let balance = parseInt(getElement("balance").innerText);
  let heartCount = parseInt(getElement("heart-count").innerText);

  if (e.target.classList.contains("call-btn")) {
    const card = e.target.closest(".card");
    const hotLine = card.querySelector(".hot-line").innerText;
    const serviceName = card.querySelector(".service-name").innerText;
    if (balance >= 20) {
      const newBalance = balance - 20;
      setInnerText("balance", newBalance);
      data.unshift({
        name: serviceName,
        number: hotLine,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
      showHistory();
      alert(`📞 Calling ${serviceName} ${hotLine}... `);
    } else {
      alert("You Need $20 To Call A Service");
    }
  }
  if (e.target.classList.contains("heart-btn")) {
    e.target.classList.add("text-red-500");
    const newCount = heartCount += 1;
    setInnerText("heart-count", newCount);
  }
  if (e.target.classList.contains("copy-btn")) {
    let copyCount = parseInt(getElement("copy-count").innerText);
    const card = e.target.closest(".card");
    const hotLine = card.querySelector(".hot-line").innerText;
    navigator.clipboard
      .writeText(hotLine)
      .then(() => {
        const newCopy = copyCount += 1;
        setInnerText("copy-count", newCopy);
        alert(`${hotLine} copied successfully!`);
      })
      .catch((err) => {
        console.error("Failed to copy text", err);
      });
  }
});

function showHistory() {
  getElement("cart-container").innerHTML = "";
  data.forEach((e) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex justify-between items-center bg-gray-100 rounded-lg p-3 mb-2">
                    <div>
                        <p class="text-lg font-semibold">${e.name}</p>
                        <p class="text-sm">${e.number}</p>
                    </div>
                    <div>
                        <p>${e.time}</p>
                        <p>${e.date}</p>
                    </div>
                </div>`;
    getElement("cart-container").appendChild(div);
  });
}

getElement("clear-btn").addEventListener("click", (e) => {
  data.length = 0;
  showHistory();
  alert("Cleared All Call History");
});
