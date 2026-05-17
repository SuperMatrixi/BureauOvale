/* ═══════════════════════════════════════════════════════════
   BUREAU OVALE — main.js
   All interactive features: nav, ticker, carousel, ROI calc,
   FAQ, chatbot, GDPR, WhatsApp bubble, language switcher
═══════════════════════════════════════════════════════════ */
import TYNA from './chatbot.js';

/* ═══ LANGUAGE SYSTEM ══════════════════════════════════════ */
let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  TYNA.lang = lang;

  // Update all [data-fr] [data-en] [data-ye] elements
  document.querySelectorAll('[data-fr]').forEach(el => {
    const text = el.getAttribute('data-' + lang) || el.getAttribute('data-fr');
    if (el.tagName === 'INPUT' && el.type === 'submit') el.value = text;
    else if (el.tagName !== 'INPUT') el.textContent = text;
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Rebuild ticker, FAQ, chatbot suggestions
  buildTicker();
  renderFaq('all');
  if (document.getElementById('chatbotPanel').classList.contains('show')) {
    renderSuggestions();
  }

  // Update ROI calculator labels
  updateROILabels();

  // Update chatbot lang buttons
  document.querySelectorAll('.chat-lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-clang') === lang);
  });
}

// Language button click
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});
document.querySelectorAll('.chat-lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-clang')));
});

function updateROILabels() {
  // Update table headers and labels that have data-fr attrs inside the calc
  document.querySelectorAll('#rTBody th[data-fr], .kpi-ttl[data-fr]').forEach(el => {
    const txt = el.getAttribute('data-' + currentLang) || el.getAttribute('data-fr');
    if (txt) el.textContent = txt;
  });
}


/* ═══ TICKER ════════════════════════════════════════════════ */
const tickerData = {
  exporters: [
    { flag: '🇲🇽', country: 'Mexico', volume: '1.3M t' },
    { flag: '🇳🇱', country: 'Netherlands', volume: '450k t' },
    { flag: '🇵🇪', country: 'Peru', volume: '250k t' },
    { flag: '🇨🇱', country: 'Chile', volume: '200k t' },
    { flag: '🇰🇪', country: 'Kenya', volume: '120k t' }
  ],
  importers: [
    { flag: '🇺🇸', country: 'USA', volume: '960k t' },
    { flag: '🇪🇺', country: 'EU', volume: '620k t' },
    { flag: '🇨🇳', country: 'China', volume: '240k t' },
    { flag: '🇯🇵', country: 'Japan', volume: '85k t' },
    { flag: '🇬🇧', country: 'UK', volume: '78k t' }
  ],
  cosmeticCos: [
    { ticker: 'OR', name: "L'Oréal", cap: '$220B' },
    { ticker: 'UL', name: 'Unilever', cap: '$130B' },
    { ticker: 'PG', name: 'P&G', cap: '$380B' },
    { ticker: 'EL', name: 'Estée Lauder', cap: '$60B' },
    { ticker: 'BEI', name: 'Beiersdorf', cap: '$29B' }
  ],
  africanProducers: [
    { flag: '🇲🇦', country: 'Morocco', vol: '180k t', co: 'Agrisoleil' },
    { flag: '🇰🇪', country: 'Kenya', vol: '120k t', co: 'Kakuzi PLC' },
    { flag: '🇿🇦', country: 'S. Africa', vol: '95k t', co: 'Westfalia' },
    { flag: '🇪🇹', country: 'Ethiopia', vol: '60k t', co: 'Ethioforest' },
    { flag: '🇹🇿', country: 'Tanzania', vol: '40k t', co: 'Tanzavocado' }
  ]
};

