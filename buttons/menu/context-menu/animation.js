const context = document.querySelector(".context-menu")

document.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    var screenWidth = screen.width;
    var screenHeight = screen.height;

    x = x + 280 > screenWidth ? x - 280 : x
    y = y + 400 > screenHeight ? y - 220 : y

    if (context.style.visibility === 'visible'){
        context.style.visibility = 'hidden'
    } else {
        context.style.visibility = 'visible'
    }

    context.style.left = x.toString() + "px"
    context.style.top = y.toString() + "px"
})
