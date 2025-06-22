const scriptURL = "https://script.google.com/macros/s/AKfycbxyNSddgTIG-RJ0tiiBZP8u7RV4DVqsSQN7cKVXl_P01oCD6pC-O3PSXUa_wVE1gEQCBw/exec"; // <-- Replace this!

document.getElementById("duaForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    group: document.getElementById("group").value,
    name: document.getElementById("name").value,
    dua: document.getElementById("dua").value,
    count: document.getElementById("count").value,
    location: document.getElementById("location").value,
    notes: document.getElementById("notes").value,
  };

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Dua submitted successfully!");
      document.getElementById("duaForm").reset();
    } else {
      alert("⚠️ Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("⚠️ نیٹ ورک یا سرور کی خرابی: Failed to fetch");
  }
});

document.getElementById("refreshTotal").addEventListener("click", async () => {
  try {
    const response = await fetch(scriptURL);
    const result = await response.json();
    document.getElementById("totalDisplay").innerText = `Total Duas: ${result.total}`;
  } catch (error) {
    document.getElementById("totalDisplay").innerText = "⚠️ Unable to load total.";
  }
});
