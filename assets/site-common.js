/* Comportamiento compartido de Cara-Ven: scroll, menú móvil, modal legal,
   selector de idioma y el indicador de "abierto ahora".

   La cabecera y el pie van escritos directamente en el HTML, no se cargan por
   red: así la página sigue completa aunque falle cualquier petición. */

(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- scroll: header sólido + botón de volver arriba ---------- */
  const siteHeader = document.getElementById('site-header');
  const siteToTop = document.getElementById('toTop');
  if (siteHeader && siteToTop) {
    const onScroll = () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 40);
      siteToTop.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    siteToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- menú móvil ---------- */
  const siteBurger = document.getElementById('burgerBtn');
  const siteNavLinks = document.getElementById('navLinks');
  if (siteBurger && siteNavLinks) {
    siteBurger.addEventListener('click', () => siteNavLinks.classList.toggle('open'));
    siteNavLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => siteNavLinks.classList.remove('open')));
  }

  /* ---------- modal legal ---------- */
  const legalModal = document.getElementById('legalModal');
  if (legalModal) {
    const legalTabs = document.querySelectorAll('.legal-tab');
    const legalPanels = {
      aviso: document.getElementById('legalPanelAviso'),
      privacidad: document.getElementById('legalPanelPrivacidad'),
      cookies: document.getElementById('legalPanelCookies'),
    };
    function openLegal(tab) {
      legalModal.classList.add('open');
      legalTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-legal-panel') === tab));
      Object.entries(legalPanels).forEach(([key, el]) => el && el.classList.toggle('active', key === tab));
    }
    document.querySelectorAll('[data-legal-tab]').forEach(btn =>
      btn.addEventListener('click', () => openLegal(btn.getAttribute('data-legal-tab'))));
    legalTabs.forEach(btn =>
      btn.addEventListener('click', () => openLegal(btn.getAttribute('data-legal-panel'))));
    document.getElementById('legalClose').addEventListener('click', () => legalModal.classList.remove('open'));
    legalModal.addEventListener('click', (e) => { if (e.target === legalModal) legalModal.classList.remove('open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') legalModal.classList.remove('open'); });
  }

  /* ---------- ¿estamos abiertos ahora? ----------
     Horario: 10:30–21:30 todos los días excepto el jueves (cerrado).
     Se calcula siempre en hora de Canarias, no en la del visitante. */
  const HOURS = { open: 10 * 60 + 30, close: 21 * 60 + 30, closedDay: 4 }; // 4 = jueves

  function canaryNow() {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Atlantic/Canary', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(new Date());
    const get = t => parts.find(p => p.type === t).value;
    const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[get('weekday')], minutes: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
  }

  function refreshOpenState() {
    const pill = document.getElementById('openPill');
    if (!pill) return;
    const { day, minutes } = canaryNow();
    const isOpen = day !== HOURS.closedDay && minutes >= HOURS.open && minutes < HOURS.close;
    pill.classList.toggle('closed', !isOpen);
    const label = pill.querySelector('.op-label');
    if (label) {
      const key = isOpen ? 'open_now' : 'open_closed';
      label.setAttribute('data-i18n', key);
      const lang = window.CURRENT_LANG || 'es';
      if (I18N[lang] && I18N[lang][key]) label.innerHTML = I18N[lang][key];
    }

    // Resalta el día de hoy en la tabla de horarios.
    const order = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    document.querySelectorAll('.hours-grid [data-day]').forEach(el =>
      el.classList.toggle('today', el.getAttribute('data-day') === order[day]));
  }
  window.refreshOpenState = refreshOpenState;

  /* ---------- idioma ---------- */
  const FLAGS = { es: '🇪🇸', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷' };
  const SUPPORTED = Object.keys(FLAGS);

  function initialLang() {
    const saved = localStorage.getItem('caraven_lang');
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'es';
  }

  // El HTML se sirve ya en español. En la primera pasada, si el idioma elegido
  // es el español, no hay nada que reescribir: así no hay destello de texto.
  let primeraPasada = true;

  function setLanguage(lang) {
    try { localStorage.setItem('caraven_lang', lang); } catch (e) { /* modo privado */ }
    window.CURRENT_LANG = lang;
    document.documentElement.lang = lang;
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');
    if (langFlag) langFlag.textContent = FLAGS[lang];
    if (langCode) langCode.textContent = lang.toUpperCase();
    document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === lang));
    refreshOpenState();
    if (!(primeraPasada && lang === 'es')) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[lang] && I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
      });
    }
    primeraPasada = false;
    if (typeof window.onLanguageChange === 'function') window.onLanguageChange(lang);
  }
  window.setLanguage = setLanguage;

  const langSwitch = document.getElementById('langSwitch');
  const langBtn = document.getElementById('langBtn');
  if (langSwitch && langBtn) {
    langBtn.addEventListener('click', (e) => { e.stopPropagation(); langSwitch.classList.toggle('open'); });
    document.querySelectorAll('[data-lang]').forEach(b =>
      b.addEventListener('click', () => { setLanguage(b.getAttribute('data-lang')); langSwitch.classList.remove('open'); }));
    document.addEventListener('click', () => langSwitch.classList.remove('open'));
  }

  setLanguage(initialLang());
  setInterval(refreshOpenState, 60000);
})();
