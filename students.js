document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-toggle");
  const navbar = document.querySelector("#navbar");

  menuBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
  });

  // تحسين سلوك الـ Navbar عند التمرير
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
          navbar.style.top = "-80px"; // إخفاء القائمة عند النزول
      } else {
          navbar.style.top = "0"; // إظهارها عند الصعود
      }
      lastScrollTop = scrollTop;
  });

  // تحسين تأثير ظهور الروابط داخل القائمة الجانبية
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link, index) => {
      setTimeout(() => {
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
      }, index * 100);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // منع إعادة تحميل الصفحة

      // استخراج القيم من الحقول
      const studentData = {
          firstName: document.getElementById("first-name").value,
          secondName: document.getElementById("second-name").value,
          email: document.getElementById("email").value,
          academicYear: document.getElementById("academic-year").value,
          phoneNumber: document.getElementById("phone-number").value,
          region: document.getElementById("region").value,
          gender: document.getElementById("gender").value,
      };

      // حفظ البيانات في `localStorage`
      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(studentData);
      localStorage.setItem("students", JSON.stringify(students));

      // عرض رسالة نجاح
      successMessage.innerHTML = "✅ Data has been successfully sent and saved!";
      successMessage.style.display = "block";

      // إعادة تعيين الحقول
      form.reset();

      // إخفاء الرسالة بعد 3 ثوانٍ
      setTimeout(() => {
          successMessage.style.display = "none";
      }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  const toastMessage = document.getElementById("toast-message");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // منع إعادة تحميل الصفحة

      // عرض رسالة النجاح
      toastMessage.style.display = "block";

      // إخفاء الرسالة بعد 3 ثوانٍ
      setTimeout(() => {
          toastMessage.style.display = "none";
      }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  const toastMessage = document.getElementById("toast-message");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // منع إعادة تحميل الصفحة

      // عرض رسالة النجاح
      toastMessage.style.display = "block";

      // إخفاء الرسالة بعد 3 ثوانٍ ثم إعادة التوجيه
      setTimeout(() => {
          toastMessage.style.display = "none";
          window.location.href = "index.html"; // توجيه الطالب إلى الصفحة الرئيسية
      }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  const toastMessage = document.getElementById("toast-message");
  const joinUsButton = document.getElementById("join-us"); // زر "Join us"

  // تحقق مما إذا كان المستخدم سجل بياناته من قبل
  if (localStorage.getItem("students")) {
      joinUsButton.style.display = "none"; // إخفاء الزر إذا كان هناك بيانات محفوظة
  }

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // منع إعادة تحميل الصفحة

      // استخراج القيم من الحقول
      const studentData = {
          firstName: document.getElementById("first-name").value,
          secondName: document.getElementById("second-name").value,
          email: document.getElementById("email").value,
          academicYear: document.getElementById("academic-year").value,
          phoneNumber: document.getElementById("phone-number").value,
          region: document.getElementById("region").value,
          gender: document.getElementById("gender").value,
      };

      // حفظ البيانات في `localStorage`
      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(studentData);
      localStorage.setItem("students", JSON.stringify(students));

      // عرض رسالة نجاح
      toastMessage.style.display = "block";

      // إخفاء زر "Join us"
      joinUsButton.style.display = "none";

      // إخفاء الرسالة بعد 3 ثوانٍ ثم إعادة التوجيه إلى الصفحة الرئيسية
      setTimeout(() => {
          toastMessage.style.display = "none";
          window.location.href = "index.html"; // توجيه الطالب إلى الصفحة الرئيسية
      }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  const toastMessage = document.getElementById("toast-message");
  const joinUsButton = document.getElementById("join-us");
  const backToTopBtn = document.getElementById("backToTop");

  // تحقق مما إذا كان المستخدم سجل بياناته من قبل
  if (localStorage.getItem("students")) {
      joinUsButton.style.display = "none";
  }

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

      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(studentData);
      localStorage.setItem("students", JSON.stringify(students));

      toastMessage.style.display = "block";
      joinUsButton.style.display = "none";

      setTimeout(() => {
          toastMessage.style.display = "none";
          window.location.href = "index.html";
      }, 3000);
  });

  window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
