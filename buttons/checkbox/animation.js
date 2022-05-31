const button = document.querySelector("button"); 

button.addEventListener("click", function() {
    if (button.classList.contains('on')){
        button.setAttribute('aria-checked', 'false')
    } else {
        button.setAttribute('aria-checked', 'true')
    }
    button.classList.toggle('on')
})
