button = document.getElementById("dropdown-menu");
navigation = document.getElementById("navigation");
let slogan = document.getElementById("slogan");
var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
var width = this.window.innerWidth;
window.addEventListener("scroll", function(){
    var value  = window.scrollY; 
    if(width >= 1200){
        if(value < 1000) slogan.style.top = 2495 + -value * 1.25 + "px"; 
    } 
    if(width < 1200 && width >= 1036){
        if(value < 925) slogan.style.top = 1950 + -value + "px";  
    }
    if(width < 1036 && width >= 992){
        if(value < 860) slogan.style.top = 1900 + -value + "px";  
    }
})

button.addEventListener("click", e => {
    navigation.classList.toggle("mobile-navigation")
})