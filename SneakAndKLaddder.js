console.log("Welcome to the Snake And Ladder Game..!!");

let playerPosition = 0;
const WINNING_POS = 100;

class SnakeAndLadder {

    rollDice = () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Rolled: " + diceRoll);
        return diceRoll;
    }

    option = () => {
        while (playerPosition < 100) {

            let optionDiceRoll = Math.floor(Math.random() * 3);
            switch (optionDiceRoll) {
                case 0:
                    console.log("No Play..!! Player at Position: " + playerPosition);
                    break;
                case 1:
                    playerPosition += this.rollDice();
                    console.log("Ladder..!! Player at Position: " + playerPosition);
                    break;
                case 2:
                    playerPosition -= this.rollDice();
                    if (playerPosition < 0) {
                        playerPosition = 0;
                    }
                    console.log("Snake..!! Player at Position: " + playerPosition);
                    break;
            }
            console.log("**************");
        }
    }
}
var DiceRoll = new SnakeAndLadder();
console.log(DiceRoll.rollDice());
var Optionn = new SnakeAndLadder();
console.log(Optionn.option());