function getComputerChoice(){
const randomNumber = Math.random();

    if(randomNumber< 0.3){
        console.log('rock');
    }
    else if(randomNumber <0.6){
        console.log('paper');
    }
    else {
        console.log('scissors');
    }
}
getComputerChoice();