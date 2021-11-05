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
    return score;
}

function game() {
    let playchoice;
    let result;
    let compscore=0;
    let playerscore=0;

    while (compscore < 3 && playerscore < 3) {
        playchoice = prompt("Choose your weapon, peasant. Will you wield rock, paper, or scissors?");
        result = singleround(playchoice.toLowerCase());

        if (result == "comp") {
            compscore = compscore+1;
        } else if (result == "player") {
            playerscore =playerscore+ 1;
        }

        console.log("computerscore: " + compscore);
        console.log("playerscore: " + playerscore);
    }
    return endgame(playerscore, compscore);
}

function endgame(playscore, compscore) {
    let resultmessage;

    if (playscore == 3) {
        resultmessage = "Congrats! You beat the computer!";
    } else if (compscore == 3) {
        resultmessage = "Sorry. You lost to the computer.";
    } else {
        resultmessage = "There's been some kind of error. Oh well.";
    }

    return resultmessage;
}