function buildTicker() {
  const labels = {
    fr: { exp: 'TOP 5 EXPORTEURS', imp: 'TOP 5 IMPORTEURS', cos: 'TOP 5 COSMÉTIQUES (Mkt Cap)', afr: 'TOP 5 AFRIQUE', sep: '|' },
    en: { exp: 'TOP 5 EXPORTERS', imp: 'TOP 5 IMPORTERS', cos: 'TOP 5 COSMETICS (Mkt Cap)', afr: 'TOP 5 AFRICA', sep: '|' },
    ye: { exp: 'TOP 5 EXPORT', imp: 'TOP 5 IMPORT', cos: 'TOP 5 COSMÉTIQUES', afr: 'TOP 5 AFRIQUE', sep: '|' }
  };
  const l = labels[currentLang] || labels.fr;

  let html = `<span class="ticker-item">🥑 AVOCADO GLOBAL MARKET ${new Date().getFullYear()} ${l.sep}</span>`;

  html += `<span class="ticker-item"><strong>${l.exp}:</strong></span>`;
  tickerData.exporters.forEach(e => {
    html += `<span class="ticker-item">${e.flag} ${e.country} ${e.volume}</span>`;
  });
  html += `<span class="ticker-item">${l.sep}</span>`;

  html += `<span class="ticker-item"><strong>${l.imp}:</strong></span>`;
  tickerData.importers.forEach(e => {
    html += `<span class="ticker-item">${e.flag} ${e.country} ${e.volume}</span>`;
  });
  html += `<span class="ticker-item">${l.sep}</span>`;

  html += `<span class="ticker-item"><strong>${l.cos}:</strong></span>`;
  tickerData.cosmeticCos.forEach(c => {
    html += `<span class="ticker-item">${c.ticker} (${c.name}) ${c.cap}</span>`;
  });
  html += `<span class="ticker-item">${l.sep}</span>`;

  html += `<span class="ticker-item"><strong>${l.afr}:</strong></span>`;
  tickerData.africanProducers.forEach(p => {
    html += `<span class="ticker-item">${p.flag} ${p.country} · ${p.co} · ${p.vol}</span>`;
  });

  document.getElementById('tickerContent').innerHTML = html + html; // duplicate for seamless loop
}


/* ═══ NAV ═══════════════════════════════════════════════════ */
const ham = document.getElementById('hamburger');
const mobMenu = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  const open = mobMenu.classList.toggle('open');
  ham.classList.toggle('open', open);
  ham.setAttribute('aria-expanded', open);
  mobMenu.setAttribute('aria-hidden', !open);
});

// Close mobile menu on link click
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobMenu.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', false);
    mobMenu.setAttribute('aria-hidden', true);
  });
});

// Nav scroll shadow
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
});


