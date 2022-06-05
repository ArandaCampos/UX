const context = document.querySelector(".carousel")
const pageOne = document.querySelector(".page-1")
const pageTwo = document.querySelector(".page-2")
const pageThree = document.querySelector(".page-3")

const on = '#45C4B0'
const off = 'rgb(245, 245, 245)'

var position = 1

pageOne.style.backgroundColor = on

pageOne.addEventListener("click", function(event) {
    pageOne.style.backgroundColor = on
    switch (position){
        case 1:
            break
        case 2:
            pageTwo.style.backgroundColor = off
            context.style.animationName = 'twoToOne'
            break
        case 3:
            pageThree.style.backgroundColor = off
            context.style.animationName = 'threeToOne'
            break
    }    
    position = 1
})

pageTwo.addEventListener("click", function(event) {
    pageTwo.style.backgroundColor = on
    switch (position){
        case 1:
            pageOne.style.backgroundColor = off
            context.style.animationName = 'oneToTwo'
            break
        case 2:
            break
        case 3:
            pageThree.style.backgroundColor = off
            context.style.animationName = 'threeToTwo'
            break
    }
    position = 2
})

pageThree.addEventListener("click", function(event) {
    pageThree.style.backgroundColor = '#45C4B0'
    switch (position){
        case 1:
            pageOne.style.backgroundColor = off
            context.style.animationName = 'oneToThree'
            break
        case 2:
            pageTwo.style.backgroundColor = off
            context.style.animationName = 'twoToThree'
            break
        case 3:
            break
    }
    position = 3
})