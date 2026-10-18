# Ajans web sitesi (taslak v1)

Statik site, derleme gerekmez. Dosyaları herhangi bir statik hostinge yükleyin (Cloudflare Pages, Netlify, Vercel, cPanel).

## Dosyalar
- `index.html` — ana sayfa (TR)
- `kvkk.html` — KVKK aydınlatma metni, gizlilik ve çerez politikası
- `robots.txt`, `sitemap.xml` — arama motoru dosyaları

## Yayına almadan önce değişecekler
| Yer tutucu | Nerede | Ne olacak |
|---|---|---|
| `ornekdomain.com` | index.html, kvkk.html, robots.txt, sitemap.xml | Gerçek domain |
| `[ŞİRKET UNVANI]`, `[Tam adres]` | index.html altbilgi, kvkk.html | Şirket unvanı ve adres |
| `href="#"` "Canlı ↗" | index.html Projeler | Canlı proje linkleri |
| `data-endpoint=""` | index.html form | Form servisi URL'si (Formspree / Web3Forms) |
| `en/` | — | İngilizce sürüm (sonraki adım) |

## Notlar
- Hukuk ve sağlık sektörü metinleri genel tutuldu; KVKK metni bir avukata kontrol ettirilmeli.
- Google Analytics/Ads eklenirse çerez onay paneli şart.
- Fontlar şimdilik Google Fonts'tan yükleniyor; yayında yerel (self-host) yüklemek KVKK/GDPR açısından daha temiz.
- UK Ltd kullanılırsa altbilgiye şirket adı, Companies House numarası ve kayıtlı adres eklenmeli; gizlilik metnine UK GDPR eklenmeli.
