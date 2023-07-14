document
  .getElementById("inmateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var inmateName = document.getElementById("inmateName").value;
    if (inmateName.trim() !== "") {
      var message = "Thank you for listing " + inmateName + " on the site!";
      document.getElementById("message").textContent = message;
      document.getElementById("inmateForm").reset();
    } else {
      document.getElementById("message").textContent =
        "Please enter a valid inmate name.";
    }
  });
