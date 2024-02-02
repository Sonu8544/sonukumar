import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 > Sonu Kumar </h1>

        <h3 className="text-light">Full Stack Developer.</h3>
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
