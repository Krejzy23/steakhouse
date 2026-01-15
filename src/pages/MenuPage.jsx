import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import MenuTabs from "../components/MenuTabs";
import MenuSection from "../components/MenuSection";
import { menuItems } from "../constants";

const MenuPage = () => {
  const categories = Object.keys(menuItems);
  const [active, setActive] = useState(categories[0]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 1000 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, [active]);

  return (
    <main className="bg-gray-50">
      {/* TITLE */}
      <div className="px-6 pt-24 pb-10 text-center">
        <h1 className="font-serif text-5xl uppercase tracking-widest">
          Menu
        </h1>
      </div>

      {/* TABS = FILTER */}
      <MenuTabs
        categories={categories}
        active={active}
        onSelect={setActive}
      />

      {/* CONTENT */}
      <div ref={contentRef} className="mx-auto max-w-4xl px-6 py-20">
        <MenuSection
          title={active}
          items={menuItems[active]} 
        />
      </div>
    </main>
  );
};

export default MenuPage;
