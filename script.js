// Таймер
const countdown = () => {
    const endDate = new Date('2024-10-18T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "It's time!";
        document.getElementById("card-button").disabled = false; 
    }
};

let timerInterval = setInterval(countdown, 1000);


document.getElementById("card-button").addEventListener("click", function() {
    document.getElementById("countdown-section").style.display = "none";
    document.getElementById("card-section").style.display = "flex";
});

// Открытие письма при нажатии на кнопку
document.getElementById("card-button").addEventListener("click", function() {
    document.getElementById("countdown-section").style.display = "none";
    document.getElementById("card-section").style.display = "flex";

    // Hide all texts except the first one
    texts.forEach((text, index) => {
        text.style.display = (index === 0) ? 'flex' : 'none';
    });
});

// Логика перелистывания текста
let currentText = 0; // Начальный индекс текста
const texts = document.querySelectorAll('.card-text'); // Все элементы текста
const nextButton = document.getElementById("next-button"); // Кнопка "Далее"

// Устанавливаем обработчик события для кнопки "Далее"
nextButton.addEventListener("click", () => {
    // Скрываем текущий текст
    texts[currentText].style.display = 'none';
    
    // Увеличиваем счетчик
    currentText++; 
    console.log(currentText);
    console.log(texts.length);
    // Проверяем, есть ли еще тексты
    if (currentText < texts.length-1)  {
        // Показываем следующий текст
        texts[currentText].style.display = 'flex';
    } else {
        texts[currentText].style.display = 'flex';
        nextButton.style.display = 'none'; 
    }
});
