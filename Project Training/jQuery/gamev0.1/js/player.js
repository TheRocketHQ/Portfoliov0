function Player(first, last, health, weapon) {
    this.firstName = first;
    this.lastName = last;
    this.health = health;
    this.name = function () {
        return this.firstName + " " + this.lastName;
    };
}

var playerOne = new Player("John", "Doe", 100);
var playerTwo = new Player("Jane", "Doe", 100);

console.log(playerOne);
console.log(playerTwo);

document.getElementById("demo").innerHTML =
    "My father is " + playerOne.name();