let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissor

}

const playgame = () =>{
    console.log("user choice= ",userChoice)
    // Generate computer choice
    const compChoice = genCompChoice();
}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        console.log("Choice was click!", userChoice);
        playgame(userChoice);
    }); 
});