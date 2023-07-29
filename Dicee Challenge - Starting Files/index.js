var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "\u{1F604} Player 1 wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = " Player 2 wins! \u{1F604}";
}
else{
    document.querySelector("h1").textContent = "Draw!";

}