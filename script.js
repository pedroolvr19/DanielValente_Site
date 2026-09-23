// ---- Reveal ao scroll ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Menu mobile ----
const navToggle = document.getElementById('nav-toggle-btn');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.textContent === '✕';
  if (!isOpen) {
    navLinks.style.cssText = 'display:flex; flex-direction:column; position:absolute; top:72px; left:0; right:0; background:rgba(8,12,20,.97); backdrop-filter:blur(14px); padding:20px 24px 28px; border-bottom:1px solid #1E2D4A; gap:20px; font-size:16px; z-index:99;';
    navToggle.textContent = '✕';
  } else {
    navLinks.style.cssText = '';
    navToggle.textContent = '☰';
  }
});

// Fecha o menu ao clicar num link (apenas celular)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 860) {
      navLinks.style.cssText = '';
      navToggle.textContent = '☰';
    }
  });
});

// Garante que o menu volta ao normal ao redimensionar a tela
window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    navLinks.style.cssText = '';
    navToggle.textContent = '☰';
  }
});

// ---- Nav sombra ao rolar ----
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = '#2A3D5E';
  } else {
    nav.style.borderBottomColor = '#1E2D4A';
  }
});
