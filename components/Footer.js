import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-center md:items-start justify-center md:justify-start">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#d87f81] via-[#a83232] to-[#d87f81] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Tesasomi Solution
            </h3>
            <p className="text-gray-300 mb-4">
              Specijalizovani smo za ishranu zaposlenih na terenu i u firmama. 
              Pružamo kvalitetne ketering usluge sa dostavom u sve tri smene.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-300">
              <div className="space-y-2 text-gray-300">
                <p><strong>Adresa:</strong> Janka Kostića 26, Aranđelovac</p>
                <p><strong>Telefon:</strong> 060 304 44 21</p>
                <p><strong>Email:</strong> solutiontssm@gmail.com</p>
              </div>
              <Image 
                src="/images/71906441_9756133.png" 
                alt="Tesasomi Solution Logo" 
                width={170} 
                height={80} 
                className="mx-auto md:ml-4"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Brzi Linkovi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/o-nama" className="text-gray-300 hover:text-orange-400 transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/meni" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Meni
                </Link>
              </li>
              <li>
                <Link href="/ketering-za-firme" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Ketering za firme
                </Link>
              </li>
              <li>
                <Link href="/zdravi-obroci" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Zdravi obroci
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Usluge</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Ketering za firme</li>
              <li>• Ishrana na terenu</li>
              <li>• Dostava u sve smene</li>
              <li>• Obilni obroci</li>
              <li>• Raznovrsni meni</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center  gap-2  border-t border-gray-800 mt-3 pt-4 text-center text-gray-400">
          <p className="">
          &copy; 2025 Tesasomi Solution. Sva prava zadržana.
          </p> 
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            Izrada sajta:{" "}
            <span className="font-bold hover:text-white"> ManikamWebSolutions</span>
          </a>{" "}
        </div>

      </div>
    </footer>
  );
} 