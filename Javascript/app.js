const scroll = document.querySelector('.carrusel')

const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')

rightBtn.addEventListener('click', ()=>{
    scroll.scrollLeft += scroll.offsetWidth
})

leftBtn.addEventListener('click', ()=>{
    scroll.scrollLeft -= scroll.offsetWidth
})