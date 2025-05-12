document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const searchInput = document.getElementById("searchInput");
  const courseCards = document.querySelectorAll(".course-card");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    courseCards.forEach(card => {
      const courseName = card.dataset.name.toLowerCase();
      card.style.display = courseName.includes(searchTerm) ? "block" : "none";
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const enrollButtons = document.querySelectorAll(".enroll-btn");
  enrollButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("✅ You have successfully enrolled in this course!");
    });
  });
});