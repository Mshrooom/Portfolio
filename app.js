const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const sectionLinks = [...document.querySelectorAll('#site-nav a[href^="#"]')];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    const current = entries.find((entry) => entry.isIntersecting);
    if (!current) return;
    sectionLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`);
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);

sections.forEach((section) => navObserver.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
