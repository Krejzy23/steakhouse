import clsx from "clsx";
import { Link } from "react-router-dom";
import { homeMenuItems } from "../constants";

const HomeMenuSection = () => {
  return (
    <section className="bg-gray-200">
      <div className="mx-auto p-5 max-w-7xl">
        {homeMenuItems.map((item, i) => {
          const isReversed = i % 2 === 1;

          return (
            <Link key={i} to={item.to} className="group grid grid-cols-2">
              {/* IMAGE */}
              <div
                className={clsx(
                  "relative overflow-hidden aspect-4/5 sm:aspect-3/4 md:aspect-4/3",
                  isReversed ? "order-2" : "order-1"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div
                className={clsx(
                  "relative flex items-center justify-center bg-white p-6 sm:p-10 md:p-12",
                  isReversed ? "order-1" : "order-2"
                )}
              >
                {/* LEFT DECOR */}
                <div className="absolute left-0 top-0 h-full w-px bg-black/20" />
                <div className="absolute left-0 top-0 h-full w-full border-l border-t border-black/20" />

                {/* RIGHT DECOR */}
                <div className="absolute right-0 bottom-0 h-full w-px bg-black/20" />
                <div className="absolute right-0 bottom-0 h-full w-full border-r border-b border-black/20" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-md text-center space-y-4">
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-black/60">
                    {item.subtitle}
                  </p>

                  <span className="inline-block mt-6 text-xs uppercase tracking-[0.3em] border-b border-black/40 pb-1 hover:text-yellow-900/30">
                    Zobrazit
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeMenuSection;
