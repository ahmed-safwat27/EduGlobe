// تحديد عناصر DOM
const menuBtn = document.querySelector('#menu-toggle');
const navbar = document.querySelector('nav');

// عند الضغط على زر المينيو يتم تفعيل الكلاس "active" لإظهار الروابط
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// عند عمل scroll يتم إضافة كلاس "scrolled" لتغيير خلفية النافبار
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
