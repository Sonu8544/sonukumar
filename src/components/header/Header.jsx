import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import TypeWriter from './TypeWriter';
import './header.css';

const Header = () => {

  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 > Sonu Kumar </h1>
        <div className="header__content">
          <h3 className="text-light">I A'm:  </h3>
          <span>
            <TypeWriter  />
          </span>
        </div>
        <CTA />
        <a href="#contact" className="scroll__down">
          &lt; Scroll Down /&gt;
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
