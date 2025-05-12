// زر الرجوع لأعلى الصفحة مع تأثير انسيابي
const backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// عند الضغط على زر الرجوع لأعلى الصفحة (تأثير انسيابي)
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// تفعيل الـ Toggle Menu للموبايل
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// إضافة تأثير عند التمرير لتغيير خلفية الـ nav
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    cards.forEach(card => {
      const nameElement = card.querySelector(".name");
      const teacherName = nameElement ? nameElement.textContent.toLowerCase() : "";

      if (teacherName.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let name = card.querySelector(".name").textContent.toLowerCase();
        card.style.display = name.includes(filter) ? "block" : "none";
    });
});
document.addEventListener("mousemove", (event) => {
  let eyes = document.querySelectorAll(".pupil");
  eyes.forEach((eye) => {
      let rect = eye.parentElement.getBoundingClientRect();
      let eyeX = rect.left + rect.width / 2;
      let eyeY = rect.top + rect.height / 2;
      let deltaX = event.clientX - eyeX;
      let deltaY = event.clientY - eyeY;
      let angle = Math.atan2(deltaY, deltaX);
      let distance = Math.min(Math.hypot(deltaX, deltaY) / 10, 10);
      eye.style.transform = `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
  });
});
document.addEventListener("mousemove", (event) => {
  let eyes = document.querySelectorAll(".pupil");
  eyes.forEach((eye) => {
      let rect = eye.parentElement.getBoundingClientRect();
      let eyeX = rect.left + rect.width / 2;
      let eyeY = rect.top + rect.height / 2;
      let deltaX = event.clientX - eyeX;
      let deltaY = event.clientY - eyeY;
      let angle = Math.atan2(deltaY, deltaX);
      let distance = Math.min(Math.hypot(deltaX, deltaY) / 10, 8);
      eye.style.transform = `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
  });
});
