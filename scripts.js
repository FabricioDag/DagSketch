const hamburguerBtn = document.querySelector('#hamburguerBtn')
const navbar = document.querySelector('.navbar')

hamburguerBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})