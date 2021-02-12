console.log("Welcome to the Snake And Ladder Game..!!");

class SnakeAndLadder {
    Position = () => {
        let playerPosition = 0;
        return playerPosition;
    }
    rollDice = () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Number When Rolled : " + diceRoll);
    }
}
var playerPosition = new SnakeAndLadder() ;
console.log(playerPosition.Position());
var DiceRoll = new SnakeAndLadder();
console.log(DiceRoll.rollDice());
