//Initial set up
const rounds = document.querySelector('#rounds');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const ties = document.querySelector('#ties');
const winText = document.querySelector('p1');
const finalPara = document.querySelector('#finalPara');
const finalText = document.querySelector('p2');

//Adding eventListener to buttons on the page
const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', exePlay);

function exePlay(e)
{
    playRound(e.target.getAttribute('id'), computerPlay())
}

//computerPlay() randoms the computer's choice and returns the string of its choice
function computerPlay()
{
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice)
    {
        case 0:
          return "rock";
          break;
        case 1:
          return "paper";
          break;
        case 2:
          return "scissor";
          break;
        default:
          break;
    }
}
/* Alternative to switch case
function computerPlay()
      {
          var inputs = ['rock', 'paper', 'scissors'];
          var index = Math.floor(Math.random() * 3);
          return inputs[index];
      }
*/

//playRound() plays a round of R-P-S with computerPlay
function playRound(playerSelection, computerSelection)
{
  let resultString = "";

  if(playerSelection.toLowerCase() === computerSelection)
    resultString = "Draw game!";
  else if (playerSelection.toLowerCase() === "rock")
  {
      if(computerSelection === "scissor")
        resultString = "Player wins! " + playerSelection.toLowerCase() + " beats " + computerSelection;
      else
        resultString = "Player loses! " + computerSelection + " beats " + playerSelection.toLowerCase();
  }
  else if (playerSelection.toLowerCase() === "paper")
  {
      if(computerSelection === "rock")
        resultString = "Player wins! " + playerSelection.toLowerCase() + " beats " + computerSelection;
      else
        resultString = "Player loses! " + computerSelection + " beats " + playerSelection.toLowerCase();
  }
  else if (playerSelection.toLowerCase() === "scissor")
  {
      if(computerSelection === "paper")
        resultString = "Player wins! " + playerSelection.toLowerCase() + " beats " + computerSelection;
      else
        resultString = "Player loses! " + computerSelection + " beats " + playerSelection.toLowerCase();
  }

  winText.innerHTML = resultString;
  if(resultString.includes("wins"))
    {
        wins.innerHTML++;
    }
    else if(resultString.includes("Draw"))
    {
      ties.innerHTML++;
    }
    else
    {
      losses.innerHTML++;
    }

    if(wins.innerHTML === "5" || losses.innerHTML === "5")
    {
        finalPara.innerHTML = "Final Results: ";
        if(wins.innerHTML > losses.innerHTML)
            finalText.innerHTML = "You won! Press Reset Game to play again.";
        else
            finalText.innerHTML = "You lost. Press Reset Game to play again.";

        buttons.removeEventListener('click', exePlay);
    }

  rounds.innerHTML++;
  return;
}

function resetGame()
{
  document.location.reload();
}

