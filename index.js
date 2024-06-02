
// rock paper scissors game javascript.

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

// result display function.

function display() {
    document.querySelector('.score-display').innerHTML = `Win:${score.wins} losses:${score.losses} tie:${score.ties}`;
}
    
display();


// computer auto pike function.

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


// main function section.

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

// Button event listener set section.


document.querySelector('.js-rock-btn').addEventListener('click', () => {
    finalResult('rock');
});


document.querySelector('.js-paper-btn').addEventListener('click', () => {
    finalResult('paper');
});

document.querySelector('.js-scissors-btn').addEventListener('click', () => {
    finalResult('scissors');
});





// auto play function section.

const autoButton = document.querySelector('.auto-button');
let autoPLlayId ;
function autoPlay() {
    if (autoButton.innerHTML === 'AUTO Play') {
        autoPLlayId = setInterval( function () {
            const ran = Math.random();
            const checkVAlue = Math.round(ran*10);
            let autoResult = '';

            if (checkVAlue <= 3) {
                autoResult = 'rock';
            }else if ( checkVAlue <= 7) {
                autoResult = 'paper';
            }else {
                autoResult = 'scissors';
            }

            finalResult(autoResult);
        }, 1000);
        autoButton.innerHTML = 'STOP Play';

    }else {
        autoButton.innerHTML = 'AUTO Play';
        clearInterval(autoPLlayId);
    }

}

// document.querySelector('.js-rest-btn').addEventListener('click', () => {

// });

document.querySelector('.js-auto-btn').addEventListener('click',() => {
    autoPlay();
});