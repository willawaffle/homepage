// Willa's Homepage JavaScript - Fun and Interactive!

class WillasHomepage {
  constructor() {
    // Check if returning from number game
    const returningFromNumberGame = sessionStorage.getItem(
      "returningFromNumberGame"
    );
    if (returningFromNumberGame) {
      this.currentSection = "games";
      sessionStorage.removeItem("returningFromNumberGame");
    } else {
      this.currentSection = "about";
    }

    this.visitCount = parseInt(localStorage.getItem("visitCount") || "0");
    this.eggCount = parseInt(localStorage.getItem("eggCount") || "0");
    this.secretPassword = "ummmhithisismypasswordhehe"; // Change this to whatever Willa wants!
    this.playerMoneyAmount = parseInt(
      localStorage.getItem("playerMoney") || "100"
    );

    this.initializeElements();
    this.attachEventListeners();
    this.initializePage();
  }

  initializeElements() {
    // Navigation elements
    this.navButtons = document.querySelectorAll(".nav-btn");
    this.sections = document.querySelectorAll(".content-section");

    // Header elements
    this.mainTitle = document.getElementById("mainTitle");
    this.tagline = document.getElementById("tagline");
    this.randomTitleBtn = document.getElementById("randomTitleBtn");

    // About section elements
    this.avatar = document.getElementById("avatar");
    this.aboutText = document.getElementById("aboutText");
    this.changeAvatarBtn = document.getElementById("changeAvatarBtn");
    this.changeAboutBtn = document.getElementById("changeAboutBtn");
    this.moodSlider = document.getElementById("moodSlider");
    this.moodDisplay = document.getElementById("moodDisplay");

    // Favorites section elements
    this.favColor = document.getElementById("favColor");
    this.colorName = document.getElementById("colorName");
    this.favFood = document.getElementById("favFood");
    this.addFoodBtn = document.getElementById("addFoodBtn");
    this.foodList = document.getElementById("foodList");
    this.favAnimal = document.getElementById("favAnimal");
    this.animalDisplay = document.getElementById("animalDisplay");

    // Games section elements
    this.rpsBtn = document.getElementById("rpsBtn");
    this.rpsResult = document.getElementById("rpsResult");
    this.color1 = document.getElementById("color1");
    this.color2 = document.getElementById("color2");
    this.mixedColor = document.getElementById("mixedColor");

    // New game elements
    this.memoryBtn = document.getElementById("memoryBtn");
    this.memoryResult = document.getElementById("memoryResult");
    this.reactionBtn = document.getElementById("reactionBtn");
    this.reactionResult = document.getElementById("reactionResult");
    this.scrambleBtn = document.getElementById("scrambleBtn");
    this.scrambleResult = document.getElementById("scrambleResult");
    this.letterCountSlider = document.getElementById("letterCountSlider");
    this.letterCountDisplay = document.getElementById("letterCountDisplay");
    this.slotsBtn = document.getElementById("slotsBtn");
    this.slotsResult = document.getElementById("slotsResult");
    this.playerMoney = document.getElementById("playerMoney");
    this.simonBtn = document.getElementById("simonBtn");
    this.simonResult = document.getElementById("simonResult");

    // 10 new games
    this.guessNumberBtn = document.getElementById("guessNumberBtn");
    this.guessNumberResult = document.getElementById("guessNumberResult");
    this.typingBtn = document.getElementById("typingBtn");
    this.typingResult = document.getElementById("typingResult");
    this.colorMatchBtn = document.getElementById("colorMatchBtn");
    this.colorMatchResult = document.getElementById("colorMatchResult");
    this.mathQuizBtn = document.getElementById("mathQuizBtn");
    this.mathQuizResult = document.getElementById("mathQuizResult");
    this.memoryCardBtn = document.getElementById("memoryCardBtn");
    this.memoryCardResult = document.getElementById("memoryCardResult");
    this.snakeBtn = document.getElementById("snakeBtn");
    this.snakeResult = document.getElementById("snakeResult");
    this.puzzleBtn = document.getElementById("puzzleBtn");
    this.puzzleResult = document.getElementById("puzzleResult");
    this.hangmanBtn = document.getElementById("hangmanBtn");
    this.hangmanResult = document.getElementById("hangmanResult");
    this.whackMoleBtn = document.getElementById("whackMoleBtn");
    this.whackMoleResult = document.getElementById("whackMoleResult");
    this.quizBtn = document.getElementById("quizBtn");
    this.quizResult = document.getElementById("quizResult");

    // Customization elements
    this.bgColor1 = document.getElementById("bgColor1");
    this.bgColor2 = document.getElementById("bgColor2");
    this.applyBgColors = document.getElementById("applyBgColors");
    this.titleColor = document.getElementById("titleColor");
    this.textColor = document.getElementById("textColor");
    this.buttonColor = document.getElementById("buttonColor");
    this.applyTextColors = document.getElementById("applyTextColors");
    this.pinkTheme = document.getElementById("pinkTheme");
    this.blueTheme = document.getElementById("blueTheme");
    this.greenTheme = document.getElementById("greenTheme");
    this.purpleTheme = document.getElementById("purpleTheme");
    this.resetTheme = document.getElementById("resetTheme");

    // Drawing section elements
    this.canvas = document.getElementById("drawingCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawColor = document.getElementById("drawColor");
    this.brushSize = document.getElementById("brushSize");
    this.brushSizeDisplay = document.getElementById("brushSizeDisplay");
    this.clearCanvas = document.getElementById("clearCanvas");

    // Secret section elements
    this.secretPasswordInput = document.getElementById("secretPassword");
    this.checkPasswordBtn = document.getElementById("checkPassword");
    this.secretContent = document.getElementById("secretContent");
    this.secretNotes = document.getElementById("secretNotes");
    this.saveSecretBtn = document.getElementById("saveSecret");
    this.eggCounter = document.getElementById("eggCounter");
    this.eggCountDisplay = document.getElementById("eggCount");

    // Footer elements
    this.visitCounter = document.getElementById("visitCounter");
    this.rainbowBtn = document.getElementById("rainbowBtn");
  }

  attachEventListeners() {
    // Navigation
    this.navButtons.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.switchSection(e.target.dataset.section)
      );
    });

    // Header
    this.randomTitleBtn.addEventListener("click", () => this.randomizeTitle());

    // About section
    this.changeAvatarBtn.addEventListener("click", () => this.changeAvatar());
    this.changeAboutBtn.addEventListener("click", () => this.editAboutText());
    this.moodSlider.addEventListener("input", (e) =>
      this.updateMood(e.target.value)
    );

    // Favorites section
    this.favColor.addEventListener("input", (e) =>
      this.updateFavoriteColor(e.target.value)
    );
    this.addFoodBtn.addEventListener("click", () => this.addFavoriteFood());
    this.favAnimal.addEventListener("change", (e) =>
      this.updateFavoriteAnimal(e.target.value)
    );

    // Games section
    this.rpsBtn.addEventListener("click", () => this.playRockPaperScissors());
    this.color1.addEventListener("input", () => this.mixColors());
    this.color2.addEventListener("input", () => this.mixColors());

    // New games
    this.memoryBtn.addEventListener("click", () => this.playMemoryGame());
    this.reactionBtn.addEventListener("click", () => this.playReactionTest());
    this.scrambleBtn.addEventListener("click", () => this.playWordScramble());
    this.letterCountSlider.addEventListener("input", (e) => {
      this.letterCountDisplay.textContent = e.target.value;
    });
    this.slotsBtn.addEventListener("click", () => this.playSlots());
    this.simonBtn.addEventListener("click", () => this.playSimonSays());

    // 10 new games
    this.guessNumberBtn.addEventListener("click", () => this.playGuessNumber());
    this.typingBtn.addEventListener("click", () => this.playTypingTest());
    this.colorMatchBtn.addEventListener("click", () => this.playColorMatch());
    this.mathQuizBtn.addEventListener("click", () => this.playMathQuiz());
    this.memoryCardBtn.addEventListener("click", () => this.playMemoryCard());
    this.snakeBtn.addEventListener("click", () => this.playSnake());
    this.puzzleBtn.addEventListener("click", () => this.playPuzzle());
    this.hangmanBtn.addEventListener("click", () => this.playHangman());
    this.whackMoleBtn.addEventListener("click", () => this.playWhackMole());
    this.quizBtn.addEventListener("click", () => this.playQuiz());

    // Customization
    this.applyBgColors.addEventListener("click", () =>
      this.applyBackgroundColors()
    );
    this.applyTextColors.addEventListener("click", () =>
      this.applyTextColors()
    );
    this.pinkTheme.addEventListener("click", () => this.applyTheme("pink"));
    this.blueTheme.addEventListener("click", () => this.applyTheme("blue"));
    this.greenTheme.addEventListener("click", () => this.applyTheme("green"));
    this.purpleTheme.addEventListener("click", () => this.applyTheme("purple"));
    this.resetTheme.addEventListener("click", () => this.resetToDefault());

    // Drawing section
    this.setupDrawingCanvas();
    this.brushSize.addEventListener("input", (e) => {
      this.brushSizeDisplay.textContent = e.target.value;
    });
    this.clearCanvas.addEventListener("click", () => this.clearDrawingCanvas());

    // Secret section
    this.checkPasswordBtn.addEventListener("click", () =>
      this.checkSecretPassword()
    );
    this.saveSecretBtn.addEventListener("click", () => this.saveSecretNotes());

    // Footer
    this.rainbowBtn.addEventListener("click", () => this.toggleRainbowMode());

    // Easter eggs
    this.setupEasterEggs();
  }

  initializePage() {
    // Update visit counter
    this.visitCount++;
    localStorage.setItem("visitCount", this.visitCount.toString());
    this.visitCounter.textContent = `Visits: ${this.visitCount}`;

    // Load saved data
    this.loadSavedData();

    // Initialize mood
    this.updateMood(this.moodSlider.value);

    // Initialize color mixing
    this.mixColors();

    // Load secret notes
    const savedNotes = localStorage.getItem("secretNotes");
    if (savedNotes) {
      this.secretNotes.value = savedNotes;
    }

    // Initialize money display
    this.playerMoney.textContent = this.playerMoneyAmount;

    // Switch to the correct section
    this.switchSection(this.currentSection);
  }

  switchSection(sectionName) {
    // Hide all sections
    this.sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Remove active class from nav buttons
    this.navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionName).classList.add("active");
    document
      .querySelector(`[data-section="${sectionName}"]`)
      .classList.add("active");

    this.currentSection = sectionName;
  }
  //COOL TITLES
  randomizeTitle() {
    const titles = [
      "Willa's Awesome Homepage! 🌟",
      "Willa's Cool Corner! 🎨",
      "Willa's Fun Zone! 🎮",
      "Willa's Digital World! 🌈",
      "Willa's Creative Space! ✨",
      "Willa's Magic Page! 🪄",
      "Willa's Happy Place! 😊",
      "Willa's Super Site! 🦸‍♀️",
    ];

    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    this.mainTitle.textContent = randomTitle;

    // Add a fun animation
    this.mainTitle.style.animation = "none";
    setTimeout(() => {
      this.mainTitle.style.animation = "bounce 1s ease-in-out";
    }, 10);
  }
  //COOL AVATARS
  changeAvatar() {
    const avatars = [
      "🎀",
      "🦄",
      "🌈",
      "✨",
      "🦋",
      "🐱",
      "🎨",
      "🎮",
      "🍕",
      "🎪",
      "🎭",
      "🎯",
    ];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    this.avatar.textContent = randomAvatar;
    localStorage.setItem("currentAvatar", randomAvatar);
  }

  editAboutText() {
    const newText = prompt(
      "Tell me about yourself!",
      this.aboutText.textContent
    );
    if (newText && newText.trim()) {
      this.aboutText.textContent = newText.trim();
      localStorage.setItem("aboutText", newText.trim());
    }
  }
  //COOL MOODS
  updateMood(value) {
    const moods = [
      "😢 Sad",
      "😕 Not great",
      "😐 Okay",
      "🙂 Good",
      "😊 Happy",
      "😄 Very happy",
      "🤩 Excited",
      "🎉 Amazing!",
      "🌟 Fantastic!",
      "💫 Out of this world!",
    ];

    const mood = moods[value - 1];
    this.moodDisplay.textContent = mood;
    localStorage.setItem("currentMood", value);
  }

  updateFavoriteColor(color) {
    this.colorName.textContent = this.getColorName(color);
    localStorage.setItem("favoriteColor", color);
  }
  //UMMM
  getColorName(color) {
    // Simple color name mapping
    const colorMap = {
      "#ff0000": "Red!",
      "#ff8000": "Orange!",
      "#ffff00": "Yellow!",
      "#00ff00": "Green!",
      "#0000ff": "Blue!",
      "#8000ff": "Purple!",
      "#ff0080": "Pink!",
      "#ff69b4": "Hot Pink!",
      "#000000": "Black!",
      "#ffffff": "White!",
    };

    return colorMap[color.toLowerCase()] || "Cool color!";
  }

  addFavoriteFood() {
    const food = this.favFood.value.trim();
    if (food) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${food}</span>
        <button class="delete-food-btn" onclick="homepage.deleteFavoriteFood(this)">❌</button>
      `;
      this.foodList.appendChild(li);
      this.favFood.value = "";

      // Save to localStorage
      const foods = JSON.parse(
        localStorage.getItem("favoriteFoods") || '["Pizza", "Ice Cream"]'
      );
      foods.push(food);
      localStorage.setItem("favoriteFoods", JSON.stringify(foods));
    }
  }

  deleteFavoriteFood(deleteBtn) {
    const li = deleteBtn.parentElement;
    const foodText = li.querySelector("span").textContent;

    // Remove from DOM
    li.remove();

    // Remove from localStorage
    const foods = JSON.parse(
      localStorage.getItem("favoriteFoods") || '["Pizza", "Ice Cream"]'
    );
    const updatedFoods = foods.filter((food) => food !== foodText);
    localStorage.setItem("favoriteFoods", JSON.stringify(updatedFoods));
  }

  updateFavoriteAnimal(animal) {
    this.animalDisplay.textContent = animal;
    localStorage.setItem("favoriteAnimal", animal);
  }

  playRockPaperScissors() {
    // Show the choice buttons
    this.rpsResult.innerHTML = `
       <div class="rps-choices">
         <p>Choose your move:</p>
         <button class="rps-choice-btn" data-choice="Rock">🪨 Rock</button>
         <button class="rps-choice-btn" data-choice="Paper">📄 Paper</button>
         <button class="rps-choice-btn" data-choice="Scissors">✂️ Scissors</button>
       </div>
     `;

    // Add event listeners to the choice buttons
    const choiceButtons = this.rpsResult.querySelectorAll(".rps-choice-btn");
    choiceButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const playerChoice = e.target.dataset.choice;
        this.playRockPaperScissorsRound(playerChoice);
      });
    });
  }

  playRockPaperScissorsRound(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie! 🤝";
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      result = `You win! ${playerChoice} beats ${computerChoice}! 🎉`;
    } else {
      result = `Computer wins! ${computerChoice} beats ${playerChoice}! 🤖`;
    }

    this.rpsResult.innerHTML = `
       <div class="rps-result">
         <p><strong>You chose:</strong> ${playerChoice}</p>
         <p><strong>Computer chose:</strong> ${computerChoice}</p>
         <p><strong>Result:</strong> ${result}</p>
         <button class="play-again-btn" onclick="homepage.playRockPaperScissors()">🎮 Play Again</button>
       </div>
     `;
  }

  mixColors() {
    const color1 = this.hexToRgb(this.color1.value);
    const color2 = this.hexToRgb(this.color2.value);

    if (color1 && color2) {
      const mixedColor = {
        r: Math.floor((color1.r + color2.r) / 2),
        g: Math.floor((color1.g + color2.g) / 2),
        b: Math.floor((color1.b + color2.b) / 2),
      };

      const mixedHex = this.rgbToHex(mixedColor.r, mixedColor.g, mixedColor.b);
      this.mixedColor.style.backgroundColor = mixedHex;
    }
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // New Games
  playMemoryGame() {
    const colors = ["🔴", "🟡", "🟢", "🔵", "🟣", "🟠"];
    this.memorySequence = [];

    // Generate a sequence of 6 colors
    for (let i = 0; i < 6; i++) {
      this.memorySequence.push(
        colors[Math.floor(Math.random() * colors.length)]
      );
    }

    this.memoryResult.innerHTML = `
       <div class="memory-game">
         <p>Watch the sequence carefully!</p>
         <div class="memory-sequence">
           ${this.memorySequence
             .map(
               (color) =>
                 `<span class="memory-btn" data-color="${color}">${color}</span>`
             )
             .join("")}
         </div>
         <p id="memoryFeedback">Watch the sequence...</p>
         <button class="play-again-btn" onclick="homepage.startMemoryGame()">🎮 Start Game</button>
       </div>
     `;
  }

  startMemoryGame() {
    // Hide the sequence after 3 seconds
    setTimeout(() => {
      const sequence = document.querySelector(".memory-sequence");
      sequence.style.display = "none";

      // Show the input buttons
      this.memoryResult.innerHTML = `
         <div class="memory-game">
           <p>Now repeat the sequence!</p>
           <div class="memory-buttons">
             <button class="memory-btn" data-color="🔴">🔴</button>
             <button class="memory-btn" data-color="🟡">🟡</button>
             <button class="memory-btn" data-color="🟢">🟢</button>
             <button class="memory-btn" data-color="🔵">🔵</button>
             <button class="memory-btn" data-color="🟣">🟣</button>
             <button class="memory-btn" data-color="🟠">🟠</button>
           </div>
           <p id="memoryFeedback">Click the colors in order!</p>
           <button class="play-again-btn" onclick="homepage.playMemoryGame()">🎮 New Game</button>
         </div>
       `;

      this.memoryPlayerSequence = [];
      this.memoryButtons = this.memoryResult.querySelectorAll(".memory-btn");
      this.memoryButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const clickedColor = e.target.dataset.color;
          this.memoryPlayerSequence.push(clickedColor);
          this.checkMemorySequence();
        });
      });
    }, 3000);
  }

  checkMemorySequence() {
    const feedback = document.getElementById("memoryFeedback");
    const currentIndex = this.memoryPlayerSequence.length - 1;

    if (
      this.memoryPlayerSequence[currentIndex] !==
      this.memorySequence[currentIndex]
    ) {
      feedback.innerHTML = "❌ Wrong! Try again!";
      feedback.style.color = "#ff6b6b";
      this.memoryPlayerSequence = [];
    } else if (
      this.memoryPlayerSequence.length === this.memorySequence.length
    ) {
      feedback.innerHTML = "🎉 Perfect! You got it!";
      feedback.style.color = "#48bb78";
    } else {
      feedback.innerHTML = `✅ Good! ${this.memoryPlayerSequence.length}/${this.memorySequence.length}`;
      feedback.style.color = "#48bb78";
    }
  }

  playReactionTest() {
    // Prevent multiple reaction tests from running simultaneously
    if (this.reactionTestActive) {
      return;
    }

    this.reactionTestActive = true;
    this.reactionResult.innerHTML = `
       <div class="reaction-test">
         <p>Click the button when it turns green!</p>
         <button id="reactionButton" class="reaction-btn" style="background: #ff6b6b;">Wait...</button>
         <p id="reactionTime">Time: --</p>
       </div>
     `;

    const reactionBtn = document.getElementById("reactionButton");
    const timeDisplay = document.getElementById("reactionTime");
    let startTime;

    // Random delay between 1-5 seconds
    const delay = Math.random() * 4000 + 1000;

    this.reactionTimeout = setTimeout(() => {
      reactionBtn.style.background = "#48bb78";
      reactionBtn.textContent = "CLICK NOW!";
      startTime = Date.now();

      reactionBtn.onclick = () => {
        if (!this.reactionTestActive) return; // Prevent multiple clicks

        const reactionTime = Date.now() - startTime;
        timeDisplay.textContent = `Time: ${reactionTime}ms`;
        reactionBtn.style.background = "#ff6b6b";
        reactionBtn.textContent = "Wait...";

        let message = "";
        if (reactionTime < 200) message = "🚀 SUPER FAST!";
        else if (reactionTime < 300) message = "⚡ Very Fast!";
        else if (reactionTime < 500) message = "👍 Good!";
        else message = "🐌 Keep practicing!";

        timeDisplay.innerHTML = `Time: ${reactionTime}ms<br>${message}`;

        // Reset the flag after the test is complete
        this.reactionTestActive = false;
      };
    }, delay);
  }
  //WORD SCRAMBLE
  playWordScramble() {
    const letterCount = parseInt(this.letterCountSlider.value);
    const wordLists = {
      3: ["CAT", "DOG", "SUN", "CAR", "BAT", "HAT", "MAT", "RAT", "app", "ate"],
      4: ["MOON", "STAR", "TREE", "BOOK", "CAKE", "BIRD", "FISH", "FROG"],
      5: [
        "HOUSE",
        "TABLE",
        "CHAIR",
        "PHONE",
        "MUSIC",
        "DANCE",
        "SMILE",
        "LIGHT",
        "happy",
        "angry",
      ],
      6: [
        "GARDEN",
        "FRIEND",
        "SUMMER",
        "WINTER",
        "BEAUTY",
        "FLOWER",
        "DANCER",
        "SINGER",
      ],
      7: [
        "PICTURE",
        "COLLEGE",
        "FREEDOM",
        "BROTHER",
        "SISTER",
        "MORNING",
        "EVENING",
        "WEEKEND",
      ],
      8: [
        "BIRTHDAY",
        "HAPPINESS",
        "ADVENTURE",
        "BEAUTIFUL",
        "WONDERFUL",
        "AMAZING",
        "CREATIVE",
        "FANTASTIC",
      ],
    };

    const words = wordLists[letterCount] || wordLists[4];
    const word = words[Math.floor(Math.random() * words.length)];

    // Proper Fisher-Yates shuffle to ensure words are scrambled
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    const scrambled = letters.join("");

    // If the scrambled word is the same as the original, try again
    if (scrambled === word) {
      return this.playWordScramble(); // Recursively try again
    }

    this.scrambleResult.innerHTML = `
       <div class="scramble-game">
         <p>Unscramble this word (${letterCount} letters):</p>
         <h3>${scrambled}</h3>
         <input type="text" id="scrambleInput" placeholder="Type your answer here">
         <button onclick="homepage.checkScrambleAnswer('${word}')">Check Answer</button>
         <p id="scrambleFeedback"></p>
         <button class="play-again-btn" onclick="homepage.playWordScramble()">🎮 New Word</button>
       </div>
     `;
  }

  checkScrambleAnswer(correctWord) {
    const userAnswer = document
      .getElementById("scrambleInput")
      .value.toUpperCase();
    const feedback = document.getElementById("scrambleFeedback");

    if (userAnswer === correctWord) {
      feedback.innerHTML = "🎉 Correct! Great job!";
      feedback.style.color = "#48bb78";
    } else {
      feedback.innerHTML = `❌ Not quite! The word was: ${correctWord}`;
      feedback.style.color = "#ff6b6b";
    }
  }

  playSlots() {
    if (this.playerMoneyAmount < 10) {
      this.slotsResult.innerHTML = `
         <div class="slots-game">
           <p>💸 You're out of money!</p>
           <button onclick="homepage.resetMoney()">💰 Reset Money ($100)</button>
         </div>
       `;
      return;
    }

    this.playerMoneyAmount -= 10;
    this.playerMoney.textContent = this.playerMoneyAmount;
    localStorage.setItem("playerMoney", this.playerMoneyAmount.toString());

    const symbols = ["🍒", "🍋", "🍊", "🍇", "🔔", "⭐", "💎", "7️⃣"];
    const slot1 = symbols[Math.floor(Math.random() * symbols.length)];
    const slot2 = symbols[Math.floor(Math.random() * symbols.length)];
    const slot3 = symbols[Math.floor(Math.random() * symbols.length)];

    this.slotsResult.innerHTML = `
       <div class="slots-game">
         <h3>🎰 Lucky Slots</h3>
         <div class="slots-display">
           <div class="slot">${slot1}</div>
           <div class="slot">${slot2}</div>
           <div class="slot">${slot3}</div>
         </div>
         <p id="slotsResult"></p>
         <button class="play-again-btn" onclick="homepage.playSlots()">🎰 Spin Again ($10)</button>
       </div>
     `;

    let winAmount = 0;
    let resultMessage = "";

    // 10% win rate
    const random = Math.random();
    if (random < 0.1) {
      // 10% chance to win
      if (slot1 === slot2 && slot2 === slot3) {
        if (slot1 === "💎") {
          winAmount = 100;
          resultMessage = "🎉 TRIPLE DIAMONDS! JACKPOT! 💎";
        } else if (slot1 === "7️⃣") {
          winAmount = 50;
          resultMessage = "🎉 TRIPLE 7s! BIG WIN! 🎰";
        } else {
          winAmount = 30;
          resultMessage = "🎉 TRIPLE MATCH! NICE WIN! 🎊";
        }
      } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
        winAmount = 5;
        resultMessage = "🎉 DOUBLE MATCH! Small win! 🎯";
      } else {
        winAmount = 2;
        resultMessage = "🎉 You got lucky! 🍀";
      }
    } else {
      resultMessage = "😔 No match. Try again! 🍀";
    }

    this.playerMoneyAmount += winAmount;
    this.playerMoney.textContent = this.playerMoneyAmount;
    localStorage.setItem("playerMoney", this.playerMoneyAmount.toString());

    document.getElementById("slotsResult").innerHTML = `
       ${resultMessage}<br>
       ${winAmount > 0 ? `You won $${winAmount}! 💰` : ""}
     `;
  }

  resetMoney() {
    this.playerMoneyAmount = 100;
    this.playerMoney.textContent = this.playerMoneyAmount;
    localStorage.setItem("playerMoney", this.playerMoneyAmount.toString());
    this.slotsResult.innerHTML = `
       <div class="slots-game">
         <p>💰 Money reset to $100!</p>
         <button class="play-again-btn" onclick="homepage.playSlots()">🎰 Play Slots</button>
       </div>
     `;
  }

  playSimonSays() {
    this.simonSequence = [];
    this.simonPlayerSequence = [];
    this.simonGameActive = false;

    this.simonResult.innerHTML = `
       <div class="simon-game">
         <p>Simon says... follow the pattern!</p>
         <div class="simon-buttons">
           <button class="simon-btn" data-color="red" style="background: #ff6b6b;">🔴</button>
           <button class="simon-btn" data-color="blue" style="background: #4ecdc4;">🔵</button>
           <button class="simon-btn" data-color="yellow" style="background: #ffe66d;">🟡</button>
           <button class="simon-btn" data-color="green" style="background: #95e1d3;">🟢</button>
         </div>
         <p id="simonStatus">Click to start!</p>
         <p id="simonFeedback"></p>
         <button onclick="homepage.startSimon()">Start Simon</button>
       </div>
     `;
  }

  startSimon() {
    const colors = ["red", "blue", "yellow", "green"];
    this.simonSequence = [];

    // Generate sequence
    for (let i = 0; i < 3; i++) {
      this.simonSequence.push(
        colors[Math.floor(Math.random() * colors.length)]
      );
    }

    document.getElementById("simonStatus").textContent = "Watch the pattern...";
    this.simonPlayerSequence = [];
    this.simonGameActive = false;

    // Show sequence
    let index = 0;
    const showNext = () => {
      if (index < this.simonSequence.length) {
        const button = document.querySelector(
          `[data-color="${this.simonSequence[index]}"]`
        );
        button.style.opacity = "0.5";
        setTimeout(() => {
          button.style.opacity = "1";
          index++;
          setTimeout(showNext, 500);
        }, 300);
      } else {
        document.getElementById("simonStatus").textContent =
          "Your turn! Click the buttons in order.";
        this.simonGameActive = true;
        this.setupSimonButtons();
      }
    };

    setTimeout(showNext, 1000);
  }

  setupSimonButtons() {
    const simonButtons = this.simonResult.querySelectorAll(".simon-btn");
    simonButtons.forEach((btn) => {
      btn.onclick = (e) => {
        if (!this.simonGameActive) return;

        const clickedColor = e.target.dataset.color;
        this.simonPlayerSequence.push(clickedColor);
        this.checkSimonSequence();
      };
    });
  }

  checkSimonSequence() {
    const feedback = document.getElementById("simonFeedback");
    const currentIndex = this.simonPlayerSequence.length - 1;

    if (
      this.simonPlayerSequence[currentIndex] !==
      this.simonSequence[currentIndex]
    ) {
      feedback.innerHTML = "❌ Wrong! Game Over!";
      feedback.style.color = "#ff6b6b";
      this.simonGameActive = false;
    } else if (this.simonPlayerSequence.length === this.simonSequence.length) {
      feedback.innerHTML = "🎉 Perfect! You completed the pattern!";
      feedback.style.color = "#48bb78";
      this.simonGameActive = false;
    } else {
      feedback.innerHTML = `✅ Good! ${this.simonPlayerSequence.length}/${this.simonSequence.length}`;
      feedback.style.color = "#48bb78";
    }
  }

  // 10 New Games
  playGuessNumber() {
    this.computerNumber = Math.floor(Math.random() * 100) + 1;
    this.guessCount = 0;

    this.guessNumberResult.innerHTML = `
       <div class="guess-number-game">
         <p>Think of a number between 1 and 100!</p>
         <p>I'll try to guess it. Tell me if I'm too high or too low!</p>
         <div class="math-equation">My guess: <span id="computerGuess">50</span></div>
         <div class="guess-buttons">
           <button onclick="homepage.guessResponse('too-high')">Too High! ⬆️</button>
           <button onclick="homepage.guessResponse('too-low')">Too Low! ⬇️</button>
           <button onclick="homepage.guessResponse('correct')">Correct! 🎯</button>
         </div>
         <p id="guessFeedback">Is my guess correct?</p>
         <button class="play-again-btn" onclick="homepage.playGuessNumber()">🎮 New Game</button>
       </div>
     `;

    this.minGuess = 1;
    this.maxGuess = 100;
    this.currentGuess = 50;
  }

  guessResponse(response) {
    const feedback = document.getElementById("guessFeedback");
    this.guessCount++;

    if (response === "correct") {
      feedback.innerHTML = `🎉 I got it in ${this.guessCount} guesses!`;
      feedback.style.color = "#48bb78";
    } else if (response === "too-high") {
      this.maxGuess = this.currentGuess - 1;
      this.currentGuess = Math.floor((this.minGuess + this.maxGuess) / 2);
      document.getElementById("computerGuess").textContent = this.currentGuess;
      feedback.innerHTML = `OK, I'll guess lower. Guess ${
        this.guessCount + 1
      }:`;
    } else if (response === "too-low") {
      this.minGuess = this.currentGuess + 1;
      this.currentGuess = Math.floor((this.minGuess + this.maxGuess) / 2);
      document.getElementById("computerGuess").textContent = this.currentGuess;
      feedback.innerHTML = `OK, I'll guess higher. Guess ${
        this.guessCount + 1
      }:`;
    }
  }

  playTypingTest() {
    const texts = [
      "The quick brown fox jumps over the lazy dog.",
      "Programming is fun and creative!",
      "Willa loves to code and play games.",
      "JavaScript makes websites interactive.",
      "Rainbows are beautiful and colorful.",
    ];

    const text = texts[Math.floor(Math.random() * texts.length)];
    this.typingStartTime = null;
    this.typingText = text;

    this.typingResult.innerHTML = `
       <div class="typing-test">
         <p>Type this text as fast as you can:</p>
         <div class="typing-display">${text}</div>
         <input type="text" id="typingInput" placeholder="Start typing here...">
         <p id="typingStats">Ready to type!</p>
         <button class="play-again-btn" onclick="homepage.playTypingTest()">🎮 New Text</button>
       </div>
     `;

    const input = document.getElementById("typingInput");
    input.addEventListener("input", (e) => {
      if (!this.typingStartTime) {
        this.typingStartTime = Date.now();
      }

      const typed = e.target.value;
      const stats = document.getElementById("typingStats");

      if (typed === text) {
        const time = (Date.now() - this.typingStartTime) / 1000;
        const wpm = Math.round(text.length / 5 / (time / 60));
        stats.innerHTML = `🎉 Done! Time: ${time.toFixed(1)}s | WPM: ${wpm}`;
        stats.style.color = "#48bb78";
      } else if (text.startsWith(typed)) {
        stats.innerHTML = `✅ Good! ${typed.length}/${text.length} characters`;
        stats.style.color = "#48bb78";
      } else {
        stats.innerHTML = `❌ Wrong! Check your spelling.`;
        stats.style.color = "#ff6b6b";
      }
    });
  }

  playColorMatch() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    this.targetColor = colors[Math.floor(Math.random() * colors.length)];
    this.colorMatchScore = 0;
    this.colorMatchTimeLeft = 30;
    this.colorMatchGameActive = true;
    this.colorMatchInterval = null;
    this.colorMatchTimer = null;

    this.colorMatchResult.innerHTML = `
      <div class="color-match-game">
        <p>Click the color that matches: <span style="color: ${
          this.targetColor
        }; font-weight: bold;">${this.targetColor}</span></p>
        <p>Score: <span id="colorMatchScore">0</span> | Time: <span id="colorMatchTimer">30</span></p>
        <div class="color-options">
          ${colors
            .map(
              (color) =>
                `<div class="color-option" style="background: ${color}" onclick="homepage.checkColorMatch('${color}')"></div>`
            )
            .join("")}
        </div>
        <button class="play-again-btn" onclick="homepage.startColorMatch()">🎮 Start Game</button>
        <p id="colorMatchFeedback"></p>
      </div>
    `;
  }

  startColorMatch() {
    this.colorMatchScore = 0;
    this.colorMatchTimeLeft = 30;
    this.colorMatchGameActive = true;

    document.getElementById("colorMatchScore").textContent = "0";
    document.getElementById("colorMatchTimer").textContent = "30";

    // Clear any existing intervals
    if (this.colorMatchInterval) clearInterval(this.colorMatchInterval);
    if (this.colorMatchTimer) clearInterval(this.colorMatchTimer);

    // Move colors around every 2 seconds
    this.colorMatchInterval = setInterval(() => {
      this.moveColors();
    }, 2000);

    // Countdown timer
    this.colorMatchTimer = setInterval(() => {
      this.colorMatchTimeLeft--;
      document.getElementById("colorMatchTimer").textContent =
        this.colorMatchTimeLeft;

      if (this.colorMatchTimeLeft <= 0) {
        this.endColorMatch();
      }
    }, 1000);
  }

  moveColors() {
    if (!this.colorMatchGameActive) return;

    const colorOptions = document.querySelectorAll(".color-option");
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

    // Shuffle colors
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

    colorOptions.forEach((option, index) => {
      option.style.background = shuffledColors[index];
      option.onclick = () => this.checkColorMatch(shuffledColors[index]);
    });
  }

  checkColorMatch(color) {
    if (!this.colorMatchGameActive) return;

    const feedback = document.getElementById("colorMatchFeedback");
    if (color === this.targetColor) {
      this.colorMatchScore++;
      document.getElementById("colorMatchScore").textContent =
        this.colorMatchScore;
      feedback.innerHTML = "🎉 Correct!";
      feedback.style.color = "#48bb78";

      // Generate new target color
      const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
      this.targetColor = colors[Math.floor(Math.random() * colors.length)];
      document.querySelector(
        ".color-match-game p"
      ).innerHTML = `Click the color that matches: <span style="color: ${this.targetColor}; font-weight: bold;">${this.targetColor}</span>`;
    } else {
      feedback.innerHTML = `❌ Wrong! The color was ${this.targetColor}.`;
      feedback.style.color = "#ff6b6b";
    }
  }

  endColorMatch() {
    this.colorMatchGameActive = false;
    clearInterval(this.colorMatchInterval);
    clearInterval(this.colorMatchTimer);

    document.getElementById(
      "colorMatchFeedback"
    ).innerHTML = `🎉 Game Over! Final Score: ${this.colorMatchScore}`;
    document.getElementById("colorMatchFeedback").style.color = "#48bb78";
  }

  playMathQuiz() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let correctAnswer;
    switch (operation) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
    }

    this.mathQuizResult.innerHTML = `
       <div class="math-quiz">
         <p>Solve this equation:</p>
         <div class="math-equation">${num1} ${operation} ${num2} = ?</div>
         <input type="number" id="mathAnswer" placeholder="Your answer">
         <button onclick="homepage.checkMathAnswer(${correctAnswer})">Check Answer</button>
         <p id="mathFeedback"></p>
         <button class="play-again-btn" onclick="homepage.playMathQuiz()">🎮 New Problem</button>
       </div>
     `;
  }

  checkMathAnswer(correctAnswer) {
    const userAnswer = parseInt(document.getElementById("mathAnswer").value);
    const feedback = document.getElementById("mathFeedback");

    if (userAnswer === correctAnswer) {
      feedback.innerHTML = "🎉 Correct! Great math skills!";
      feedback.style.color = "#48bb78";
    } else {
      feedback.innerHTML = `❌ Wrong! The answer was ${correctAnswer}.`;
      feedback.style.color = "#ff6b6b";
    }
  }

  playMemoryCard() {
    const symbols = ["🐱", "🐶", "🐰", "🐸", "🦄", "🦋"];
    const cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    this.memoryCards = cards;
    this.flippedCards = [];
    this.matchedPairs = 0;

    this.memoryCardResult.innerHTML = `
       <div class="memory-card-game">
         <p>Find matching pairs! Click two cards to flip them.</p>
         <div class="game-grid">
           ${cards
             .map(
               (symbol, index) =>
                 `<div class="game-card-item" data-index="${index}" onclick="homepage.flipCard(${index})">❓</div>`
             )
             .join("")}
         </div>
         <p id="memoryCardFeedback">Click a card to start!</p>
         <button class="play-again-btn" onclick="homepage.playMemoryCard()">🎮 New Game</button>
       </div>
     `;
  }

  flipCard(index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    if (this.flippedCards.length >= 2 || card.classList.contains("flipped"))
      return;

    card.textContent = this.memoryCards[index];
    card.classList.add("flipped");
    this.flippedCards.push({ index, symbol: this.memoryCards[index] });

    if (this.flippedCards.length === 2) {
      setTimeout(() => {
        if (this.flippedCards[0].symbol === this.flippedCards[1].symbol) {
          this.matchedPairs++;
          if (this.matchedPairs === this.memoryCards.length / 2) {
            document.getElementById("memoryCardFeedback").innerHTML =
              "🎉 You won! All pairs matched!";
            document.getElementById("memoryCardFeedback").style.color =
              "#48bb78";
          }
        } else {
          document.querySelector(
            `[data-index="${this.flippedCards[0].index}"]`
          ).textContent = "❓";
          document
            .querySelector(`[data-index="${this.flippedCards[0].index}"]`)
            .classList.remove("flipped");
          document.querySelector(
            `[data-index="${this.flippedCards[1].index}"]`
          ).textContent = "❓";
          document
            .querySelector(`[data-index="${this.flippedCards[1].index}"]`)
            .classList.remove("flipped");
        }
        this.flippedCards = [];
      }, 1000);
    }
  }

  playSnake() {
    this.snakeResult.innerHTML = `
       <div class="snake-game">
         <p>Use arrow keys to control the snake. Eat the food to grow!</p>
         <canvas id="snakeCanvas" width="300" height="300" class="snake-canvas"></canvas>
         <p>Score: <span id="snakeScore">0</span></p>
         <button onclick="homepage.startSnake()">Start Snake</button>
         <button class="play-again-btn" onclick="homepage.playSnake()">🎮 New Game</button>
       </div>
     `;
  }

  startSnake() {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");

    // Snake game state
    this.snake = [{ x: 150, y: 150 }];
    this.direction = { x: 0, y: 0 };
    this.food = { x: 200, y: 200 };
    this.snakeScore = 0;
    this.gameRunning = true;

    // Generate random food position
    this.generateFood();

    // Start game loop
    this.gameLoop = setInterval(() => {
      this.updateSnake();
      this.drawSnake(ctx);
    }, 150);

    // Add keyboard controls
    document.addEventListener("keydown", (e) => {
      if (!this.gameRunning) return;

      switch (e.key) {
        case "ArrowUp":
          if (this.direction.y !== 1) this.direction = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (this.direction.y !== -1) this.direction = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (this.direction.x !== 1) this.direction = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (this.direction.x !== -1) this.direction = { x: 1, y: 0 };
          break;
      }
    });
  }

  generateFood() {
    this.food = {
      x: Math.floor(Math.random() * 15) * 20,
      y: Math.floor(Math.random() * 15) * 20,
    };
  }

  updateSnake() {
    if (!this.gameRunning) return;

    const head = { ...this.snake[0] };
    head.x += this.direction.x * 20;
    head.y += this.direction.y * 20;

    // Check wall collision
    if (head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) {
      this.endSnakeGame();
      return;
    }

    // Check self collision
    if (
      this.snake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      this.endSnakeGame();
      return;
    }

    this.snake.unshift(head);

    // Check food collision
    if (head.x === this.food.x && head.y === this.food.y) {
      this.snakeScore++;
      document.getElementById("snakeScore").textContent = this.snakeScore;
      this.generateFood();
    } else {
      this.snake.pop();
    }
  }

  drawSnake(ctx) {
    // Clear canvas
    ctx.fillStyle = "#2d3748";
    ctx.fillRect(0, 0, 300, 300);

    // Draw snake
    ctx.fillStyle = "#48bb78";
    this.snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, 18, 18);
    });

    // Draw food
    ctx.fillStyle = "#f56565";
    ctx.fillRect(this.food.x, this.food.y, 18, 18);
  }

  endSnakeGame() {
    this.gameRunning = false;
    clearInterval(this.gameLoop);
    document.getElementById(
      "snakeScore"
    ).innerHTML = `🎉 Game Over! Final Score: ${this.snakeScore}`;
  }

  playPuzzle() {
    // Create a solvable puzzle by starting with the solved state and making valid moves
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    this.puzzleNumbers = [...numbers];

    // Make 50 random valid moves to scramble
    for (let i = 0; i < 50; i++) {
      const emptyIndex = this.puzzleNumbers.indexOf("");
      const possibleMoves = [];

      // Check adjacent positions
      if (emptyIndex > 2) possibleMoves.push(emptyIndex - 3); // Up
      if (emptyIndex < 6) possibleMoves.push(emptyIndex + 3); // Down
      if (emptyIndex % 3 > 0) possibleMoves.push(emptyIndex - 1); // Left
      if (emptyIndex % 3 < 2) possibleMoves.push(emptyIndex + 1); // Right

      if (possibleMoves.length > 0) {
        const randomMove =
          possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        // Swap empty space with the random move
        this.puzzleNumbers[emptyIndex] = this.puzzleNumbers[randomMove];
        this.puzzleNumbers[randomMove] = "";
      }
    }

    this.puzzleResult.innerHTML = `
       <div class="puzzle-game">
         <p>Slide the tiles to arrange them in order!</p>
         <div class="puzzle-grid">
           ${this.puzzleNumbers
             .map(
               (num, index) =>
                 `<div class="puzzle-piece ${
                   num === "" ? "empty" : ""
                 }" onclick="homepage.movePuzzleTile(${index})">${num}</div>`
             )
             .join("")}
         </div>
         <p id="puzzleFeedback">Click a tile next to the empty space to move it!</p>
         <button class="play-again-btn" onclick="homepage.playPuzzle()">🎮 New Puzzle</button>
       </div>
     `;
  }

  movePuzzleTile(index) {
    const emptyIndex = this.puzzleNumbers.indexOf("");
    const adjacent = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - 3,
      emptyIndex + 3,
    ];

    if (adjacent.includes(index)) {
      this.puzzleNumbers[emptyIndex] = this.puzzleNumbers[index];
      this.puzzleNumbers[index] = "";
      this.updatePuzzleDisplay();
      this.checkPuzzleWin();
    }
  }

  updatePuzzleDisplay() {
    const pieces = document.querySelectorAll(".puzzle-piece");
    pieces.forEach((piece, index) => {
      const num = this.puzzleNumbers[index];
      piece.textContent = num;
      piece.className = `puzzle-piece ${num === "" ? "empty" : ""}`;
    });
  }

  checkPuzzleWin() {
    const isWin = this.puzzleNumbers
      .slice(0, -1)
      .every((num, index) => num === index + 1);
    if (isWin) {
      document.getElementById("puzzleFeedback").innerHTML =
        "🎉 Puzzle solved! Great job!";
      document.getElementById("puzzleFeedback").style.color = "#48bb78";
    }
  }

  playHangman() {
    const words = ["CAT", "DOG", "SUN", "MOON", "STAR", "TREE", "BOOK", "CAKE"];
    this.hangmanWord = words[Math.floor(Math.random() * words.length)];
    this.hangmanGuesses = [];
    this.hangmanWrongGuesses = 0;
    this.maxWrongGuesses = 6;

    this.hangmanResult.innerHTML = `
       <div class="hangman-game">
         <p>Guess the word! You have ${
           this.maxWrongGuesses
         } wrong guesses allowed.</p>
         <div class="hangman-display">${this.hangmanWord
           .split("")
           .map(() => "_")
           .join(" ")}</div>
         <p>Wrong guesses: <span id="wrongGuesses">0/${
           this.maxWrongGuesses
         }</span></p>
         <input type="text" id="hangmanInput" placeholder="Enter a letter" maxlength="1">
         <button onclick="homepage.makeHangmanGuess()">Guess Letter</button>
         <p id="hangmanFeedback"></p>
         <button class="play-again-btn" onclick="homepage.playHangman()">🎮 New Word</button>
       </div>
     `;
  }

  makeHangmanGuess() {
    const input = document.getElementById("hangmanInput");
    const letter = input.value.toUpperCase();

    if (!letter || this.hangmanGuesses.includes(letter)) return;

    this.hangmanGuesses.push(letter);

    if (this.hangmanWord.includes(letter)) {
      this.updateHangmanDisplay();
      this.checkHangmanWin();
    } else {
      this.hangmanWrongGuesses++;
      document.getElementById(
        "wrongGuesses"
      ).textContent = `${this.hangmanWrongGuesses}/${this.maxWrongGuesses}`;

      if (this.hangmanWrongGuesses >= this.maxWrongGuesses) {
        document.getElementById(
          "hangmanFeedback"
        ).innerHTML = `❌ Game Over! The word was: ${this.hangmanWord}`;
        document.getElementById("hangmanFeedback").style.color = "#ff6b6b";
      }
    }

    input.value = "";
  }

  updateHangmanDisplay() {
    const display = this.hangmanWord
      .split("")
      .map((letter) => (this.hangmanGuesses.includes(letter) ? letter : "_"))
      .join(" ");
    document.querySelector(".hangman-display").textContent = display;
  }

  checkHangmanWin() {
    if (
      this.hangmanWord
        .split("")
        .every((letter) => this.hangmanGuesses.includes(letter))
    ) {
      document.getElementById("hangmanFeedback").innerHTML =
        "🎉 Congratulations! You won!";
      document.getElementById("hangmanFeedback").style.color = "#48bb78";
    }
  }

  playWhackMole() {
    this.moleScore = 0;
    this.moleGameActive = true;
    this.moleInterval = null;

    this.whackMoleResult.innerHTML = `
       <div class="whack-mole-game">
         <p>Whack the moles! You have 30 seconds!</p>
         <div class="whack-grid">
           <div class="mole-hole" data-index="0" onclick="homepage.whackMole(0)"></div>
           <div class="mole-hole" data-index="1" onclick="homepage.whackMole(1)"></div>
           <div class="mole-hole" data-index="2" onclick="homepage.whackMole(2)"></div>
           <div class="mole-hole" data-index="3" onclick="homepage.whackMole(3)"></div>
           <div class="mole-hole" data-index="4" onclick="homepage.whackMole(4)"></div>
           <div class="mole-hole" data-index="5" onclick="homepage.whackMole(5)"></div>
           <div class="mole-hole" data-index="6" onclick="homepage.whackMole(6)"></div>
           <div class="mole-hole" data-index="7" onclick="homepage.whackMole(7)"></div>
           <div class="mole-hole" data-index="8" onclick="homepage.whackMole(8)"></div>
         </div>
         <p>Score: <span id="moleScore">0</span></p>
         <p id="moleTimer">Time: 30</p>
         <button onclick="homepage.startWhackMole()">Start Game</button>
         <button class="play-again-btn" onclick="homepage.playWhackMole()">🎮 New Game</button>
       </div>
     `;
  }

  startWhackMole() {
    this.moleScore = 0;
    this.moleTimeLeft = 30;
    this.moleGameActive = true;

    document.getElementById("moleScore").textContent = "0";
    document.getElementById("moleTimer").textContent = "30";

    // Clear any existing intervals
    if (this.moleInterval) clearInterval(this.moleInterval);
    if (this.moleTimer) clearInterval(this.moleTimer);

    this.moleInterval = setInterval(() => {
      this.showRandomMole();
    }, 2000); // Show mole every 2 seconds instead of 1

    this.moleTimer = setInterval(() => {
      this.moleTimeLeft--;
      document.getElementById("moleTimer").textContent = this.moleTimeLeft;

      if (this.moleTimeLeft <= 0) {
        this.endWhackMole();
      }
    }, 1000);
  }

  showRandomMole() {
    if (!this.moleGameActive) return;

    const holes = document.querySelectorAll(".mole-hole");
    holes.forEach((hole) => hole.classList.remove("mole"));

    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add("mole");

    setTimeout(() => {
      randomHole.classList.remove("mole");
    }, 1500);
  }

  whackMole(index) {
    if (!this.moleGameActive) return;

    const hole = document.querySelector(`[data-index="${index}"]`);
    if (hole.classList.contains("mole")) {
      this.moleScore++;
      document.getElementById("moleScore").textContent = this.moleScore;
      hole.classList.remove("mole");
    }
  }

  endWhackMole() {
    this.moleGameActive = false;
    clearInterval(this.moleInterval);
    clearInterval(this.moleTimer);

    const holes = document.querySelectorAll(".mole-hole");
    holes.forEach((hole) => hole.classList.remove("mole"));

    document.getElementById(
      "moleTimer"
    ).innerHTML = `🎉 Game Over! Final Score: ${this.moleScore}`;
  }

  playQuiz() {
    const questions = [
      {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2,
      },
      {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        correct: 1,
      },
      {
        question: "What color do you get when you mix red and blue?",
        options: ["Green", "Yellow", "Purple", "Orange"],
        correct: 2,
      },
      {
        question: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
        correct: 2,
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correct: 1,
      },
    ];

    this.quizQuestions = questions;
    this.quizCurrentQuestion = 0;
    this.quizScore = 0;

    this.quizResult.innerHTML = `
       <div class="quiz-game">
         <p>Answer the questions correctly!</p>
         <div class="quiz-question" id="quizQuestion"></div>
         <div class="quiz-options" id="quizOptions"></div>
         <p id="quizFeedback"></p>
         <p>Score: <span id="quizScore">0</span>/5</p>
         <button class="play-again-btn" onclick="homepage.playQuiz()">🎮 New Quiz</button>
       </div>
     `;

    this.showQuizQuestion();
  }

  showQuizQuestion() {
    const question = this.quizQuestions[this.quizCurrentQuestion];
    document.getElementById("quizQuestion").textContent = question.question;

    const optionsHtml = question.options
      .map(
        (option, index) =>
          `<div class="quiz-option" onclick="homepage.answerQuiz(${index})">${option}</div>`
      )
      .join("");

    document.getElementById("quizOptions").innerHTML = optionsHtml;
  }

  answerQuiz(selectedIndex) {
    const question = this.quizQuestions[this.quizCurrentQuestion];
    const feedback = document.getElementById("quizFeedback");

    if (selectedIndex === question.correct) {
      this.quizScore++;
      feedback.innerHTML = "🎉 Correct!";
      feedback.style.color = "#48bb78";
    } else {
      feedback.innerHTML = `❌ Wrong! The correct answer was: ${
        question.options[question.correct]
      }`;
      feedback.style.color = "#ff6b6b";
    }

    document.getElementById("quizScore").textContent = this.quizScore;

    this.quizCurrentQuestion++;

    if (this.quizCurrentQuestion < this.quizQuestions.length) {
      setTimeout(() => this.showQuizQuestion(), 2000);
    } else {
      setTimeout(() => {
        feedback.innerHTML = `🎉 Quiz Complete! Final Score: ${this.quizScore}/5`;
        feedback.style.color = "#48bb78";
      }, 2000);
    }
  }

  // Customization Functions
  applyBackgroundColors() {
    const color1 = this.bgColor1.value;
    const color2 = this.bgColor2.value;
    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    localStorage.setItem("customBg1", color1);
    localStorage.setItem("customBg2", color2);
  }

  applyTextColors() {
    const titleColor = this.titleColor.value;
    const textColor = this.textColor.value;
    const buttonColor = this.buttonColor.value;

    document.documentElement.style.setProperty("--title-color", titleColor);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--button-color", buttonColor);

    localStorage.setItem("customTitleColor", titleColor);
    localStorage.setItem("customTextColor", textColor);
    localStorage.setItem("customButtonColor", buttonColor);
  }

  applyTheme(theme) {
    const themes = {
      pink: {
        bg1: "#ff9a9e",
        bg2: "#fecfef",
        title: "#ff69b4",
        text: "#8b4b8b",
        button: "#ff1493",
      },
      blue: {
        bg1: "#667eea",
        bg2: "#764ba2",
        title: "#4a90e2",
        text: "#2c5282",
        button: "#3182ce",
      },
      green: {
        bg1: "#56ab2f",
        bg2: "#a8e6cf",
        title: "#38a169",
        text: "#2f855a",
        button: "#48bb78",
      },
      purple: {
        bg1: "#4a1a4a",
        bg2: "#d946ef",
        title: "#9f7aea",
        text: "#553c9a",
        button: "#805ad5",
      },
    };

    const selectedTheme = themes[theme];
    this.bgColor1.value = selectedTheme.bg1;
    this.bgColor2.value = selectedTheme.bg2;
    this.titleColor.value = selectedTheme.title;
    this.textColor.value = selectedTheme.text;
    this.buttonColor.value = selectedTheme.button;

    this.applyBackgroundColors();
    this.applyTextColors();
  }

  resetToDefault() {
    this.bgColor1.value = "#6b7280";
    this.bgColor2.value = "#9ca3af";
    this.titleColor.value = "#000000";
    this.textColor.value = "#000000";
    this.buttonColor.value = "#4b5563";

    document.body.style.background = "linear-gradient(45deg, #6b7280, #9ca3af)";
    document.documentElement.style.setProperty("--title-color", "#000000");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--button-color", "#4b5563");

    localStorage.removeItem("customBg1");
    localStorage.removeItem("customBg2");
    localStorage.removeItem("customTitleColor");
    localStorage.removeItem("customTextColor");
    localStorage.removeItem("customButtonColor");
  }

  setupDrawingCanvas() {
    let isDrawing = false;

    this.canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      this.ctx.beginPath();
      this.ctx.moveTo(e.offsetX, e.offsetY);
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
      }
    });

    this.canvas.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    this.canvas.addEventListener("mouseleave", () => {
      isDrawing = false;
    });

    // Update drawing settings when they change
    this.drawColor.addEventListener("input", () => {
      this.ctx.strokeStyle = this.drawColor.value;
    });

    this.brushSize.addEventListener("input", () => {
      this.ctx.lineWidth = this.brushSize.value;
      this.ctx.lineCap = "round";
    });

    // Set initial drawing settings
    this.ctx.strokeStyle = this.drawColor.value;
    this.ctx.lineWidth = this.brushSize.value;
    this.ctx.lineCap = "round";
  }

  clearDrawingCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  checkSecretPassword() {
    const enteredPassword = this.secretPasswordInput.value;
    if (enteredPassword === this.secretPassword) {
      this.secretContent.classList.remove("hidden");
      this.secretPasswordInput.value = "";
      this.findEasterEgg("Secret unlocked! 🔓");
    } else {
      alert("Wrong password! Try again! 🤔");
      this.secretPasswordInput.value = "";
    }
  }

  saveSecretNotes() {
    localStorage.setItem("secretNotes", this.secretNotes.value);
    alert("Secret notes saved! 💾");
  }

  toggleRainbowMode() {
    document.body.classList.toggle("rainbow-mode");
    if (document.body.classList.contains("rainbow-mode")) {
      // Store the current background before starting party mode
      this.previousBackground = document.body.style.background;
      this.rainbowBtn.textContent = "🎊 PARTY ON! 🎊";
      this.startLaserRainbow();
    } else {
      this.rainbowBtn.textContent = "🪩🪅PARTY MODE🥳🎉";
      this.stopLaserRainbow();
    }
  }

  startLaserRainbow() {
    // Create laser beams shooting across the screen
    const colors = [
      "#ff0000",
      "#ff7f00",
      "#ffff00",
      "#00ff00",
      "#0000ff",
      "#4b0082",
      "#9400d3",
    ];

    // Start the changing background effect
    this.startColorChangingBackground();

    this.createLaserBeam(colors[0], "horizontal", 0);
    this.createLaserBeam(colors[1], "vertical", 0);
    this.createLaserBeam(colors[2], "diagonal", 0);
    this.createLaserBeam(colors[3], "horizontal", 1);
    this.createLaserBeam(colors[4], "vertical", 1);
    this.createLaserBeam(colors[5], "diagonal", 1);
    this.createLaserBeam(colors[6], "horizontal", 2);

    // Keep creating new laser beams (faster!)
    this.laserInterval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomDirection = ["horizontal", "vertical", "diagonal"][
        Math.floor(Math.random() * 3)
      ];
      this.createLaserBeam(randomColor, randomDirection, 0);
    }, 400); // Faster - every 400ms instead of 800ms
  }

  startColorChangingBackground() {
    const colors = [
      "#ff0000",
      "#ff7f00",
      "#ffff00",
      "#00ff00",
      "#0000ff",
      "#4b0082",
      "#9400d3",
    ];

    let colorIndex = 0;

    // Change background color every 300ms
    this.backgroundInterval = setInterval(() => {
      const currentColor = colors[colorIndex];
      const nextColor = colors[(colorIndex + 1) % colors.length];

      document.body.style.background = `linear-gradient(135deg, ${currentColor}, ${nextColor})`;
      document.body.style.transition = "background 0.3s ease";

      colorIndex = (colorIndex + 1) % colors.length;
    }, 300);
  }

  createLaserBeam(color, direction, delay) {
    const laser = document.createElement("div");
    laser.style.cssText = `
       position: fixed;
       background: linear-gradient(90deg, transparent, ${color}, transparent);
       z-index: 999;
       pointer-events: none;
       animation: laser${direction} 2s linear forwards;
       animation-delay: ${delay * 200}ms;
     `;

    if (direction === "horizontal") {
      laser.style.cssText += `
         width: 100vw;
         height: 4px;
         top: ${Math.random() * 100}vh;
         left: -100vw;
       `;
    } else if (direction === "vertical") {
      laser.style.cssText += `
         width: 4px;
         height: 100vh;
         top: -100vh;
         left: ${Math.random() * 100}vw;
         background: linear-gradient(180deg, transparent, ${color}, transparent);
       `;
    } else if (direction === "diagonal") {
      laser.style.cssText += `
         width: 200vw;
         height: 4px;
         top: ${Math.random() * 100}vh;
         left: -100vw;
         transform: rotate(45deg);
       `;
    }

    document.body.appendChild(laser);

    // Remove laser after animation (faster lasers!)
    setTimeout(() => {
      if (laser.parentNode) {
        laser.parentNode.removeChild(laser);
      }
    }, 1000 + delay * 100); // Faster - 1 second instead of 2 seconds
  }

  stopLaserRainbow() {
    // Clear the intervals
    if (this.laserInterval) {
      clearInterval(this.laserInterval);
    }
    if (this.backgroundInterval) {
      clearInterval(this.backgroundInterval);
    }

    // Remove any existing laser beams
    const existingLasers = document.querySelectorAll('[style*="laser"]');
    existingLasers.forEach((laser) => {
      if (laser.parentNode) {
        laser.parentNode.removeChild(laser);
      }
    });

    // Restore the previous background
    if (this.previousBackground) {
      document.body.style.background = this.previousBackground;
    } else {
      document.body.style.background = "";
    }
    document.body.style.transition = "";
  }

  setupEasterEggs() {
    // Click on avatar multiple times
    let avatarClicks = 0;
    this.avatar.addEventListener("click", () => {
      avatarClicks++;
      if (avatarClicks === 5) {
        this.findEasterEgg("Avatar clicker! 🎭");
        avatarClicks = 0;
      }
    });

    // Double-click on title
    this.mainTitle.addEventListener("dblclick", () => {
      this.findEasterEgg("Title double-clicker! 👑");
    });

    // Right-click on canvas (context menu)
    this.canvas.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this.findEasterEgg("Canvas right-clicker! 🎨");
    });
  }

  findEasterEgg(message) {
    this.eggCount++;
    localStorage.setItem("eggCount", this.eggCount.toString());
    this.eggCountDisplay.textContent = this.eggCount;

    // Show a fun message
    const eggMessage = document.createElement("div");
    eggMessage.textContent = message;
    eggMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff69b4, #ff1493);
            color: white;
            padding: 20px;
            border-radius: 20px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 1000;
            animation: bounce 1s ease-in-out;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;

    document.body.appendChild(eggMessage);

    setTimeout(() => {
      document.body.removeChild(eggMessage);
    }, 3000);
  }

  loadSavedData() {
    // Load avatar
    const savedAvatar = localStorage.getItem("currentAvatar");
    if (savedAvatar) {
      this.avatar.textContent = savedAvatar;
    }

    // Load about text
    const savedAbout = localStorage.getItem("aboutText");
    if (savedAbout) {
      this.aboutText.textContent = savedAbout;
    }

    // Load mood
    const savedMood = localStorage.getItem("currentMood");
    if (savedMood) {
      this.moodSlider.value = savedMood;
      this.updateMood(savedMood);
    }

    // Load favorite color
    const savedColor = localStorage.getItem("favoriteColor");
    if (savedColor) {
      this.favColor.value = savedColor;
      this.updateFavoriteColor(savedColor);
    }

    // Load favorite foods
    const savedFoods = JSON.parse(
      localStorage.getItem("favoriteFoods") || '["Pizza", "Ice Cream"]'
    );
    this.foodList.innerHTML = "";
    savedFoods.forEach((food) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${food}</span>
        <button class="delete-food-btn" onclick="homepage.deleteFavoriteFood(this)">❌</button>
      `;
      this.foodList.appendChild(li);
    });

    // Load favorite animal
    const savedAnimal = localStorage.getItem("favoriteAnimal");
    if (savedAnimal) {
      this.favAnimal.value = savedAnimal;
      this.animalDisplay.textContent = savedAnimal;
    }

    // Load egg count
    this.eggCountDisplay.textContent = this.eggCount;

    // Load custom colors
    const savedBg1 = localStorage.getItem("customBg1");
    const savedBg2 = localStorage.getItem("customBg2");
    const savedTitleColor = localStorage.getItem("customTitleColor");
    const savedTextColor = localStorage.getItem("customTextColor");
    const savedButtonColor = localStorage.getItem("customButtonColor");

    if (savedBg1 && savedBg2) {
      this.bgColor1.value = savedBg1;
      this.bgColor2.value = savedBg2;
      this.applyBackgroundColors();
    }

    if (savedTitleColor) {
      this.titleColor.value = savedTitleColor;
      this.textColor.value = savedTextColor;
      this.buttonColor.value = savedButtonColor;
      this.applyTextColors();
    }
  }
}

// Initialize the homepage when the page loads
let homepage;
document.addEventListener("DOMContentLoaded", () => {
  homepage = new WillasHomepage();
});

// Add some fun global functions for Willa to experiment with
window.willaMagic = {
  makeRainbow: () => {
    document.body.style.background =
      "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "rainbow 2s ease infinite";
  },

  makeConfetti: () => {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${
                  ["#ff69b4", "#ff1493", "#00ff00", "#0000ff", "#ffff00"][
                    Math.floor(Math.random() * 5)
                  ]
                };
                top: -10px;
                left: ${Math.random() * 100}vw;
                animation: fall 3s linear forwards;
                z-index: 1000;
            `;
      document.body.appendChild(confetti);

      setTimeout(() => {
        document.body.removeChild(confetti);
      }, 3000);
    }
  },

  surprise: () => {
    alert("🎉 Surprise! You found the secret function! 🎉");
    window.willaMagic.makeConfetti();
  },
};

// Add CSS for confetti animation
const style = document.createElement("style");
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }

    .rainbow-mode {
        animation: rainbow 1s ease infinite !important;
    }
`;
document.head.appendChild(style);
