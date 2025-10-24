// Number Guessing Game
class NumberGuessingGame {
  constructor() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.guessesLeft = 10;
    this.previousGuesses = [];
    this.gameOver = false;

    this.initializeElements();
    this.attachEventListeners();
    this.updateDisplay();
  }

  initializeElements() {
    this.guessInput = document.getElementById("guessInput");
    this.submitBtn = document.getElementById("submitBtn");
    this.newGameBtn = document.getElementById("newGameBtn");
    this.hintBtn = document.getElementById("hintBtn");
    this.feedback = document.getElementById("feedback");
    this.guessesLeftDisplay = document.getElementById("guessesLeft");
    this.previousGuessesDisplay = document.getElementById("previousGuesses");
  }

  attachEventListeners() {
    this.submitBtn.addEventListener("click", () => this.submitGuess());
    this.newGameBtn.addEventListener("click", () => this.newGame());
    this.hintBtn.addEventListener("click", () => this.showHint());

    // Allow Enter key to submit guess
    this.guessInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.submitGuess();
      }
    });

    // Focus input on page load
    this.guessInput.focus();
  }

  submitGuess() {
    if (this.gameOver) return;

    const guess = parseInt(this.guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      this.showFeedback(
        "Please enter a valid number between 1 and 100!",
        "error"
      );
      return;
    }

    // Check if already guessed this number
    if (this.previousGuesses.includes(guess)) {
      this.showFeedback(
        "You already guessed that number! Try a different one.",
        "error"
      );
      return;
    }

    // Add guess to history
    this.previousGuesses.push(guess);
    this.guessesLeft--;

    // Check guess
    if (guess === this.secretNumber) {
      this.showFeedback(
        `🎉 Congratulations! You guessed it! The number was ${this.secretNumber}!`,
        "correct"
      );
      this.endGame(true);
    } else if (guess > this.secretNumber) {
      this.showFeedback(`Too high! Try a lower number.`, "too-high");
    } else {
      this.showFeedback(`Too low! Try a higher number.`, "too-low");
    }

    // Check if out of guesses
    if (this.guessesLeft === 0 && !this.gameOver) {
      this.showFeedback(
        `Game Over! The secret number was ${this.secretNumber}.`,
        "game-over"
      );
      this.endGame(false);
    }

    this.updateDisplay();
    this.guessInput.value = "";
  }

  showHint() {
    if (this.gameOver) return;

    const hints = [
      `The number is ${this.secretNumber % 2 === 0 ? "even" : "odd"}.`,
      `The number is ${
        this.secretNumber > 50 ? "greater than 50" : "50 or less"
      }.`,
      `The number is ${
        this.secretNumber % 10 === 0
          ? "a multiple of 10"
          : "not a multiple of 10"
      }.`,
      `The number is ${
        this.secretNumber > 25 && this.secretNumber < 75
          ? "between 25 and 75"
          : "not between 25 and 75"
      }.`,
    ];

    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    this.showFeedback(`💡 Hint: ${randomHint}`, "hint");
  }

  showFeedback(message, type) {
    this.feedback.textContent = message;
    this.feedback.className = `feedback ${type}`;
  }

  updateDisplay() {
    this.guessesLeftDisplay.textContent = this.guessesLeft;
    this.previousGuessesDisplay.textContent =
      this.previousGuesses.length > 0
        ? this.previousGuesses.join(", ")
        : "None yet";
  }

  endGame(won) {
    this.gameOver = true;
    this.submitBtn.disabled = true;
    this.hintBtn.disabled = true;
    this.newGameBtn.style.display = "inline-block";
    this.guessInput.disabled = true;
  }

  newGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.guessesLeft = 10;
    this.previousGuesses = [];
    this.gameOver = false;

    this.submitBtn.disabled = false;
    this.hintBtn.disabled = false;
    this.newGameBtn.style.display = "none";
    this.guessInput.disabled = false;
    this.guessInput.value = "";
    this.guessInput.focus();

    this.showFeedback(
      "New game started! Guess a number between 1 and 100.",
      ""
    );
    this.updateDisplay();
  }
}

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new NumberGuessingGame();
});
