let randNum1 = 1 + Math.floor(6*Math.random());
let randomDiceImage = "dice"+randNum1+".png";
let randomImageSource = "images/"+randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

let randNum2 = 1 + Math.floor(6*Math.random());
let randomImageSource2 = "images/dice"+randNum2+".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins!"
}else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML= "Player 2 wins!🚩"
}else{
    document.querySelector("h1").innerHTML= "Draw ;)"
}