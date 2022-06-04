const context = document.querySelector(".context-menu")

document.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    var screenWidth = screen.width;
    var screenHeight = screen.height;

    var menuHeight = context.clientHeight;
    var menuWidth = context.clientWidth;

    x = x + menuWidth > screenWidth ? x - menuWidth : x
    y = y + menuHeight > screenHeight ? y - menuHeight : y

    if (context.style.visibility === 'visible'){
        context.style.visibility = 'hidden'
    } else {
        context.style.visibility = 'visible'
    }

    context.style.left = x.toString() + "px"
    context.style.top = y.toString() + "px"
})
