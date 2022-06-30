var tog = document.getElementById("tog");
var education = document.getElementById("education");
tog.addEventListener("click",function() {
  education.classList.toggle("open");
})

var achiev = document.getElementById("achiev");
var achievments = document.getElementById("achievments");
achiev.addEventListener("click",function() {
  achievments.classList.toggle("open");
})
