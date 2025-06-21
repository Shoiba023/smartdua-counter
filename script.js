document.getElementById("duaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    group: form.group.value,
    name: form.name.value,
    dua: form.dua.value,
    count: form.count.value,
    location: form.location.value,
    notes: form.notes.value
  };

  fetch("https://script.google.com/macros/s/AKfycbx-BXENlELel8B6jINa-RnUAj3Q0DxQfH6dWFkfVc_gycRshnJ_db5KApe3Qn_WlVl9qg/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.ok) {
      alert("Dua submitted successfully!");
      form.reset();
    } else {
      alert("Submission failed.");
    }
  });
});
