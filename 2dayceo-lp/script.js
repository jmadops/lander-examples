// ============================================
// THE 2 DAY CEO — Book Funnel LP Scripts
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Tab Switching ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(function (b) { b.classList.remove('tab-btn--active'); });
      tabContents.forEach(function (c) { c.classList.remove('tab-content--active'); });

      btn.classList.add('tab-btn--active');
      document.getElementById('tab-' + target).classList.add('tab-content--active');
    });
  });

  // --- Smooth Scroll to Order Form ---
  const scrollLinks = document.querySelectorAll('.scroll-to-form');

  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var form = document.getElementById('order-form');
      if (form) {
        var offset = 60;
        var top = form.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // --- Basic Form Validation ---
  var form = document.getElementById('bookForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(function (field) {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        }
      });

      var emailField = form.querySelector('[type=email]');
      if (emailField && emailField.value && !isValidEmail(emailField.value)) {
        emailField.classList.add('error');
        isValid = false;
      }

      if (isValid) {
        // Replace with actual form submission
        alert('Thank you! Your order has been received. (Form submission placeholder — connect to your order processing backend.)');
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

});
