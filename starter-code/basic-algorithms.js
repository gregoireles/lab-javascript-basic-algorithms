// Names and Input
console.log("here")

//Conditionals


// Lorem ipsum generator
let hacker1 = "Grégoire";
console.log("The driver's name is " + hacker1);

let hacker2 = "Clara";
console.log("The navigator's name is " + hacker2);


if (hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has" + hacker1.length + " characters");

} else if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters ");

} else if (hacker2.length === hacker1.length) {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!! ");
}

var hacker1Maj = hacker1.toUpperCase();
var arrayofletter = []
for (var i = 0; i < hacker1Maj.length; i++) {
    //console.log(hacker1Maj[i])
    arrayofletter.push(hacker1Maj[i])
}
console.log(arrayofletter.join(' '));



