import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2";

const Contact = () => {
  return (
    <main className="bg-gray-100">
      {/* TITLE */}
      <header className="pt-32 pb-12 text-center px-6">
        <h1 className="font-serif text-5xl sm:text-6xl uppercase tracking-widest">
          Kontakt
        </h1>
        <p className="mt-4 text-black/60">Najdete nás v srdci Žižkova</p>
      </header>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <div className="aspect-video overflow-hidden rounded-xl shadow">
          <img
            src="/img/restaurant.jpg" // ← fotka restaurace
            alt="Restaurace exteriér"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-16">
        {/* CONTACT INFO */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-10">
            {/* PHONE */}
            <div className="flex gap-4">
              <HiPhone className="h-6 w-6 text-black/70 mt-1" />
              <div>
                <h3 className="uppercase tracking-widest text-sm mb-1">
                  Telefon
                </h3>
                <a
                  href="tel:+420123456789"
                  className="text-lg font-medium hover:underline"
                >
                  +420 123 456 789
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4">
              <HiEnvelope className="h-6 w-6 text-black/70 mt-1" />
              <div>
                <h3 className="uppercase tracking-widest text-sm mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@restaurace.cz"
                  className="text-lg font-medium hover:underline"
                >
                  info@restaurace.cz
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex gap-4">
              <HiMapPin className="h-6 w-6 text-black/70 mt-1" />
              <div>
                <h3 className="uppercase tracking-widest text-sm mb-1">
                  Adresa
                </h3>
                <p className="text-lg leading-relaxed">
                  Lucemburská 1832/38
                  <br />
                  Praha 3 – Žižkov
                  <br />
                  130 00
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – OPENING HOURS */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-6">
              Otevírací doba
            </h3>
            <ul className="space-y-2 text-lg">
              <li>Po–Pá: 11:00 – 22:00</li>
              <li>So: 12:00 – 23:00</li>
              <li>Ne: 12:00 – 21:00</li>
            </ul>
          </div>
        </div>

        {/* ACCESSIBILITY */}
        <div className="border-t border-black/10 pt-12">
          <h3 className="uppercase tracking-widest text-sm mb-4">Dostupnost</h3>
          <p className="text-black/70 leading-relaxed max-w-3xl">
            Restaurace je snadno dostupná městskou hromadnou dopravou. V
            blízkosti se nachází zastávky <strong>tramvají i autobusů</strong>.
            Parkování je možné v přilehlých ulicích v rámci modrých zón nebo na
            placených parkovištích v okolí.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section>
        <div className="mt-24">
          <div className="relative w-full h-100 md:h-125 overflow-hidden">
            <iframe
              title="Highland Restaurant - Steak House"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.7287369587932!2d14.45799628797564!3d50.07916595968209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93625e8fd749%3A0x1f4caf4b7eb0604!2sHighland%20Restaurant%20-%20Steak%20House!5e0!3m2!1scs!2scz!4v1768312153313!5m2!1scs!2scz"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Contact
