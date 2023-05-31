

var themeButton = document.getElementById('design_button');
var themeButtonActive = false;
function themeOpen() {
    var themeConainer = document.getElementById('theme_container');
    if(themeButtonActive == false) {
        themeConainer.classList.add('active');
        themeButtonActive = true;
    } else {
        themeConainer.classList.remove('active');
        themeButtonActive = false;
    }
}
themeButton.addEventListener('click', themeOpen);

// Change theme

var body = document.getElementById('body');
var radios = document.getElementsByClassName("theme_radios");
var themeButtons = document.querySelectorAll(".theme_buttons");

function themeOne() {body.style.setProperty('--accent-color', 'rgb(0, 200, 255)');}
function themeTwo() {body.style.setProperty('--accent-color', 'rgb(255, 200, 0)');}
function themeThree() {body.style.setProperty('--accent-color', 'rgb(255, 0, 50)');}
function themeFour() {body.style.setProperty('--accent-color', 'rgb(0, 255, 100)');}
function themeFive() {body.style.setProperty('--accent-color', 'rgb(150, 0, 255)');}

themeButtons[0].addEventListener('click', themeOne);
themeButtons[1].addEventListener('click', themeTwo);
themeButtons[2].addEventListener('click', themeThree);
themeButtons[3].addEventListener('click', themeFour);
themeButtons[4].addEventListener('click', themeFive);