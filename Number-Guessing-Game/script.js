let randomNumber = parseInt(Math.random() * 100 + 1);
    const submit = document.querySelector("#sbt");
    const userInput = document.querySelector("#guessField");
    const guessSlot = document.querySelector(".guesses");
    const remaining = document.querySelector(".lastResult");
    const execute = document.querySelector(".execute");
    const startAgain = document.querySelector(".resultParas");
    const p = document.createElement("p");

    let prevGuess = [];
    let numGuess = 1;
    let playGame = true;

    if (playGame) {
      submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
      });
    }

    const validateGuess = (guess) => {
      if (isNaN(guess)) {
        alert("Please Enter a Valid Number");
      } else if (guess < 1 || guess > 100) {
        alert("Number must be between 1 and 100");
      } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
          displayGuess(guess);
          displayMessage(`Game Over!! Random Number was ${randomNumber}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
    };

    const checkGuess = (guess) => {
      if (guess === randomNumber) {
        displayMessage(`🎉 You Win the Game!`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`📉 Number is Too LOW`);
      } else if (guess > randomNumber) {
        displayMessage(`📈 Number is Too HIGH`);
      }
    };

    const displayGuess = (guess) => {
      userInput.value = "";
      guessSlot.innerHTML += `${guess}, `;
      numGuess++;
      remaining.innerHTML = `${11 - numGuess}`;
    };

    const displayMessage = (message) => {
      execute.innerHTML = `<h2>${message}</h2>`;
    };

    const endGame = () => {
      userInput.value = "";
      userInput.setAttribute("disabled", "");
      p.classList.add("button");
      p.innerHTML = `<h2 id="newGame">🔄 Start New Game</h2>`;
      startAgain.appendChild(p);
      playGame = false;
      newGame();
    };

    const newGame = () => {
      const newGameButton = document.querySelector("#newGame");
      newGameButton.addEventListener("click", () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startAgain.removeChild(p);
        execute.innerHTML = "";
        playGame = true;
      });
    };