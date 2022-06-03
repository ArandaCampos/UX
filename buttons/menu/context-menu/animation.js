const context = document.querySelector(".context-menu")

document.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    
    if (context.style.visibility === 'visible'){
        context.style.visibility = 'hidden'
    } else {
        context.style.visibility = 'visible'
    }

    context.style.left = x.toString() + "px"
    context.style.top = y.toString() + "px"
})
