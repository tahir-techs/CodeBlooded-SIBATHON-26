let balance = 1000;
let transactions = [];

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');

  if(user === "user" && pass === "password") {
    showPage('dashboardPage');
    msg.className = "message hidden";
  } else {
    msg.textContent = "Invalid username or password!";
    msg.className = "message error";
    msg.classList.remove("hidden");
  }
}

function showPage(pageId) {
  document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
  updateDashboard();
}

function updateDashboard() {
  document.getElementById('balance').textContent = balance.toFixed(2);
  const list = document.getElementById('transactionList');
  list.innerHTML = "";
  transactions.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    list.appendChild(li);
  });
}

function transferMoney() {
  const amount = parseFloat(document.getElementById('transferAmount').value);
  const msg = document.getElementById('transferMessage');

  if(amount > 0 && amount <= balance) {
    balance -= amount;
    transactions.push(`Transferred $${amount.toFixed(2)}`);
    msg.textContent = `Successfully transferred $${amount.toFixed(2)}!`;
    msg.className = "message success";
    msg.classList.remove("hidden");
    updateDashboard();
  } else {
    msg.textContent = "Invalid amount or insufficient balance!";
    msg.className = "message error";
    msg.classList.remove("hidden");
  }
}

function applyLoan() {
  const loanAmount = balance * 0.2;
  balance += loanAmount;
  transactions.push(`Loan granted: $${loanAmount.toFixed(2)}`);
  const msg = document.getElementById('loanMessage');
  msg.textContent = `Loan of $${loanAmount.toFixed(2)} granted and added to balance!`;
  msg.className = "message success";
  msg.classList.remove("hidden");
  updateDashboard();
}
