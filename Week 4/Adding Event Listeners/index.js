document.getElementById("header").addEventListener("dblclick", function() {
    document.getElementById("header").style.backgroundColor = "red"
})
document.getElementById("header").addEventListener("mousedown", function() {
    document.getElementById("header").style.backgroundColor = "yellow"
})
document.getElementById("header").addEventListener("mouseover",function(){
    document.getElementById("header").style.backgroundColor = "green"
})
document.getElementById("header").addEventListener("mouseup",function(){
    document.getElementById("header").style.backgroundColor = "blue"
})
document.getElementById("header").addEventListener("scroll",function(){
    document.getElementById("header").style.backgroundColor = "purple"
   
})
document.addEventListener("scroll",function(){
    document.getElementById("header").style.backgroundColor = "purple"
   
})
document.getElementById("header").addEventListener("keydown", function() {
  
})
document.getElementById("header").addEventListener("load", myFunction);
    document.getElementById("header").style.backgroundColor = "black"
   
    function myFunction() {
        document.getElementById("header").innerHTML = "Iframe is loaded.";
      }
document.getElementById("header").addEventListener("mouseout",function(){
    document.getElementById("header").style.backgroundColor = "white"
})
