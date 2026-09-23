// ---- Toggle mensal/anual ----
function setBilling(mode) {
  document.getElementById('btn-monthly').classList.toggle('active', mode === 'monthly');
  document.getElementById('btn-yearly').classList.toggle('active', mode === 'yearly');
  document.querySelectorAll('.price-note-m').forEach(el => el.style.display = mode === 'monthly' ? 'block' : 'none');
  document.querySelectorAll('.price-note-y').forEach(el => el.style.display = mode === 'yearly' ? 'block' : 'none');
  // Se quiser trocar o valor exibido ao alternar pra anual, edite aqui:
  // document.querySelectorAll('.price-m').forEach(el => el.textContent = ...);
}

// ---- Revelacao ao rolar: cada bloco .reveal aparece uma vez ao entrar na tela ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Menu mobile (placeholder simples) ----
document.querySelector('.nav-toggle').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.cssText += 'flex-direction:column; position:absolute; top:72px; left:0; right:0; background:var(--bg-soft); padding:20px 24px; border-bottom:1px solid var(--border);';
});
