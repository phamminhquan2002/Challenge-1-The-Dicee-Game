// Generate random number
function rollingDice(){
    return Math.floor(Math.random() * 6) + 1; 
}

// Set new Dice
const rNumber1 = rollingDice();
document.querySelector(".img1").setAttribute("src",`images/dice${rNumber1}.png`);
const rNumber2 = rollingDice();
document.querySelector(".img2").setAttribute("src",`images/dice${rNumber2}.png`);

// Set Winner
const result = document.querySelector("h1");

result.innerHTML = (rNumber1 > rNumber2) ? "🚩 Player 1 wins!" :
        ((rNumber1 < rNumber2) ? "Player 2 wins 🚩!" : "Draw!");

//  Hit the roll btn
const rollAgain = document.querySelector(".roll");
rollAgain.addEventListener("click",() => {location.reload()});
