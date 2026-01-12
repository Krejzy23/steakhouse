import { useState } from "react";
import MenuTabs from "../components/MenuTabs";
import MenuSection from "../components/MenuSection";
import { menuItems } from "../constants/menuItems";

const MenuPage = () => {
  const categories = Object.keys(menuItems);
  const [active, setActive] = useState(categories[0]);

  const handleSelect = (category) => {
    setActive(category);

    const el = document.getElementById(category);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-gray-100">
      {/* TITLE */}
      <div className="px-6 pt-24 pb-10 text-center">
        <h1 className="font-serif text-5xl uppercase tracking-widest">
          Menu
        </h1>
      </div>

      {/* TABS */}
      <MenuTabs
        categories={categories}
        active={active}
        onSelect={handleSelect}
      />

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 py-20">
        {categories.map((category) => (
          <MenuSection
            key={category}
            title={category}
            items={menuItems[category]}
          />
        ))}
      </div>
    </main>
  );
};

export default MenuPage;
