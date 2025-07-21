export default function Features() {
  const features = [
    {
      icon: "🍽️",
      title: "Obilni Obroci",
      description:
        "Svaki obrok sadrži gotovo jelo (500g), salatu (150g) i hleb (150g) - sve što je potrebno za energičan rad.",
    },
    {
      icon: "🕐",
      title: "Dostava u Sva Tri Smena",
      description:
        "Dostavljamo obroke u unapred dogovoreno vreme, prilagođavajući se svim smenama vaše firme.",
    },
    {
      icon: "🌱",
      title: "Sveža Hrana",
      description:
        "Koristimo samo sveže, kvalitetne namirnice za pripremu ukusnih i nutritivnih obroka.",
    },
    {
      icon: "📅",
      title: "Raznovrsni Meni",
      description:
        "Svakog dana je meni različit - od tradicionalnih jela do modernih kombinacija.",
    },
    {
      icon: "🏢",
      title: "Specijalizovani za Firme",
      description:
        "Iskustvo u ishrani zaposlenih na terenu i u firmama različitih veličina.",
    },
    {
      icon: "🚚",
      title: "Pouzdana Dostava",
      description:
        "Garantujemo tačnost i pouzdanost dostave u dogovoreno vreme.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-4">
            Zašto Izabrati izabrati nas za ishranu radnika?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naša specijalnost je ishrana zaposlenih koji rade na terenu ili u
            firmama. Pružamo kompletnu rešenja za sve vaše potrebe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center h-full"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
