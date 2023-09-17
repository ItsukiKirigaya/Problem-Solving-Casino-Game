// Function to implement the game when the button is clicked
function playGame() {
    // Generate two random numbers between 1 and 10
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;

    // Calculate the sum of the two random numbers
    const sum = number1 + number2;

    // Determine if the sum is even or odd
    let resultText = `The sum of ${number1} and ${number2} is ${sum}. It's `;

    if (sum % 2 === 0) {
        resultText += "even.";
    } else {
        resultText += "odd.";
    }

    // Display the result on the webpage
    document.getElementById("result").innerHTML = resultText;
}

// Event listener for the button click
document.getElementById("playButton").addEventListener("click", playGame);
