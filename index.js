const luckyButton = document.querySelector('.button--main:nth-of-type(2)');
const logo = document.querySelector('.main__logo');
luckyButton.addEventListener('click', function() {
    logo.src = "images/oddity.jpeg"; 
});