// hamburger menu

const hamburger = document.querySelector("#hamburger-menu")
const navMenu = document.querySelector("#navbar-menu")

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

// navbar fixed 
window.onscroll = function (){
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}