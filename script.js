
// Welcome message in browser console

console.log("Welcome to Gulshan's Portfolio!");

// Select all navigation links

const navLinks = document.querySelectorAll("nav a");

// Add click event to navigation links

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("You clicked: " + link.textContent);

    });

});
