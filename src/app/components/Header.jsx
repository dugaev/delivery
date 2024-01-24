"use client";

import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import logoImg from "/public/img/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const [position, setPosition] = useState(0);
  const scrollPos = useWindowScroll();
  const [nav, setNav] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState();
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleNav = () => {
    if (window.innerWidth < 1280) {
      setNav(!nav);
      setOpen(!isOpen);
      document.body.classList.toggle("lockBody");
    }
  };

  function useWindowScroll() {
    const [position, setPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setPosition(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return position;
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = scrollPos;
      const shouldShow = currentScrollPos <= 10 || currentScrollPos <= position;
      setShow(shouldShow);
      setPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position, scrollPos]);

  return (
    <>
      <header
        className={` sticky top-0  w-full z-[1000] bg-white  backdrop-blur-[10px] shadow-md md:shadow-sm lg:shadow-sm  transition duration-[1000ms] ease-in-out 
     flex  items-center justify-between px-4 py-[18px]
     lg:px-[70px]
      xl:px-[50px] xl:py-[18px] 
     ${!show ? "-translate-y-[151%] bg-black/50  " : ""}   `}
      >
        <Link href="/" className="main-header cursor-pointer  text-[30px] ">
          <Image
            className="w-[37px]  h-[37px]  lg:w-[50px] lg:h-[45px] "
            alt="Logo"
            a
            src={logoImg}
          />
        </Link>

        <div
          onClick={handleNav}
          className={
            nav
              ? "md:hidden   fixed left-0 top-[73px] lg:top-[88px] w-full h-screen bg-black/70 ease-in duration-300"
              : ""
          }
        >
          <div
            className={
              nav
                ? "h-[3px] absolute top-0 z-[2] left-0 w-full bg-gradient-to-r from-[#35B8BE]  to-[#35B8BE]"
                : ""
            }
          />
        </div>

        <nav
          className={`  lg:block ${
            nav
              ? "block absolute top-[76px] lg:top-[91px] right-0 w-[70%] sm:w-[40%] items-center h-screen bg-white z-[5] px-[32px] py-[42px] transition text-[20px] ease-in-out duration-1000  "
              : "hidden   right-[-100%]"
          } `}
        >
          <ul
            className=" flex flex-col gap-[35px]  text-[17px] lg:flex-row lg:gap-[35px] font-montserrat xl:mr-[270px]"
            onClick={() => {
              if (window.innerWidth < 1280) {
                setIsShown(!isShown);
                handleNav();
              }
            }}
          >
            <li className="hover:scale-110 hover:transition  cursor-pointer">
              <Link
                className={`link ${
                  pathname === "/" ? "font-bold text-[#35B8BE] underline" : ""
                }`}
                href="/"
              >
                <div>Home</div>
              </Link>
            </li>
            <li className="hover:scale-110 hover:transition cursor-pointer">
              <Link href="/#order" legacyBehavior passHref>
                <div className={router.pathname === "/order"}>Order</div>
              </Link>
            </li>
            <li className="hover:scale-110 hover:transition cursor-pointer ">
              <Link
                className={`link ${
                  router.pathname === "/company" ? "font-bold underline" : ""
                }`}
                href="/#company"
              >
                <div>Company</div>
              </Link>
            </li>
            <li className="hover:scale-110 hover:transition cursor-pointer">
              <Link href="/#faq" legacyBehavior passHref>
                <div className={router.pathname === "/faq"}>FAQ</div>
              </Link>
            </li>
            <li className="hover:scale-110 hover:transition cursor-pointer">
              <Link href="/#contact" legacyBehavior passHref>
                <div className={router.pathname === "/contact"}>Contact</div>
              </Link>
            </li>
            <li className="hidden lg:block lg:items-center lg:hover:transition lg:cursor-pointer lg:relative">
              <button onClick={handleDrawerToggle}>
                <FaShoppingCart className="  hover:text-[#35B8BE] size-[23px]" />
              </button>
              {drawerOpen && (
                <div className="mt-[23px] h-screen w-[335px] absolute bg-white ">
                  <h1>Hello</h1>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* <BurgerMenu /> */}
        <button
          className="z-50 lg:hidden"
          aria-label="Toggle Menu"
          onClick={() => {
            handleNav();
          }}
        >
          <Hamburger
            size={27}
            color="#35B8BE"
            toggled={isOpen}
            toggle={setOpen}
          />
        </button>
      </header>
    </>
  );
};

export default Header;
