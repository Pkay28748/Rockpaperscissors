// We will be working on the final project where all the instruction
// have been put into place and the final work has been showcased so stay with me 

function getComputerchoice(){
    let x = Math.floor(Math.random()* 3);

    if (x === 0 ){
        return "rock";
    }

    else if ( x === 1){
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter any of the three choices").toLocaleLowerCase();

    if ( choice === "rock" || choice==="paper" || choice==="scissors"){
        console.log(choice);
        return choice;
    }
    else{
        console.log("You have any of these three choices")
        return getComputerchoice();
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore=0;

    function playRound(humanChoice, computerChoice){
     
        if (humanChoice === computerChoice){
            console.log("Its a draw");
        }
        else if(humanChoice==="rock" || computerChoice==="scissors"){
            console.log(`You win ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        }

        else if ( humanChoice=== "paper"||computerChoice==="rock"){
            console.log(`You lost ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
        else{
            console.log("This combination is out of scope for this game");
        }

    }
}
// At this stage we will be playing the entire game from 1
// Pass the methods of 1 and 2 as arguments in 3

// The logic that plays the five round removed 

