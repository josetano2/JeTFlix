const burgerMenu = document.querySelector(".burger-menu")
const item = document.querySelector(".navbar-left-content")
const bg = document.querySelector(".temp-div")
const body = document.querySelector("body")

burgerMenu.addEventListener("click", () => {
    item.classList.toggle("active")
    bg.classList.toggle("active")
    if(item.classList.contains("active")){
        body.style.overflowY = 'hidden'
        element.style.backgroundColor = 'black'
    }
    else{
        const currScrollPos = window.scrollY
        if(currScrollPos != 0){
            element.style.backgroundColor = 'black'
        }
        else{
            element.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(88,88,88,0) 100%)'
        }
        body.style.overflowY = 'auto'
    }
})

bg.addEventListener("click", () => {
    item.classList.toggle("active")
    bg.classList.toggle("active")
    if(item.classList.contains("active")){
        body.style.overflowY = 'hidden'
        element.style.backgroundColor = 'black'
    }
    else{
        const currScrollPos = window.scrollY
        if(currScrollPos != 0){
            element.style.backgroundColor = 'black'

        }
        else{
            element.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(88,88,88,0) 100%)'
        }
        body.style.overflowY = 'auto'
    }
})