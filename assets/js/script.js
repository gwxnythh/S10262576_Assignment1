//'use strict';

// #add event on element
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// #pop-up sales offer
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function () {
  setTimeout(function () {
    popupOverlay.style.display = "block";
    popup.style.display = "block";
  }, 1000)
}

if (close) {
  close.addEventListener('click', () => {
    popupOverlay.style.display = "none";
    popup.style.display = "none";
    popupOverlay.style.display = "none";
  });
}



// #navbar toggle
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


// #header sticky & back top btn active
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



// #scroll reveal effect
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


// #product filter
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);

// #account dropdown menu
function toggleMenu() {
  var subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}
document.addEventListener("click", function (event) {
  var subMenu = document.getElementById("subMenu");
  var userPic = document.getElementById("user-pic");

  if (
    event.target !== userPic &&
    event.target.closest("#subMenu") === null
  ) {
    subMenu.classList.remove("open-menu");
  }
});

// #form validator
function validateForm() {
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value.trim();

  if (message.length < 10) {
    alert("Please enter a message with at least 10 characters.");
  } else {
    alert("Submitted Successfully! We will get back to you in 24-48 hours! :)");
    document.getElementById('contactForm').submit();
  }
}
