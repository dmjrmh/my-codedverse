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

// typed.js
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typing", {
      strings: ["I'm a Web Developer", "Full Stack Developer", "Tech Enthusiast"], 
      typeSpeed: 80,   
      backSpeed: 50,   
      loop: true       
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#title-bio", {
      strings: [
          "Hello everyone! 👋",
          "Welcome to my world! 🌍",
          "Hey There! Let’s craft something incredible together! 🚀"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#about-bio", {
      strings: [
          "Who Am I? 🔍",
          "Beyond the Code: My Story ⚡",
          "From Curiosity to Creation 🛠️"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
  });
});

document.addEventListener("DOMContentLoaded", function () {
var typed = new Typed("#socmed-text", {
    strings: [
      "👨‍💻 Follow me on GitHub",
      "💼 Let's connect on LinkedIn",
      "📸 Find me on Instagram",
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalTech = document.getElementById("modalTech");
  const modalDescription = document.getElementById("modalDescription");
  const openModalButtons = document.querySelectorAll(".openModal");
  const closeModalButtons = document.querySelectorAll("#closeModal");

  function showModal(title, image, description, technology) {
    modalTitle.textContent = title;
    modalImage.src = image;
    modalDescription.innerHTML = description;
    modalTech.textContent = technology;
    modalOverlay.classList.remove("hidden");
    setTimeout(() => {
      modalOverlay.classList.add("opacity-100");
      modalContent.classList.remove("scale-75", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
  }

  function hideModal() {
    modalOverlay.classList.remove("opacity-100");
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-75", "opacity-0");
    setTimeout(() => {
      modalOverlay.classList.add("hidden");
    }, 300);
  }

  openModalButtons.forEach(button => {
    button.addEventListener("click", function() {
      showModal(this.dataset.title, this.dataset.image, this.dataset.description, this.dataset.technology);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener("click", hideModal);
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) hideModal();
  });
});