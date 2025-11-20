// Selecting inputs and buttons
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const loginBtn = document.querySelector("button");
const forgotLink = document.querySelector(".login-box a");
const createAccountBtn = document.querySelector(".create-account");
const createPageLink = document.querySelector("p a");

// LOGIN FUNCTION
loginBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    alert("Login successful.");
});

// FORGOT PASSWORD
forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to forgot password page.");
    // Add real page link later
});

// CREATE NEW ACCOUNT
createAccountBtn.addEventListener("click", () => {
    alert("Redirecting to create account page.");
    // Add real page link later
});

// CREATE A PAGE (for celebrity/brand/business)
createPageLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to your custom page soon...");
    window.location.href = "page.html";  // Landing Page
});
