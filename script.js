function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const min = 0;
  const max = computerChoices.length;
  const computerChoice = Math.floor(Math.random() * (max - min) + min);

  return computerChoices[computerChoice];
}

function validatePlayerChoice(playerSelection) {
  const validChoices = ['rock', 'paper', 'scissors'];
  let playerChoice = false;
  for (choice of validChoices) {
    playerChoice = choice === playerSelection;
    if (playerChoice) break;
  }
  return playerChoice;
}

function getPlayerChoice() {
  let playerSelection = prompt('Choose your weapons!').toLowerCase();
  while (!validatePlayerChoice(playerSelection)) {
    playerSelection = prompt(
      'Please, choose a valid option: Rock, Paper, or Scissors'
    ).toLowerCase();
  }

  return playerSelection;
}

function checkWinner(playerSelection, computerSelection) {
  const case1 = playerSelection === 'rock' && computerSelection === 'paper';
  const case2 = playerSelection === 'scissors' && computerSelection === 'rock';
  const case3 = playerSelection === 'paper' && computerSelection === 'scissors';
  const case4 = playerSelection === computerSelection;
  if (case1 || case2 || case3) return 'computer';
  else if (case4) return 'draw';
  else return 'player';
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === 'computer')
    return `You loose! ${computerSelection} beats ${playerSelection} `;
  else if (result === 'draw') return 'It is a DRAW!';
  else return `You win! ${playerSelection} beats ${computerSelection} `;
}

function game() {
  let playerWinCount = 0;
  let compWinCount = 0;
  for (let round = 1; round <= 5; round++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.clear();

    let game = playRound(playerSelection, computerSelection);
    let result = checkWinner(playerSelection, computerSelection);
    if (result === 'computer') {
      compWinCount++;
    } else if (result === 'player') {
      playerWinCount++;
    }
    console.log(`ROUND ${round} - Fight!`);
    console.log(game);
    console.log(`Player: ${playerWinCount} - Computer: ${compWinCount}`);
  }
  if (playerWinCount > compWinCount) {
    console.log('Player WON!');
  } else if (playerWinCount < compWinCount) {
    console.log('Computer WON!');
  } else {
    console.log('DRAW!');
  }
}
