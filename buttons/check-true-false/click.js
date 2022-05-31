const button = document.querySelector(".check"); 
const line1 = document.querySelector(".line1"); 
const line2 = document.querySelector(".line2"); 
const line3 = document.querySelector(".line3"); 
const line4 = document.querySelector(".line4");

button.addEventListener("click", function() {
    line1.classList.toggle('on')
    line2.classList.toggle('on')
    line3.classList.toggle('on')
    line4.classList.toggle('on')

})