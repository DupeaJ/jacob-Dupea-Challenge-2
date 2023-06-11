// function playGame(playerChoice) {
//     // Generate the computer's choice
//     const choices = ['rock', 'paper', 'scissors'];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
//     // Determine the winner
//     let result;
//     if (playerChoice === computerChoice) {
//       result = "It's a tie!";
//     } else if (
//       (playerChoice === 'rock' && computerChoice === 'scissors') ||
//       (playerChoice === 'paper' && computerChoice === 'rock') ||
//       (playerChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//       result = 'You win!';
//     } else {
//       result = 'Computer wins!';
//     }
  
//     // Display the results
//     alert(`Player: ${playerChoice}`);
//     alert(`Computer: ${computerChoice}`);
//     alert(result);
//   }
  
//   // Example usage
//   playGame('rock');