'use strict';
const supportedLanguages = ['vi', 'en', 'ja'];
// An explicit URL wins even if browser storage is unavailable.
let currentLanguage = 'vi';
const requestedLanguage = new URLSearchParams(location.search).get('lang');
if (supportedLanguages.includes(requestedLanguage)) {
  currentLanguage = requestedLanguage;
} else {
  try {
    const stored = localStorage.getItem('wedding-language');
    if (supportedLanguages.includes(stored)) currentLanguage = stored;
  } catch (_) { /* Vietnamese is the default when storage is blocked. */ }
}
const tr = (vi, en, ja) => ({vi, en, ja}[currentLanguage] ?? vi);

function applyLanguage(language, updateUrl) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'vi';
  document.documentElement.lang = currentLanguage;
  const specs = [
    ['en', 'ja', 'viText', 'textContent'],
    ['enHtml', 'jaHtml', 'viHtml', 'innerHTML'],
    ['enAria', 'jaAria', 'viAria', 'aria-label'],
    ['enPlaceholder', 'jaPlaceholder', 'viPlaceholder', 'placeholder'],
    ['enAlt', 'jaAlt', 'viAlt', 'alt'],
    ['enContent', 'jaContent', 'viContent', 'content']
  ];
  const selector = '[data-en],[data-en-html],[data-en-aria],[data-en-placeholder],[data-en-alt],[data-en-content]';
  document.querySelectorAll(selector).forEach(el => {
    specs.forEach(([enKey, jaKey, viKey, property]) => {
      if (!(enKey in el.dataset)) return;
      const isProperty = property === 'textContent' || property === 'innerHTML';
      if (!(viKey in el.dataset)) el.dataset[viKey] = isProperty ? el[property] : el.getAttribute(property);
      const value = currentLanguage === 'ja' ? (el.dataset[jaKey] ?? el.dataset[viKey])
        : currentLanguage === 'en' ? el.dataset[enKey] : el.dataset[viKey];
      if (isProperty) el[property] = value; else el.setAttribute(property, value);
    });
  });
  const photoLabels = {
    'Ảnh bìa': ['Cover photo', '表紙の写真'],
    'Chú rể': ['Groom', '新郎'], 'Cô dâu': ['Bride', '新婦'],
    'Ảnh cảm ơn': ['Thank-you photo', '感謝の写真']
  };
  document.querySelectorAll('[data-p]').forEach(frame => {
    if (!('viLabel' in frame.dataset)) frame.dataset.viLabel = frame.dataset.l || 'Ảnh cưới';
    const vi = frame.dataset.viLabel;
    const [en, ja] = photoLabels[vi] || (/^Ảnh \d+$/.test(vi)
      ? [vi.replace('Ảnh', 'Photo'), vi.replace('Ảnh ', '写真 ')] : ['Wedding photo', 'ウェディングフォト']);
    const label = tr(vi, en, ja);
    frame.dataset.l = label;
    const image = frame.querySelector('img');
    if (image) image.alt = label;
  });
  document.querySelectorAll('[data-language]').forEach(button =>
    button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage)));
  const auto = document.querySelector('#autoScrollBtn');
  if (auto) auto.textContent = auto.getAttribute('aria-pressed') === 'true'
    ? tr('Ⅱ Dừng tự cuộn', 'Ⅱ Pause auto-scroll', 'Ⅱ 自動スクロールを停止')
    : tr('▶ Tự cuộn', '▶ Auto-scroll', '▶ 自動スクロール');
  if (typeof tick === 'function') tick();
  try { localStorage.setItem('wedding-language', currentLanguage); } catch (_) {}
  if (updateUrl) {
    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', currentLanguage);
      history.replaceState(history.state, '', url);
    } catch (_) {}
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-language]').forEach(button =>
    button.addEventListener('click', () => applyLanguage(button.dataset.language, true)));
  applyLanguage(currentLanguage, false);
});
