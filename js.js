
let anjam = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    }
  
updateElement()
  


function playGame(halbzharda) {

    const computerMove = jolayComputer();

    let result = '';

  
    if (halbzharda === 'rock') {

     if (computerMove === 'rock') {
         result = 'tie';
     } else if (computerMove === 'paper') {
         result = 'you lost';
     } else if (computerMove === 'scissors') {
         result = 'you win';
     }
    } 
    
    else if (halbzharda === 'paper')
     {
        if (computerMove === 'rock') {
            result = 'you win';
            } else if (computerMove === 'paper') {
            result = 'tie';
            } else if (computerMove === 'scissors') {
            result = 'you lost';
            }
    }

     else if (halbzharda === 'scissors') 
     {
        if (computerMove === 'rock') {
            result = 'you lost';
            } else if (computerMove === 'paper') {
            result = 'you win';
            } else if (computerMove === 'scissors') {
            result = 'tie';
            }
     }
     
     if (result === 'you win') {
        anjam.wins += 1;
     } else if (result === 'you lost') {
        anjam.losses += 1;
     } else if (result === 'tie') {
        anjam.ties += 1;
     }


     localStorage.setItem('score', JSON.stringify(anjam));
    
     updateElement()

     document.querySelector('.js-p3')
      .innerHTML = result;

      document.querySelector('.js-p2')
         .innerHTML = `You 
         <img src="${halbzharda}-emoji.png" class="soraa">
         <img src="${computerMove}-emoji.png" class="soraa">
         Computer`
}

function updateElement() {
   document.querySelector('.js-p1')
.innerHTML = `Wins: ${anjam.wins}, Losses: ${anjam.losses}, Ties: ${anjam.ties}`
}

function jolayComputer() {
    const randomNumber = Math.random();


    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
       computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
       computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
       computerMove = 'scissors';
    }


    return computerMove;
}