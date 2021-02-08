let drumButton = document.querySelectorAll(".drum");
let tom1 = new Audio('/sounds/tom-1.mp3')
let tom2 = new Audio('/sounds/tom-2.mp3')
let tom3 = new Audio('/sounds/tom-3.mp3')
let tom4 = new Audio('/sounds/tom-4.mp3')
let snare = new Audio('/sounds/snare.mp3')
let kick = new Audio('/sounds/kick-bass.mp3')
let crash = new Audio('/sounds/crash.mp3')



for (let i = 0; i < drumButton.length; i++) {

    drumButton[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            kick.play();
            break;
        case "l":
            crash.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}