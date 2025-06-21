const sheetURL = 'https://script.google.com/macros/s/AKfycbwG6EHvvjbk-koZmQh5Fl3PqFHjkFfWOKvFi-mW1Awh7o6N0Ea-Xu3nk5WzzcOpFDJW4Q/exec'; // Replace with your actual Apps Script Web App URL

// Handle form submission
document.getElementById("submitBtn").addEventListener("click", async () => {
  const group = document.getElementById("group").value.trim();
  const user = document.getElementById("user").value.trim();
  const dua = document.getElementById("dua").value.trim();
  const count = parseInt(document.getElementById("count").value.trim()) || 0;

  if (!group || !user || !dua || count <= 0) {
    alert("Please fill all fields correctly.");
    return;
  }

  const response = await fetch(sheetURL, {
    method: 'POST',
    body: JSON.stringify({ action: "submit", group, user, dua, count }),
    headers: { 'Content-Type': 'application/json' }
  });

  const result = await response.text();
  alert(result || "Submitted!");
  document.getElementById("duaForm").reset();
});

// Refresh total count
document.getElementById("refreshTotalBtn").addEventListener("click", async () => {
  const res = await fetch(sheetURL + "?action=total");
  const data = await res.json();
  document.getElementById("totalDisplay").innerText = `🌟 Total Duas Submitted: ${data.total}`;
});

// Refresh dashboard
document.getElementById("refreshDashboardBtn").addEventListener("click", async () => {
  const res = await fetch(sheetURL + "?action=dashboard");
  const data = await res.json();
  const tbody = document.getElementById("dashboardTableBody");
  tbody.innerHTML = "";

  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.group}</td><td>${row.dua}</td><td>${row.total}</td>`;
    tbody.appendChild(tr);
  });
});
