const scriptURL = "https://script.google.com/macros/s/AKfycbxprOAbkEbJnu2X_Fb8oMERs37tiajfiTdKj650eWI5lXiYHPtaCmfBig7xFzWZQ29d-Q/exec";

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
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    alert("✅ Your Dua has been submitted successfully!");
    document.getElementById("duaForm").reset();
  } catch (error) {
    alert("❌ Submission failed. Please try again.");
    console.error("Error!", error.message);
  }
});
