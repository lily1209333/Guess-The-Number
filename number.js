const p = document.getElementById(`number`);
const num = Math.floor(Math.random() * 10) + 1;
while (true) {
let guess = prompt (`Guess a number from 1-10`);
guess = parseInt(guess);
if (guess > num) {
    alert (`Sorry that number is too large`)
} else if (guess < num) {
    alert (`Sorry that number is too small`)
} else if (guess == num) {
    p.innerText = `Congrats, you have correctly guessed the number.`
    break;
}
}