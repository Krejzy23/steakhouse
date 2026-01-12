import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="font-serif text-3xl uppercase tracking-wide">
            Highland Restaurant
          </h3>
          <p className="text-sm text-white/60">Steak House · Praha</p>
          <p className="text-sm text-white/60">
            Lucemburská 1832/38
            <br />
            Praha 3-Žižkov
            <br />
            130 00
          </p>
        </div>

        {/* NAV */}
        <nav className="flex flex-col justify-center items-center space-y-3 uppercase text-sm tracking-widest">
          <Link to="/" className="block text-white/70 hover:text-white">
            Home
          </Link>
          <Link to="/menu" className="block text-white/70 hover:text-white">
            Menu
          </Link>
          <Link to="/drinks" className="block text-white/70 hover:text-white">
            Nápoje
          </Link>
          <Link to="/gallery" className="block text-white/70 hover:text-white">
            Galerie
          </Link>
          <Link to="/contact" className="block text-white/70 hover:text-white">
            Kontakt
          </Link>
        </nav>

        <div className="w-40 h-40 md:w-60 md:h-60">
          <img
            src="/img/footer.svg"
            alt="footer logo"
            className="pointer-events-none opacity-[0.5]"
          />
        </div>

        {/* CONTACT */}
        <div className="space-y-4 text-sm">
          <p className="uppercase tracking-widest text-white/60">Rezervace</p>

          <a
            href="tel:+420222714653"
            className="block font-serif text-2xl hover:opacity-80"
          >
            +420 222 714 653
          </a>

          <p className="text-white/60">
            Otevírací doba
            <br />
            po - pá 11:30–22
            <br />
            víkend 12–22
            <br />
          </p>

          <p className="text-white/60">Platba pouze hotově</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Highland Restaurant · Všechna práva
        vyhrazena
      </div>
    </footer>
  );
};

export default Footer;
