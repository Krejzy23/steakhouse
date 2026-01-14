import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { drinkItem } from "../constants";
import { drinkCategories } from "../constants";
import DrinkSection from "../components/DrinkSection";
import DrinkTabs from "../components/DrinkTabs";

const Drinks = () => {
  const categories = Object.keys(drinkItem);
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
    <main className="bg-gray-100">
      {/* TITLE */}
      <div className="px-6 pt-24 pb-10 text-center">
        <h1 className="font-serif text-5xl uppercase tracking-widest">
          Nápoje
        </h1>
      </div>

      {/* TABS = FILTER */}
      <DrinkTabs
        categories={drinkCategories}
        active={active}
        onSelect={setActive}
      />

      {/* CONTENT */}
      <div ref={contentRef} className="mx-auto max-w-4xl px-6 py-20">
        <DrinkSection
          title={active}
          items={drinkItem[active]} 
        />
      </div>
    </main>
  );
};

export default Drinks;
