
// Body overflow control
function bodyOverflowHidden(operation) {
    if(operation == 'add') {
        body.classList.add('overflowHidden');
    } else if(operation == 'remove') {
        body.classList.remove('overflowHidden');
    } else {
        console.log('Bug :)');
    }
}

// Accent Functions

var designButton = document.getElementById('design_button');
var designContainerActive = false;
function changeAccent() {
    var designContainer = document.getElementById('change_accent_container');
    if(designContainerActive == false) {
        designContainer.classList.add('active');
        designContainerActive = true;
        bodyOverflowHidden('add');
    } else {
        designContainer.classList.remove('active');
        designContainerActive = false;
        bodyOverflowHidden('remove');
    }
}
designButton.addEventListener('click', changeAccent);

// Change Accent

var body = document.getElementById('body');
var radios = document.getElementsByClassName("accent_radios");
var accentButtons = document.querySelectorAll(".accent_colors");

function accentBlue() {body.style.setProperty('--accent', 'rgb(0, 200, 255)');}
function accentGreen() {body.style.setProperty('--accent', 'rgb(0, 255, 100)');}
function accentRed() {body.style.setProperty('--accent', 'rgb(255, 0, 50)');}
function accentYellow() {body.style.setProperty('--accent', 'rgb(255, 200, 0)');}
function accentPurple() {body.style.setProperty('--accent', 'rgb(150, 0, 255)');}

accentButtons[0].addEventListener('click', accentBlue);
accentButtons[1].addEventListener('click', accentGreen);
accentButtons[2].addEventListener('click', accentRed);
accentButtons[3].addEventListener('click', accentYellow);
accentButtons[4].addEventListener('click', accentPurple);


var accentApply = document.querySelector('#cac_apply');
var accentCancel = document.querySelector('#cac_cancel');

accentApply.addEventListener('click', changeAccent);
// accentCancel.addEventListener('click', changeAccent);




// Scroll Reveal
var slideUp = {
    distance: '25%',
    origin: 'bottom',
    opacity: 0.7,
    reset: true,
    duartion: 300,
};

var revealElements = ['.aboutme_container', '.services_container','.portfolio_container', '#projects_container' ,'.content_container' ,'.contact_container']
revealElements.forEach(e => {ScrollReveal().reveal(e, slideUp);});
