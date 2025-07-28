document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const roll = document.getElementById("roll").value.trim();
  const group = document.getElementById("group").value.trim();
  const subject = document.getElementById("subject").value.trim();

  if (!name || !email || !password || !roll || !group || !subject) {
    alert("Please fill out all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
    alert("Name should contain only letters and spaces.");
    return;
  }

  if (!/^[a-zA-Z0-9]+$/.test(roll)) {
    alert("Roll number must be alphanumeric.");
    return;
  }

  alert("Form submitted successfully!");

  // Clear form after submission
  this.reset();
});
