//Game values:
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements:
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

//Assign UI min - max numbers to show in the app:
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener("click", function(){
        //from a string into a number parseInt
    let guess = parseInt(guessInput.value);

    //validate
    if( isNaN(guess) || guess< min || guess > max){
        setMessage(`Please enter a Number between ${min} and ${max}.`, "red")
    }
    // check if won
    if(guess === winningNum){
        //Game over - won:
        gameOver(true, `${winningNum} is correct number. You Win! 🍪`);
    } else {
        //incorrect number
        guessesLeft -=1;

        if(guessesLeft === 0){
            //Game over - lost:
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
            //Game continuos answer wrong:
            //change border color
            guessInput.style.borderColor = "orange";
            //Clear input
            guessInput.value = "";
            //wrong number + guesses left
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "orange");
        }
    }

});

//Set Message function
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = "green" : color = "red";

    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    // won message
    setMessage(msg);
}