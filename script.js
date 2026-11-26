const moreButton = document.getElementById("moreButton");
const moreAbout = document.getElementById("moreAbout");

moreButton.addEventListener("click", function() {

    if (moreAbout.hidden) {
        moreAbout.hidden = false;
        moreButton.textContent = "Show Less";
    } else {
        moreAbout.hidden = true;
        moreButton.textContent = "Show More About Me";
    }

});