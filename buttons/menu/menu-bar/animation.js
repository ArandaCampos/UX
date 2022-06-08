const button = document.querySelector(".menu-icon"); 
const menu = document.querySelector(".menu-bar")
const items = document.querySelector(".items")

button.addEventListener("click", function() {
    if (button.classList.contains('on')){
        items.style.visibility = "hidden"
        menu.style.width = "35px"
        menu.style.height = "35px"
    } else {
        items.style.visibility = "visible"
        menu.style.width = "250px"
        menu.style.height = "auto"
    }
    button.classList.toggle('on')
})