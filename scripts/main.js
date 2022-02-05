let slogan = document.getElementById("slogan");

window.addEventListener("scroll", function(){
    var value  = window.scrollY; 
    console.log(value)
    if(value < 1000) slogan.style.top = 2495 + -value * 1.25 + "px";  
})

