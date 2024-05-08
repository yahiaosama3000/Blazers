document.addEventListener("DOMContentLoaded", function() {
    event.preventDefault();
    
    // Dummy admin credentials
    const adminUsername = "admin";
    const adminPassword = "admin123";
    
    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if username and password match the admin credentials
    if (username === adminUsername && password === adminPassword) {
      alert("Login successful! Redirecting to dashboard...");
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  