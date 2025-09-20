/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasSword = false;
let hasCompass = false;

function startGame() {
console.log("You wake up in a dark forest.");
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  mountainPath();
} else if (choice === "village") {
  villagePath();
} else {
  console.log("You get lost and wander aimlessly. Try again.");
  startGame();
}
}

function mountainPath(){
  console.log("\n You head towards the mountains and find a sword stuck in a rock");
  let answer = readline.question("Do you take the sword? (yes/no): ");
    if(answer === "yes") {
      hasSword = true;
      console.log("You now have a sword!");
    }
    console.log("You continue climbing and face a wild bear!")

    if (hasSword) {
      console.log("You fight bravely with your sword and scare the bear away!");
    } else {
      console.log("You have no weapon and the bear chases you back down the mountain!");
    }
    endGame();

}

function villagePath() {
  console.log("\n You Walk into a small village.");
  console.log("A merchant offers you a compass.");
  let answer = readline.question("Do you buy the compass? (yes/No) :");
    if (answer === "yes") {
      hasCompass = true;
      console.log("you now have a compass!");
    }
    console.log("You hear rumor of treasure in the forest.");

    if (hasCompass) {
      console.log("With your compass, you easily navigate the forest and find the treasure chest!");
      } else {
        console.log("You Wander into the forest but get losr ...");
      }
      endGame();
  }

function endGame() {
  console.log("\n---The End---");
}

startGame();

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/