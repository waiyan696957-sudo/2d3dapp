function save3DEntry() {
  const number = document.getElementById("threeDigit").value.trim();
  const amount = parseInt(document.getElementById("amount").value.trim());
  const msg = document.getElementById("msg");

  if (!/^\d{3}$/.test(number)) {
    msg.innerText = "❌ 3 digit number တိတိရေးပါ။";
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    msg.innerText = "❌ Amount မှန်မှန်ရေးပါ။";
    return;
  }

  const newEntry = {
    number: number,
    amount: amount,
    date: new Date().toLocaleDateString()
  };

  let entries = JSON.parse(localStorage.getItem("threeD_entries") || "[]");
  entries.push(newEntry);
  localStorage.setItem("threeD_entries", JSON.stringify(entries));

  msg.innerText = "✅ သိမ်းပြီးပါပြီ!";
  document.getElementById("threeDigit").value = "";
  document.getElementById("amount").value = "";
}