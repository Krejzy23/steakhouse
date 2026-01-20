import { HiPhone, HiEnvelope, HiMapPin, HiKey } from "react-icons/hi2";

const Contact = () => {
  return (
    <main className="background-image">
      {/* TITLE */}
      <div className="pt-24 pb-10 text-center">
        <div className="flex items-center justify-center">
          <div className=" bg-gray-50">
            <div className="border-6 border-yellow-900/10 p-5">
              <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest">
                Kontakty
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-5">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* LEFT – CONTENT */}
          <div className="space-y-16 text-sm sm:text-base">
            <div className="border-t font-[circular-web] border-black/30 pt-10">
              <div className="p-10 bg-white">
                <h3 className="uppercase tracking-widest text-black/90 text-sm mb-4">
                  Dostupnost
                </h3>
                <p className="text-black/60 leading-relaxed max-w-xl">
                  Restaurace je snadno dostupná{" "}
                  <strong className="font-medium">
                    městskou hromadnou dopravou
                  </strong>
                  . V blízkosti se nachází zastávky{" "}
                  <strong className="font-medium">tramvají i autobusů</strong>.
                  Parkování je možné v přilehlých ulicích v rámci{" "}
                  <strong className="font-medium">modrých zón</strong> nebo 3min
                  pěšky od nákupího centra Flóra.
                </p>
                <h4 className="text-black/60">
                  Rezervace příjímáme výhradně <strong className="font-medium">TELEFONICKY</strong>.
                </h4>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="relative space-y-10 bg-white p-10">
              {/* TOP LEFT CORNER */}
              <div className="pointer-events-none absolute top-5 left-5 h-16 w-16 border-l border-t border-black/20" />

              {/* BOTTOM RIGHT CORNER */}
              <div className="pointer-events-none absolute -bottom-5 right-5 h-16 w-16 border-r border-b border-black/20" />
              {/* PHONE  AND EMAIL*/}
              <div className="flex flex-row items-center justify-around">
                <div className="flex gap-2">
                  <HiPhone className="h-4 w-4 md:w-6 md:h-6 text-black/50 mt-1" />
                  <div className="">
                    <h3 className="uppercase tracking-widest text-xs text-black/50 mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+420222714653"
                      className="font-medium md:text-base hover:text-yellow-900/30 text-xs"
                    >
                      +420 222 714 653
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <HiEnvelope className="h-4 w-4 md:w-6 md:h-6 text-black/50 mt-1" />
                  <div>
                    <h3 className="uppercase tracking-widest text-xs text-black/50 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@restaurace.cz"
                      className="text-xs md:text-base font-medium hover:text-yellow-900/30"
                    >
                      info@restaurace.cz
                    </a>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex flex-row items-center justify-around">
                <div className="flex gap-2">
                  <HiMapPin className="h-4 w-4 md:w-6 md:h-6 text-black/50 mt-1" />
                  <div>
                    <h3 className="uppercase tracking-widest text-xs text-black/50 mb-1">
                      Adresa
                    </h3>
                    <p className="text-xs md:text-base leading-relaxed">
                      Lucemburská 1832/38
                      <br />
                      Praha 3 – Žižkov
                      <br />
                      130 00
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <HiKey className="h-4 w-4 md:w-6 md:h-6 text-black/50 mt-1" />
                  <div>
                    <h3 className="uppercase tracking-widest text-xs text-black/50 mb-1">
                      Otevírací doba
                    </h3>
                    <ul className="space-y-2 text-xs md:text-base font-serif">
                      <li>
                        Po–Pá{" "}
                        <span className="float-right px-2"> 11:30–22:00</span>
                      </li>
                      <li>
                        So-Ne{" "}
                        <span className="float-right px-2"> 12:00–22:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative">
            <div
              className="aspect-square overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10
                max-h-105 sm:max-h-none"
            >
              <img
                src="/img/highlandSkull.webp"
                alt="Restaurace exteriér"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative h-100 md:h-137.5">
        <iframe
          title="Highland Restaurant - Steak House"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.7287369587932!2d14.45799628797564!3d50.07916595968209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93625e8fd749%3A0x1f4caf4b7eb0604!2sHighland%20Restaurant%20-%20Steak%20House!5e0!3m2!1scs!2scz!4v1768312153313!5m2!1scs!2scz"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default Contact;
