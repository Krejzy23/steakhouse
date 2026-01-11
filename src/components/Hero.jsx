import React from "react";


const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-blue-50 px-6">
      <div className="absolute inset-0">
        <img
          src="/img/heroWall1.jpg"
          alt="Portrait Hero"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="flex flex-col items-center text-center mt-20 z-10">
        {/* TOP TEXT */}
        <h1 className="font-serif text-5xl md:text-7xl uppercase tracking-wide">
          Highland Restaurant
        </h1>

        {/* COW ICON */}
        <img
          src="/img/hero.svg"
          alt="Highland cow"
          className="h-72 w-72 md:h-96 md:w-96"
        />

        {/* BOTTOM TEXT */}
        <h2 className="text-4xl md:text-6xl uppercase tracking-widest text-black">
          Steak House
        </h2>

        {/* SUBTEXT */}
        <p className="text-md uppercase tracking-[0.3em] text-black/60">
          Premium steaks · Prague
        </p>
      </div>
    </section>
  );
};

export default Hero;
