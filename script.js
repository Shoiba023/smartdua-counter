const form = document.getElementById("duaForm");
const totalCountDiv = document.getElementById("totalCount");
const refreshBtn = document.getElementById("refreshBtn");

// ✅ Use your updated Web App URL here:
const endpoint = https://script.google.com/macros/s/AKfycbxRI0MVcqSKrAZO5D-g5EfXFaEVoyAJ0PnJItkN8Vm8QULvmsdvgdf1Nlb4Ew6GH6Dptw/exec

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  data.timestamp = new Date().toISOString();

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("✅ Dua submitted successfully!");
      form.reset();
    } else {
      alert("❌ Submission failed.");
    }
  } catch (err) {
    alert("⚠️ Network error.");
    console.error(err);
  }
});

refreshBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(endpoint + "?action=total");
    const result = await res.json();
    totalCountDiv.textContent = `Total Duas: ${result.total || 0}`;
  } catch (err) {
    totalCountDiv.textContent = "⚠️ Failed to load total.";
    console.error(err);
  }
});
