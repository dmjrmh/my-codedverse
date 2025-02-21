// hamburger menu

const hamburger = document.querySelector("#hamburger-menu")
const navMenu = document.querySelector("#navbar-menu")
const btnToTop = document.querySelector("#fab-top")

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
    btnToTop.classList.add('flex')
    btnToTop.classList.remove('hidden')
  } else {
    btnToTop.classList.add('hidden')
    btnToTop.classList.remove('flex')
    header.classList.remove('navbar-fixed')
  }
}

// outside click on hamburger menu
window.addEventListener('click', function (e) {
  if(e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

// toggle darkmode
const toggleDarkMode = document.querySelector('#darkmode-toggle')
const html = document.querySelector('html')
const logo = document.getElementById("logo-navbar");

toggleDarkMode.addEventListener('click', function() {
  if (toggleDarkMode.checked) {
    html.classList.add('dark')
    logo.src = "dist/img/navbar/lg-nvbr-white-rmbg.png";
  } else {
    html.classList.remove('dark')
    logo.src = "dist/img/navbar/lg-nvbr-rmbg.png";
  }
})

// toggle dark mode automatically
function applyTheme(theme) {
  if (theme === "dark") {
    html.classList.add("dark");
    toggleDarkMode.checked = true;
    logo.src = "dist/img/navbar/lg-nvbr-white-rmbg.png";
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    toggleDarkMode.checked = false;
    logo.src = "dist/img/navbar/lg-nvbr-rmbg.png";
    localStorage.setItem("theme", "light");
  }
}

// check theme what system used
const savedTheme = localStorage.getItem("theme") || 
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

applyTheme(savedTheme);

// Event listener untuk toggle switch
toggleDarkMode.addEventListener("change", function () {
  applyTheme(toggleDarkMode.checked ? "dark" : "light");
});