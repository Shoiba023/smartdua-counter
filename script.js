document.getElementById('duaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const group = document.getElementById('group').value;
  const name = document.getElementById('name').value;
  const dua = document.getElementById('dua').value;
  const count = document.getElementById('count').value;

  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify({
      group,
      name,
      dua,
      count
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Your dua has been submitted!");
    document.getElementById('duaForm').reset();
  })
  .catch(err => {
    console.error("Error:", err);
    alert("❌ Failed to submit. Please try again.");
  });
});
