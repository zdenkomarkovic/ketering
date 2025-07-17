import React from 'react';

export default function ZdraviObroci() {
  return (
    <div className="min-h-screen relative" style={{
      backgroundImage: `url('/images/3864058_1981210-01.svg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay za bolju čitljivost */}
      <div className="absolute inset-0 bg-white/90 z-10"></div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Zdravi Obroci
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Vaša putanja ka zdravijem životu počinje sa našim dnevno dostavljenim obrocima
          </p>
        </div>
      </section>

      {/* Glavna sekcija */}
      <section className="py-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg">
              Vaša Svakodnevna Podrška za Zdravo Ishranu
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Svakog prepodneva na Vašu adresu, do vrata stana, dostavljamo Vam obroke za ceo dan. 
              Naši stručni kuvari pripremaju svaki obrok sa pažljivo odabranim sastojcima, 
              osiguravajući da svaki zalogaj bude ukusan i nutritivan.
            </p>
          </div>

          {/* Prednosti */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Sveže i Svakodnevno</h3>
              <p className="text-gray-600">
                Svi obroci se spremaju ujutru istog dana kada se i dostavljaju. 
                Nikada nećete jesti hranu koja je spremljena juče.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Bez Prljavog Posudja</h3>
              <p className="text-gray-600">
                Sve obroke dostavljamo u činijama koje se mogu podgrejati u mikrotalasnoj. 
                Nema pranja sudova - samo uživanje u ukusnoj hrani.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 6h6v1H9V6zm10 13H5V9h14v10z"/>
                    <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 2c2.21 0 4 1.79 4 4v2H8v-2c0-2.21 1.79-4 4-4z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-spin"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Portabilnost</h3>
              <p className="text-gray-600">
                Uz escajg i činije koje možete poneti bilo gde sa sobom, 
                nikada nije bilo lakše hraniti se zdravo.
              </p>
            </div>
          </div>

          {/* Detaljniji opis */}
          <div className="bg-gradient-to-r from-red-50 to-red-50 p-8 rounded-lg mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg">
              Obroci Koji Odgovaraju Vašim Ciljevima
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Zato smo mi mislili na Vas i obezbedili Vam dostavu 5 obroka dnevno, 7 dana nedeljno. 
                  Naši kuvari nemaju odmora ni nedeljom, jer smo svesni da danas mnogo ljudi ne želi 
                  da svoj slobodan dan provede spremajući hranu.
                </p>
                <p className="text-lg text-gray-700">
                  Svesni smo da današnji način života ostavlja sve manje vremena za pripremu hrane. 
                  Koliko god bili odlučni da počnete zdravo da se hranite, spremanje 5 zdravih obroka dnevno 
                  zahteva mnogo vremena - od nabavke namirnica, pripreme hrane, do pranja sudova.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Danas kada se živi brže nego ikada, ovakav način pripreme obroka često nije moguć i to je 
                  jedan od glavnih razloga zbog kojeg ljudi ne uspevaju da istraju u ovoj odluci.
                </p>
                <p className="text-lg text-gray-700">
                  Naša misija je da Vam omogućimo da se hranite zdravo bez žrtvovanja vremena i energije. 
                  Svaki obrok je pažljivo planiran da obezbedi optimalnu ravnotežu proteina, ugljenih hidrata 
                  i zdravih masti, prilagođen Vašim potrebama i ciljevima.
                </p>
              </div>
            </div>
          </div>

          {/* Struktura obroka */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg">
              Vaša Dnevna Struktura Obrazovanja
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">Doručak</h4>
                <p className="text-sm text-gray-600">Energetski bogat početak dana</p>
              </div>
              <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">Užina</h4>
                <p className="text-sm text-gray-600">Laki obrok za održavanje energije</p>
              </div>
              <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">Ručak</h4>
                <p className="text-sm text-gray-600">Glavni obrok sa kompletnim nutritivnim profilom</p>
              </div>
              <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">Užina</h4>
                <p className="text-sm text-gray-600">Popodnevni boost energije</p>
              </div>
              <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">Večera</h4>
                <p className="text-sm text-gray-600">Laki obrok za opuštanje</p>
              </div>
            </div>
          </div>

        </div>
        <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-16 mb-6 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Spremni da Promenite Svoj Način Ishrane?
          </h3>
          <p className="text-xl mb-6">
            Pridružite se stotinama zadovoljnih klijenata koji su već otkrili 
            prednosti našeg sistema zdravih obroka.
          </p>
          <a href="tel:0603044421" className="inline-block px-8 py-3 rounded-lg bg-white font-semibold shadow-lg border border-[#a83232] hover:bg-gray-100 transition-colors">
            <span className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent">
              Pozovite nas
            </span>
          </a>
        </div>
      </section>
      </section>

      {/* CTA sekcija - puna širina */}
     
    </div>
  );
} 