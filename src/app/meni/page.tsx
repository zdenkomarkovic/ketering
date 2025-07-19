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

    

      {/* Main Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glavna Jela */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg md:mb-3 text-center">
              Glavna Jela
            </h2>
            <div className="bg-white p-6 mx-auto text-center">
     
              <div className="flex flex-col md:flex-row justify-center md:gap-6  text-gray-700">
                <div className="flex gap-1 items-center mx-auto md:mx-0">
                  <strong>Gotovo jelo:</strong><br />
                 <p>500g</p> 
                </div>
                <div className="flex gap-1 items-center mx-auto md:mx-0">
                  <strong>Salata:</strong><br />
                  <p>150g</p>
                </div>
                <div className="flex gap-1 items-center mx-auto md:mx-0">
                  <strong>Hleb:</strong><br />
                  <p>150g</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Meni se menja svakog dana
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData.glavnaJela.map((jelo, index) => (
                <div key={index} className="bg-white border  relative border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center p-1">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-0">{jelo.name}</h3>
                    </div>
                  </div>
                  <div className=" pt-0 text-center">
                    <p className="text-sm text-orange-600 font-medium">
                      Dodatak: Salata, Hleb
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src={"/images/food_14240523.png"} 
                        alt={jelo.name}
                        className="w-20  object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Obrok Salate */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Obrok Salate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuData.obrokSalate.map((salata, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center p-3">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow ">{salata.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 pt-0 text-center">
                    <div className="flex justify-center">
                      <img 
                        src={"/images/22183342_6587525.png"} 
                        alt={salata.name}
                        className="w-20 "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sveže Salate */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Sveže Salate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData.svezeSalate.map((salata, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center p-3">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow ">{salata.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 pt-0 text-center">
                    <div className="flex justify-center">
                      <img 
                        src={"/images/22183342_6587525.png"} 
                        alt={salata.name}
                        className="w-20 "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sendviči */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">
              Sendviči
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.sendvici.map((sendvic, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center p-3">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow">{sendvic.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 pt-0 text-center">
                    <p className="text-sm text-gray-500 mb-3">
                      <strong>Sastojci:</strong> {sendvic.ingredients}
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src="/images/sendvic.png" 
                        alt={sendvic.name}
                        className="w-20 "
                      />
                    </div>
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