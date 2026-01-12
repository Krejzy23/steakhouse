const About = () => {
    return (
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* TEXT */}
          <div>
            <h2 className="mb-6 font-serif text-4xl uppercase tracking-wide">
              About Us
            </h2>
  
            <div className="space-y-4 text-lg text-black/80">
              <p>
                Highland Restaurant je malé steakové bistro s rodinnou atmosférou.
                Jen pár stolů, žádný spěch, žádný hluk.
              </p>
  
              <p>
                Specializujeme se na kvalitní hovězí steaky, které připravujeme s
                maximálním respektem k masu. Bez kompromisů, bez zbytečností.
              </p>
  
              <p>
                Rezervace přijímáme výhradně telefonicky. Platba je možná pouze v
                hotovosti.
              </p>
  
              <p className="font-medium">
                Ceny odpovídají kvalitě – a steaky mluví samy za sebe.
              </p>
            </div>
          </div>
  
          {/* IMAGE */}
          <div className="relative">
            <img
              src="/img/interior.jpg"
              alt="Highland Restaurant interior"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  