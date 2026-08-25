document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('siteNav');

  hamburgerBtn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('nav-open');
    hamburgerBtn.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });

  // Auto-close menu if window is resized past mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 600) {
      nav.classList.remove('nav-open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
});