import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Ketering sto sa hranom"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Profesionalni Ketering za Firme
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow">
            Specijalizovani smo za ishranu zaposlenih na terenu i u firmama. 
            Dostavljamo obilne, sveže obroke u unapred dogovoreno vreme za sve tri smene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
               className="bg-gradient-to-r from-red-900 via-red-800 to-red-950 bg-clip-padding text-white px-8 py-3 rounded-lg font-semibold hover:from-red-950 hover:via-red-800 hover:to-red-900 transition-colors"
            >
              Kontaktirajte nas
            </Link>
            <Link 
              href="/meni" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7b2222] hover:text-white transition-colors"
            >
              Pogledajte meni
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 