/* ═══ SMOOTH SCROLL ════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ═══ SCROLL REVEAL ════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ═══ CAROUSEL ══════════════════════════════════════════════ */
(function () {
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  let current = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Slide ${i + 1}`);
    d.setAttribute('role', 'tab');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.querySelector('.carousel-prev')?.addEventListener('click', () => goTo(current - 1));
  document.querySelector('.carousel-next')?.addEventListener('click', () => goTo(current + 1));

  // Touch swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
  });

  resetTimer();
})();


/* ═══ ROI CALCULATOR ════════════════════════════════════════ */
const ROI = (() => {
  const YIELD = [0, 0, 8, 13.3, 26.7, 40, 53.3, 66.7, 74.7, 80];
  const FX = { GBP: 1, EUR: 1.19, USD: 1.27, FCFA: 782.5 };
  let CUR = 'GBP', SYM = '£';
  let advOpen = false;

  function fmt(n) {
    const abs = Math.abs(n), sign = n < 0 ? '−' : '';
    if (CUR === 'FCFA') return sign + new Intl.NumberFormat('fr-FR').format(Math.round(abs)) + ' CFA';
    return sign + SYM + new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(Math.round(abs));
  }
  function fmtKg(kg) { return kg <= 0 ? '—' : kg >= 1000 ? (kg / 1000).toFixed(1) + 't' : Math.round(kg) + ' kg'; }
  function r2(n) { return Math.round(n * 100) / 100; }

  function setCurrency(cur, sym) {
    const ratio = FX[cur] / FX[CUR];
    CUR = cur; SYM = sym;
    ['rBundlePrice', 'rLocalPrice', 'rExportPrice'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = r2(parseFloat(el.value || 0) * ratio);
    });
    const opEl = document.getElementById('rOpex');
    if (opEl) opEl.value = Math.round(parseFloat(opEl.value || 0) * ratio);
    ['rPsym', 'rAdvL', 'rAdvE', 'rAdvO'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = sym;
    });
    ['GBP', 'EUR', 'USD', 'FCFA'].forEach(c => {
      const b = document.getElementById('cBtn-' + c);
      if (b) b.classList.toggle('active', c === cur);
    });
    calc();
  }

  function addPlants(delta) {
    const el = document.getElementById('rPlantInput');
    if (!el) return;
    let v = parseInt(el.value || 10) + delta;
    v = Math.max(10, Math.min(600, Math.round(v / 10) * 10));
    el.value = v; calc();
  }

  function clamp() {
    const el = document.getElementById('rPlantInput');
    if (!el) return;
    let v = parseInt(el.value || 10);
    el.value = Math.max(10, Math.min(600, Math.round(v / 10) * 10));
  }

  function updateSlider() {
    const v = parseInt(document.getElementById('rExportSlider')?.value || 40);
    const lEl = document.getElementById('rLocalPct');
    const eEl = document.getElementById('rExportPct');
    if (lEl) lEl.textContent = (100 - v) + '%';
    if (eEl) eEl.textContent = v + '%';
  }

  function updateLoss() {
    const el = document.getElementById('rLossSlider');
    const lbl = document.getElementById('rLossLbl');
    if (el && lbl) lbl.textContent = el.value + '%';
  }

  function toggleAdv() {
    advOpen = !advOpen;
    document.getElementById('rAdvBody')?.classList.toggle('open', advOpen);
    document.getElementById('rAdvToggle')?.classList.toggle('open', advOpen);
  }

  function calc() {
    const plants = Math.max(10, parseInt(document.getElementById('rPlantInput')?.value || 10));
    const bPrice = parseFloat(document.getElementById('rBundlePrice')?.value || 100);
    const expPct = parseInt(document.getElementById('rExportSlider')?.value || 40) / 100;
    const locPx  = parseFloat(document.getElementById('rLocalPrice')?.value || 2.8);
    const expPx  = parseFloat(document.getElementById('rExportPrice')?.value || 4.6);
    const opexFull = parseFloat(document.getElementById('rOpex')?.value || 6400);
    const lossRate = parseInt(document.getElementById('rLossSlider')?.value || 5) / 100;

    const totalInvest = (plants / 10) * bPrice;
    const avgPrice = locPx * (1 - expPct) + expPx * expPct;
    const opex = opexFull * (plants / 600);

    const tag = document.getElementById('rTotalTag');
    if (tag) {
      const lbl = { fr: `Total : ${fmt(totalInvest)} pour ${plants} plants`, en: `Total: ${fmt(totalInvest)} for ${plants} plants`, ye: `Total : ${fmt(totalInvest)} — ${plants} avoka` };
      tag.textContent = lbl[currentLang] || lbl.fr;
    }
    const si = document.getElementById('rSumInvest');
    if (si) si.textContent = fmt(totalInvest);

    let liveTrees = plants, running = -totalInvest, breakEven = null;
    const rows = [];
    let c34 = 0, c56 = 0, c710 = 0;

    for (let yr = 1; yr <= 10; yr++) {
      liveTrees = Math.max(0, liveTrees * (1 - lossRate));
      const harvestKg = liveTrees * YIELD[yr - 1] * 0.8;
      const revenue = harvestKg * avgPrice;
      const net = harvestKg > 0 ? revenue - opex : 0;
      running += net;
      if (breakEven === null && running >= 0) breakEven = yr;
      rows.push({ yr, live: Math.round(liveTrees), harvestKg, revenue, net, running });
      if (yr === 3 || yr === 4) c34 += net;
      if (yr === 5 || yr === 6) c56 += net;
      if (yr >= 7) c710 += net;
    }

    const sumReturn = document.getElementById('rSumReturn');
    const sumProfit = document.getElementById('rSumProfit');
    const kpiBreak  = document.getElementById('rKpiBreak');
    const kpi5yr    = document.getElementById('rKpi5yr');
    const kpiROI    = document.getElementById('rKpiROI');
    if (sumReturn) sumReturn.textContent = fmt(Math.max(0, totalInvest + running));
    if (sumProfit) sumProfit.textContent = fmt(running);
    const beLabels = { fr: 'Année ', en: 'Year ', ye: 'Ŋkar ' };
    const bePrefix = beLabels[currentLang] || 'Year ';
    if (kpiBreak) kpiBreak.textContent = breakEven ? bePrefix + breakEven : 'N/A';
    if (kpi5yr)   kpi5yr.textContent   = fmt(rows[4].running);
    if (kpiROI)   kpiROI.textContent   = (totalInvest > 0 ? Math.round(running / totalInvest * 100) : 0) + '%';

    // Table
    const tbody = document.getElementById('rTBody');
    if (tbody) {
      tbody.innerHTML = '';
      const yLbl = { fr: 'Année ', en: 'Year ', ye: 'Ŋkar ' };
      rows.forEach(r => {
        const isBE  = r.yr === breakEven;
        const noHrv = r.harvestKg <= 0;
        const tr = document.createElement('tr');
        if (isBE) tr.className = 'bev';
        tr.innerHTML = `
          <td>${isBE ? '⭐ ' : ''}${(yLbl[currentLang]||'Year ')}${r.yr}</td>
          <td class="${noHrv ? 'mu' : ''}">${noHrv ? '—' : fmtKg(r.harvestKg)}</td>
          <td class="${noHrv ? 'mu' : ''}">${noHrv ? '—' : fmt(r.revenue)}</td>
          <td class="${r.net > 0 ? 'pos' : r.net < 0 ? 'neg' : 'mu'}">${noHrv ? '—' : fmt(r.net)}</td>
          <td class="${r.running >= 0 ? 'pos' : 'neg'}">${fmt(r.running)}</td>`;
        tbody.appendChild(tr);
      });
    }

    // Bar chart
    const bars = document.getElementById('rChartBars');
    if (bars) {
      bars.innerHTML = '<div class="zero-line"></div>';
      const maxAbs = Math.max(...rows.map(r => Math.abs(r.net)), 1);
      const maxH = 70;
      rows.forEach(r => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        const h = Math.max(2, Math.abs(r.net) / maxAbs * maxH);
        const bar = document.createElement('div');
        bar.className = 'bar-seg ' + (r.net > 0 ? 'pos' : r.net === 0 ? 'zero' : 'neg');
        bar.style.height = h + 'px';
        if (r.net < 0) { bar.style.borderRadius = '0 0 3px 3px'; bar.style.marginTop = 'auto'; }
        const lbl = document.createElement('div');
        lbl.className = 'bar-lbl';
        lbl.textContent = (r.yr === breakEven ? '⭐' : '') + 'Y' + r.yr;
        col.append(bar, lbl);
        bars.appendChild(col);
      });
    }

    // Stages
    const stageTexts = { fr: ['+', ' gagné'], en: ['+', ' earned'], ye: ['+', ''] };
    const [pfx, sfx] = stageTexts[currentLang] || stageTexts.fr;
    const noRevFr = { fr: 'Aucun revenu', en: 'No revenue', ye: 'Kàŋ mfɔʼ' };
    const noRev = noRevFr[currentLang] || noRevFr.fr;
    const s2 = document.getElementById('rS2');
    const s3 = document.getElementById('rS3');
    const s4 = document.getElementById('rS4');
    if (s2) { s2.textContent = c34 > 0 ? pfx + fmt(c34) + sfx : noRev; s2.className = 'se' + (c34 <= 0 ? ' mu' : ''); }
    if (s3) { s3.textContent = c56 > 0 ? pfx + fmt(c56) + sfx : noRev; s3.className = 'se' + (c56 <= 0 ? ' mu' : ''); }
    if (s4) { s4.textContent = c710 > 0 ? pfx + fmt(c710) + sfx : '—'; s4.className = 'se' + (c710 <= 0 ? ' mu' : ''); }
  }

  return { setCurrency, addPlants, clamp, updateSlider, updateLoss, toggleAdv, calc };
})();


/* ═══ FAQ ═══════════════════════════════════════════════════ */
function renderFaq(filter) {
  const container = document.getElementById('faqList');
  if (!container) return;
  container.innerHTML = '';

  const items = filter === 'all' ? TYNA.faq : TYNA.faq.filter(f => f.cat === filter);
  items.forEach(f => {
    const q = f.q[currentLang] || f.q.fr;
    const a = f.a[currentLang] || f.a.fr;
    const div = document.createElement('div');
    div.className = 'faq-item';
    div.setAttribute('data-cat', f.cat);
    div.innerHTML = `
      <div class="faq-hdr" onclick="toggleFaq(this)">
        <span class="faq-num">${String(f.id).padStart(2,'0')}</span>
        <span class="faq-q">${q}</span>
        <span class="faq-arrow">▾</span>
      </div>
      <div class="faq-body"><p class="faq-ans">${a}</p></div>`;
    container.appendChild(div);
  });
}

function toggleFaq(header) {
  const item = header.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-body').classList.remove('show');
  });
  if (!wasOpen) {
    item.classList.add('open');
    item.querySelector('.faq-body').classList.add('show');
  }
}

// FAQ filter tabs
document.querySelectorAll('.faq-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderFaq(tab.getAttribute('data-filter'));
  });
});


/* ═══ CHATBOT ═══════════════════════════════════════════════ */
let chatOpen = false;
let chatInitialised = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatbotPanel');
  panel.classList.toggle('show', chatOpen);
  if (chatOpen && !chatInitialised) {
    chatInitialised = true;
    initChat();
  }
}

function initChat() {
  addBotMsg(TYNA.greetings[currentLang] || TYNA.greetings.fr);
  renderSuggestions();
}

function renderSuggestions() {
  const wrap = document.getElementById('chatSuggestions');
  if (!wrap) return;
  wrap.innerHTML = '';
  const sugs = TYNA.suggestions[currentLang] || TYNA.suggestions.fr;
  sugs.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'chat-sug';
    btn.textContent = s;
    btn.addEventListener('click', () => { addUserMsg(s); processChat(s); });
    wrap.appendChild(btn);
  });
}

function addBotMsg(text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  // Convert **bold** markdown
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  div.innerHTML = `<div class="chat-bubble">${html}</div><div class="chat-time">TYNA · ${time}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMsg(text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `<div class="chat-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendChat() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addUserMsg(text);
  setTimeout(() => processChat(text), 400);
}

function processChat(query) {
  const answer = TYNA.findAnswer(query);
  setTimeout(() => {
    addBotMsg(answer || (TYNA.fallback[currentLang] || TYNA.fallback.fr));
  }, 300);
}


/* ═══ FORMS ══════════════════════════════════════════════════ */
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('nlEmail')?.value;
  if (email) {
    document.getElementById('newsletterForm').style.display = 'none';
    document.getElementById('nlSuccess').style.display = 'block';
    console.log('Newsletter signup:', email); // Replace with real API call
  }
}

function handleContact(e) {
  e.preventDefault();
  document.getElementById('cfSuccess').style.display = 'block';
  e.target.reset();
  setTimeout(() => { document.getElementById('cfSuccess').style.display = 'none'; }, 5000);
}

function handleWA(e) {
  e.preventDefault();
  const email = document.getElementById('waEmail')?.value;
  if (email) {
    e.target.reset();
    const suc = document.getElementById('waSuccess');
    if (suc) suc.style.display = 'block';
    console.log('WhatsApp signup:', email);
  }
}

function toggleWA() {
  document.getElementById('waPanel').classList.toggle('show');
}


/* ═══ GDPR ═══════════════════════════════════════════════════ */
function setGDPR(accepted) {
  localStorage.setItem('gdpr', accepted ? 'accepted' : 'rejected');
  document.getElementById('gdprWidget').classList.add('hidden');
}

// Check GDPR on load
if (localStorage.getItem('gdpr')) {
  document.getElementById('gdprWidget')?.classList.add('hidden');
}


/* ═══ INIT ══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Sync all translatable text with the default language
  setLang(currentLang);
  ROI.calc();
  ROI.updateSlider();
  ROI.updateLoss();
});

// Expose inline HTML handlers to global scope
window.ROI = ROI;
window.toggleFaq = toggleFaq;
window.toggleChat = toggleChat;
window.sendChat = sendChat;
window.handleNewsletter = handleNewsletter;
window.handleContact = handleContact;
window.handleWA = handleWA;
window.toggleWA = toggleWA;
window.setGDPR = setGDPR;
