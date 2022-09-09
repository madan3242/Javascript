let ramdomNumber1 = Math.floor(Math.random() * 6) + 1;
let ramdomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "./images/dice"+ramdomNumber1+".png";
let randomImage2 = "./images/dice"+ramdomNumber2+".png";

document.querySelector('.img1').setAttribute('src', randomImage1);
document.querySelector('.img2').setAttribute('src', randomImage2);

if(ramdomNumber1 > ramdomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 is Winner";
}
else if(ramdomNumber1 == ramdomNumber2){
    document.querySelector('h1').innerHTML = "Draw";
}
else{
    document.querySelector('h1').innerHTML = "Player 2 is winner";
}