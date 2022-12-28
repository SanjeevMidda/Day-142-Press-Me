let colors = ["red", "blue", "green", "yellow", "purple", "gold", "brown"];
let button = document.querySelector('.changeColor').addEventListener("click", changeColor);

function changeColor(){

    let randomNumber = Math.floor(Math.random()*colors.length+1);
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
}