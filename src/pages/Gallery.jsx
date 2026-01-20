import React from "react";
import { images } from "../constants";

const Gallery = () => {
  return (
    <main className="background-image">
      {/* TITLE */}
      <div className="pt-24 pb-10 text-center">
        <div className="flex items-center justify-center">
          <div className=" bg-gray-50">
            <div className="border-6 border-yellow-900/10 p-5">
              <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest">
                Galerie
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* GRID */}
        <div className="columns-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="mb-4 overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Wedding moment ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
