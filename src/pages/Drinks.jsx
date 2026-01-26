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
    <main className="bg-gray-50">
      {/* TITLE */}
      <div className="background-image pt-24 pb-10 text-center">
        <div className="flex items-center justify-center">
          <div className=" bg-gray-50">
            <div className="border-3 border-yellow-900/10 p-5">
              <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest">
                Nápoje
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="background-image pb-10">
        {/* TABS = FILTER */}
        <DrinkTabs
          categories={drinkCategories}
          active={active}
          onSelect={setActive}
        />

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="mx-auto max-w-4xl mt-8 border-6 border-yellow-900/10 px-6 py-10 bg-gray-50"
        >
          <DrinkSection 
            title={active} 
            items={drinkItem[active]} 
          />
        </div>
      </div>
    </main>
  );
};

export default Drinks;
