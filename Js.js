const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Get references for login and sign-up forms and buttons
const loginButton = document.querySelector('.sign-in button');
const signUpButton = document.querySelector('.sign-up button');
const loginEmailInput = document.querySelector('.sign-in input[type="email"]');
const loginPasswordInput = document.querySelector('.sign-in input[type="password"]');
const signUpNameInput = document.querySelector('.sign-up input[type="text"]');
const signUpEmailInput = document.querySelector('.sign-up input[type="email"]');
const signUpPasswordInput = document.querySelector('.sign-up input[type="password"]');

// Predefined username and password for login validation
const predefinedEmail = "Herly@gmail.com";
const predefinedPassword = "HKing";

/* Login button event
loginButton.addEventListener('click', () => {
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    if (email === predefinedEmail && password === predefinedPassword) {
        alert("Login successful! Welcome to Catfe!!!");
        window.location.href = "Website.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Sign-up button event
signUpButton.addEventListener('click', () => {
    const name = signUpNameInput.value.trim();
    const email = signUpEmailInput.value.trim();
    const password = signUpPasswordInput.value.trim();

    if (!name || !email || !password) {
        alert("Please fill in all fields to sign up.");
        return;
    }

    alert("Sign-up successful! Welcome Catfe!!!");
    window.location.href = "Website.html"; // Redirect to homepage
});


*/





// Reference to popup elements
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const popupGif = document.getElementById('popup-gif');
const closePopupButton = document.getElementById('close-popup');

// Function to show the popup
function showPopup(message, gifSrc) {
    popupMessage.textContent = message;
    popupGif.src = gifSrc;
    popup.classList.remove('hidden');
}

// Event listener to close the popup
closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Update login and sign-up buttons to use the custom popup
loginButton.addEventListener('click', () => {
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (!email || !password) {
        showPopup("Please fill in both email and password.", "pictures/Failed2.gif");
        return;
    }

    if (email === predefinedEmail && password === predefinedPassword) {
        showPopup("Login successful! Welcome to Catfe!!!", "pictures/success.gif");
        setTimeout(() => {
            window.location.href = "Website.html"; // Redirect to homepage
        }, 2000);
    } else {
        showPopup("Invalid email or password. Please try again.", "pictures/Failed5.gif");
    }
});

signUpButton.addEventListener('click', () => {
    const name = signUpNameInput.value.trim();
    const email = signUpEmailInput.value.trim();
    const password = signUpPasswordInput.value.trim();

    if (!name || !email || !password) {
        showPopup("Please fill in all fields to sign up.", "pictures/Failed4.gif");
        return;
    }

    showPopup("Sign-up successful! Welcome to Catfe!!!", "pictures/success2.gif");
    setTimeout(() => {
        window.location.href = "Website.html"; // Redirect to homepage
    }, 2000);
});
