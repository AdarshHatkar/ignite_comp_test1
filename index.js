

// Get a reference to the button element
const backToTopButton = document.getElementById("back_to_top");

// Show/hide the button based on the user's scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






