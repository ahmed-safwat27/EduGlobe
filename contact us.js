document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');
  const contactForm = document.getElementById('contact-form');

  // Toggle menu
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking a link
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("شكراً لتواصلك معنا! سيتم الرد عليك قريباً.");
      this.reset();
    });
  }

  // Initialize scroll state
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
});