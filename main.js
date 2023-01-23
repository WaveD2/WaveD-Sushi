// Show menu
const span = document.querySelectorAll("span");
const p = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const newsletterContent = document.querySelector(".newsletter-content");
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

const header = document.getElementById("header");
// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav_link");

const box = document.querySelector(".box");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((eLink) => eLink.addEventListener("click", linkAction));

// Change background header

const scrollHeader = () => {
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// SCROLL SELECTIONS ACTIVE LINK

const sections = document.querySelectorAll("section[id]");
// RECENTLY
console.log(sections);
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = current.querySelector(
        ".nav-menu a[href*= " + sectionId + " ]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

// DARK LIGHT THEME
const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", () => {
  box.classList.toggle("dark");
  sections.forEach((e) => {
    e.classList.toggle("dark");
  });
  span.forEach((e) => {
    e.classList.toggle("dark");
  });
  p.forEach((e) => {
    e.classList.toggle("dark");
  });
  h1.forEach((e) => {
    e.classList.toggle("dark");
  });
  h2.forEach((e) => {
    e.classList.toggle("dark");
  });
  h3.forEach((e) => {
    e.classList.toggle("dark");
  });
  newsletterContent.style.border = "4px solid #fff";

  if (themeBtn.classList.contains("fa-circle-half-stroke")) {
    themeBtn.classList.replace("fa-circle-half-stroke", "fa-sun");
  } else {
    themeBtn.classList.replace("fa-sun", "fa-circle-half-stroke");
  }
});
