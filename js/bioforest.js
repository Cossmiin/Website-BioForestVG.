window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 0;

  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile-menu");

  burgerMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("show");
  });
});