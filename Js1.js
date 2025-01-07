// Cart Functionality
const cartPopup = document.getElementById('cart-popup');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const closeCartButton = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Thank You Popup Elements
const thankYouPopup = document.getElementById('thank-you-popup');
const thankYouOkButton = document.getElementById('thank-you-ok');

let cart = []; // Array to store selected items


// Function to add an item to the cart
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const drinkId = button.getAttribute('data-drink-id');
        const drinkName = button.parentElement.querySelector('h4').textContent;
        const price = 150; // Assign a base price (adjust as needed)

        const item = cart.find((item) => item.id === drinkId);
        if (item) {
            item.quantity += 1; // Increment quantity if item already in cart
        } else {
            cart.push({ id: drinkId, name: drinkName, price: price, quantity: 1 });
        }
        updateCart();
    });
});


// Function to update the cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - PhP ${item.price * item.quantity}`;
        cartItems.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: PhP ${total.toFixed(2)}`;
    cartPopup.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
}



// Event listener to close the cart
closeCartButton.addEventListener('click', () => {
    cartPopup.classList.add('hidden');
    cartOverlay.classList.add('hidden');
});

// Event listener for checkout
checkoutButton.addEventListener('click', () => {
    cart = []; // Clear the cart
    updateCart();
    cartPopup.classList.add('hidden');
    cartOverlay.classList.add('hidden');

    // Show Thank You Popup
    thankYouPopup.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
});

// Event listener for the "OK" button in the thank-you popup
thankYouOkButton.addEventListener('click', () => {
    thankYouPopup.classList.add('hidden');
    cartOverlay.classList.add('hidden');
});




// Logout Functionality
const logoutButton = document.getElementById('logout-button');
const logoutPopup = document.getElementById('logout-popup');
const logoutConfirm = document.getElementById('logout-confirm');
const logoutCancel = document.getElementById('logout-cancel');

// Show logout confirmation popup
logoutButton.addEventListener('click', () => {
    logoutPopup.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
});

// Confirm logout
logoutConfirm.addEventListener('click', () => {
    window.location.href = 'Index.html'; // Redirect to login page
});

// Cancel logout
logoutCancel.addEventListener('click', () => {
    logoutPopup.classList.add('hidden');
    cartOverlay.classList.add('hidden');
});




let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // User is scrolling down, hide the header
        header.style.transform = 'translateY(-100%)';
    } else {
        // User is scrolling up, show the header
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY; // Update last scroll position
});
