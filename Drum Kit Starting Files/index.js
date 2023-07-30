//triggers on click

for (var i =0 ; i < document.querySelectorAll("button").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);

        selected(this.innerHTML);  //work for the animation
    });
}

  
//triggers on keypress
document.addEventListener("keypress", function(event){
        makeSound(event.key);

        selected(event.key);  //works for the animation
});



function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

            default:
                console.log(this.innerHTML);
                break;
    }
};
function selected(key){
    var activeButton =document.querySelector("."+key) ;

    activeButton.classList.add("pressed");

    //at 0.5 s the class gets removed creating the animation
    setTimeout(function() {
        activeButton.classList.remove("pressed");;
    }, 100); 
    
}