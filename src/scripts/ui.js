// Theme toggle · scroll reveal · work-grid channel filter.
// Re-initialised after every view transition via astro:page-load.

const root = document.documentElement;
const STORAGE_KEY = 'sma-theme';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyStoredTheme() {
  root.classList.add('js');
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) root.setAttribute('data-theme', saved);
  } catch (err) {
    /* storage blocked — fall back to system preference */
  }
}

function isDark() {
  const chosen = root.getAttribute('data-theme');
  return chosen === 'dark' || (!chosen && prefersDark.matches);
}

function initThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle || toggle.dataset.bound) return;
  toggle.dataset.bound = '1';
  toggle.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (err) {
      /* ignore — choice just won't persist */
    }
  });
}

function initReveal() {
  const targets = [
    ...document.querySelectorAll('[data-reveal]:not(.is-in), [data-reveal-img]:not(.is-in)'),
  ];
  if (!targets.length) return;

  const io =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries, obs) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              entry.target.classList.add('is-in');
              obs.unobserve(entry.target);
            }
          },
          { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
        )
      : null;

  // Anything already on (or near) screen reveals now — never wait on the
  // observer for above-the-fold content. Everything else animates on scroll.
  const vh = window.innerHeight || 800;
  for (const el of targets) {
    if (!io || el.getBoundingClientRect().top < vh * 1.05) {
      el.classList.add('is-in');
    } else {
      io.observe(el);
    }
  }

  // Safety net: content must never stay hidden. If anything in the first
  // couple of screens is still hidden shortly after init (e.g. odd timing
  // after a view transition), force it visible.
  setTimeout(() => {
    const limit = (window.innerHeight || 800) * 2;
    for (const el of document.querySelectorAll(
      '[data-reveal]:not(.is-in), [data-reveal-img]:not(.is-in)',
    )) {
      if (el.getBoundingClientRect().top < limit) el.classList.add('is-in');
    }
  }, 900);
}

function initChannelSwitch() {
  const grid = document.getElementById('work-grid');
  const buttons = document.querySelectorAll('.switch [data-filter]');
  if (!grid || !buttons.length || grid.dataset.bound) return;
  grid.dataset.bound = '1';

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });

      grid.classList.add('swapping');
      window.setTimeout(() => {
        grid.querySelectorAll('.cell').forEach((cell) => {
          cell.hidden = filter !== 'all' && cell.dataset.channel !== filter;
        });
        grid.classList.remove('swapping');
      }, 130);
    });
  });
}

function initReticle() {
  const grid = document.getElementById('work-grid');
  const ret = document.querySelector('.reticle');
  if (!grid || !ret || ret.dataset.bound) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  ret.dataset.bound = '1';
  ret.hidden = false;

  const SIZE = 40;
  let tx = innerWidth / 2;
  let ty = innerHeight / 2;
  let x = tx;
  let y = ty;
  let locked = false;
  let raf = 0;

  const frame = () => {
    const k = locked ? 0.26 : 0.16;
    x += (tx - x) * k;
    y += (ty - y) * k;
    ret.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0) scale(${
      locked ? 1.4 : 1
    })`;
    if (locked || Math.abs(tx - x) > 0.4 || Math.abs(ty - y) > 0.4) {
      raf = requestAnimationFrame(frame);
    } else {
      raf = 0;
    }
  };
  const kick = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  grid.addEventListener('pointerenter', () => ret.classList.add('on'));
  grid.addEventListener('pointerleave', () => {
    ret.classList.remove('on');
    locked = false;
  });
  grid.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.card');
    if (card) {
      const r = card.getBoundingClientRect();
      tx = r.left + r.width / 2;
      ty = r.top + r.height / 2;
      locked = true;
    } else {
      tx = e.clientX;
      ty = e.clientY;
      locked = false;
    }
    kick();
  });
}

function init() {
  applyStoredTheme();
  initThemeToggle();
  initReveal();
  initChannelSwitch();
  initReticle();
}

// run now (module scripts are deferred, so the DOM is ready) and again on
// every view-transition navigation — after-swap fires the moment the new DOM
// is in place, page-load after the transition settles
init();
document.addEventListener('astro:after-swap', init);
document.addEventListener('astro:page-load', init);
