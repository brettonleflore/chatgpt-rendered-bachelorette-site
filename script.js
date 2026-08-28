const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}


// Pause decorative hero animation when it is offscreen to reduce paint work on mobile.
const gatorStage = document.querySelector('.gator-stage');
if (gatorStage && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    gatorStage.classList.toggle('is-offscreen', !entry.isIntersecting);
  }, { rootMargin: '150px' });
  observer.observe(gatorStage);
}
