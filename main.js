// Variables
const firstScreen = document.querySelector('.screen1');
const secondScreen = document.querySelector('.screen2');
const cookie = document.querySelector('.screen1 img');

// Functions
function openCookie() {
    firstScreen.classList.add('hide');
    secondScreen.classList.remove('hide');
}

// Events
cookie.addEventListener('click', openCookie);