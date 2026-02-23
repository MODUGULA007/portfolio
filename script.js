// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}


// Dark / Light mode
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}


// Reveal elements on scroll
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".project");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      el.classList.add("show");
    }
  });
});


// Dynamic footer year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}