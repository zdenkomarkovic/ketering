# 🚀 SEO Optimizacija - Tesasomi Solution

## ✅ Šta je implementirano

### 1. **Meta Tagovi**
- ✅ Title tag optimizovan
- ✅ Description tag sa ključnim rečima
- ✅ Keywords tag sa 35+ ključnih reči
- ✅ Open Graph tagovi za društvene mreže
- ✅ Twitter Card tagovi
- ✅ Robots meta tagovi

### 2. **Ikonice i Favicon**
- ✅ Favicon.ico
- ✅ Apple Touch Icon (180x180)
- ✅ PNG ikonice (16x16, 32x32)
- ✅ Webmanifest fajl

### 3. **Slike za Društvene Mreže**
- ✅ OG Image (1200x630) - `og-image.jpg`
- ✅ Twitter Image (1200x630) - `twitter-image.jpg`
- ✅ Optimizovane veličine i kvalitet

### 4. **Struktuirani Podaci (JSON-LD)**
- ✅ Schema.org FoodService markup
- ✅ Lokacija, kontakt, radno vreme
- ✅ Menu link, društvene mreže

### 5. **SEO Fajlovi**
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Webmanifest

## 🎯 Ključne Reči

### Primarne:
- ketering Aranđelovac
- ketering za firme
- ishrana zaposlenih
- dostava obroka

### Sekundarne:
- ketering servis
- ketering na terenu
- ketering smene
- ketering Aranđelovac cene

## 📱 PWA Podrška

Sajt je spreman za PWA instalaciju sa:
- Webmanifest fajlom
- Ikonicama različitih veličina
- Offline podrškom (može se dodati)

## 🔧 Održavanje

### Ažuriranje Sitemap-a
```bash
# Ažuriraj datum u sitemap.xml
# Dodaj nove stranice ako se kreiraju
```

### Optimizacija Slika
```bash
npm run optimize-images
```

### Provera SEO
- Koristi Google Search Console
- Proveri PageSpeed Insights
- Testiraj struktuirane podatke

## 📊 Google Analytics (Opciono)

Dodaj Google Analytics kod u `layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🌐 Društvene Mreže

Dodaj linkove ka društvenim mrežama u Footer komponentu:
- Facebook
- Instagram
- LinkedIn

## 📈 Sledeći Koraci

1. **Google Search Console** - dodaj sajt
2. **Google My Business** - kreiraj listing
3. **Lokalni SEO** - dodaj na Google Maps
4. **Backlinkovi** - traži linkove sa lokalnih sajtova
5. **Sadržaj** - redovno dodajaj blog postove o hrani

## 🎨 Optimizacija Performansi

- Slike su optimizovane sa Sharp
- Lazy loading za slike
- Next.js optimizacije
- Tailwind CSS za brzo učitavanje

---

**Napomena:** Ažuriraj kontakt informacije i društvene mreže pre objavljivanja! 