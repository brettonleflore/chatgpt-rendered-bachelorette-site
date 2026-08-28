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

// Pause watercolor swimming alligator when offscreen.
document.querySelectorAll('.watercolor-gator-swim').forEach((section) => {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
    section.classList.toggle('swim-offscreen', !entry.isIntersecting);
  }, {rootMargin: '160px'});
  observer.observe(section);
});


// V18 robust interaction pass: entire editorial cards behave as clickable surfaces.
document.querySelectorAll('.category-card').forEach(card => {
  const link = card.querySelector('a[href]');
  if (!link) return;
  card.classList.add('is-clickable');
  card.addEventListener('click', event => {
    if (event.target.closest('a,button')) return;
    window.location.href = link.href;
  });
});

// Safe external-link handling and analytics-ready event layer.
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.startsWith(location.origin)) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});
window.dataLayer = window.dataLayer || [];
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;
  window.dataLayer.push({event:'site_link_click',link_text:(link.textContent||'').trim().slice(0,120),link_url:link.href});
});
