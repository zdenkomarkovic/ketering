"use client";

import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    ime: "",
    firma: "",
    email: "",
    telefon: "",
    brojZaposlenih: "",
    poruka: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovde bi se implementirala logika za slanje email-a
    alert("Hvala vam na poruci! Kontaktiraćemo vas uskoro.");
    setFormData({
      ime: "",
      firma: "",
      email: "",
      telefon: "",
      brojZaposlenih: "",
      poruka: "",
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b2222] via-[#a83232] to-[#3b0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktirajte Nas
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Spremni smo da odgovorimo na sva vaša pitanja i dogovorimo saradnju
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-8">
                Pošaljite Nam Poruku
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="ime"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      id="ime"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firma"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Naziv firme *
                    </label>
                    <input
                      type="text"
                      id="firma"
                      name="firma"
                      value={formData.firma}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email adresa *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="brojZaposlenih"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Broj zaposlenih koji treba da se hrane
                  </label>
                  <select
                    id="brojZaposlenih"
                    name="brojZaposlenih"
                    value={formData.brojZaposlenih}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Izaberite broj zaposlenih</option>
                    <option value="1-10">1-10 zaposlenih</option>
                    <option value="11-25">11-25 zaposlenih</option>
                    <option value="26-50">26-50 zaposlenih</option>
                    <option value="51-100">51-100 zaposlenih</option>
                    <option value="100+">Preko 100 zaposlenih</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="poruka"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Poruka
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    value={formData.poruka}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Opišite vaše potrebe, raspored smena, posebne zahteve..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-900 via-red-800 to-red-950 bg-clip-padding text-white px-8 py-3 rounded-lg font-semibold hover:from-red-950 hover:via-red-800 hover:to-red-900 transition-colors"
                >
                  Pošaljite Poruku
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow-lg mb-8">
                Kontakt Informacije
              </h2>

              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-4">
                    Tesasomi Solution
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Adresa:</strong>
                      <br />
                      Janka Katića 26
                      <br />
                      Aranđelovac
                    </p>
                    <p>
                      <strong>Telefon:</strong>
                      <br />
                      <a
                        href="tel:0603044421"
                        className="text-orange-600 hover:text-orange-700"
                      >
                        060 304 44 21
                      </a>
                    </p>
                    <p>
                      <strong>Email:</strong>
                      <br />
                      <a
                        href="mailto:solutiontssm@gmail.com"
                        className="text-orange-600 hover:text-orange-700"
                      >
                        solutiontssm@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-4 font-bold">
                    * Dostava obroka se vrši u sve tri smene prema dogovoru
                  </p>
                  </div>
                </div>


                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3b0a0a] via-[#a83232] to-[#8c282a] bg-clip-text text-transparent drop-shadow mb-4">
                    Brzi Kontakt
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Za hitne upite ili dodatne informacije, slobodno nas
                    pozovite:
                  </p>
                  <a
                    href="tel:0603044421"
                    className="inline-block bg-gradient-to-r from-red-900 via-red-800 to-red-950 bg-clip-padding text-white px-6 py-3 rounded-lg font-semibold hover:from-red-950 hover:via-red-800 hover:to-red-900 transition-colors"
                  >
                    Pozovite 060 304 44 21
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-80 mb-12">
     
 

      
   
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.919060346538!2d20.545829993735627!3d44.3123134270297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574d37fd5c14fd%3A0xc6e093b2b0fbdad4!2z0IjQsNC90LrQsCDQmtCw0YLQuNGb0LAgMjYsINCQ0YDQsNC90ZLQtdC70L7QstCw0YY!5e0!3m2!1ssr!2srs!4v1752878333165!5m2!1ssr!2srs" width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "0.5rem",
                width: "100%",
                height: "100%",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    
      </section>
    </div>
  );
}
