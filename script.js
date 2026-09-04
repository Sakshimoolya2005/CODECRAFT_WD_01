```javascript
// Get the navigation bar
const navbar = document.querySelector(".navbar");

// Get the mobile menu button
const menuToggle = document.getElementById("menuToggle");

// Get the navigation links
const navLinks = document.getElementById("navLinks");


// Change navbar style when scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.background = "#111";
        navbar.style.padding = "12px 60px";
    } else {
        navbar.style.background = "#222";
        navbar.style.padding = "20px 60px";
    }

});


// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
```
