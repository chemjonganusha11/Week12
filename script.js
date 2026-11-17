// --- Week 10: Time-Based Greeting ---
const greetingText = document.querySelector("#greeting-text");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greetingText.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
    greetingText.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
    greetingText.textContent = "Good evening! Welcome to my portfolio.";
}

// --- Week 11: DOM and Dynamic Event Handling (Dark Mode) ---
const themeButton = document.querySelector("#theme-toggle");
const bodyElement = document.body;

themeButton.addEventListener("click", function () {
    bodyElement.classList.toggle("dark-mode");
});