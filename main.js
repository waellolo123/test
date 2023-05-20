const navBtn = document.querySelector('.humburger')
const menu = document.querySelector('.navbar1-list')
const cards = document.querySelectorAll('.card')
const section = document.querySelector('.voyage-bottom')

// nav slide
navBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
// Scroll Animation
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
}
const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('hide-show')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.hide').forEach(function(r){
    observer.observe(r)
})

