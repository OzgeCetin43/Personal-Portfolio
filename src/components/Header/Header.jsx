import { useRef } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import { transition, variants } from "../../assets/animations/framer-variants";

import { ROUTES } from "../../assets/data/routes";

import logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-navbar");
  };

  return (
    <header className="header">
      <motion.img
        src={logo}
        alt="logo"
        initial="initial"
        animate="animate"
        variants={variants.scale}
        transition={transition.scale}
        className="logo"
      />
      <nav ref={navRef} className="navbar">
        <ul>
          {ROUTES.map((route, index) => (
            <motion.li
              key={route.id}
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={{
                ...transition.moveDown,
                delay: index * 0.3,
              }}
            >
              <a href={route.path}>{route.name}</a>
            </motion.li>
          ))}
        </ul>
        <button
          className="navbar-button navbar-close-button"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="navbar-button" onClick={showNavbar}>
        <CgMenuGridR />
      </button>
    </header>
  );
};

export default Header;
