import clsx from "clsx";


const DrinkTabs = ({ categories, active, onSelect }) => {
  return (
    <nav className="sticky top-0 z-30 bg-gray-100 border-y border-black/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-8 overflow-x-auto py-4 text-md uppercase tracking-widest font-[urania]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={clsx(
                "whitespace-nowrap pb-1 transition",
                active === cat
                  ? "border-b-2 border-black text-black"
                  : "opacity-50 hover:opacity-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DrinkTabs;