const sheetURL = 'https://script.google.com/macros/s/AKfycbwG6EHvvjbk-koZmQh5Fl3PqFHjkFfWOKvFi-mW1Awh7o6N0Ea-Xu3nk5WzzcOpFDJW4Q/exec';

// Submit Dua
document.getElementById("submitBtn").addEventListener("click", async () => {
  const group = document.getElementById("group").value.trim();
  const user = document.getElementById("user").value.trim();
  const dua = document.getElementById("dua").value.trim();
  const count = parseInt(document.getElementById("count").value.trim()) || 0;
  const location = document.getElementById("location").value.trim();
  const notes = document.getElementById("notes").value.trim();

  // Input validation
  if (!group || !user || !dua || count <= 0) {
    alert("براہ کرم تمام خانے درست طریقے سے پُر کریں۔");
    return;
  }

  try {
    const response = await fetch(sheetURL, {
      method: 'POST',
      body: JSON.stringify({
        action: "submit",
        group,
        user,
        dua,
        count,
        location,
        notes
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.text();
    alert(result || "Dua Submitted!");
    document.getElementById("duaForm").reset();
  } catch (error) {
    alert("⚠️ نیٹ ورک یا سرور کی خرابی: " + error.message);
  }
});

// Refresh Total Count
document.getElementById("refreshTotalBtn").addEventListener("click", async () => {
  try {
    const res = await fetch(sheetURL + "?action=total");
    const data = await res.json();
    document.getElementById("totalDisplay").innerText = `🌟 Total Duas Submitted: ${data.total}`;
  } catch (error) {
    alert("⚠️ Total Count Error: " + error.message);
  }
});

// Refresh Dashboard Table
document.getElementById("refreshDashboardBtn").addEventListener("click", async () => {
  try {
    const res = await fetch(sheetURL + "?action=dashboard");
    const data = await res.json();
    const tbody = document.getElementById("dashboardTableBody");
    tbody.innerHTML = "";

    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.group}</td><td>${row.dua}</td><td>${row.total}</td>`;
      tbody.appendChild(tr);
    });
  } catch (error) {
    alert("⚠️ Dashboard Error: " + error.message);
  }
});
