// ── INIT INMEDIATO: ocultar elementos header antes del primer paint ──
(function() {
  if (typeof gsap === 'undefined') return;
  gsap.set('.logo-btn',  { opacity: 0 });
  gsap.set('.nav-links, .lang-toggle, .hamburger', { opacity: 0, y: -50 });
})();

// ── MOBILE MENU ──
let menuOpen = false;
function toggleMobileMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobile-menu').classList.toggle('open', menuOpen);
  document.getElementById('hamburger').classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}
function closeMobileMenu() {
  menuOpen = false;
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

// ── DATOS OBRAS ──
const obras = [
  {
    titulo: 'La Cárcel',
    imgFoto: 'shared/assets/images/obras/3-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/2-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/1-O-Mu-F.jpg',
    descripcion: 'Como si la naturaleza tuviera un segmento diseñado y construido por el hombre. La cárcel muestra un sector de columnas perfectas de basalto en el Valle de los Cóndores en Chile, uno de los sectores de escalada más imponentes del mundo.',
    descripcion_en: 'As if nature had a segment designed and built by man. La Cárcel reveals a sector of perfect basalt columns in Valle de los Cóndores, Chile — one of the most imposing climbing destinations in the world.',
    series: [
      { precio: '350 USD', copia: '1/5', vendida: true },
      { precio: '620 USD', copia: '2/5', vendida: true },
      { precio: '840 USD', copia: '3/5', vendida: false, destacada: true },
      { precio: '1.050 USD', copia: '4/5', vendida: false },
      { precio: '1.350 USD', copia: '5/5', vendida: false },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '90×120 cm, marco de madera, con paspartú',
    referencia_en: '90×120 cm, wooden frame, with mat',
    precioDestacado: '$840 USD',
  },
  {
    titulo: 'Llaima en Nubes',
    imgFoto: 'shared/assets/images/obras/6-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/5-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/4-O-Mu-F.jpg',
    descripcion: 'Episodio único y poético de un volcán icónico, que luego de muchas visitas se mostró de una manera irrepetible: vestido de nubes por tan solo unos breves minutos.',
    descripcion_en: 'A unique and poetic episode of an iconic volcano, which after many visits revealed itself in an unrepeatable way — dressed in clouds for just a few brief minutes.',
    series: [
      { precio: '350 USD', copia: '1/3', vendida: true },
      { precio: '680 USD', copia: '2/3', vendida: false, destacada: true },
      { precio: '1.100 USD', copia: '3/3', vendida: false },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '60×90 cm, marco de aluminio, con paspartú',
    referencia_en: '60×90 cm, aluminum frame, with mat',
    precioDestacado: '$680 USD',
  },
  {
    titulo: 'Los Cuatro Elementos',
    imgFoto: 'shared/assets/images/obras/9-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/8-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/7-O-Mu-F.jpg',
    descripcion: 'Un recorrido a lo largo de la cordillera chilena. Cuatro imágenes tomadas a distintas horas del día en diferentes regiones del país, simbolizando los cuatro elementos. El fuego del norte, el agua de los volcanes araucanos, la tierra en Cochamó, y el aire con los vientos patagónicos de Aysén.',
    descripcion_en: 'A journey along the Chilean Andes. Four images taken at different hours of the day across different regions of the country, symbolizing the four elements — fire from the north, water from the Araucanian volcanoes, earth in Cochamó, and wind with the Patagonian gales of Aysén.',
    series: [
      { precio: '320 USD', copia: '1/3', vendida: true },
      { precio: '540 USD', copia: '2/3', vendida: false, destacada: true },
      { precio: '950 USD', copia: '3/3', vendida: false },
    ],
    piezas: 'Cuatro unificadas', piezas_en: 'Four unified',
    referencia: '42×84 cm, marco de madera, con paspartú',
    referencia_en: '42×84 cm, wooden frame, with mat',
    precioDestacado: '$540 USD',
  },
  {
    titulo: 'Era Leo',
    imgFoto: 'shared/assets/images/obras/12-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/11-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/10-O-Mu-F.jpg',
    descripcion: 'Leo Cea con 11 años colgando del paso más difícil de Era Vella, en Margalef, Catalunya. Simboliza un momento único de la escalada mundial: el encadene del 9a (5.14d) más joven de la historia. Noviembre de 2024.',
    descripcion_en: 'Leo Cea at 11 years old hanging on the crux of Era Vella in Margalef, Catalonia. It captures a unique moment in world climbing history — the youngest 9a (5.14d) ascent ever recorded. November 2024.',
    series: [
      { precio: '350 USD', copia: '1/5', vendida: true },
      { precio: '460 USD', copia: '2/5', vendida: true },
      { precio: '670 USD', copia: '3/5', vendida: false, destacada: true },
      { precio: '1.100 USD', copia: '4/5', vendida: false },
      { precio: '1.500 USD', copia: '5/5', vendida: false },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '60×110 cm, marco de madera, con paspartú',
    referencia_en: '60×110 cm, wooden frame, with mat',
    precioDestacado: '$670 USD',
  },
  {
    titulo: 'Nodriza',
    imgFoto: 'shared/assets/images/obras/15-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/14-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/13-O-Mu-F.jpg',
    descripcion: 'Entre las magias meteorológicas de las montañas aparecen las nubes lenticulares. La magnitud y perfección de esta sobre el blanco puro del Volcán Llaima se muestra como una nave nodriza acechando.',
    descripcion_en: 'Among the meteorological wonders of the mountains appear lenticular clouds. The magnitude and perfection of this one hovering over the pure white of Llaima Volcano resembles a mothership looming overhead.',
    series: [
      { precio: '320 USD', copia: '1/3', vendida: false, destacada: true },
      { precio: '580 USD', copia: '2/3', vendida: false },
      { precio: '950 USD', copia: '3/3', vendida: false },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '50×80 cm, marco de acero, con paspartú',
    referencia_en: '50×80 cm, steel frame, with mat',
    precioDestacado: '$320 USD',
  },
  {
    titulo: 'Caminos',
    imgFoto: 'shared/assets/images/obras/18-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/17-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/16-O-Mu-F.jpg',
    descripcion: 'En la máxima expresión del minimalismo en la naturaleza aparece seguido un paisaje de nieve. Cuando se suman nubes blancas bajas y apenas unos senderos que nos muestran ínfimos, se hace poesía.',
    descripcion_en: 'In the highest expression of minimalism in nature, a snow landscape often appears. When low white clouds drift in and only a few trails remind us of our smallness, it becomes poetry.',
    series: [
      { precio: '450 USD', copia: '1/3', vendida: false, destacada: true },
      { precio: '830 USD', copia: '2/3', vendida: false },
      { precio: '1.150 USD', copia: '3/3', vendida: false },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '80×110 cm, marco de aluminio, con paspartú',
    referencia_en: '80×110 cm, aluminum frame, with mat',
    precioDestacado: '$450 USD',
  },
  {
    titulo: 'El Último Tango',
    imgFoto: 'shared/assets/images/obras/21-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/20-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/19-O-Mu-F.jpg',
    descripcion: 'Entre las paredes de la mina en el Cajón del Maipo aparece este icónico multilargo. Captura del primer ascenso masculino, de dos de los mejores escaladores de Chile, Ronny Escobar y Benja Vargas para el Documental homónimo.',
    descripcion_en: 'Between the walls of the mine in Cajón del Maipo stands this iconic multi-pitch route. A capture of the first male ascent by two of Chile\'s best climbers, Ronny Escobar and Benja Vargas, for the documentary of the same name.',
    series: [
      { precio: '250 USD', copia: '1/3', vendida: true },
      { precio: '380 USD', copia: '2/3', vendida: true },
      { precio: '650 USD', copia: '3/3', vendida: false, destacada: true },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '60×90 cm, marco de aluminio, con paspartú',
    referencia_en: '60×90 cm, aluminum frame, with mat',
    precioDestacado: '$650 USD',
  },
  {
    titulo: 'Penitentes',
    imgFoto: 'shared/assets/images/obras/24-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/23-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/22-O-Mu-F.jpg',
    descripcion: 'El cerro El Plomo, el más alto de la región de Santiago, con su historia Inca y su cumbre de 5424 msnm. Esta imagen muestra unos penitentes casi diseñados en su campamento base, el Federación.',
    descripcion_en: 'Cerro El Plomo, the highest peak in the Santiago region, with its Inca history and 5,424 m summit. This image shows the nearly sculpted penitentes at its base camp, the Federación.',
    series: [
      { precio: '350 USD', copia: '1/3', vendida: false, destacada: true },
      { precio: '680 USD', copia: '2/3', vendida: false },
      { precio: '920 USD', copia: '3/3', vendida: false },
    ],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '50×90 cm, marco de aluminio, con paspartú',
    referencia_en: '50×90 cm, aluminum frame, with mat',
    precioDestacado: '$350 USD',
  },
  {
    titulo: 'Bloque Chileno',
    imgFoto: 'shared/assets/images/obras/27-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/26-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/25-O-Mu-F.jpg',
    descripcion: 'Composición meticulosamente diseñada de 4 sectores icónicos de Chile (Cajón del Maipo, Valle de los Cóndores, Cerro Castillo y Cochamó) en una formación armónica que unifica a las rocas y a los escaladores en una diagonal ascendente.',
    descripcion_en: 'A meticulously designed composition of 4 iconic Chilean sectors (Cajón del Maipo, Valle de los Cóndores, Cerro Castillo and Cochamó) in a harmonious formation that unifies rocks and climbers in an ascending diagonal.',
    series: [
      { precio: '480 USD', copia: '1/3', vendida: false, destacada: true },
      { precio: '760 USD', copia: '2/3', vendida: false },
      { precio: '1.250 USD', copia: '3/3', vendida: false },
    ],
    piezas: 'Cuatro individuales', piezas_en: 'Four individual',
    referencia: '40×60 cm cada pieza, marco de madera, con paspartú',
    referencia_en: '40×60 cm each piece, wooden frame, with mat',
    precioDestacado: '$480 USD',
  },
];

// ── ABRIR OBRA ──
function openObra(i) {
  const o = obras[i];

  document.getElementById('obra-foto-sola').src = o.imgFoto;
  document.getElementById('obra-foto-zoom').src = o.imgZoom;
  document.getElementById('obra-foto-full').src = o.imgFull;
  document.getElementById('obra-modal-titulo').textContent = o.titulo;
  document.getElementById('obra-modal-desc').textContent = lang === 'en' ? (o.descripcion_en || o.descripcion) : o.descripcion;
  document.getElementById('obra-modal-piezas').textContent = lang === 'en' ? (o.piezas_en || o.piezas) : o.piezas;
  document.getElementById('obra-modal-ref').textContent = lang === 'en' ? (o.referencia_en || o.referencia) : o.referencia;
  document.getElementById('obra-modal-precio').textContent = o.precioDestacado;

  const seriesEl = document.getElementById('obra-modal-series');
  seriesEl.innerHTML = o.series.map(s => {
    if (s.vendida) {
      return `<div class="serie-item sold"><div class="serie-precio">${s.precio}</div><div class="serie-copia">${s.copia} · SOLD</div></div>`;
    } else if (s.destacada) {
      return `<div class="serie-item available primera"><div class="serie-precio">${s.precio}</div><div class="serie-copia">${s.copia}</div></div>`;
    } else {
      return `<div class="serie-item available"><div class="serie-precio">${s.precio}</div><div class="serie-copia">${s.copia}</div></div>`;
    }
  }).join('');

  document.getElementById('overlay-obra').scrollTop = 0;
  openOverlay('overlay-obra');
  showScrollHint();
}

// ── ENCARGO CON CONTEXTO (OB-05) ──
function openOverlayEncargo(source) {
  const select = document.getElementById('encargo-tipo');
  if (select) {
    select.value = source === 'personalizada' ? 'personalizada' : 'catalogo';
  }
  openOverlay('overlay-encargo');
}

// ── VER MÁS / VER MENOS OBRAS (OB-03) ──
function toggleObras() {
  const grid = document.querySelector('.obras-grid');
  const btn = document.getElementById('btn-ver-mas');
  const expanded = grid.classList.toggle('expanded');
  btn.textContent = expanded
    ? (lang === 'en' ? 'SEE LESS <<<' : 'VER MENOS <<<')
    : (lang === 'en' ? 'SEE MORE WORKS >>>' : 'VER MÁS OBRAS >>>');
}

// ── FOOTER FOTO MODAL (FT-02) ──
function openFooterFoto(codigo) {
  document.getElementById('footer-modal-foto').src = `shared/assets/fotos-footer/${codigo}-f.jpg`;
  openOverlay('footer-foto-modal');
}

// ── SCROLL HINT obras ──
function showScrollHint() {
  const hint = document.getElementById('obra-scroll-hint');
  const overlay = document.getElementById('overlay-obra');
  hint.classList.remove('fade-out');
  hint.classList.add('visible');
  overlay.addEventListener('scroll', function hideHint() {
    hint.classList.add('fade-out');
    setTimeout(() => hint.classList.remove('visible', 'fade-out'), 400);
    overlay.removeEventListener('scroll', hideHint);
  }, { once: true });
}

// ── OVERLAYS ──
function openOverlay(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOverlay(id) {
  if (id === 'overlay-obra') {
    const hint = document.getElementById('obra-scroll-hint');
    hint.classList.remove('visible', 'fade-out');
  }
  document.getElementById(id).classList.remove('open');
  const anyOpen = document.querySelector('.overlay.open');
  if (!anyOpen) document.body.style.overflow = '';
}
document.querySelectorAll('.overlay').forEach(o => {
  o.addEventListener('click', e => {
    if (e.target === o) closeOverlay(o.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay.open').forEach(o => closeOverlay(o.id));
  }
});

// ── GSAP + ScrollTrigger ──
function initHeroAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // ── HERO INTRO ──
  gsap.set('.hero-img',   { opacity: 0 });
  gsap.set('.hero-logo',  { y: 80 });
  gsap.set('.hero-tagline', { clipPath: 'inset(0 100% 0 0)', opacity: 1 });

  gsap.timeline()
    .to('.hero-img',    { opacity: 1, duration: 1.2, ease: 'power2.inOut' })
    .to('.logo-btn',    { opacity: 1, duration: 0.5, ease: 'power3.out' }, 1.1)
    .to('.hero-logo',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.2)
    .to('.nav-links, .lang-toggle, .hamburger', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 1.2)
    .to('.hero-tagline', { clipPath: 'inset(0 0% 0 0)', duration: 1.0, ease: 'power3.inOut' }, 1.5);

  // ── REVEALS CON SCROLL ──
  const revealEls = document.querySelectorAll('.reveal:not(#hero .reveal)');
  revealEls.forEach(el => {
    const delay = el.classList.contains('reveal-d1') ? 0.12
                : el.classList.contains('reveal-d2') ? 0.24
                : el.classList.contains('reveal-d3') ? 0.36
                : el.classList.contains('reveal-d4') ? 0.48
                : el.classList.contains('reveal-d5') ? 0.60 : 0;
    gsap.from(el, {
      opacity: 0, y: 38,
      duration: 0.9, delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
    });
  });

  document.querySelectorAll('.reveal-scale').forEach(el => {
    gsap.from(el, {
      opacity: 0, scale: 1.04, duration: 0.95, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  // ── PARALLAX GENÉRICO ──
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.dataset.parallax);
    gsap.to(el, {
      yPercent: speed * 50,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom', end: 'bottom top',
        scrub: true
      }
    });
  });

  // ── OBRAS HERO parallax (OB-02) ──
  gsap.fromTo('.obras-hero-img',
    { yPercent: -18 },
    {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.obras-hero',
        start: 'top bottom', end: 'bottom top',
        scrub: true
      }
    }
  );

  // ── OBRAS CARDS stagger ──
  gsap.from('.obra-card:not(.obra-extra)', {
    opacity: 0, y: 50, duration: 0.8, stagger: 0.08, ease: 'power3.out',
    scrollTrigger: { trigger: '.obras-grid', start: 'top 85%', toggleActions: 'play none none none' }
  });
}

// ── LOADER PROGRESS ──
(function() {
  let current = 0;
  let target = 0;
  let raf = null;
  let startTime = null;

  function setFill(pct) {
    const fill = document.getElementById('loader-bar-fill');
    const pctEl = document.getElementById('loader-percent');
    if (fill) fill.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';
  }

  function simulate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    // exponential easing: fast start, slows near 88%
    const simulated = Math.round(88 * (1 - Math.exp(-elapsed / 1200)));
    target = Math.max(target, simulated);
    if (current < target) { current++; setFill(current); }
    if (current < 100) raf = requestAnimationFrame(simulate);
  }

  document.addEventListener('DOMContentLoaded', function() {
    raf = requestAnimationFrame(simulate);
  });

  window._completeLoader = function() {
    target = 100;
    if (!raf) raf = requestAnimationFrame(tick);
  };
})();

// ── HERO AMBIENT SOUND ──────────────────────────────────────────
function playHeroSound() {
  const audio = document.getElementById('hero-sound');
  if (!audio) return;

  const FADE_IN_MS  = 1200;   // duración del fade-in
  const HOLD_MS     = 16300;  // hold hasta ~20s totales (1.2 + 16.3 + 2.5 = 20s)
  const FADE_OUT_MS = 2500;   // duración del fade-out
  const MAX_VOL     = 0.55;   // volumen máximo (0–1)

  audio.volume = 0;
  const playPromise = audio.play();

  if (!playPromise) return; // browser muy viejo

  playPromise.then(() => {
    // ── Fade-in ──
    const fadeInStart = performance.now();
    function stepIn(now) {
      const t = Math.min((now - fadeInStart) / FADE_IN_MS, 1);
      audio.volume = t * MAX_VOL;
      if (t < 1) requestAnimationFrame(stepIn);
    }
    requestAnimationFrame(stepIn);

    // ── Fade-out tras HOLD_MS ──
    setTimeout(() => {
      const fadeOutStart = performance.now();
      const volAtStart = audio.volume;
      function stepOut(now) {
        const t = Math.min((now - fadeOutStart) / FADE_OUT_MS, 1);
        audio.volume = volAtStart * (1 - t);
        if (t < 1) requestAnimationFrame(stepOut);
        else { audio.pause(); audio.currentTime = 0; }
      }
      requestAnimationFrame(stepOut);
    }, HOLD_MS);

  }).catch(() => {
    // Browser bloqueó el autoplay → silencio total, sin errores
  });
}

window.addEventListener('load', () => {
  const REVEAL_MS = 2000;
  const wait = Math.max(0, REVEAL_MS - performance.now());
  window._completeLoader();
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => { loader.remove(); initHeroAnimations(); playHeroSound(); }, 700);
    } else {
      initHeroAnimations(); playHeroSound();
    }
  }, wait);
});

// ── HEADER HIDE/SHOW ──
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 80) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
  if (current > lastScroll + 8 && current > 200) header.classList.add('hidden');
  else if (current < lastScroll - 4) header.classList.remove('hidden');
  lastScroll = current;
}, { passive: true });

// ── SCROLL TO ──
function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ── IDIOMA ──
let lang = localStorage.getItem('gamantri-lang') || 'es';
function setLang(l) {
  lang = l;
  localStorage.setItem('gamantri-lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.lang-btn[onclick="setLang('${l}')"]`).forEach(b => b.classList.add('active'));
  document.querySelectorAll(`[data-${l}]`).forEach(el => {
    const val = el.getAttribute(`data-${l}`);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = l;
  // Refrescar botón ver más/menos si obras están expandidas
  const grid = document.querySelector('.obras-grid');
  const btn  = document.getElementById('btn-ver-mas');
  if (grid && btn && grid.classList.contains('expanded')) {
    btn.textContent = l === 'en' ? 'SEE LESS <<<' : 'VER MENOS <<<';
  }
}
// Aplicar idioma guardado al cargar
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('gamantri-lang');
  if (saved && saved !== 'es') setLang(saved);
});
