

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
