window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByTagName("header").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementsByTagName("header").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}


//backend code
//validating the user input
function login(path, params, method='post'){
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "root"){
        alert ("Login successfully");
        window.location = "./admin.html"; 
        return false;
    }else {
        return false;   
    }
}
Object.onclick = function login(){
    document.getElementById("form").login();
}

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelector('.nav_link');

hamburger.addEventListener("click", () =>{
    navlink.classList.toggle("open");
})
    
