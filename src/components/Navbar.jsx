import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import { HiBars3, HiXMark,HiPhone } from "react-icons/hi2";
import { navItems } from "../constants";

const Navbar = () => {
  // MOBILE
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };


  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <>
      {/* NAVBAR */}
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex h-full items-center justify-between px-6">
            {/* LEFT */}
            <div className="flex items-center gap-6">
              <div className="">
                <img src="/img/logo.svg" alt="logo" className="h-10 w-10 text-black transition hover:rotate-6 hover:scale-110"/>
              </div>

              {/* <Button
                title="Kontakt"
                rightIcon={<HiPhone />}
                containerClass="!bg-blue-50 hidden md:flex items-center gap-2"
              /> */}
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 uppercase">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={item.label === "Home" ? handleHomeClick : undefined}
                  className="nav-hover-btn text-lg!"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setIsMobileOpen((p) => !p)}
                className="md:hidden"
              >
                {isMobileOpen ? (
                  <HiXMark className="h-10 w-10 text-black" />
                ) : (
                  <HiBars3 className="h-10 w-10 text-black" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/80 pt-24 px-6 text-black">
          <nav className="flex flex-col gap-6 uppercase">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
