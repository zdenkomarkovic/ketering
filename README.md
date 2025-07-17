# Tesasomi Solution - Ketering Sajt

Moderan Next.js sajt za Tesasomi Solution, firme specijalizovane za ishranu zaposlenih na terenu i u firmama.

## 🚀 O Projektu

Tesasomi Solution je firma iz Aranđelovca koja se bavi ketering uslugama za firme. Specijalizovani su za ishranu zaposlenih koji rade na terenu ili u firmama, sa dostavom u sve tri smene.

### Glavne Karakteristike

- **Obilni obroci**: 500g gotovo jelo + 150g salata + 150g hleb
- **Dostava u sve smene**: Jutarnja, popodnevna i noćna smena
- **Raznovrsni meni**: Tradicionalna srpska jela i moderne kombinacije
- **Fleksibilnost**: Prilagođavanje potrebama različitih firmi

## 🛠️ Tehnologije

- **Next.js 14** - React framework
- **Tailwind CSS** - CSS framework za stilizovanje
- **JavaScript** - Programski jezik
- **Responsive Design** - Prilagođen svim uređajima

## 📁 Struktura Projekta

```
tesasomi-ketering/
├── components/          # React komponente
│   ├── Header.js       # Navigacija i logo
│   ├── Hero.js         # Glavna hero sekcija
│   ├── Features.js     # Prednosti usluge
│   ├── MenuPreview.js  # Pregled menija
│   └── Footer.js       # Footer sa kontakt informacijama
├── src/app/            # Next.js App Router
│   ├── page.tsx        # Početna stranica
│   ├── o-nama/         # O nama stranica
│   ├── meni/           # Detaljni meni
│   ├── usluge/         # Usluge stranica
│   └── kontakt/        # Kontakt forma
└── public/             # Statički fajlovi
```

## 🚀 Pokretanje Projekta

### Preduslovi

- Node.js 18+ 
- npm ili yarn

### Instalacija

1. Klonirajte repozitorijum:
```bash
git clone <repository-url>
cd tesasomi-ketering
```

2. Instalirajte zavisnosti:
```bash
npm install
```

3. Pokrenite development server:
```bash
npm run dev
```

4. Otvorite [http://localhost:3000](http://localhost:3000) u browseru

### Build za produkciju

```bash
npm run build
npm start
```

## 📱 Stranice

### Početna Stranica
- Hero sekcija sa glavnom porukom
- Prednosti usluge
- Pregled menija
- Poziv na akciju

### O Nama
- Priča o firmi
- Specijalnost i standardi
- Lokacija i kontakt

### Meni
- Detaljni pregled svih jela
- Kategorije: Glavna jela, Salate, Sendviči
- Standardni obrok informacije

### Usluge
- Detaljan opis usluga
- Proces saradnje
- Prednosti

### Kontakt
- Kontakt forma
- Kontakt informacije
- Radno vreme
- Lokacija

## 🎨 Dizajn

- **Boje**: Orange (#ea580c) kao primarna boja
- **Font**: Geist Sans (Google Fonts)
- **Responsive**: Prilagođen za desktop, tablet i mobilne uređaje
- **Modern UI**: Čist i profesionalan dizajn

## 📞 Kontakt Informacije

**Tesasomi Solution**
- **Adresa**: Janka Kostića 26, Aranđelovac
- **Telefon**: 060 304 44 21
- **Email**: solutiontssm@gmail.com

## 📝 Meni

### Glavna Jela
- Gulaš (makarone ili pire)
- Musaka
- Punjene paprike
- Pasulj sa kobasicom
- Ćufte u sosu
- I mnoga druga tradicionalna jela

### Salate
- Pileća salata
- Cezar salata
- Mimoza salata
- Sveže salate

### Sendviči
- Sa šunkom, čajnom, kačkavaljem
- Sa zelenom salatom

## 🔧 Razvoj

### Dodavanje novih stranica

1. Kreirajte novi direktorijum u `src/app/`
2. Dodajte `page.tsx` fajl
3. Dodajte link u navigaciju (`components/Header.js`)

### Dodavanje novih komponenti

1. Kreirajte novi fajl u `components/` direktorijumu
2. Importujte komponentu gde je potrebna
3. Koristite Tailwind CSS za stilizovanje

## 📄 Licenca

Ovaj projekat je kreiran za Tesasomi Solution. Sva prava zadržana.
