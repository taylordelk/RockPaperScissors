function computerplay() {
    let a = Math.random();
    if (a <= 0.33) {
        a = "rock";
    } else if (a <= 0.66) {
        a = "paper";
    } else {
        a = "scissors";
    }
    return a;
}

function singleround(invar) {
    let playerchoice = invar;
    let compchoice = computerplay();
    let score;
    let result= playerchoice+compchoice;
    if (compchoice == playerchoice) {
        resultmessage = "Draw!";
        score=0;
    } else {
        switch (result) {
            case "rockpaper":
                score = "comp";
                break;

            case "rockscissors":
                score = "player";
                break;

            case "paperscissors":
                score = "comp";
                break;

            case "paperrock":
                score = "player";
                break;
            
            case "scissorspaper":
                score="player";
                break;
            
            case "scissorsrock":
                score="comp";
                break;

            default:
                console.log("huh. something got messed up. roll again I guess.");
        }

    }
    console.log(score);
    return score;
}



function endgame(playscore, compscore) {
    let resultmessage;

    if (playscore == 5) {
        resultmessage = "Congrats! You beat the computer!";
    } else if (compscore == 5) {
        resultmessage = "Sorry. You lost to the computer.";
    } else {
        resultmessage = "There's been some kind of error. Oh well.";
    }

    return resultmessage;
}

const rock= document.createElement('button');
rock.textContent = 'ROCK';

const paper= document.createElement('button');
paper.textContent= 'PAPER';

const scissors= document.createElement('button');
scissors.textContent = 'SCISSORS';

rock.addEventListener('click',function(){
    let choice= 'rock';
    scorekeeper(singleround(choice));
})

paper.addEventListener('click',function(){
    let choice= 'paper';
    scorekeeper(singleround(choice));
})

scissors.addEventListener('click',function(){
    let choice= 'scissors';
    scorekeeper(singleround(choice));
})

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

const scoredisplay=document.createElement('div')
scoredisplay.textContent = ''
document.body.appendChild(scoredisplay);

let compscore=0;
let playerscore=0;

function scorekeeper(result){
    
    if (result == "comp") {
        compscore = compscore+1;
    } else if (result == "player") {
        playerscore =playerscore+ 1;
    }
    let display=`Your Score: ${playerscore}   Computer Score: ${compscore}`
    if(playerscore==5||compscore==5){
        display=endgame(playerscore, compscore);
    }
    scoredisplay.textContent=display;
}