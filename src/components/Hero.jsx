import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const highlandRef = useRef(null);
  const restaurantRef = useRef(null);
  const cowRef = useRef(null);
  const steakRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(highlandRef.current, {
        x: -120,
        autoAlpha: 0,
        duration: 1,
      })
        .from(
          restaurantRef.current,
          {
            x: 120,
            autoAlpha: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          cowRef.current,
          {
            scale: 0.9,
            autoAlpha: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          steakRef.current,
          {
            y: 60,
            autoAlpha: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          subRef.current,
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-white px-6 "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/img/heroWall.webp"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center md:mt-28">
        {/* TOP TEXT */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-5 lg:space-x-10 xl:space-x-32">
          <h1
            ref={highlandRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wide text-black"
          >
            Highland
          </h1>
          <h1
            ref={restaurantRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wide text-black"
          >
            Restaurant
          </h1>
        </div>

        {/* COW */}
        <img
          ref={cowRef}
          src="/img/hero.svg"
          alt="Highland cow"
          className="h-96 w-96 md:h-[50vh] md:w-[50vh] lg:h-[60vh] lg:w-[60vh]"
        />

        {/* BOTTOM */}
        <h2
          ref={steakRef}
          className="text-4xl md:text-6xl uppercase tracking-widest text-black"
        >
          Steak House
        </h2>

        <p
          ref={subRef}
          className="mt-2 text-md uppercase tracking-[0.3em] text-black/70"
        >
          -Premium steaks · Prague-
        </p>
      </div>
    </section>
  );
};

export default Hero;
