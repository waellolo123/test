const navBtn = document.querySelector('.humburger')
const menu = document.querySelector('.navbar1-list')

navBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})