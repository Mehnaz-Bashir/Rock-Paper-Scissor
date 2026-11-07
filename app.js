let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissor

};

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        console.log("you Loose!");
        msg.innerText = "You loose!";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>{
    console.log("user choice= ",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice= ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        //console.log("Choice was click!", userChoice);
        playgame(userChoice);
    }); 
});