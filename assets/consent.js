/* Çerez onayı + Google Analytics 4 (KVKK: analiz çerezleri yalnızca açık onayla yüklenir) */
(function () {
  var GA_ID = 'G-4JTQPJCKBL'; // GA4 Ölçüm Kimliği, ör. 'G-XXXXXXXXXX'. Boşken bant görünmez, hiçbir şey yüklenmez.
  if (!GA_ID) return;

  var en = document.documentElement.lang === 'en';
  var T = en ? {
    text: 'We use analytics cookies to understand how the site is used and to measure our ads. They are only enabled with your consent.',
    policy: 'Cookie Policy', accept: 'Accept', reject: 'Reject', settings: 'Cookie settings', href: '../kvkk.html#cerez'
  } : {
    text: 'Siteyi nasıl kullandığınızı anlamak ve reklamlarımızı ölçmek için analiz çerezleri kullanıyoruz. Bu çerezler yalnızca onayınızla etkinleşir.',
    policy: 'Çerez Politikası', accept: 'Kabul et', reject: 'Reddet', settings: 'Çerez ayarları', href: 'kvkk.html#cerez'
  };
  var KEY = 'vv-consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function load() {
    if (window.__vvGa) return;
    window.__vvGa = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
    gtag('js', new Date());
    gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  window.vvTrack = function (name, params) { if (window.__vvGa) gtag('event', name, params || {}); };

  /* telefon, WhatsApp ve e-posta tıklamaları */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href');
    if (/^tel:/.test(h)) vvTrack('contact_click', { method: 'phone' });
    else if (/wa\.me\//.test(h)) vvTrack('contact_click', { method: 'whatsapp' });
    else if (/^mailto:/.test(h)) vvTrack('contact_click', { method: 'email' });
  });

  var css = '.vv-cc{position:fixed;left:16px;bottom:16px;z-index:9999;max-width:420px;padding:18px 20px;background:#111;color:#EDEBE6;border:1px solid rgba(237,235,230,.14);border-radius:14px;box-shadow:0 30px 60px -20px rgba(0,0,0,.8);font:14px/1.5 Geist,Inter,system-ui,sans-serif}' +
    '.vv-cc p{margin:0 0 14px;color:#C9C7C2}.vv-cc a{color:#EDEBE6;text-decoration:underline;text-underline-offset:3px}' +
    '.vv-cc .b{display:flex;gap:8px}.vv-cc button{flex:1;padding:10px 14px;border-radius:999px;font-family:inherit;font-size:14px;font-weight:500;line-height:1;cursor:pointer;border:1px solid rgba(237,235,230,.3);background:transparent;color:#EDEBE6}' +
    '.vv-cc button.ok{background:#EDEBE6;color:#0B0B0B;border-color:#EDEBE6}' +
    '@media (max-width:480px){.vv-cc{left:12px;right:12px;bottom:12px;max-width:none}}';

  function banner() {
    if (document.querySelector('.vv-cc')) return;
    if (!document.getElementById('vv-cc-css')) {
      var st = document.createElement('style'); st.id = 'vv-cc-css'; st.textContent = css; document.head.appendChild(st);
    }
    var d = document.createElement('div');
    d.className = 'vv-cc'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', T.settings);
    d.innerHTML = '<p>' + T.text + ' <a href="' + T.href + '">' + T.policy + '</a></p>' +
      '<div class="b"><button type="button" class="no">' + T.reject + '</button><button type="button" class="ok">' + T.accept + '</button></div>';
    d.querySelector('.ok').onclick = function () { set('granted'); d.remove(); load(); };
    d.querySelector('.no').onclick = function () {
      var was = get() === 'granted';
      set('denied'); d.remove();
      if (was) location.reload();
    };
    document.body.appendChild(d);
  }

  /* footer'daki Çerez Politikası linkinin altına "Çerez ayarları" */
  function settingsLink() {
    var pol = document.querySelector('footer a[href$="kvkk.html#cerez"]');
    if (!pol || !pol.closest('li')) return;
    var li = document.createElement('li'), a = document.createElement('a');
    a.href = '#'; a.textContent = T.settings;
    a.onclick = function (e) { e.preventDefault(); banner(); };
    li.appendChild(a); pol.closest('li').after(li);
  }

  function init() {
    settingsLink();
    var c = get();
    if (c === 'granted') load();
    else if (c !== 'denied') banner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
