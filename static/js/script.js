const input = document.querySelectorAll(".input");
const wrapper = document.querySelector(".wrapper");
const inputarea = document.querySelector(".inputarea");
const resultarea = document.querySelector(".resultarea");
const result = document.querySelector(".equalto");
const clear = document.querySelector(".clear");
const info = document.querySelector(".info");
const theme = document.querySelector(".theme");
const error = document.querySelector(".error");
const buttons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");
const lightbackspace = document.querySelector("#lightbackspace");
const darkbackspace = document.querySelector("#darkbackspace");
const darkquestion = document.querySelector("#darkquestion");
const lightquestion = document.querySelector("#lightquestion");
const lighttheme = document.querySelector("#lighttheme");
const darktheme = document.querySelector("#darktheme");

//          Errors
var noinput = document.createTextNode('Please enter something first');
var invinput = document.createTextNode('Invalid input');

//          Storing theme mode 
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
    input[i].addEventListener(
        "click",
        () =>{
            inputarea.value = append(inputarea.value,input[i].innerText).trim();
        }
    );
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

result.addEventListener(
    "click",
    () =>
    {
        var ans = solve(inputarea.value);
        if (ans != undefined) {
            resultarea.value = ans;
        }
    }
);

// Function for backspace

String.prototype.removelast = function (i) {
    var tmp = this.split(''); 
    tmp.splice(i  , 1); 
    return tmp.join(''); 
}

clear.addEventListener(
    "click",
    () =>
    {
        let string = inputarea.value;
        inputarea.value=string.removelast(-1);
    }
);
// Function for all clear

clear.addEventListener(
    'long-press', 
    function(e) {
    inputarea.value="";
    resultarea.value="";
    removeAllChildNodes(error);
});



// Theme functionality

window.addEventListener(
    "load",
    () =>
    {
        prevmode = localStorage.getItem("theme");

		if(!prevmode)
		{
			localStorage.setItem("theme", "dark");
			prevmode = localStorage.getItem("theme");
		}

		else if(prevmode === "light")
			changetheme();
    }
);

theme.addEventListener(
    "click",
    () =>
    {
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
)

function changetheme(){
    wrapper.classList.toggle("wrapper-light");
    inputarea.classList.toggle("inputarea-light");
    resultarea.classList.toggle("resultarea-light");
    body.classList.toggle("body-light");
    error.classList.toggle("error-light");
    lightbackspace.classList.toggle("hide");
    darkbackspace.classList.toggle("hide");
    lightquestion.classList.toggle("hide");
    darkquestion.classList.toggle("hide");
    lighttheme.classList.toggle("hide");
    darktheme.classList.toggle("hide");

    for(let i = 0; i < buttons.length; i++)
	    buttons[i].classList.toggle("buttons-light");
}

