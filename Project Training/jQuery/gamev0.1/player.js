function Player(first, last, health, weapon) {
    this.firstName = first;
    this.lastName = last;
    this.health = health;
    this.weapon = weapon;
}

var playerOne = new Player("John", "Doe", 100, "axe");
var playerTwo = new Player("Jane", "Doe", 100, "dagger");

console.log(playerOne.weapon);
console.log(playerTwo.weapon);