//Tab Function

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


//Button Tab
const btnone = document.querySelector("#btnone");
const btntwo = document.querySelector("#btntwo");
const btnthree = document.querySelector("#btnthree");

btnone.addEventListener("click", function(){
    const hexColor = "hsl(224, 27%, 31%)";
    const txtColor = "white"
    document.body.style.backgroundColor = hexColor;
    document.body.style.color = txtColor;
});

btntwo.addEventListener("click", function(){
    const hexColor = "#E6E6E6";
    const txtColor = "black"
    document.body.style.backgroundColor = hexColor;
    document.body.style.color = txtColor;
});

btnthree.addEventListener("click", function(){
    const hexColor = "hsl(268, 75%, 9%)";
    const txtColor = "#FFE33A"
    document.body.style.backgroundColor = hexColor;
    document.body.style.color = txtColor;
});

function addZero() {
    calc.answer.value += '0';
    calc1.answer.value += '0';
}

function addOne() {
    calc.answer.value += '1';
    calc1.answer.value += '1';
}

function addTwo(){
    calc.answer.value += '2';
    calc1.answer.value += '2';
}

function addThree(){
    calc.answer.value += '3';
}

function addFour(){
    calc.answer.value += '4';
}

function addFive(){
    calc.answer.value += '5';
}

function addSix(){
    calc.answer.value += '6';
}
function addSeven(){
    calc.answer.value += '7'
}
function addEight(){
    calc.answer.value += '8'
}

function addNine(){
    calc.answer.value += '9';
}

function addPlus(){
    calc.answer.value += '+';
}

function divide(){
    calc.answer.value += '/';
}

function minus(){
    calc.answer.value += '-';
}

function times(){
    calc.answer.value += '*';
}

function equal(){
    calc.answer.value = eval(calc.answer.value);
}

function decimal(){
    calc.answer.value += '.';
}

function reset(){
    calc.answer.value = '';
}

