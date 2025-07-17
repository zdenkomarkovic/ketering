import Hero from "../../components/Hero";
import Features from "../../components/Features";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import Link from "next/link";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* Ketering za firme sekcija */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Pozadinska slika */}
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Hrana pozadina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Ketering za Firme
            </h2>
            <p className="text-xl text-black font-bold max-w-3xl mx-auto">
              Profesionalno rešenje za ishranu vaših zaposlenih. Dostavljamo kvalitetne obroke 
              u sve tri smene, prilagođene potrebama vaše firme.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Dostava u sve smene</h3>
              <p className="text-gray-600">
                Jutarnja, popodnevna i noćna smena - pokrivamo sve potrebe vaših zaposlenih
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Prilagođeni meni</h3>
              <p className="text-gray-600">
                Planiranje menija u dogovoru sa vama, prema željama i potrebama
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Timski pristup</h3>
              <p className="text-gray-600">
                Posebne ponude za veće timove i fleksibilni uslovi saradnje
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/ketering-za-firme" className="inline-block bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">
              Saznajte više
            </Link>
          </div>
        </div>
      </section>

      {/* Zdravi obroci sekcija */}
      <section className="py-16 bg-gray-50 relative overflow-hidden" >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Zdravi Obroci
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vaša putanja ka zdravijem životu počinje sa našim dnevno dostavljenim obrocima. 
              5 obroka dnevno, 7 dana nedeljno, direktno na vašu adresu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Sveže svakog jutra</h3>
              <p className="text-gray-600">
                Svi obroci se spremaju ujutru istog dana kada se i dostavljaju
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">🧽</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Bez prljavog posudja</h3>
              <p className="text-gray-600">
                Činije koje se mogu podgrejati u mikrotalasnoj - nema pranja sudova
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Portabilnost</h3>
              <p className="text-gray-600">
                Uz escajg i činije koje možete poneti bilo gde sa sobom
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/zdravi-obroci" className="inline-block bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">
              Saznajte više
            </Link>
          </div>
        </div>
      </section>
<BackgroundImage/>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Pozadinska slika */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/3864058_1981210-01.svg" 
            alt="FAQ pozadina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Najčešća pitanja
            </h2>
            <p className="text-xl text-gray-600">
              Odgovori na najčešća pitanja o našim uslugama keteringa za firme
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Koje vrste obroka nudite?</AccordionTrigger>
              <AccordionContent>
                Nudimo raznovrsna kuvana jela, obrok salate, sveže salate i sendviče, prilagođene potrebama zaposlenih na terenu i u firmama.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Da li je moguća dostava u više smena?</AccordionTrigger>
              <AccordionContent>
                Da, vršimo dostavu u sve tri smene – jutarnju, popodnevnu i noćnu, prema dogovorenom rasporedu vaše firme.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Da li možemo da biramo meni?</AccordionTrigger>
              <AccordionContent>
                Naravno! Meni se planira u dogovoru sa vama, prema željama i potrebama vaših zaposlenih.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Koja je minimalna količina za porudžbinu?</AccordionTrigger>
              <AccordionContent>
                Minimalna količina zavisi od dogovora, ali najčešće je to 10 obroka po isporuci.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Kako se vrši plaćanje?</AccordionTrigger>
              <AccordionContent>
                Plaćanje se vrši po fakturi, na nedeljnom ili mesečnom nivou, u skladu sa dogovorom.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Koliko obroka dnevno dostavljate za zdrave obroke?</AccordionTrigger>
              <AccordionContent>
                Dostavljamo 5 obroka dnevno: doručak, užina, ručak, užina i večera. Svi obroci se spremaju ujutru istog dana i dostavljaju se do vaših vrata.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Da li možete prilagoditi meni prema mojim nutritivnim potrebama?</AccordionTrigger>
              <AccordionContent>
                Da, svaki meni se planira individualno prema vašim ciljevima - bilo da je reč o gubitku težine, održavanju forme ili povećanju mišićne mase. Naši nutricionisti će vam pomoći da postignete željene rezultate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#7b2222] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#a83232] hover:via-[#3b0a0a] hover:to-[#7b2222] transition-colors">Kako se čuvaju obroci i da li se mogu podgrejati?</AccordionTrigger>
              <AccordionContent>
                Sve obroke dostavljamo u činijama koje se mogu podgrejati u mikrotalasnoj. Obroci se mogu čuvati u frižideru do 24 sata, a preporučujemo da se konzumiraju istog dana za najbolji ukus i kvalitet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
