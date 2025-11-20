// --- JavaScript Login and Interaction Logic ---

// IMPORTANT: This file contains the displayMessage function, which must be 
// defined before other functions try to call it.

// --- Custom Message Box Implementation ---
// This function replaces the use of alert() which is not permitted in this environment.
function displayMessage(message) {
    let msgBox = document.getElementById('message-box');
    
    // Create message box if it doesn't exist
    if (!msgBox) {
        msgBox = document.createElement('div');
        msgBox.id = 'message-box';
        // Inline styles for the message box
        msgBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #333;
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            text-align: center;
        `;
        document.body.appendChild(msgBox);
    }

    msgBox.textContent = message;
    msgBox.style.opacity = '1';

    // Automatically hide after 2 seconds
    setTimeout(() => {
        msgBox.style.opacity = '0';
    }, 2000);
}


// Selecting inputs and buttons using IDs and classes for precision
const emailInput = document.querySelector("input[type='email']"); 
const passwordInput = document.querySelector("input[type='password']");
const loginBtn = document.getElementById("login-btn");
const forgotLink = document.getElementById("forgot-link");
const createAccountBtn = document.querySelector(".create-account");
// The main link wrapper for the "Create a Page" group
const createPageLinkGroup = document.getElementById("create-page-link-main"); 

// LOGIN FUNCTION
loginBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        // Using the custom message box
        displayMessage("Please enter both email and password.");
        return;
    }

    displayMessage("Login successful.");
});

// FORGOT PASSWORD
forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    displayMessage("Redirecting to forgot password page.");
});

// CREATE NEW ACCOUNT
createAccountBtn.addEventListener("click", () => {
    displayMessage("Redirecting to create account page.");
});

// CREATE A PAGE 
createPageLinkGroup.addEventListener("click", (e) => {
    e.preventDefault();
    displayMessage("Redirecting to your custom page soon...");
    window.location.href = "page.html"; 
});
