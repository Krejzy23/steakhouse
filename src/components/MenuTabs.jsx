import clsx from "clsx";

const MenuTabs = ({ categories, active, onSelect }) => {
  return (
    <div className="sticky top-20 z-40 bg-gray-100/90 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex gap-6 overflow-x-auto py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={clsx(
                "whitespace-nowrap uppercase text-sm tracking-widest transition",
                active === cat
                  ? "text-black border-b border-black"
                  : "text-black/50 hover:text-black"
              )}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MenuTabs;
