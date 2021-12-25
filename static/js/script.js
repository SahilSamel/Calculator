const buttons = document.querySelectorAll(".input");
const input = document.querySelector(".inputarea");
const resultarea = document.querySelector(".resultarea");
const result = document.querySelector(".equalto");
const clear = document.querySelector(".clear");
const theme = document.querySelector(".theme");

function append(exp,value){
    if(exp===""){
        return value;
    }
    exp += value;
    return exp;
}

for(let i=0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        input.value = append(input.value,buttons[i].innerText);
    }
}

function solve(input){
    const ans = eval(input);
    return ans;
}

result.onclick = function(){   
    resultarea.value = solve(input.value);
}

String.prototype.removelast = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i  , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}

clear.onclick = function(){
    let string = input.value;
    input.value=string.removelast(-1);
}

clear.addEventListener('long-press', function(e) {
    input.value="";
    resultarea.value="";
});