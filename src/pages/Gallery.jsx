import React, { useState, useEffect } from "react";
import { images } from "../constants";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => Math.max(i - 1, 0));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow =
      activeIndex !== null ? "hidden" : "";
  }, [activeIndex]);

  return (
    <main className="background-image">
      {/* TITLE */}
      <div className="pt-24 pb-10 text-center">
        <div className="flex items-center justify-center">
          <div className="bg-gray-50">
            <div className="border-6 border-yellow-900/30 p-5">
              <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest">
                Galerie
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="mx-auto max-w-7xl mt-10 pb-10">
        <div className="columns-3 gap-4 px-2">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`Galerie ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-6"
        >
          <img
            src={images[activeIndex]}
            alt="Galerie detail"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {activeIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(activeIndex - 1);
              }}
              className="absolute left-6 text-white text-5xl opacity-70 hover:opacity-100"
            >
              ‹
            </button>
          )}

          {activeIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(activeIndex + 1);
              }}
              className="absolute right-6 text-white text-5xl opacity-70 hover:opacity-100"
            >
              ›
            </button>
          )}

          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:opacity-70"
          >
            ×
          </button>

          <div className="absolute bottom-6 text-sm text-white/60">
            ← → pro navigaci · ESC zavřít
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
