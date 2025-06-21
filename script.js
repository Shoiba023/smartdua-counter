// Replace with your actual Google Sheets Script Web App URLs
const TOTAL_COUNT_URL = "https://script.google.com/macros/s/AKfycbx-BXENlELel8B6jINa-RnUAj3Q0DxQfH6dWFkfVc_gycRshnJ_db5KApe3Qn_WlVl9qg/exec?action=total";
const DASHBOARD_URL = "https://script.google.com/macros/s/AKfycbx-BXENlELel8B6jINa-RnUAj3Q0DxQfH6dWFkfVc_gycRshnJ_db5KApe3Qn_WlVl9qg/exec?action=dashboard";

// Refresh Total Count
document.getElementById("refreshTotal").addEventListener("click", () => {
  fetch(TOTAL_COUNT_URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("totalCount").textContent = data.total || 0;
    })
    .catch((err) => {
      console.error("Error fetching total count:", err);
      alert("Failed to load total count.");
    });
});

// Refresh Dashboard Table
document.getElementById("refreshDashboard").addEventListener("click", () => {
  fetch(DASHBOARD_URL)
    .then((res) => res.json())
    .then((data) => {
      renderDashboard(data);
    })
    .catch((err) => {
      console.error("Error fetching dashboard:", err);
      alert("Failed to load dashboard.");
    });
});

// Render Dashboard Table
function renderDashboard(data) {
  const tableContainer = document.getElementById("dashboardTable");
  if (!data || !Array.isArray(data) || data.length === 0) {
    tableContainer.innerHTML = "<p>No data available.</p>";
    return;
  }

  let tableHTML = "<table><thead><tr><th>Group</th><th>Dua</th><th>Total Count</th></tr></thead><tbody>";
  data.forEach((item) => {
    tableHTML += `<tr>
        <td>${item.group}</td>
        <td>${item.dua}</td>
        <td>${item.total}</td>
      </tr>`;
  });
  tableHTML += "</tbody></table>";
  tableContainer.innerHTML = tableHTML;
}

// Auto-load on page load
window.addEventListener("load", () => {
  document.getElementById("refreshTotal").click();
  document.getElementById("refreshDashboard").click();
});
