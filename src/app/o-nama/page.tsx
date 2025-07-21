import AboutSection from "../../../components/AboutSection";

export default function ONama() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mi dostavljamo hranu radnicima
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Vaš pouzdani partner za kvalitetnu ishranu zaposlenih
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <AboutSection />
          </div>
        </div>
      </section>

      {/* SEO Content Section with Background Image */}
      <section
        className="relative text-center text-black py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/manu.jpg)" }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-10 text-center">
              Ketering Aranđelovac - Vaš Pouzdani Partner
            </h2>

            <p className="mb-8 text-lg">
              Naša firma je vodeća firma za{" "}
              <strong>ketering u Aranđelovcu</strong> i okolinu, specijalizovana
              za ishranu zaposlenih koji rade na terenu ili u firmama. Naša
              misija je da obezbedimo kvalitetne, obilne i ukusne obroke koji će
              energizovati vaše zaposlene i doprineti njihovoj produktivnosti
              tokom radnog dana. Kao pouzdani{" "}
              <strong>ketering servis Aranđelovac</strong>, posvećeni smo
              kvalitetu i zadovoljstvu naših klijenata.
            </p>

            <p className=" mb-8 text-lg">
              Razumemo da svaka firma ima različite potrebe i rasporede rada.
              Zato smo fleksibilni i prilagođavamo se vašim zahtevima -
              dostavljamo obroke u unapred dogovoreno vreme i možemo da
              pokrijemo sve tri smene. Naš{" "}
              <strong>ketering za firme Aranđelovac</strong> pokriva široku
              geografsku oblast i prilagođava se različitim radnim okruženjima.
            </p>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mt-16 mb-8">
              Zašto Izabrati Naš Ketering Aranđelovac?
            </h3>

            <p className="mb-8 text-lg">
              Kao <strong>profesionalni ketering Aranđelovac</strong>, nudimo
              kompletnu uslugu ishrane zaposlenih koja uključuje:
            </p>

            <ul className="list-disc pl-8 mb-10  text-left space-y-3 mx-auto w-fit text-lg">
              <li>
                <strong>Ketering za firme Aranđelovac</strong> - prilagođene
                menije za različite vrste poslova
              </li>
              <li>
                <strong>Ishrana zaposlenih na terenu</strong> - obilni obroci za
                fizički zahtevne poslove
              </li>
              <li>
                <strong>Dostava u sve tri smene</strong> - rano jutro, popodne i
                noćne smene
              </li>
              <li>
                <strong>Fleksibilni rasporedi</strong> - prilagođavamo se vašim
                radnim vremenima
              </li>
              <li>
                <strong>Kvalitetne namirnice</strong> - koristimo samo sveže i
                proverene proizvode
              </li>
              <li>
                <strong>Povoljne cene</strong> - transparentno cenovno rješenje
                bez skrivenih troškova
              </li>
            </ul>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mt-16 mb-8">
              Naš Meni i Kvalitet
            </h3>

            <p className="mb-8 text-lg">
              Naš <strong>ketering meni Aranđelovac</strong> uključuje
              tradicionalna srpska jela poput gulaša, musake, punjenih paprika,
              pasulja sa kobasicom i mnogih drugih ukusnih obroka. Svaki obrok
              je pažljivo pripremljen sa svežim namirnicama i prilagođen
              potrebama zaposlenih koji rade u različitim uslovima.
            </p>

            <p className=" mb-8 text-lg">
              Kao <strong>pouzdani ketering Aranđelovac</strong>, garantujemo da
              će vaši zaposleni dobiti obilne, ukusne i nutritivne obroke koji
              će im dati energiju za produktivan rad. Naša iskustva u oblasti
              <strong>ishrane zaposlenih</strong> čine nas idealnim partnerom za
              sve vrste firmi i organizacija.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
