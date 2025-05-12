document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  const toastMessage = document.getElementById("toast-message");
  const joinUsButton = document.getElementById("join-us");
  const backToTopBtn = document.getElementById("backToTop");
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const clearDataBtn = document.getElementById("clearData");

  // Check previous registrations in localStorage
  let students = JSON.parse(localStorage.getItem("students")) || [];
  if (students.length > 0 && joinUsButton) {
    joinUsButton.style.display = "none";
  }

  // Handle form submission
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const studentData = {
        firstName: document.getElementById("first-name").value,
        secondName: document.getElementById("second-name").value,
        email: document.getElementById("email").value,
        academicYear: document.getElementById("academic-year").value,
        phoneNumber: document.getElementById("phone-number").value,
        region: document.getElementById("region").value,
        gender: document.getElementById("gender").value,
      };

      students.push(studentData);
      localStorage.setItem("students", JSON.stringify(students));

      if (joinUsButton) {
        joinUsButton.style.display = "none";
      }

      toastMessage.style.display = "block";
      setTimeout(() => {
        toastMessage.style.display = "none";
        window.location.href = "index.html";
      }, 3000);
    });
  } else {
    console.error("❌ النموذج غير موجود! تأكد من ID العنصر في HTML.");
  }

  // Scroll behavior for navbar and back-to-top button
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 100);
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";

    const features = document.querySelector('[data-animate]');
    if (features) {
      const rect = features.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        features.classList.add("show");
      }
    }
  });

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Toggle menu
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });

    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  } else {
    console.error("❌ القائمة الجانبية غير موجودة! تأكد من ID العناصر في HTML.");
  }

  // Scroll animation
  const animElements = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach((el) => observer.observe(el));

  // Clear all stored student data
  if (clearDataBtn) {
    clearDataBtn.addEventListener("click", () => {
      const confirmDelete = confirm("⚠ هل أنت متأكد أنك تريد حذف جميع التسجيلات؟");
      if (confirmDelete) {
        localStorage.removeItem("students");
        alert("✅ تم حذف جميع التسجيلات بنجاح!");
        location.reload();
      }
    });
  } else {
    console.error("❌ زر مسح البيانات غير موجود! تأكد من ID العنصر في HTML.");
  }
});
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('show');
});
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
const nav = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle show/hide menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Change background on scroll
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("active");
});
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // your existing code to handle submission...

  // hide the "Join Us" button after successful submission
  const clearData = document.getElementById("joinButton");
  if (clearData) {
    joinButton.style.display = "none";
  }

  // optionally show a success message
  alert("Student added successfully!");
});
document.getElementById('joinUsBtn').addEventListener('click', function(event) {
  // Prevent the default action of the button (if needed)
  event.preventDefault();

  // Simulate data registration (this part should be replaced with your actual registration logic)
  const studentRegistered = true; // Change this based on your registration logic

  if (studentRegistered) {
    // Hide the "Join Us" button after successful registration
    document.getElementById('joinUsBtn').style.display = 'none';
    alert("You have successfully registered!");
  }
});