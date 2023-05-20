const navBtn = document.querySelector('.humburger')
const menu = document.querySelector('.navbar1-list')
const cards = document.querySelectorAll('.card')
const section = document.querySelector('.voyage-bottom')

// nav slide
navBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
// Scroll Animation
let options = {
    root: null,
    rootMargin:  "0px",
    threshold: .1,
}
function handleIntersect(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)"
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
cards.forEach(card => {
    observer.observe(card)
})
observer.observe(section)

