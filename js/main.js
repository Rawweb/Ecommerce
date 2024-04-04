// SLIDENAV
function slideNav() {
    const nav = document.querySelector(".slider");
    const navWidth = nav.offsetWidth;
    let currentPosition = 0;
    const direction = 1; // 1 for right, -1 for left
    const speed = 1; // Adjust speed as needed

    //     // Duplicate the slider content
    // nav.innerHTML += nav.innerHTML;

    function animate() {
        currentPosition += direction * speed;
        // Reset position just before the slider moves out of view
        if (currentPosition > window.innerWidth - navWidth) {
            currentPosition = -navWidth;
        } else if (currentPosition < -navWidth + 1) {
            currentPosition = window.innerWidth - navWidth;
        }
        nav.style.transform = "translateX(" + currentPosition + "px)";
        requestAnimationFrame(animate);
    }

    animate();
}

// Call the function when the page is loaded
window.onload = slideNav;

// MOBILE NAV
const mobileNav = document.getElementById("mobile-nav");
const toggleIcon = document.getElementById("toggle-icon");
const mobileClose = document.getElementById("mobile-close");

toggleIcon.addEventListener("click", () => {
    mobileNav.classList.add("show-mobile");
});

mobileClose.addEventListener("click", () => {
    mobileNav.classList.remove("show-mobile");
});

// SEARCH BAR
const inputBox = document.querySelector(".input__box");
const searchIcon = document.getElementById("search-icon");
const navBar = document.querySelector(".nav");

searchIcon.addEventListener("click", () => {
    inputBox.classList.toggle("show-input");

    // if (navBar.classList.contains('container')) {
    //     searchIcon.classList.add('bx-x');
    // } else {
    //     searchIcon.classList.replace("bx-x", 'bx-search');
    // }
});

// SCROLL HEADER
function scrollHeader() {
    const header = document.getElementById("header");
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// SIGNIN OPEN
const signInIcon = document.getElementById("user-icon");
const signIn = document.getElementById("signin");
const signInClose = document.getElementById("signin-close");

signInIcon.addEventListener("click", () => {
    signIn.classList.add("show-signin");
});

signInClose.addEventListener("click", () => {
    signIn.classList.remove("show-signin");
});

// CART OPEN
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const cartClose = document.getElementById("cart-close");

cartIcon.addEventListener("click", () => {
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
var swiper = new Swiper(".my-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

// SHOW SCROLLUP
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    //when the scroll is higher than 350 viewport height, add the show-scroll class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

// MUSIC JS

// LOGO SWIPER
var swiper = new Swiper(".logo-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

// MUSIC ARRIVAL SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

// COUNTDOWN
// Select the classes
const counterCards = document.querySelector(".counter_cards");
const items = document.querySelectorAll(".counter_card h3");

// Set the date we're counting down to
let futureDate = new Date("Apr 7, 2024 20:51:25");

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = futureDate.getMonth();
const date = futureDate.getDate();

// future time in Milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s  = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hrs

    // Values in Milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }

        return item;
    }

    // Iterate over my items
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    // CLear Intervals 
    if(t<0) {
        clearInterval(countdown);
        counterCards.innerHTML = `<h3 class="expired">Sorry this giveaway has expired</h3>`
    }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

// // Set the date we're counting down to
// var countDownDate = new Date("Apr 3, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the elements with class="counter_num"
//     document.querySelector(".days").innerHTML = days;
//     document.querySelector(".hours").innerHTML = hours;
//     document.querySelector(".minutes").innerHTML = minutes;
//     document.querySelector(".seconds").innerHTML = seconds;

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.querySelector(".counter_info").innerHTML = "EXPIRED";
//     }
// }, 1000);
