const ses1 = new Audio('audio/1.wav')
const ses2 = new Audio('audio/2.wav')
const ses3 = new Audio('audio/3.wav')
const ses4 = new Audio('audio/4.wav')
const ses5 = new Audio('audio/5.wav')


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');


btn1.addEventListener("click", cal1)
btn2.addEventListener("click", cal2)
btn3.addEventListener("click", cal3)
btn4.addEventListener("click", cal4)
btn5.addEventListener("click", cal5)


function cal1() {
    ses1.play();
    console.log(1)
}


function cal2() {
    ses2.play();
    console.log(2)
}

function cal3() {
    ses3.play();
    console.log(3)
}


function cal4() {
    ses4.play();
    console.log(4)
}

function cal5() {
    ses5.play();
    console.log(5)
}