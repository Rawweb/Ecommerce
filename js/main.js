// // SLIDENAV
// function slideNav() {
//     const nav = document.querySelector(".slider");
//     const navWidth = nav.offsetWidth;
//     let currentPosition = 0;
//     const direction = 1; // 1 for right, -1 for left
//     const speed = 1; // Adjust speed as needed

//     //     // Duplicate the slider content
//     // nav.innerHTML += nav.innerHTML;

//     function animate() {
//         currentPosition += direction * speed;
//         // Reset position just before the slider moves out of view
//         if (currentPosition > window.innerWidth - navWidth) {
//             currentPosition = -navWidth;
//         } else if (currentPosition < -navWidth + 1) {
//             currentPosition = window.innerWidth - navWidth;
//         }
//         nav.style.transform = "translateX(" + currentPosition + "px)";
//         requestAnimationFrame(animate);
//     }

//     animate();
// }

// // Call the function when the page is loaded
// window.onload = slideNav;

// MOVILE NAV
const navToggle = document.querySelector(".nav__toggle");
const mobileNav = document.querySelector(".mobile__container");
const mobileClose = document.querySelector(".mobile__close");

navToggle.addEventListener("click", () => {
    console.log("navToggle");
    mobileNav.classList.add("show-mobile");
});

mobileClose.addEventListener("click", () => {
    mobileNav.classList.remove("show-mobile");
});

// SIGNIN OPEN
const signInOpen = document.getElementById("signin-open");
const signIn = document.getElementById("signin");
const signInClose = document.getElementById("signin-close");

signInOpen.addEventListener("click", () => {
    signIn.classList.add("show-signin");
});

signInClose.addEventListener("click", () => {
    signIn.classList.remove("show-signin");
});

// CART OPEN
const cartOpen = document.getElementById("cart-open");
const cart = document.getElementById("cart");
const cartClose = document.getElementById("cart-close");

cartOpen.addEventListener("click", () => {
    cart.classList.add("show-cart");
});

cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
});

// CART COUNT
// Function to update the item amount
function updateItemAmount(item, price) {
    const countElement = item.querySelector(".label__count-num");
    const amountElement = item.querySelector(".label__amount");
    let quantity = parseInt(countElement.textContent);
    let amount = (quantity * price).toFixed(2);
    amountElement.textContent = `$${amount}`;
}

// Function to initialize cart item functionality
function setupCartItem(item) {
    const price = parseFloat(
        item.querySelector(".label__amount").textContent.slice(1)
    ); // Extract price and convert to number
    const minusButton = item.querySelector(".bx-minus");
    const plusButton = item.querySelector(".bx-plus");
    const deleteButton = item.querySelector(".label__delete");
    const countElement = item.querySelector(".label__count-num");

    // Minus button click event
    minusButton.addEventListener("click", () => {
        let quantity = parseInt(countElement.textContent);
        if (quantity > 1) {
            // Prevent quantity from going below 1
            quantity--;
            countElement.textContent = quantity;
            updateItemAmount(item, price);
        }
    });

    // Plus button click event
    plusButton.addEventListener("click", () => {
        let quantity = parseInt(countElement.textContent);
        quantity++;
        countElement.textContent = quantity;
        updateItemAmount(item, price);
    });

    // Delete button click event
    deleteButton.addEventListener("click", () => {
        item.remove(); // Remove the cart item element
        // You may also want to update the overall cart total here
    });

    // Initialize item amount
    updateItemAmount(item, price);
}

// Get all cart items and set them up
document.querySelectorAll(".cart__content").forEach(setupCartItem);

// Function to calculate and update the subtotal and total amounts
function updateCartAmounts() {
    let subtotal = 0;
    let total = 0;
    const shippingCost = 20; // Assuming a flat shipping cost, adjust as needed

    // Calculate subtotal by summing the amounts of all cart items
    document.querySelectorAll(".cart__content").forEach((item) => {
        const quantity = parseInt(
            item.querySelector(".label__count-num").textContent
        );
        const price = parseFloat(
            item.querySelector(".label__amount").textContent.slice(1)
        );
        subtotal += quantity * price;
    });

    // Calculate total (you might want to add tax, shipping, etc.)
    total = subtotal + shippingCost;

    // Update the subtotal and total on the page
    document.querySelector(
        ".subtotal__amount"
    ).textContent = `$${subtotal.toFixed(0)}`;
    document.querySelector(".total__amount").textContent = `$${total.toFixed(
        0
    )}`;
}

// Call updateCartAmounts whenever the cart is updated
document
    .querySelectorAll(".bx-plus, .bx-minus, .label__delete")
    .forEach((button) => {
        button.addEventListener("click", () => {
            // Wait for the cart item update to complete before recalculating amounts
            setTimeout(updateCartAmounts, 0);
        });
    });

// Initialize the cart amounts
updateCartAmounts();

// HERO SWIPER
var heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// NEW ARRIVALS SWIPER
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 15,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
