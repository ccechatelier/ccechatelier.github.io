/* Dimension by HTML5 UP (html5up.net), adapted for Corentin Chatelier.
   Progressive enhancement: the complete site remains readable without JavaScript. */
(() => {
  'use strict';
  const panels = [...document.querySelectorAll('#main > article')];
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const main = document.getElementById('main');
  const skip = document.querySelector('.skip-link');
  let active = null;
  let lastHomeLink = header.querySelector('nav a');
  document.documentElement.classList.add('js');

  function route(focus = true) {
    let id = '';
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { /* Invalid hashes open the home page. */ }
    const aliases = { intro: 'about', work: 'projects', education: 'vita', experience: 'vita' };
    const target = document.getElementById(id) || document.getElementById(aliases[id] || '');
    const panel = target?.closest('#main > article') || null;
    const previous = active;
    active = panel;
    panels.forEach(item => {
      item.hidden = item !== panel;
      item.classList.toggle('active', item === panel);
    });
    main.hidden = !panel;
    header.hidden = !!panel;
    footer.hidden = !!panel;
    skip.hidden = !!panel;
    document.body.classList.toggle('is-article-visible', !!panel);
    document.title = panel ? `${panel.querySelector('h2').textContent} | Dr. Corentin Chatelier` : 'Dr. Corentin Chatelier | Materials science & Catalysis';
    if (panel) {
      if (target && target !== panel && target.classList.contains('publication')) {
        const controls = document.querySelector('.publication-controls');
        if (controls) {
          document.getElementById('publication-search').value = '';
          document.getElementById('publication-year').value = 'all';
          document.getElementById('publication-search').dispatchEvent(new Event('input'));
        }
        target.querySelector('details').open = true;
      }
      if (focus) panel.focus({preventScroll: true});
      if (target && target !== panel) target.scrollIntoView({block: 'start'});
      else window.scrollTo(0, 0);
    } else if (previous && focus) {
      lastHomeLink?.focus({preventScroll: true});
      window.scrollTo(0, 0);
    }
  }

  header.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) lastHomeLink = link;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && active) location.hash = 'home';
  });
  document.getElementById('wrapper').addEventListener('click', event => {
    if (active && (event.target.id === 'wrapper' || event.target.id === 'main')) location.hash = 'home';
  });
  window.addEventListener('hashchange', () => route());

  const search = document.getElementById('publication-search');
  const year = document.getElementById('publication-year');
  const publications = [...document.querySelectorAll('.publication')];
  if (search && year) {
    const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const searchable = new Map(publications.map(item => [item, normalize(item.textContent)]));
    const filter = () => {
      const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
      let count = 0;
      publications.forEach(item => {
        const match = (year.value === 'all' || item.dataset.year === year.value) && words.every(word => searchable.get(item).includes(word));
        item.hidden = !match;
        if (match) count++;
      });
      document.getElementById('publication-count').textContent = `${count} ${count === 1 ? 'reference' : 'references'}`;
      document.getElementById('publication-empty').hidden = count !== 0;
    };
    document.querySelector('.publication-controls').hidden = false;
    search.addEventListener('input', filter);
    year.addEventListener('change', filter);
  }
  route(!!location.hash);
})();
