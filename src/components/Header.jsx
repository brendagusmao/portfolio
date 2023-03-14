import React from 'react';
// import { useState } from 'react';
import '../styles/header.css'

function Header() {

   const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }


  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }
  const AOS = document.querySelector('header');
  window.addEventListener('load', () => { 
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
  return  ( 
     <header className="container-fluid" id="header">
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero" onClick={scrollto}>Home</a></li>
          </ul>
      </nav>
        <section className="title">
   brenda.dev
        </section>
        <div className="down-arr" onClick={scrollto}>&#8595;</div>
        <main id="main">
      <section className="row-xs">
        <h3>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut ultricies ante, eu accumsan mi. Donec mattis varius suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat lorem, mattis porta sollicitudin efficitur, maximus eu nisi. Mauris ut massa at felis tincidunt ullamcorper ac ut ligula. Proin volutpat sapien in eleifend accumsan. Pellentesque sed finibus massa.</h3>
      </section>
      </main>
     </header>
  );
}
 
export default Header;