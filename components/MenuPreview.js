import Link from 'next/link';

export default function MenuPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow-lg mb-12 text-center">
          Meni
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Glavna jela */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow mb-4 text-center">
              Glavna jela
            </h3>
            <div className="text-gray-800 text-sm flex-1">
              Gulaš (makarone ili pire)<br/>
              Musaka<br/>
              Punjene paprike<br/>
              Punjene tikvice<br/>
              Pasulj sa kobasicom<br/>
              Pasulj prebranac<br/>
              Ćufte u sosu (makarone ili pire)<br/>
              Faširane i pire<br/>
              Grašak sa mesom<br/>
              Boranija sa mesom<br/>
              Sataras<br/>
              Krompir čorba sa mesom<br/>
              Batak i pire<br/>
              Makarone sa sirom<br/>
              Sendviči sa (šunkom, čajnom, zelenom salatom, kačkavaljem itd)
            </div>
          </div>
          {/* Obrok salate */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow mb-4 text-center">
              Obrok salate
            </h3>
            <div className="text-gray-800 text-sm flex-1">
              Pileća salata<br/>
              Cezar salata<br/>
              Mimoza salata
            </div>
          </div>
          {/* Sveže salate */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#fff] bg-clip-text text-transparent drop-shadow mb-4 text-center">
              Sveže salate
            </h3>
            <div className="text-gray-800 text-sm flex-1">
              Kupus<br/>
              Paradajz<br/>
              Krastavci<br/>
              Sva sezonska
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 