const scriptURL = "https://script.google.com/macros/s/AKfycbzBW0FuX69tMg01yYxIX8pAYgg7xKg4Rn5poyTnJIQdRvQL6P0Hc3OgAHw6fr8JcLuV6g/exec";

document.getElementById("duaForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = {
    group: document.getElementById("group").value,
    name: document.getElementById("name").value,
    dua: document.getElementById("dua").value,
    count: document.getElementById("count").value,
  };

  await fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  alert("✅ Dua submitted!");
  fetchTotal();
});

async function fetchTotal() {
  const response = await fetch(scriptURL);
  const result = await response.json();
  document.getElementById("totalCount").innerText = "Total Count: " + result.total;
}

window.onload = fetchTotal;
