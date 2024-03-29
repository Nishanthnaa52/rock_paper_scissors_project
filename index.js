let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
  };
  
if(!score) { //score === null
    score = {
        wins : 0,
        losses : 0,
        ties : 0
    };
}

function display() {
    document.querySelector('.score-display').innerHTML = `Win:${score.wins}    losses:${score.losses}    tie:${score.ties}`;
}
    
display();

function pikeComputerMove() {

const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
}else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors';
}
return computerMove;
}

function finalResult(playerMove) {
    const computerMove = pikeComputerMove();
    let result = '';

    if(playerMove === 'rock'){

        if(computerMove === 'rock'){
            result = 'Tie.';
        } else if(computerMove === 'paper'){
            result = 'You lose.';
        } else if(computerMove === 'scissors'){
            result = 'You win.';
        }

    }else if(playerMove === 'paper') {

        if(computerMove === 'paper'){
            result = 'Tie.';
        } else if(computerMove === 'scissors'){
            result = 'You lose.';
        } else if(computerMove === 'rock'){
            result = 'You win.';
        }  

    }else if(playerMove === 'scissors') {

        if(computerMove === 'scissors'){
            result = 'Tie.';
        } else if(computerMove === 'rock'){
            result = 'You lose.';
        } else if(computerMove === 'paper'){
            result = 'You win.';
        }

    }

    if (result === 'You win.') {
        score.wins +=1;
    }else if (result === 'You lose.') {
        score.losses +=1;
    }else {
        score.ties += 1;
    }

    document.querySelector('.display-move').innerHTML = `You
        <img class="result-icon" src="./img/${playerMove}-emoji.png">
        <img class="result-icon" src="./img/${computerMove}-emoji.png">
        Computer`;
    document.querySelector('.displayresult').innerHTML = `${result}`;

    localStorage.setItem('score',JSON.stringify(score));

    display();

}
