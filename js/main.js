// #-1 Start Header Section -------------------------------------------------------------------------------------
// Fix The Header and Hide user-nav section on scrolling
const headerSection = document.querySelector(".header-section");
const userNav = document.querySelector(".user-nav");

window.onscroll = function() {
  docScrollTop = document.documentElement.scrollTop;
  if (docScrollTop > 200) {
    headerSection.classList.add("fix-header");
    userNav.style.display = "none";
  } else {
    headerSection.classList.remove("fix-header");
    userNav.style.display = "flex";
  }
};

// Add active class to clicked Nav-Link (li)
const mainNavLinks = document.querySelectorAll(".main-nav-links li"); // NodeList

function activeClass() {
  for (let i = 0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].classList.remove("active");
  }
  this.classList.add("active");
}

mainNavLinks.forEach(item => {
  item.addEventListener("click", activeClass);
});

// Show and Hide Mobile-Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNavigation = document.querySelector(".main-nav-items");
const mainNavBoxCover = document.querySelector(".main-nav-box-cover ");

function showNav() {
  mobileNavigation.classList.toggle("show-menu-mobile");
  mobileNavigation.style.transition = "transform 1s ease";
  mainNavBoxCover.classList.toggle("show-menu-mobile");
  mainNavBoxCover.style.transition = "transform 1s ease";
  document
    .querySelector(".hero-section-content")
    .classList.toggle("hero-section-content-hide");
}

hamburgerMenu.addEventListener("click", showNav);

// End Header Section -------------------------------------------------------------------------------------------

// #-2 Start Discover-Collection Section ------------------------------------------------------------------------

const itemsContainer = document.querySelector(".discover-collection-content"); // HTML element = object
const itemsContainerWidth = itemsContainer.offsetWidth; // Number
const collectionItems = document.querySelectorAll(".discover-collection-item"); // NodeList = array
let itemPerSlide = 0;
let currentSlide = 0;
let autoSlide = 0;
let slideDots;
const responsive = [
  { breakPoint: { width: 0, item: 1 } },
  { breakPoint: { width: 900, item: 2 } }
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      itemPerSlide = responsive[i].breakPoint.item;
    }
  }
  start();
}
function start() {
  for (let i = 0; i < collectionItems.length; i++) {
    collectionItems[i].style.flexBasis = `${100 / itemPerSlide}%`;
  }
  numberSlideDots = Math.ceil(collectionItems.length / itemPerSlide);
  for (let i = 0; i < numberSlideDots; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.setAttribute("onclick", "controlSlide(this)");
    // onclick call the function controlSlide(this)
    if (i == 0) {
      div.classList.add("active");
    }
    document.querySelector(".slide-controls").appendChild(div);
  }
}
function controlSlide(element) {
  currentSlide = element.id;
  changeSlide(currentSlide);
}
function changeSlide() {
  controlButtons = document.querySelector(".slide-controls").children;
  for (let i = 0; i < controlButtons.length; i++) {
    if (controlButtons[i].id == currentSlide) {
      controlButtons[i].classList.add("active");
    } else {
      controlButtons[i].classList.remove("active");
    }
  }
  if (currentSlide == 0) {
    itemsContainer.style.transform = "translateX(0%)";
  }
  if (currentSlide == 1) {
    itemsContainer.style.transform = "translateX(-100%)";
  }
  if (currentSlide == 2) {
    itemsContainer.style.transform = "translateX(-200%)";
  }
  if (currentSlide == 3) {
    itemsContainer.style.transform = "translateX(-300%)";
  }
  if (currentSlide == 4) {
    itemsContainer.style.transform = "translateX(-400%)";
  }
  if (currentSlide == 5) {
    itemsContainer.style.transform = "translateX(-500%)";
  }
  if (currentSlide == 6) {
    sliderContainer.style.transform = "translateX(-600%)";
  }
}

// The Event
window.onload = load();

// End Discover-Collection Section ------------------------------------------------------------------------------
