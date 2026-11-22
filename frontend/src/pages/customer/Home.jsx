import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Home = () => {
  return <>
    <section className="coffee-hero" aria-labelledby="coffee-title">
      <div className="coffee-hero-copy">
        <p className="coffee-eyebrow">THE COFFEE RITUAL</p>
        <h1 id="coffee-title">A little pause.<br /><em>A better cup.</em></h1>
        <p>Find your next favorite, take a moment for yourself, and let us prepare something worth slowing down for.</p>
        <div className="coffee-hero-actions"><a href="#our-menu" className="coffee-primary">Explore the menu <span aria-hidden="true">↗</span></a><Link to="/track" className="coffee-secondary">Track your order</Link></div>
        <div className="coffee-service"><span>Dine in</span><span>Pick up</span><span>Delivery</span></div>
      </div>
      <div className="coffee-art" aria-hidden="true"><div className="coffee-art-ring" /><div className="coffee-steam"><i/><i/><i/></div><div className="coffee-cup"><div className="coffee-surface" /></div><span className="coffee-art-caption">Savor the moment.</span></div>
    </section>
    <div id="our-menu" className="coffee-menu-anchor"><Menu /></div>
  </>;
};

export default Home;
