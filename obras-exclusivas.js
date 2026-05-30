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

// ── SMOOTH SCROLL LINKS INTERNOS ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ══════════════════════════════════════
// DATOS OBRAS EXCLUSIVAS
// (4 B&W actuales repetidas hasta 9 — reemplazar con imágenes definitivas)
// ══════════════════════════════════════
const obrasExclusivas = [
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
    descripcion: 'Composición meticulosamente diseñada de 4 sectores icónicos de Chile en una formación armónica que unifica a las rocas y a los escaladores en una diagonal ascendente.',
    descripcion_en: 'A meticulously designed composition of 4 iconic Chilean sectors in a harmonious formation that unifies rocks and climbers in an ascending diagonal.',
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
  // ── Slots 5–9: repeticiones placeholder hasta tener imágenes definitivas ──
  {
    titulo: 'Caminos II',
    imgFoto: 'shared/assets/images/obras/18-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/17-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/16-O-Mu-F.jpg',
    descripcion: 'En la máxima expresión del minimalismo en la naturaleza aparece seguido un paisaje de nieve.',
    descripcion_en: 'In the highest expression of minimalism in nature, a snow landscape often appears.',
    series: [{ precio: '450 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '80×110 cm, marco de aluminio, con paspartú',
    referencia_en: '80×110 cm, aluminum frame, with mat',
    precioDestacado: '$450 USD',
  },
  {
    titulo: 'El Último Tango II',
    imgFoto: 'shared/assets/images/obras/21-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/20-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/19-O-Mu-F.jpg',
    descripcion: 'Entre las paredes de la mina en el Cajón del Maipo aparece este icónico multilargo.',
    descripcion_en: 'Between the walls of the mine in Cajón del Maipo stands this iconic multi-pitch route.',
    series: [{ precio: '650 USD', copia: '3/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '60×90 cm, marco de aluminio, con paspartú',
    referencia_en: '60×90 cm, aluminum frame, with mat',
    precioDestacado: '$650 USD',
  },
  {
    titulo: 'Penitentes II',
    imgFoto: 'shared/assets/images/obras/24-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/23-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/22-O-Mu-F.jpg',
    descripcion: 'El cerro El Plomo, el más alto de la región de Santiago.',
    descripcion_en: 'Cerro El Plomo, the highest peak in the Santiago region.',
    series: [{ precio: '350 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '50×90 cm, marco de aluminio, con paspartú',
    referencia_en: '50×90 cm, aluminum frame, with mat',
    precioDestacado: '$350 USD',
  },
  {
    titulo: 'Bloque Chileno II',
    imgFoto: 'shared/assets/images/obras/27-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/26-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/25-O-Mu-F.jpg',
    descripcion: 'Composición meticulosamente diseñada de 4 sectores icónicos de Chile.',
    descripcion_en: 'A meticulously designed composition of 4 iconic Chilean sectors.',
    series: [{ precio: '480 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Cuatro individuales', piezas_en: 'Four individual',
    referencia: '40×60 cm cada pieza, marco de madera, con paspartú',
    referencia_en: '40×60 cm each piece, wooden frame, with mat',
    precioDestacado: '$480 USD',
  },
  {
    titulo: 'Caminos III',
    imgFoto: 'shared/assets/images/obras/18-O-O.jpg',
    imgZoom: 'shared/assets/images/obras/17-O-Mu-Z.jpg',
    imgFull: 'shared/assets/images/obras/16-O-Mu-F.jpg',
    descripcion: 'En la máxima expresión del minimalismo en la naturaleza.',
    descripcion_en: 'In the highest expression of minimalism in nature.',
    series: [{ precio: '450 USD', copia: '1/3', vendida: false, destacada: true }],
    piezas: 'Unidad', piezas_en: 'Single print',
    referencia: '80×110 cm, marco de aluminio, con paspartú',
    referencia_en: '80×110 cm, aluminum frame, with mat',
    precioDestacado: '$450 USD',
  },
];

// ── GENERAR GRID ──
function buildGrid() {
  const grid = document.getElementById('oex-grid');
  if (!grid) return;
  grid.innerHTML = obrasExclusivas.map((o, i) => `
    <div class="oex-obra-card reveal" onclick="openOexObra(${i})">
      <div class="oex-obra-celda">
        <div class="oex-img-wrap">
          <img class="oex-img-base" src="${o.imgFoto}" alt="${o.titulo}" loading="lazy" />
          <img class="oex-img-hover" src="${o.imgZoom}" alt="${o.titulo} zoom" loading="lazy" />
        </div>
        <div class="oex-obra-info">
          <p class="oex-obra-name">${o.titulo}</p>
          <span class="oex-obra-badge">${o.precioDestacado}</span>
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
  document.getElementById('oex-modal-desc').textContent = lang === 'en' ? (o.descripcion_en || o.descripcion) : o.descripcion;
  document.getElementById('oex-modal-piezas').textContent = lang === 'en' ? (o.piezas_en || o.piezas) : o.piezas;
  document.getElementById('oex-modal-ref').textContent = lang === 'en' ? (o.referencia_en || o.referencia) : o.referencia;
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

  // Aplicar idioma al overlay recién poblado
  setLang(lang);
}

function closeOexOverlay() {
  document.getElementById('oex-overlay-obra').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOexOverlay();
});

// ── FORMULARIO ──
async function submitOexForm(e) {
  e.preventDefault();
  const btn = document.querySelector('.btn-oex-submit');
  const original = btn.textContent;
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
      btn.textContent = lang === 'en' ? 'Error. Try again.' : 'Error al enviar. Intentá de nuevo.';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = lang === 'en' ? 'Connection error.' : 'Error de conexión.';
    btn.disabled = false;
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
  setLang(lang);
});

// ── GSAP REVEALS ──
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

  // Parallax hero
  gsap.to('.oex-hero-img', {
    yPercent: 20, ease: 'none',
    scrollTrigger: {
      trigger: '#oex-hero',
      start: 'top top', end: 'bottom top',
      scrub: true
    }
  });
});
