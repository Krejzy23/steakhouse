const About = () => {
  return (
    <section className="background-image px-6 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* TEXT BOX */}
        <div className="bg-white p-5 md:p-10">
          <div className="relative bg-white p-10 md:p-14 border border-black/20">
            {/* QUOTES */}
            <span className="pointer-events-none absolute font-serif -top-6 -left-4 text-9xl leading-none text-yellow-900/30">
              “
            </span>

            <span className="pointer-events-none absolute font-serif -bottom-24 -right-4 text-9xl leading-none text-yellow-900/30">
              ”
            </span>

            <h2 className="mb-6 font-[circular-web] text-xl md:text-4xl tracking-wide">
              O Nás
            </h2>

            <div className="space-y-4 font-[circular-web] text-sm md:text-lg text-black/80">
              <p>
                Highland Restaurant je malé steakové bistro s rodinnou
                atmosférou. Jen pár stolů, žádný spěch, žádný hluk.
              </p>

              <p>
                Specializujeme se na kvalitní hovězí steaky z mladých býčků,
                které připravujeme s maximálním respektem k masu. Bez
                kompromisů, bez zbytečností.
              </p>

              <p>
                Rezervace přijímáme výhradně telefonicky. Platba je možná pouze
                v hotovosti.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-black/70">
                "Poctivé steaky, férové ceny a chuť, na kterou se nezapomíná".
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          {/* IMAGE */}
          <img
            src="/img/aboutInterior.webp"
            alt="Highland Restaurant interior"
            className="relative z-10 w-full object-cover"
          />

          {/* DECOR FRAMES – BEHIND IMAGE */}
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full border border-dashed border-black/40 z-0" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-full w-full border border-dashed border-black/40 z-0" />
        </div>
      </div>
    </section>
  );
};

export default About;
