// ✅ Replace with your actual Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbxRI0MVcqSKrAZO5D-g5EfXFaEVoyAJ0PnJItkN8Vm8QULvmsdvgdf1Nlb4Ew6GH6Dptw/exec";

// ✅ Grab form by ID
const form = document.forms["dua-form"];

// ✅ When Submit Button is Clicked
form.addEventListener("submit", e => {
  e.preventDefault();

  document.getElementById("submit-btn").innerText = "Submitting...";
  document.getElementById("submit-btn").disabled = true;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      alert("✅ Dua submitted successfully!");
      form.reset();
      document.getElementById("submit-btn").innerText = "Submit Dua";
      document.getElementById("submit-btn").disabled = false;
    })
    .catch(error => {
      console.error("❌ Submission error:", error.message);
      alert("❌ There was an error submitting your dua.");
      document.getElementById("submit-btn").innerText = "Submit Dua";
      document.getElementById("submit-btn").disabled = false;
    });
});
