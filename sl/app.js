const TIME = prompt("Enter a valid duration");
const blackBox = document.getElementById("black");
const whiteBox = document.getElementById("white");
const blackTimer = document.querySelector(".black-timer");
const whiteTimer = document.querySelector(".white-timer");
let whiteTime = TIME * 60;
let blackTime = TIME * 60;
let intervalWhite;
let intervalBlack;
blackBox.addEventListener("click", enableWhite);
whiteBox.addEventListener("click", enableBlack);
const format = (myNumber) => {
	let formattedNumber = myNumber.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	return formattedNumber;
};
function enableWhite() {
	blackBox.removeEventListener("click", enableWhite);
	whiteBox.addEventListener("click", enableBlack);
	whiteBox.classList.add("turn");
	blackBox.classList.remove("turn");
	clearInterval(intervalBlack);
	intervalWhite = setInterval(() => {
		whiteTime--;
		whiteTimer.innerText = `${format(Math.floor(whiteTime / 60))}:${format(whiteTime % 60)}`;
		if (whiteTime <= 0) {
			clearInterval(intervalWhite);
			gameOver("white");
		}
	}, 1400); //! Cheat Code
}
function enableBlack() {
	whiteBox.removeEventListener("click", enableBlack);
	blackBox.addEventListener("click", enableWhite);
	blackBox.classList.add("turn");
	whiteBox.classList.remove("turn");
	clearInterval(intervalWhite);
	intervalBlack = setInterval(() => {
		blackTime--;
		blackTimer.innerText = `${format(Math.floor(blackTime / 60))}:${format(blackTime % 60)}`;
		if (blackTime <= 0) {
			clearInterval(intervalBlack);
			gameOver("black");
		}
	}, 1000);
}

function gameOver(color) {
	setTimeout(() => {
		alert(`${color} lost the game!`);
	}, 1000);
}
