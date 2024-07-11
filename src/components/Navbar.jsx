"use client";

import "./Navbar.css";
import React, { useState } from 'react';
import { useEffect } from 'react';
import Linkedin from '../../public/navbar/linkedin-black-icon.svg'
import Instagram from '../../public/navbar/instagram-black-icon.svg'
import LogoGris from '../../public/navbar/newvaluelogogris-titulo.svg'
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
      <nav className={`navbar flex content-between w-full ${scrolled ? 'navbar-scrolled' : ''}`}>

        <div className="menu-icon-wrapper sm:w-1/3" onClick={toggleMobileMenu}>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
        </div>

        <Link href="/" className={`px-5 ${isMobileMenuOpen ? 'hidden' : 'logo'}`}>
          <Image
            alt="logo"
            src={LogoGris}
            width={145}
            height={35}
            className="mb-1"
          />
        </Link>

        <Link href="https://newvalue.es/contactanos" className="hidden sm:flex px-5 sm:w-1/3 justify-end">
          <button className="text-black bg-white border rounded-lg font-semibold py-1 px-5 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">Contacto</button>
        </Link>


        <div className={`open-menu h-screen ${isMobileMenuOpen ? 'flex flex-col gap-3' : 'hidden'}`} onClick={() => setMobileMenuOpen(false)}>
          <Link href="/" className="logo-menu" >
            <Image
              alt="logo"
              src={LogoGris}
              width={145}
              height={35}
            />
          </Link>
          <hr className="menu-separator" />

          <Link href="https://newvalue.es/index" className="menu-link" onClick={() => setMobileMenuOpen(false)}>IMPULSA EL CAMBIO</Link>

          <Link href="https://newvalue.es/desarrollo-proyectos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>DESARROLLO DE PROYECTOS</Link>

          <div className="projects flex flex-col gap-3">

            <Link href="https://newvalue.es/aws-getit" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>AWS GetIT</Link>

            <Link href="https://newvalue.es/teoria-cambio" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>Teoría del Cambio</Link>

            <Link href="https://newvalue.es/marketing-impacto" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>Marketing de Impacto</Link>

            <Link href="https://newvalue.es/voluntariado-corporativo" className="menu-link ml-3" onClick={() => setMobileMenuOpen(false)}>Voluntariado Corporativo</Link>

          </div>

          <Link href="https://newvalue.es/consultoria-esg" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONSULTORÍA ESG</Link>

          <Link href="https://newvalue.es/por-que-new-value" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONÓCENOS</Link>

          <Link href="https://newvalue.es/contactanos" className="menu-link" onClick={() => setMobileMenuOpen(false)}>CONTÁCTANOS</Link>

          <hr className="menu-separator" />
          <div className="flex gap-5 place-items-center">
            <a href="https://www.instagram.com/newvaluegeneration/">
              <Image src={Instagram} alt="icon-instagram" height={33} /> </a>
            <a href="https://www.linkedin.com/company/new-value-generation/">
              <Image src={Linkedin} alt="icon-linkedin" height={30} /> </a>

          </div>
        </div>

      </nav>

      <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </>
  );
};

export default Navbar;