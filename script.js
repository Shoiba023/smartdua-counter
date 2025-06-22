const scriptURL = "https://script.google.com/macros/s/AKfycbzc_o9QrgqPmg-KH3j82YSHfzQVKqZvgbaeXwHu-sGGhZ2lHwkOvu866D2DpxFlEL5NcQ/exec";

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
    await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    alert("✅ Dua submitted successfully!");
    document.getElementById("duaForm").reset();

  } catch (error) {
    alert("⚠️ نیٹ ورک یا سرور کی خرابی: Failed to submit.");
  }
});
