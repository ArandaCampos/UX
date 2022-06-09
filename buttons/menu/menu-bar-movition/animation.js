const icon1 = document.querySelector(".icon-1")
const icon2 = document.querySelector(".icon-2")
const icon3 = document.querySelector(".icon-3")

const img1 = document.querySelector(".img-1")
const img2 = document.querySelector(".img-2")
const img3 = document.querySelector(".img-3")

const name1 = document.querySelector(".name-1")
const name2 = document.querySelector(".name-2")
const name3 = document.querySelector(".name-3")

const body = document.querySelector("body")

const circle = document.querySelector(".circle")
var clicked = 1

function start(){
    icon1.classList.toggle('on')
    img1.setAttribute('src', 'img/home-color.png');
    name1.style.color = "var(--pink)"
}    

icon1.addEventListener('click', (event) =>{
    circle.style.backgroundColor = "var(--pink)"
    body.style.background = "var(--pink)"
    img1.setAttribute('src', 'img/home-color.png');
    name1.style.color = "var(--pink)"
    
    switch (clicked){
        case 2:
            circle.style.animationName = "twoToOne"
            img2.setAttribute('src', 'img/search.png');
            name2.style.color = "transparent"
            icon2.classList.toggle('on')
            icon1.classList.toggle('on')
            break
        case 3:
            circle.style.animationName = "threeToOne"
            img3.setAttribute('src', 'img/message.png');
            name3.style.color = "transparent"
            icon3.classList.toggle('on')
            icon1.classList.toggle('on')
            break
    }
    clicked = 1
})

icon2.addEventListener('click', (event) =>{
    circle.style.backgroundColor = "var(--blue)"
    body.style.background = "var(--blue)"
    img2.setAttribute('src', 'img/search-color.png');
    name2.style.color = "var(--blue)"

    switch (clicked){
        case 1:
            circle.style.animationName = "oneToTwo"    
            img1.setAttribute('src', 'img/home.png');
            name1.style.color = "transparent"
            icon1.classList.toggle('on')
            icon2.classList.toggle('on')
            break
        case 3:
            circle.style.animationName = "threeToTwo"
            img3.setAttribute('src', 'img/message.png');
            name3.style.color = "transparent"
            icon3.classList.toggle('on')
            icon2.classList.toggle('on')
            break
    }
    clicked = 2
})

icon3.addEventListener('click', (event) =>{
    circle.style.backgroundColor = "var(--green)"
    body.style.background = "var(--green)"
    img3.setAttribute('src', 'img/message-color.png');
    name3.style.color = "var(--green)"
    
    switch (clicked){
        case 1:
            circle.style.animationName = "oneToThree"
            img1.setAttribute('src', 'img/home.png');
            name1.style.color = "transparent"
            icon1.classList.toggle('on')
            icon3.classList.toggle('on')
            break
        case 2:
            circle.style.animationName = "twoToThree"
            img2.setAttribute('src', 'img/search.png');
            name2.style.color = "transparent"
            icon2.classList.toggle('on')
            icon3.classList.toggle('on')
            break
    }
    clicked = 3
})

start()