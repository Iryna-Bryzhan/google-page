// Отримуємо кнопку "Мені пощастить"
const luckyButton = document.querySelector('.button--plain:nth-of-type(2)');

// Отримуємо елемент логотипу
const logo = document.querySelector('.main__logo');

// Слухаємо клік на кнопку
luckyButton.addEventListener('click', function() {
    // Змінюємо src атрибут логотипу на нове зображення
    logo.src = "images/oddity.jpeg"; 
});