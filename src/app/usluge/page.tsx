export default function KeteringZaFirme() {
  const services = [
    {
      title: "Ketering za Firme",
      description: "Specijalizovani smo za ishranu zaposlenih u firmama različitih veličina. Naša usluga je prilagođena potrebama modernog poslovnog okruženja.",
      features: [
        "Obilni obroci prilagođeni radnom okruženju",
        "Fleksibilni raspored dostave",
        "Kvalitetne namirnice i sveža hrana",
        "Prilagođavanje broju zaposlenih",
        "Profesionalno pakovanje i dostava"
      ],
      icon: "🏢"
    },
    {
      title: "Ishrana na Terenu",
      description: "Razumemo specifičnosti rada na terenu i potrebe za obilnim, energičnim obrocima koji će obezbediti produktivnost tokom celog radnog dana.",
      features: [
        "Obroci prilagođeni fizičkom radu",
        "Dostava na lokaciju rada",
        "Praktično pakovanje za teren",
        "Dugotrajna energija",
        "Prilagođavanje radnim uslovima"
      ],
      icon: "🚚"
    },
    {
      title: "Dostava u Sve Tri Smene",
      description: "Naša fleksibilnost omogućava dostavu obroka u sve tri smene - jutarnju, popodnevnu i noćnu, prilagođavajući se vašim potrebama.",
      features: [
        "Jutarnja smena (6:00 - 14:00)",
        "Popodnevna smena (14:00 - 22:00)",
        "Noćna smena (22:00 - 6:00)",
        "Tačnost dostave u dogovoreno vreme",
        "Prilagođavanje različitim rasporedima"
      ],
      icon: "🕐"
    },
    {
      title: "Obilni Obroci",
      description: "Svaki obrok je pažljivo planiran da obezbedi potrebnu energiju i nutritivne vrednosti za produktivan rad.",
      features: [
        "Gotovo jelo: 500g",
        "Salata: 150g",
        "Hleb: 150g",
        "Balansirana ishrana",
        "Raznovrsni meni"
      ],
      icon: "🍽️"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Kontakt i Konsultacija",
      description: "Kontaktirajte nas i dogovorimo detalje vaših potreba - broj zaposlenih, raspored smena, posebni zahtevi."
    },
    {
      step: "2",
      title: "Planiranje Menija",
      description: "Zajedno planiramo meni koji odgovara vašim potrebama i preferencama zaposlenih."
    },
    {
      step: "3",
      title: "Dogovor Dostave",
      description: "Utvrđujemo tačno vreme dostave i lokaciju koja vam najviše odgovara."
    },
    {
      step: "4",
      title: "Početak Saradnje",
      description: "Započinjemo sa dostavom obroka prema dogovorenom rasporedu i standardima."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ketering za firme
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kompletna rešenja za ishranu zaposlenih u vašoj firmi
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Šta nudimo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naša specijalnost je ishrana zaposlenih koji rade na terenu ili u firmama. 
              Pružamo fleksibilna rešenja koja se prilagođavaju vašim potrebama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kako radimo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jednostavan proces od prvog kontakta do redovne dostave obroka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prednosti naše usluge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Isplativost
              </h3>
              <p className="text-gray-600">
                Kvalitetni obroci po pristupačnim cenama, bez skrivenih troškova
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pouzdanost
              </h3>
              <p className="text-gray-600">
                Garantujemo tačnost dostave u dogovoreno vreme, svaki put
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kvalitet
              </h3>
              <p className="text-gray-600">
                Koristimo samo sveže, kvalitetne namirnice za pripremu obroka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Spremni za saradnju?
          </h2>
          <p className="text-xl mb-8">
            Kontaktirajte nas danas i saznajte kako možemo da pomognemo vašoj firmi
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Telefon:</strong> 060 304 44 21
            </p>
            <p className="text-lg">
              <strong>Email:</strong> solutiontssm@gmail.com
            </p>
            <p className="text-lg">
              <strong>Adresa:</strong> Janka Kostića 26, Aranđelovac
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 