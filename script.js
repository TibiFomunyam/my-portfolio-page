// Select the button and the extra information
const moreButton = document.getElementById("moreButton");
const moreAbout = document.getElementById("moreAbout");

// Make the button show and hide the information
moreButton.addEventListener("click", function() {

    if (moreAbout.hidden === true) {

        moreAbout.hidden = false;
        moreButton.textContent = "Show Less";

    } else {

        moreAbout.hidden = true;
        moreButton.textContent = "Show More About Me";

    }

});