/*A JavaScript to provide basic symptoms diagnostics for user*/
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Extract form data
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      countryCode: document.getElementById("countryCode").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      job: document.getElementById("job").value,
      password: document.getElementById("password").value,
      passwordConfirmation: document.getElementById("passwordConfirmation")
        .value,
    };

    // Here, you can send the form data to the server to create the account
    // For demonstration purposes, we'll just log the form data
    console.log("Form Data:", formData);

    // Optionally, you can reset the form after submission
    signupForm.reset();
  });
});
