/* Alt sayfalar: menü, başlık, iletişim formu (ana sayfadaki betiğin hafif sürümü) */
(function () {
  var en = document.documentElement.lang === 'en';

  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var menuBtn = document.getElementById('menu-btn'), links = document.getElementById('nav-links');
  menuBtn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var form = document.getElementById('contact-form');
  if (!form) return;
  var M = en ? {
    invalid: 'Please enter your name and a valid email address.',
    consent: 'Please tick the privacy consent box to continue.',
    ok: 'Thanks, we got your message. We will reply shortly.',
    fail: 'Your message could not be sent. Please write to info@vantraventures.com or on WhatsApp.'
  } : {
    invalid: 'Lütfen adınızı ve geçerli bir e-posta adresi girin.',
    consent: 'Devam etmek için KVKK onayını işaretleyin.',
    ok: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.',
    fail: "Mesaj gönderilemedi. Lütfen info@vantraventures.com adresine ya da WhatsApp'tan yazın."
  };
  var status = document.getElementById('form-status');
  function show(msg, ok) { status.textContent = msg; status.className = 'form-status' + (ok ? ' ok' : ''); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements['ad'].value.trim(), email = form.elements['eposta'].value.trim();
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { show(M.invalid); return; }
    if (!form.elements['kvkk'].checked) { show(M.consent); return; }
    var btn = form.querySelector('button[type="submit"]'); btn.disabled = true;
    var data = new FormData(form);
    data.set('hizmet', data.getAll('hizmet').join(', '));
    data.set('replyto', email);
    data.set('sayfa', location.pathname);
    fetch(form.getAttribute('data-endpoint'), { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error();
        form.reset();
        if (window.vvTrack) vvTrack('generate_lead', { form: form.getAttribute('data-form') || 'iletisim' });
        show(M.ok, true);
      })
      .catch(function () { show(M.fail); })
      .finally(function () { btn.disabled = false; });
  });
})();
