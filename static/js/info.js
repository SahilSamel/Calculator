const body = document.querySelector("body");
const header = document.querySelector("header");
const wrapper = document.querySelector(".wrapper");
const goback = document.querySelector(".goback");
const footer = document.querySelector("footer");

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

function changetheme(){
	header.classList.toggle("header-light");
    wrapper.classList.toggle("wrapper-light");
    body.classList.toggle("body-light");
    footer.classList.toggle("footer-light");
    goback.classList.toggle("goback-light");
}