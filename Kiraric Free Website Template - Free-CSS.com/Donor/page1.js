// script.js

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var area = document.getElementById("area").value;
    var governorate = document.getElementById("governorate").value;

    // Here you can perform additional validation if needed

    // Create user object
    var user = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        contactNumber: contactNumber,
        password: password,
        address: address,
        area: area,
        governorate: governorate
    };

    // Here you can send the user object to your server-side script for further processing
    console.log(user);

    // For demo purposes, let's just alert the user
    alert("Registration Successful!");
});
