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