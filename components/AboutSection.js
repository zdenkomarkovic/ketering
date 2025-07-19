import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-12 mb-12 text-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-10">
          Naša Priča
        </h2>
        
        <p className="text-gray-700 mb-8 text-lg">
          Tesasomi Solution je firma specijalizovana za ishranu zaposlenih koji rade na terenu ili u firmama. 
          Naša misija je da obezbedimo kvalitetne, obilne i ukusne obroke koji će energizovati vaše zaposlene 
          i doprineti njihovoj produktivnosti tokom radnog dana.
        </p>

        <p className="text-gray-700 mb-8 text-lg">
          Razumemo da svaka firma ima različite potrebe i rasporede rada. Zato smo fleksibilni i prilagođavamo 
          se vašim zahtevima - dostavljamo obroke u unapred dogovoreno vreme i možemo da pokrijemo sve tri smene.
        </p>

        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mt-16 mb-8">
          Naša Specijalnost
        </h3>
        
        <p className="text-gray-700 mb-8 text-lg">
          Specijalizovani smo za ishranu zaposlenih na terenu i u firmama. Naš pristup je jedinstven jer:
        </p>

        <ul className="list-disc pl-8 mb-10 text-left mx-auto w-fit text-gray-700 space-y-3 text-lg">
          <li>Razumemo specifičnosti rada na terenu i potrebe za obilnim obrocima</li>
          <li>Prilagođavamo se različitim smenama i radnim vremenima</li>
          <li>Koristimo samo sveže, kvalitetne namirnice</li>
          <li>Pripremamo tradicionalna srpska jela koja su poznata i voljena</li>
          <li>Garantujemo tačnost dostave u dogovoreno vreme</li>
        </ul>
      </div>
      <div className="md:w-2/5">
        <Image 
          src="/images/1146473_120588-OQ9G2G-318.jpg" 
          alt="Tesasomi Solution" 
          width={400} 
          height={400} 
          className=" w-full"
        />
      </div>
    </div>
  );
} 