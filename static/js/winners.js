document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('[data-winner-carousel]');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('[data-winner-slide]'));
  const count = carousel.querySelector('[data-winner-count]');
  const previous = carousel.querySelector('[data-winner-prev]');
  const next = carousel.querySelector('[data-winner-next]');
  if (slides.length < 2 || !count || !previous || !next) return;

  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.hidden = slideIndex !== current;
    });
    count.textContent = String(current + 1).padStart(2, '0') + ' / ' +
      String(slides.length).padStart(2, '0');
  }

  previous.addEventListener('click', function () { show(current - 1); });
  next.addEventListener('click', function () { show(current + 1); });
  show(0);
  carousel.classList.add('is-ready');
});
