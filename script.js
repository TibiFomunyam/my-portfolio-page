// Find the button and additional information
const moreButton = document.getElementById("moreButton");

const moreAbout = document.getElementById("moreAbout");

// Listen for button clicks
moreButton.addEventListener("click", function() {

    // Check if the information is hidden
    if (moreAbout.hidden === true) {

        // Show the information
        moreAbout.hidden = false;

        // Change button text
        moreButton.textContent = "Show Less";

    } else {

        // Hide the information
        moreAbout.hidden = true;

        // Change button text
        moreButton.textContent = "Show More About Me";

    }

});