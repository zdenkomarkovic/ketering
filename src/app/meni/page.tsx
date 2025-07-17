export default function Meni() {
  const menuData = {
    glavnaJela: [
      {
        name: "Gulaš",
        description: "Tradicionalni gulaš sa komadima mesa",
        sides: "Salata",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Musaka",
        description: "Slojevita musaka sa krompirom i mlevenim mesom",
        sides: "Sveža salata",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Punjene paprike",
        description: "Paprike punjene mlevenim mesom i pirinčem",
        sides: "Pire krompir",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Punjene tikvice",
        description: "Tikvice punjene mlevenim mesom",
        sides: "Pire krompir",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Pasulj sa kobasicom",
        description: "Pasulj sa ukusnom kobasicom i povrćem",
        sides: "Salata",
        bread: "Svež hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Pasulj prebranac",
        description: "Tradicionalni prebranac sa lukom",
        sides: "Salata",
        bread: "Svež hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Ćufte u sosu",
        description: "Ćufte u ukusnom sosu",
        sides: "Makarone ili pire",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Fasirane i pire",
        description: "Fasirane šnicle sa pire krompirom",
        sides: "Sveža salata",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Grašak sa mesom",
        description: "Grašak sa komadima mesa",
        sides: "Pire krompir",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Boranija sa mesom",
        description: "Boranija sa komadima mesa",
        sides: "Pire krompir",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Sataraš",
        description: "Tradicionalni sataraš sa povrćem",
        sides: "Salata",
        bread: "Svež hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Krompir čorba sa mesom",
        description: "Čorba od krompira sa komadima mesa",
        sides: "Salata",
        bread: "Svež hleb",
        category: "Čorbe",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Batak i pire",
        description: "Batak sa pire krompirom",
        sides: "Sveža salata",
        bread: "Hleb",
        category: "Tradicionalno",
        image: "/images/720633_14 (2).jpg"
      },
      {
        name: "Makarone sa sirom",
        description: "Makarone sa sirom i začinima",
        sides: "Sveža salata",
        bread: "Hleb",
        category: "Vegetarijansko",
        image: "/images/720633_14 (2).jpg"
      }
    ],
    obrokSalate: [
      {
        name: "Pileća salata",
        description: "Salata sa pilećim mesom, povrćem i majonezom",
        ingredients: "Pileće meso, krompir, šargarepa, majonez",
        image: "/images/obroksalata.jpg"
      },
      {
        name: "Cezar salata",
        description: "Klasična Cezar salata sa parmezanom",
        ingredients: "Zelena salata, parmezan, krutoni, Cezar sos",
        image: "/images/obroksalata.jpg"
      },
      {
        name: "Mimoza salata",
        description: "Salata sa ribom i povrćem",
        ingredients: "Riba, krompir, šargarepa, majonez",
        image: "/images/obroksalata.jpg"
      }
    ],
    svezeSalate: [
      {
        name: "Kupus",
        description: "Svež kupus sa začinima",
        season: "Zima",
        image: "/images/salate.jpg"
      },
      {
        name: "Paradajz",
        description: "Svež paradajz sa lukom",
        season: "Leto",
        image: "/images/salate.jpg"
      },
      {
        name: "Krastavci",
        description: "Sveži krastavci sa začinima",
        season: "Leto",
        image: "/images/salate.jpg"
      },
      {
        name: "Sezonska povrća",
        description: "Različita povrća u zavisnosti od sezone",
        season: "Sve sezone",
        image: "/images/salate.jpg"
      }
    ],
    sendvici: [
      {
        name: "Sendvič sa šunkom",
        description: "Sendvič sa šunkom i sirom",
        ingredients: "Hleb, šunka, zelena salata, kačkavalj"
      },
      {
        name: "Sendvič sa čajnom",
        description: "Sendvič sa čajnom i povrćem",
        ingredients: "Hleb, čajna, zelena salata, kačkavalj"
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Naš Meni
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Raznovrsni meni sa tradicionalnim srpskim jelima i modernim kombinacijama
          </p>
        </div>
      </section>

      {/* Menu Info */}
      <section className="py-8 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-4">
                Standardni Obrok
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <strong>Gotovo jelo:</strong><br />
                  500g
                </div>
                <div>
                  <strong>Salata:</strong><br />
                  150g
                </div>
                <div>
                  <strong>Hleb:</strong><br />
                  150g
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Meni se menja svakog dana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glavna Jela */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Glavna Jela
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData.glavnaJela.map((jelo, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 p-3">
                    <img 
                      src={jelo.image} 
                      alt={jelo.name}
                      className="w-15 rounded-full object-cover border border-orange-200"
                    />
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-1">{jelo.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 pt-0">
                    <p className="text-sm text-orange-600 font-medium">
                      Dodatak: Salata, Hleb
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Obrok Salate */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Obrok Salate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuData.obrokSalate.map((salata, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 p-3">
                    <img 
                      src={salata.image} 
                      alt={salata.name}
                      className="w-20 rounded-full object-cover border border-orange-200"
                    />
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-1">{salata.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sveže Salate */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Sveže Salate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData.svezeSalate.map((salata, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 p-3">
                    <img 
                      src={salata.image} 
                      alt={salata.name}
                      className="w-20 rounded-full object-cover border border-orange-200"
                    />
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-1">{salata.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sendviči */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Sendviči
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.sendvici.map((sendvic, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 p-3">
                    <img 
                      src="/images/18336538_pqcg_79mw_210608.jpg" 
                      alt={sendvic.name}
                      className="w-20 rounded-full border border-orange-200"
                    />
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-1">{sendvic.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 pt-0">
                    <p className="text-sm text-gray-500">
                      <strong>Sastojci:</strong> {sendvic.ingredients}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-14 my-10 w-full text-center">
        <h3 className="text-2xl font-bold mb-4">
          Zanima vas naš meni?
        </h3>
        <p className="text-xl mb-8">
          Kontaktirajte nas za više informacija o cenama i dostavi
        </p>
        <a href="tel:0603044421" className="inline-block px-8 py-3 rounded-lg bg-white font-semibold shadow-lg border border-[#a83232] hover:bg-gray-100 transition-colors">
          <span className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent">
            Pozovite nas
          </span>
        </a>
      </div>
    </div>
  );
} 