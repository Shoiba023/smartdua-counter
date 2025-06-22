const scriptURL = "https://script.google.com/macros/s/AKfycbzc_o9QrgqPmg-KH3j82YSHfzQVKqZvgbaeXwHu-sGGhZ2lHwkOvu866D2DpxFlEL5NcQ/exec"; // <-- Replace this!

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

 fetch(scriptURL, {
  method: 'POST',
  mode: 'no-cors', // ✅ This line is 100% required
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(() => alert("✅ Dua submitted successfully!"))
.catch((error) => alert("⚠️ نیٹ ورک یا سرور کی خرابی: Failed to fetch"));

    

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
