const input = document.querySelectorAll(".input");
const inputarea = document.querySelector(".inputarea");
const resultarea = document.querySelector(".resultarea");
const result = document.querySelector(".equalto");
const clear = document.querySelector(".clear");
const theme = document.querySelector(".theme");
const error = document.querySelector(".error");
const buttons =document.querySelectorAll(".buttons");
const body = document.querySelector("body");
const darkquestion = document.getElementById("dark");
const lightquestion = document.getElementById("light");


var noinput = document.createTextNode('Please enter something first');
var invinput = document.createTextNode('Invalid input');


let prevmode;

//          Main Functionality

function append(exp,value){
    exp += value;
    return exp;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

for(let i=0; i < input.length; i++){
    input[i].onclick = function(){
        inputarea.value = append(inputarea.value,input[i].innerText).trim();
    }
}

function solve(input){
    if (input.trim()=="") {
        error.appendChild(noinput);
    }
    try {
        eval(input); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            error.appendChild(invinput);
        } 
    }
    return eval(input);
}

// Equal to button function

result.onclick = function(){   
    var ans = solve(inputarea.value);
    if (ans != undefined) {
        resultarea.value = ans;
    }
}

// Function for backspace

String.prototype.removelast = function (i) {
    var tmp = this.split(''); 
    tmp.splice(i  , 1); 
    return tmp.join(''); 
}

clear.onclick = function(){
    let string = inputarea.value;
    inputarea.value=string.removelast(-1);
}

// Function for all clear

clear.addEventListener('long-press', function(e) {
    inputarea.value="";
    resultarea.value="";
    removeAllChildNodes(error);
});

// Theme functionality

window.onload = function () {
    prevmode = localStorage.getItem("theme");

		if(!prevmode)
		{
			localStorage.setItem("theme", "dark");
			prevmode = localStorage.getItem("theme");
		}

		else if(prevmode === "light")
			changetheme();
}

theme.onclick = function(){
    if (prevmode === "dark") {
        localStorage.setItem("theme", "light");
        prevmode = "light";
        changetheme();
    }

    else if (prevmode === "light") {
        localStorage.setItem("theme", "dark");
        prevmode = "dark";
        changetheme();
    }
}

function changetheme(){
inputarea.classList.toggle("inputarea-light");
resultarea.classList.toggle("resultarea-light");
body.classList.toggle("body-light");
error.classList.toggle("error-light");
lightquestion.classList.toggle("hide");
darkquestion.classList.toggle("hide");


for(let i = 0; i < buttons.length; i++)
	buttons[i].classList.toggle("buttons-light");
}

