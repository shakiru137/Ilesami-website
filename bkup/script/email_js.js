(<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"></script>)(
  function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  }
)();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Send the form data to EmailJS
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function (response) {
        alert("Message sent successfully!");
        // Optionally, reset the form after submission
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
  });
