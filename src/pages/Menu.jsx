import { useState } from "react";
import clsx from "clsx";
import { menuItems } from "../constants";
import { categories } from "../constants";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className="bg-gray-200 min-h-screen">
      {/* TITLE */}
      <header className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-6xl tracking-wide uppercase">Menu</h1>
      </header>

      {/* CATEGORY NAV */}
      <nav className="sticky top-0 z-30 bg-gray-200 border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8 overflow-x-auto py-4 text-sm uppercase tracking-widest">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "whitespace-nowrap pb-2 transition",
                  activeCategory === cat
                    ? "border-b-2 border-black"
                    : "opacity-50 hover:opacity-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENT PLACEHOLDER */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        {menuItems[activeCategory]?.map((item, i) => (
          <div key={i} className="py-5 border-b border-black/10">
            <div className="flex justify-between items-baseline gap-4">
              <div className="flex gap-3 items-baseline">
                {item.grams && (
                  <span className="text-xs uppercase tracking-widest text-black/50">
                    {item.grams}
                  </span>
                )}

                <h3 className="font-serif uppercase text-lg">{item.name}</h3>
              </div>

              <span className="font-medium whitespace-nowrap">
                {item.price}
              </span>
            </div>

            {item.description && (
              <p className="mt-2 text-sm text-black/70 max-w-xl">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Menu;
