document.getElementById("button1").style.color = "#828282";
document.getElementById("button2").style.color = "#828282";


document.getElementById("button1").onclick = function(){
    this.style.color = "#070707";
    document.getElementById("button2").style.color = "#828282";
    document.getElementById("button3").style.color = "#828282";
    document.getElementById("button4").style.color = "#828282";
    document.getElementById("button5").style.color = "#828282";
};

document.getElementById("button2").onclick = function(){
    this.style.color = "#070707";
    document.getElementById("button1").style.color = "#828282";
    document.getElementById("button3").style.color = "#828282";
    document.getElementById("button4").style.color = "#828282";
    document.getElementById("button5").style.color = "#828282";
};

document.getElementById("button3").onclick = function(){
    this.style.color = "#070707";
    document.getElementById("button1").style.color = "#828282";
    document.getElementById("button2").style.color = "#828282";
    document.getElementById("button4").style.color = "#828282";
    document.getElementById("button5").style.color = "#828282";
};

document.getElementById("button4").onclick = function(){
    this.style.color = "#070707";
    document.getElementById("button1").style.color = "#828282";
    document.getElementById("button2").style.color = "#828282";
    document.getElementById("button3").style.color = "#828282";
    document.getElementById("button5").style.color = "#828282";
};

document.getElementById("button5").onclick = function(){
    this.style.color = "#070707";
    document.getElementById("button1").style.color = "#828282";
    document.getElementById("button2").style.color = "#828282";
    document.getElementById("button3").style.color = "#828282";
    document.getElementById("button4").style.color = "#828282";
};