const buttons = document.querySelectorAll(".input");
const input = document.querySelector(".inputarea");
const resultarea = document.querySelector(".resultarea");
const result = document.querySelector(".equalto");
const clear = document.querySelector(".clear");
const theme = document.querySelector(".theme");
const error = document.querySelector(".error");


var noinput = document.createTextNode('Please enter something first');
var invinput = document.createTextNode('Invalid input');


function append(exp,value){
    exp += value;
    return exp;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

for(let i=0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        input.value = append(input.value,buttons[i].innerText).trim();
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

result.onclick = function(){   
    var ans = solve(input.value);
    if (ans != undefined) {
        resultarea.value = ans;
    }
}

String.prototype.removelast = function (i) {
    var tmp = this.split(''); 
    tmp.splice(i  , 1); 
    return tmp.join(''); 
}

clear.onclick = function(){
    let string = input.value;
    input.value=string.removelast(-1);
}

clear.addEventListener('long-press', function(e) {
    input.value="";
    resultarea.value="";
    removeAllChildNodes(error);
});