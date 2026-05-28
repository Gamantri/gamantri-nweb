// ── CURSOS.JS — Gamantri Landing Cursos ──

// ── IDIOMA — lee preferencia del index via localStorage ──
let lang = localStorage.getItem('gamantri-lang') || 'es';

function setLang(l) {
  lang = l;
  localStorage.setItem('gamantri-lang', l);

  // Botones activos
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.lang-btn[onclick="setLang('${l}')"]`).forEach(b => b.classList.add('active'));

  // Textos con data-es / data-en
  document.querySelectorAll(`[data-${l}]`).forEach(el => {
    const val = el.getAttribute(`data-${l}`);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  // Placeholders especiales (textarea)
  document.querySelectorAll('[data-placeholder-es]').forEach(el => {
    el.placeholder = el.getAttribute(`data-placeholder-${l}`);
  });

  // html lang attr
  document.documentElement.lang = l;
}

// Aplicar idioma al cargar
document.addEventListener('DOMContentLoaded', () => setLang(lang));

// Header scroll
const cursosHeader = document.getElementById('cursos-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) cursosHeader.classList.add('scrolled');
  else cursosHeader.classList.remove('scrolled');
}, { passive: true });

// ── FORMULARIO — submit vía fetch + overlay gracias ──
const cursosForm    = document.querySelector('.cursos-form');
const graciasOverlay = document.getElementById('gracias-overlay');
const graciasClose   = document.getElementById('gracias-close');

cursosForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = cursosForm.querySelector('.btn-submit');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  try {
    const data = new FormData(cursosForm);
    const res  = await fetch('https://api.web3forms.com/submit', {
      method: 'POST', body: data
    });
    const json = await res.json();

    if (json.success) {
      graciasOverlay.classList.add('visible');
      graciasOverlay.setAttribute('aria-hidden', 'false');
      cursosForm.reset();
    } else {
      btn.textContent = 'Error al enviar. Intentá de nuevo.';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Error de conexión. Intentá de nuevo.';
    btn.disabled = false;
  }
});

graciasClose.addEventListener('click', () => {
  graciasOverlay.classList.remove('visible');
  graciasOverlay.setAttribute('aria-hidden', 'true');
  document.querySelector('.btn-submit').textContent = 'Enviar →';
  document.querySelector('.btn-submit').disabled = false;
});

// Cerrar con ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') graciasOverlay.classList.remove('visible');
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// GSAP Reveals
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Reveal genérico
  document.querySelectorAll('.reveal').forEach(el => {
    const delay = el.classList.contains('reveal-d1') ? 0.12
                : el.classList.contains('reveal-d2') ? 0.24
                : el.classList.contains('reveal-d3') ? 0.36 : 0;
    gsap.from(el, {
      opacity: 0, y: 32,
      duration: 0.9, delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
    });
  });

  // Reveal-scale para cards
  document.querySelectorAll('.reveal-scale').forEach(el => {
    gsap.from(el, {
      opacity: 0, scale: 1.03, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  // Hero parallax leve
  gsap.to('.cursos-hero-img', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: {
      trigger: '#cursos-hero',
      start: 'top top', end: 'bottom top',
      scrub: true
    }
  });
});
