// ============================================
// CHECKOUT PAGE — The 2 Day CEO
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  var step1 = document.getElementById('step1');
  var step2 = document.getElementById('step2');
  var toStep2Btn = document.getElementById('toStep2');
  var backBtn = document.getElementById('backToStep1');
  var steps = document.querySelectorAll('.step');

  // Product radios
  var productRadios = document.querySelectorAll('input[name="product"]');
  var bumpCheckbox = document.getElementById('audiobookBump');

  // Display elements
  var productNameEl = document.getElementById('productName');
  var productPriceEl = document.getElementById('productPrice');
  var bumpLine = document.getElementById('bumpLine');
  var bumpPriceEl = document.getElementById('bumpPrice');
  var shippingPriceEl = document.getElementById('shippingPrice');
  var shippingLine = document.getElementById('shippingLine');
  var totalPriceEl = document.getElementById('totalPrice');

  // --- Step Navigation ---
  toStep2Btn.addEventListener('click', function () {
    var valid = true;
    var fields = step1.querySelectorAll('[required]');
    fields.forEach(function (f) {
      f.classList.remove('error');
      if (!f.value.trim()) {
        f.classList.add('error');
        valid = false;
      }
    });
    if (!valid) return;

    step1.classList.add('form-section--hidden');
    step2.classList.remove('form-section--hidden');
    steps[0].classList.remove('step--active');
    steps[0].classList.add('step--completed');
    steps[1].classList.add('step--active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backBtn.addEventListener('click', function () {
    step2.classList.add('form-section--hidden');
    step1.classList.remove('form-section--hidden');
    steps[1].classList.remove('step--active');
    steps[0].classList.remove('step--completed');
    steps[0].classList.add('step--active');
  });

  // --- Order Total Calculation ---
  function updateTotal() {
    var selectedProduct = document.querySelector('input[name="product"]:checked');
    var productPrice = parseFloat(selectedProduct.dataset.price);
    var productLabel = selectedProduct.value === 'digital' ? 'Digital Book' : 'Physical + Digital Bundle';
    var isPhysical = selectedProduct.value === 'bundle';
    var shipping = isPhysical ? 7.95 : 0;

    var bumpPrice = bumpCheckbox.checked ? parseFloat(bumpCheckbox.dataset.price) : 0;
    var total = productPrice + shipping + bumpPrice;

    productNameEl.textContent = productLabel;
    productPriceEl.textContent = '$' + productPrice.toFixed(2);

    if (bumpCheckbox.checked) {
      bumpLine.style.display = 'flex';
      bumpPriceEl.textContent = '$' + bumpPrice.toFixed(2);
    } else {
      bumpLine.style.display = 'none';
    }

    if (isPhysical) {
      shippingLine.style.display = 'flex';
      shippingPriceEl.textContent = '$' + shipping.toFixed(2);
    } else {
      shippingLine.style.display = 'none';
    }

    totalPriceEl.textContent = '$' + total.toFixed(2);
  }

  productRadios.forEach(function (radio) {
    radio.addEventListener('change', updateTotal);
  });

  bumpCheckbox.addEventListener('change', updateTotal);

  // Init
  updateTotal();

  // --- Form Submit ---
  document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Order complete! (Placeholder — connect to payment processor.)');
  });

});
