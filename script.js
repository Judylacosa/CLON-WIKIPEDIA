
const accounts = [
  { id: 1, password: "1234", balance: 1000 },
  { id: 2, password: "5678", balance: 700 },
  { id: 3, password: "abcd", balance: 300 }
];

let selectedAccount = null;


function selectAccount(accountId) {
  selectedAccount = accounts[accountId];
  const password = prompt("Ingrese el password de la cuenta:");
  if (password === selectedAccount.password) {
    document.getElementById('accountBalance').textContent = `Saldo actual: $${selectedAccount.balance}`;
    document.getElementById('accountSelection').style.display = 'none';
    document.getElementById('accountDetails').style.display = 'block';
    document.getElementById('operations').style.display = 'block';
  } else {
    alert("Password incorrecto. Por favor, inténtelo de nuevo.");
  }
}

function checkBalance() {
  alert(`Saldo actual: $${selectedAccount.balance}`);
}


function deposit() {
  const amount = parseFloat(prompt("Ingrese el monto a ingresar:"));
  if (!isNaN(amount) && amount > 0) {
    selectedAccount.balance += amount;
    if (selectedAccount.balance > 990) {
      selectedAccount.balance = 990;
      alert("El saldo máximo permitido es $990.");
    }
    document.getElementById('accountBalance').textContent = `Saldo actual: $${selectedAccount.balance}`;
    alert(`Monto ingresado: $${amount}. Nuevo saldo: $${selectedAccount.balance}`);
  } else {
    alert("Ingrese un monto válido.");
  }
}


function withdraw() {
  const amount = parseFloat(prompt("Ingrese el monto a retirar:"));
  if (!isNaN(amount) && amount > 0) {
    if (selectedAccount.balance - amount >= 10) {
      selectedAccount.balance -= amount;
      document.getElementById('accountBalance').textContent = `Saldo actual: $${selectedAccount.balance}`;
      alert(`Monto retirado: $${amount}. Nuevo saldo: $${selectedAccount.balance}`);
    } else {
      alert("El saldo mínimo permitido es $10.");
    }
  } else {
    alert("Ingrese un monto válido.");
  }
}


function returnToAccountSelection() {
  document.getElementById('accountDetails').style.display = 'none';
  document.getElementById('operations').style.display = 'none';
  document.getElementById('accountSelection').style.display = 'block';
}




