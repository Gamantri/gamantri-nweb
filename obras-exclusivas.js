// ── OBRAS EXCLUSIVAS — Gamantri Fine Art ──

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
  document.querySelectorAll('[data-placeholder-es]').forEach(el => {
    el.placeholder = el.getAttribute(`data-placeholder-${l}`);
  });
  document.documentElement.lang = l;
}

document.addEventListener('DOMContentLoaded', () => setLang(lang));

// ── HEADER SCROLL ──
const oexHeader = document.getElementById('oex-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) oexHeader.classList.add('scrolled');
  else oexHeader.classList.remove('scrolled');
}, { passive: true });

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ══════════════════════════════════════
// DATOS OBRAS EXCLUSIVAS
// Base: Llaima en Nubes, Nodriza, Caminos, Penitentes
// Repetidas hasta completar 9 (reemplazar con imágenes definitivas)
// ══════════════════════════════════════
const obrasExclusivas = [
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
  // ── Slots 5–9: repeticiones placeholder (reemplazar con imágenes definitivas) ──
  {
    titulo: 'Llaima en Nubes II',
    imgFoto: 'shared/assets/images/obras/6-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/5-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/4-O-Mu-F.jpg',
    descripcion: 'Episodio único y poético de un volcán icónico.',
    descripcion_en: 'A unique and poetic episode of an iconic volcano.',
    series: [{ precio: '680 USD', copia: '2/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '60×90 cm, marco de aluminio, con paspartú',
    referencia_en: '60×90 cm, aluminum frame, with mat',
    precioDestacado: '$680 USD',
  },
  {
    titulo: 'Nodriza II',
    imgFoto: 'shared/assets/images/obras/15-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/14-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/13-O-Mu-F.jpg',
    descripcion: 'La magnitud y perfección de esta nube lenticular sobre el Volcán Llaima.',
    descripcion_en: 'The magnitude and perfection of this lenticular cloud over Llaima Volcano.',
    series: [{ precio: '320 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '50×80 cm, marco de acero, con paspartú',
    referencia_en: '50×80 cm, steel frame, with mat',
    precioDestacado: '$320 USD',
  },
  {
    titulo: 'Caminos II',
    imgFoto: 'shared/assets/images/obras/18-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/17-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/16-O-Mu-F.jpg',
    descripcion: 'Minimalismo puro. Un paisaje de nieve, nubes bajas y senderos ínfimos.',
    descripcion_en: 'Pure minimalism. A snow landscape, low clouds and faint trails.',
    series: [{ precio: '450 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '80×110 cm, marco de aluminio, con paspartú',
    referencia_en: '80×110 cm, aluminum frame, with mat',
    precioDestacado: '$450 USD',
  },
  {
    titulo: 'Penitentes II',
    imgFoto: 'shared/assets/images/obras/24-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/23-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/22-O-Mu-F.jpg',
    descripcion: 'El cerro El Plomo y sus penitentes en el campamento base Federación.',
    descripcion_en: 'Cerro El Plomo and its penitentes at the Federación base camp.',
    series: [{ precio: '350 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '50×90 cm, marco de aluminio, con paspartú',
    referencia_en: '50×90 cm, aluminum frame, with mat',
    precioDestacado: '$350 USD',
  },
  {
    titulo: 'Llaima en Nubes III',
    imgFoto: 'shared/assets/images/obras/6-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/5-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/4-O-Mu-F.jpg',
    descripcion: 'Un volcán icónico vestido de nubes por tan solo unos breves minutos.',
    descripcion_en: 'An iconic volcano dressed in clouds for just a few brief minutes.',
    series: [{ precio: '1.100 USD', copia: '3/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '60×90 cm, marco de aluminio, con paspartú',
    referencia_en: '60×90 cm, aluminum frame, with mat',
    precioDestacado: '$1.100 USD',
  },
];

// ── GENERAR GRID (misma estructura que index) ──
function buildGrid() {
  const grid = document.getElementById('oex-grid');
  if (!grid) return;
  // Base = O-Mu-Z (B&W, default) | Hover = O-Mu-F (color)
  grid.innerHTML = obrasExclusivas.map((o, i) => `
    <div class="obra-card" onclick="openOexObra(${i})">
      <div class="obra-celda">
        <div class="obra-img-wrap">
          <img class="obra-img-base" src="${o.imgZoom}" alt="${o.titulo}" loading="lazy" />
          <img class="obra-img-hover" src="${o.imgFoto}" alt="${o.titulo} color" loading="lazy" />
          <div class="obra-label">
            <div class="obra-card-title">${o.titulo}</div>
            <span class="obra-badge">${o.precioDestacado}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── ABRIR OBRA ──
function openOexObra(i) {
  const o = obrasExclusivas[i];
  document.getElementById('oex-foto-sola').src = o.imgFoto;
  document.getElementById('oex-foto-zoom').src = o.imgZoom;
  document.getElementById('oex-foto-full').src = o.imgFull;
  document.getElementById('oex-modal-titulo').textContent = o.titulo;
  document.getElementById('oex-modal-desc').textContent   = lang === 'en' ? (o.descripcion_en || o.descripcion) : o.descripcion;
  document.getElementById('oex-modal-piezas').textContent = lang === 'en' ? (o.piezas_en || o.piezas) : o.piezas;
  document.getElementById('oex-modal-ref').textContent    = lang === 'en' ? (o.referencia_en || o.referencia) : o.referencia;
  document.getElementById('oex-modal-precio').textContent = o.precioDestacado;

  const seriesEl = document.getElementById('oex-modal-series');
  seriesEl.innerHTML = o.series.map(s => {
    if (s.vendida) {
      return `<div class="serie-item sold"><div class="serie-precio">${s.precio}</div><div class="serie-copia">${s.copia} · SOLD</div></div>`;
    } else if (s.destacada) {
      return `<div class="serie-item available primera"><div class="serie-precio">${s.precio}</div><div class="serie-copia">${s.copia}</div></div>`;
    } else {
      return `<div class="serie-item available"><div class="serie-precio">${s.precio}</div><div class="serie-copia">${s.copia}</div></div>`;
    }
  }).join('');

  const overlay = document.getElementById('oex-overlay-obra');
  overlay.scrollTop = 0;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setLang(lang);
  // LC8: mostrar scroll hint
  const hint = document.getElementById('oex-scroll-hint');
  if (hint) {
    hint.classList.remove('fade-out');
    hint.classList.add('visible');
    overlay.addEventListener('scroll', function hideOexHint() {
      hint.classList.add('fade-out');
      setTimeout(() => hint.classList.remove('visible', 'fade-out'), 400);
      overlay.removeEventListener('scroll', hideOexHint);
    }, { once: true });
  }
}

function closeOexOverlay() {
  document.getElementById('oex-overlay-obra').classList.remove('open');
  document.body.style.overflow = '';
  const hint = document.getElementById('oex-scroll-hint');
  if (hint) hint.classList.remove('visible', 'fade-out');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOexOverlay();
});

// ── FORMULARIO ──
async function submitOexForm(e) {
  e.preventDefault();
  const btn = document.querySelector('.btn-oex-submit');
  btn.textContent = lang === 'en' ? 'Sending...' : 'Enviando...';
  btn.disabled = true;
  try {
    const res  = await fetch('https://api.web3forms.com/submit', {
      method: 'POST', body: new FormData(e.target)
    });
    const json = await res.json();
    if (json.success) {
      document.getElementById('oex-form').style.display = 'none';
      document.getElementById('oex-gracias').style.display = 'block';
      setLang(lang);
    } else {
      btn.textContent = lang === 'en' ? 'Error. Try again.' : 'Error al enviar. Intente de nuevo.';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = lang === 'en' ? 'Connection error.' : 'Error de conexión.';
    btn.disabled = false;
  }
}

// ── AUDIO HERO OBRAS (~18 seg) ──
function playOexSound() {
  const audio = document.getElementById('oex-sound');
  if (!audio) return;
  const FADE_IN_MS  = 1200;
  const HOLD_MS     = 11800;  // 1.2 + 11.8 + 5.0 = 18s — LC9: fade-out 5s
  const FADE_OUT_MS = 5000;
  const MAX_VOL     = 0.55;
  audio.volume = 0;
  const p = audio.play();
  if (!p) return;
  p.then(() => {
    const t0 = performance.now();
    function fadeIn(now) {
      const t = Math.min((now - t0) / FADE_IN_MS, 1);
      audio.volume = t * MAX_VOL;
      if (t < 1) requestAnimationFrame(fadeIn);
    }
    requestAnimationFrame(fadeIn);
    setTimeout(() => {
      const t1 = performance.now();
      const v0 = audio.volume;
      function fadeOut(now) {
        const t = Math.min((now - t1) / FADE_OUT_MS, 1);
        audio.volume = v0 * (1 - t);
        if (t < 1) requestAnimationFrame(fadeOut);
        else { audio.pause(); audio.currentTime = 0; }
      }
      requestAnimationFrame(fadeOut);
    }, HOLD_MS);
  }).catch(() => {});
}

// ── PANEL EXPANDIBLE — pasos 02-05 ──
function initPasoExpand() {
  const stepsEl   = document.querySelector('.oex-steps');
  const panel     = document.getElementById('oex-paso-expand');
  const panelImg  = panel.querySelector('.oex-paso-expand-img');
  const panelNum  = panel.querySelector('.oex-paso-expand-num');
  const panelTit  = panel.querySelector('.oex-paso-expand-title');
  const panelDesc = panel.querySelector('.oex-paso-expand-desc');
  if (!stepsEl || !panel) return;

  const clickables = stepsEl.querySelectorAll('.oex-step-clickable');

  clickables.forEach(step => {
    step.addEventListener('click', () => {
      const paso  = parseInt(step.dataset.paso);  // 2-5
      const img   = step.dataset.img;
      const num   = step.dataset.num;
      const title = step.querySelector('.oex-step-title').textContent.trim();
      const desc  = step.querySelector('.oex-step-desc').textContent.trim();

      // Poblar panel
      panelImg.src  = img;
      panelNum.textContent  = num;
      panelTit.textContent  = title;
      panelDesc.textContent = desc;

      // Calcular posición dentro del contenedor .oex-steps
      const containerRect = stepsEl.getBoundingClientRect();
      const stepRect      = step.getBoundingClientRect();
      const stepW         = stepRect.width;
      const stepH         = stepRect.height;
      const panelW        = stepW * 2;

      // Paso 05 expande hacia la izquierda (cubre 04+05)
      const leftBase = stepRect.left - containerRect.left;
      const left     = (paso === 5) ? leftBase - stepW : leftBase;

      panel.style.left   = left + 'px';
      panel.style.top    = '0';           /* siempre arriba del grid de pasos */
      panel.style.width  = panelW + 'px';
      panel.style.height = stepH + 'px';
      panel.classList.add('active');
    });
  });

  // Desaparecer al salir del panel
  panel.addEventListener('mouseleave', () => {
    panel.classList.remove('active');
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
  setLang(lang);
  playOexSound();
  initPasoExpand();
});

// ── GSAP REVEALS + PARALLAX ──
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.reveal').forEach(el => {
    const delay = el.classList.contains('reveal-d1') ? 0.12
                : el.classList.contains('reveal-d2') ? 0.24
                : el.classList.contains('reveal-d3') ? 0.36 : 0;
    gsap.from(el, {
      opacity: 0, y: 28, duration: 1, delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
    });
  });

  // Parallax portada (igual que obras-hero en index)
  gsap.fromTo('.oex-portada-img',
    { yPercent: -18 },
    {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.oex-portada',
        start: 'top bottom', end: 'bottom top',
        scrub: true
      }
    }
  );
});
