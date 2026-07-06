// ----- TESTIMONIAL CAROUSEL -----
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  currentSlide = index;
}

// Check if carousel elements exist (only on pages with testimonials)
if (slides.length > 0) {
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide((currentSlide + 1) % slides.length);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

// ----- SEARCH & USER ICON ALERTS -----
document.querySelector('.fa-search')?.addEventListener('click', () => alert('🔍 Search functionality coming soon.'));
document.querySelector('.fa-user-circle')?.addEventListener('click', () => alert('👤 Member area coming soon.'));

// ----- MOBILE MENU TOGGLE -----
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('open');
});