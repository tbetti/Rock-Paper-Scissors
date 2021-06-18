// Set up variables
var options = ["rock", "paper", "scissors"];
var userScore = 0;
var computerScore = 0;
var tie = 0;

// Play the game using the user choice and computer choice
function gamePlay(userChoice, computerChoice) {
    if (userChoice == "rock" && computerChoice == "scissors"){
        userScore++;
        return userScore;
    } else if (userChoice == "rock" && computerChoice == "paper"){ 
        computerScore++;
        return computerScore;
    } else if (userChoice == "paper" && computerChoice == "rock"){ 
        userScore++;
        return userScore;
    } else if (userChoice == "paper" && computerChoice == "scissors"){ 
        computerScore++;
        return computerScore;
    } else if (userChoice == "scissors" && computerChoice == "paper"){
        userScore++; 
        return userScore;
    } else if (userChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return computerScore;
    } else if (userChoice == computerChoice){
        tie++;
        return tie;
    }
}

//Play the game multiple times
while (window.confirm("Play rock, paper, scissors?")){
    // Generate user and computer choices
    userChoice = window.prompt("Please type R, P, or S to choose rock, paper, or scissors");
    index = Math.floor(Math.random() * options.length);
    computerChoice = options[index];

    // Set up user input so you can use capital or lowercase letters
    if (userChoice === "R" || userChoice === "r") {
        userChoice = "rock";
    } else if (userChoice === "P" || userChoice === "p"){
        userChoice = "paper";
    } else if (userChoice === "S" || userChoice === "s"){
        userChoice = "scissors";
    } else {
        window.prompt("Invalid input. Please type R, P, or S to choose rock, paper, or scissors");
    }

    //Play the game and update score
    gamePlay(userChoice, computerChoice);
    window.alert("You chose " + userChoice + ".  The computer chose " + computerChoice + "." + "\n\nYour score: " + userScore + "\nComputer Score: " + computerScore + "\nTie: " + tie);
}