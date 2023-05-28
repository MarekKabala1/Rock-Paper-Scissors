//Main Game Function
const game = () => {
	let pScore = 0;
	let cScore = 0;
	let moves = 1;

	//Start the Game Function
	const startGame = () => {
		const playBtn = document.querySelector('#startGame');
		const intro = document.querySelector('.welcome');
		const match = document.querySelector('.game');

		//Fedout welcome screen, FedIn game screen

		playBtn.addEventListener('click', () => {
			intro.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};
	//Play Game

	const play = () => {
		const gameButtons = document.querySelectorAll('.game-btn button');
		const playerHand = document.querySelector('#pImg');
		const computerHand = document.querySelector('#cImg');
		const hands = document.querySelectorAll('.img');
		const movesLeft = document.querySelector('.movesLeft');
		const result = document.querySelector('.result');
		const match = document.querySelector('.game');
		const winText = document.querySelector('.result h1');
		const restart = document.querySelector('#new');

		hands.forEach((hand) => {
			hand.addEventListener('animationend', function () {
				this.style.animation = '';
			});
		});

		//Arrey with Computer choise

		const computerOptions = ['rock', 'paper', 'scissors'];

		gameButtons.forEach((button) => {
			//I Use Regular Function to use 'this'
			// In The arrow function 'this' is not working
			button.addEventListener('click', function () {
				console.log(this);

				//Function and if statment to End the game
				gameOver = () => {
					moves === 1;
					if (moves === 5) {
						setTimeout(function () {
							result.style.display = 'flex';
							match.style.display = 'none';
						}, 2500);
						return true;
					}
					if (pScore > cScore) {
						winText.textContent = 'You are a winner :)!!!';
						return;
					} else if (pScore < cScore) {
						winText.textContent = 'You are a loser:(';
						return;
					} else {
						winText.textContent = 'Is it a tie';
					}
					return;
				};
				gameOver();

				// console.log(button);

				//Generate Random Computer number betwene 1 and 3
				//Math random generate number between 0 and 1

				const computerNumber = Math.floor(Math.random() * 3);
				// console.log(computerNumber);

				//Randome computer choise from Arrey

				const computerChoice = computerOptions[computerNumber];
				// console.log(computerChoise);
				// console.log(computerChoice, button);

				//Set a time deley for animatin

				setTimeout(() => {
					//update a text content
					compareHands(this.textContent, computerChoice);

					//Update hand img

					playerHand.src = `assets/${this.textContent}.png`;
					computerHand.src = `assets/${computerChoice}.png`;
				}, 2000);
				console.log(playerHand, computerHand, this);

				//Animation hands for hands

				playerHand.style.animation = 'playerAnimation 2s ease';
				computerHand.style.animation = 'computerAnimation 2s ease';

				//Moves Left in the game

				movesLeft.innerText = `Moves Left : ${5 - moves}`;
				moves++;
			});
		});

		//Restart Geme click on button

		const gameRestart = () => {
			restart.addEventListener('click', () => {
				pScore = '0';
				cScore = '0';
				moves = '1';
				//---------->check why is not working<-----------
				// hands = '';
				window.location.reload();
				match.style.display = 'flex';
				result.style.display = 'none';
			});
		};
		gameRestart();
	};

	//Update score

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		//Update Text who won

		const winner = document.querySelector('.value');

		//Checing for a tie

		if (playerChoice === computerChoice) {
			winner.textContent = 'It is a tie';
			// cScore++;
			// pScore++;
			return;
		}

		//Check for a rock

		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'You win!!!';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer win :(';
				cScore++;
				updateScore();
				return;
			}
		}

		//check for paper

		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Computer win :(';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'You win!!!';
				pScore++;
				updateScore();
				return;
			}
		}

		//check for scissors

		if (playerChoice === 'scissors') {
			if (computerChoice === 'paper') {
				winner.textContent = 'You win!!!';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer win :(';
				cScore++;
				updateScore();
				return;
			}
		}
	};

	//call function

	startGame();
	play();
	// compareHands();
};

//Call Main Game Function

game();
