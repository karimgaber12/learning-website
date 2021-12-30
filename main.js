// button navBar
var mytoggle = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

mytoggle.onclick = function () {
    
    sideNav.classList.toggle("active");

};
// button go up first page
var myToggle2 = document.getElementById("go-up")
window.onscroll = ()=> myToggle2.classList.toggle("active-2",scrollY > 400);
myToggle2.onclick = () => scrollTo(0,0)

// hide place holder from contact

let inbut1 = document.getElementById("text");
let inbut2 = document.getElementById("email");
let inbut3 = document.getElementById("password");


inbut1.onfocus = function () {
    
    if (inbut1.placeholder == "Enter your name") {
        this.placeholder = " "
    }
};

inbut2.onfocus = function () {
    
    if (inbut2.placeholder == "Enter your email") {
        this.placeholder = " "
    }
};

inbut3.onfocus = function () {
    
    if (inbut3.placeholder == "Enter your password") {
        this.placeholder = " "
    }
};

inbut1.onblur = function () {
    
    if (inbut1.placeholder == " ") {
        this.placeholder = "Enter your name"
    }
};

inbut2.onblur = function () {
    
    if (inbut2.placeholder == " ") {
        this.placeholder = "Enter your email"
    }
};

inbut3.onblur = function () {
    
    if (inbut3.placeholder == " ") {
        this.placeholder = "Enter your password"
    }
}


I