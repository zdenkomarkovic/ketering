"use client";
import { useRef, useEffect, useState } from "react";


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

  const secondRowRef = useRef(null);
  const [secondRowVisible, setSecondRowVisible] = useState(false);

  useEffect(() => {
    if (!secondRowRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSecondRowVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(secondRowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ketering za firme
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kompletna rešenja za ishranu zaposlenih u vašoj firmi
          </p>
        </div>
      </section>

      {/* Background Image Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/720633_142.jpg')",
          minHeight: "100vh"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          {/* Services Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-4">
                  Šta nudimo
                </h2>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Naša specijalnost je ishrana zaposlenih koji rade na terenu ili u firmama. 
                  Pružamo fleksibilna rešenja koja se prilagođavaju vašim potrebama.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  // Prvi red (0,1) animira odmah, drugi red (2,3) tek kad je vidljiv
                  const isSecondRow = index >= 2;
                  const animate = !isSecondRow || secondRowVisible;
                  return (
                    <div
                      key={index}
                      ref={index === 2 ? secondRowRef : null}
                      className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center
                        ${animate ? 'opacity-0 translate-y-8 animate-fade-in-up' : 'opacity-0'}
                      `}
                      style={animate ? { animationDelay: `${index * 120}ms`, animationFillMode: 'forwards' } : {}}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mx-auto w-fit">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-orange-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Kako radimo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jednostavan proces od prvog kontakta do redovne dostave obroka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-3">
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Prednosti naše usluge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-3">
                Isplativost
              </h3>
              <p className="text-white">
                Kvalitetni obroci po pristupačnim cenama, bez skrivenih troškova
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-3">
                Pouzdanost
              </h3>
              <p className="text-white">
                Garantujemo tačnost dostave u dogovoreno vreme, svaki put
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-3">
                Kvalitet
              </h3>
              <p className="text-white">
                Koristimo samo sveže, kvalitetne namirnice za pripremu obroka
              </p>
            </div>
          </div>
        </div>
        
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-14 my-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Spremni za saradnju?
          </h2>
          <p className="text-xl mb-8">
            Kontaktirajte nas danas i saznajte kako možemo da pomognemo vašoj firmi
          </p>
          <div className="space-y-4">
            <a href="tel:0603044421" className="inline-block mt-4 px-8 py-3 rounded-lg bg-white font-semibold shadow-lg border border-[#a83232] hover:bg-gray-100 transition-colors">
              <span className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent">
                Pozovite nas
              </span>
            </a>
          </div>
        </div>
      </section>
      </section>

        </div>
      </div>
    </div>
  );
} 