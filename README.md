# Vantra Ventures web sitesi

Statik site, derleme gerekmez. Dosyaları herhangi bir statik hostinge yükleyin (Cloudflare Pages, Netlify, Vercel, cPanel).

## Dosyalar
- `index.html` — ana sayfa (TR, varsayılan)
- `en/index.html` — İngilizce sürüm (sağ üstteki TR / EN düğmesi)
- `kvkk.html` — KVKK aydınlatma metni, gizlilik ve çerez politikası
- `robots.txt`, `sitemap.xml` — arama motoru dosyaları

## Yayına almadan önce değişecekler
| Yer tutucu | Nerede | Ne olacak |
|---|---|---|
| `[ŞİRKET UNVANI]`, `[Tam adres]` | index.html altbilgi, kvkk.html | Şirket unvanı ve adres |
| `data-endpoint=""` | index.html form | Form servisi URL'si (Formspree / Web3Forms) |


## Notlar
- Hukuk ve sağlık sektörü metinleri genel tutuldu; KVKK metni bir avukata kontrol ettirilmeli.
- Google Analytics/Ads eklenirse çerez onay paneli şart.
- Fontlar şimdilik Google Fonts'tan yükleniyor; yayında yerel (self-host) yüklemek KVKK/GDPR açısından daha temiz.
- UK Ltd kullanılırsa altbilgiye şirket adı, Companies House numarası ve kayıtlı adres eklenmeli; gizlilik metnine UK GDPR eklenmeli.
