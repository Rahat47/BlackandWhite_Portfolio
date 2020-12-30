window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})


//toggle the menu
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle')
    let menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}
//scroll to top function here

window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".btnScrollToTop")
    scroll.classList.toggle("active", window.scrollY > 500)
})



const btnScrollToTop = document.querySelector('.btnScrollToTop')

btnScrollToTop.addEventListener('click', function() {
    window.scrollTo(0, 0)
})


