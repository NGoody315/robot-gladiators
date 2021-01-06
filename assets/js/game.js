var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight ==="FIGHT"){

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resultign message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        window.alert("You have lost your robot in battle! GAME OVER!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
} if (promptFight === "skip" || promptFight === "SKIP"){
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
} else {
    fight();
    }
}
    }
};

var startGame = function () {
    //Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
     if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! ROUND " + (i + 1));

    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);

    //if player is still alive and we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {

        //ask if player wants to use shop before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        //if yes, thake them to the store() function
        if (storeConfirm) {
        shop();
        }
    }
    }
    }   
    endGame();
};


//function to end the entire game
var endGame = function() {
    window.alert("The game has ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 7){
            window.alert ("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the shop.");

            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to for player to pick a valid option
            shop();
            break;
    }
};

startGame();