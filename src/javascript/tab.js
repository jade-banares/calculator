function tabCalc(myEvent, myTheme) {
    let i, j, links;
    j = document.getElementsByClassName("content");
    for (i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }
    links = document.getElementsByClassName("links");
    for (i = 0; i < j.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(myTheme).style.display = "block";
    myEvent.currentTarget.className += " active";
}




function themeOne() {
    const hexColor = "hsl(224, 27%, 31%)";
    const txtColor = "white"
    document.body.style.backgroundColor = hexColor;
    document.body.style.color = txtColor;
}

function themeTwo() {
    let hexColor = "hsl(0, 0%, 90%)";
    document.body.style.backgroundColor = hexColor;
}

function themeThree() {
    let hexColor = "hsl(268, 75%, 9%)";
    document.body.style.backgroundColor = hexColor;
}

let resetCount = 0
let count0 = 0
let count1 = 1
let count2 = 2
let count3 = 3
let count4 = 4
let count5 = 5
let count6 = 6
let count7 = 7
let count8 = 8
let count9 = 9
let addplus = "+"
let dividedby = "/"
let min = "-"
let multiply = "x"
let equals = ""

let countOne = document.getElementById("count-one")

function addZero() {
    countOne.textContent = count0
}

function addOne() {
    countOne.textContent = count1
}

function addTwo(){
    countOne.textContent = count2;
}

function addThree(){
    countOne.textContent = count3;
}

function addFour(){
    countOne.textContent = count4;
}

function addFive(){
    countOne.textContent = count5;
}

function addSix(){
    countOne.textContent = count6;
}
function addSeven(){
    countOne.textContent = count7;
}

function addEight(){
    countOne.textContent = count8;
}

function addNine(){
    countOne.textContent = count9;
}

function addPlus(){
    countOne.textContent = addplus;
}

function divide(){
    countOne.textContent = dividedby;
}


function minus(){
    countOne.textContent = min;
}

function times(){
    countOne.textContent = multiply;
}

function equal(){
    countOne.textContent = equals;
}

function reset(){
    countOne.textContent = resetCount;
}

