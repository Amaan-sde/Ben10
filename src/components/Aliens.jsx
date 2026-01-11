import React from "react";
import Navbar from "./Navbar";
import "./Aliens.css";

const aliens = [
  { id: 1, name: "Swampfire", ability: "Plant & Fire Manipulation", origin: "Pyronite/Florauna Hybrid", img: "/images/slider4.png", desc: "A regenerative, plantlike warrior who can ignite flames and reshape his body; great at controlling terrain and absorbing damage." },
  { id: 2, name: "Humungousaur", ability: "Size & Strength Augmentation", origin: "Dinosaurian", img: "/images/slider6.png", desc: "A towering powerhouse who can grow larger to increase strength and durability — ideal for heavy-hitting confrontations." },
  { id: 3, name: "Big Chill", ability: "Intangibility & Cryokinesis", origin: "Necrofriggian", img: "/images/slider1.png", desc: "A stealthy, moth-like alien that can phase through matter and release freezing blasts to immobilize foes." },
  { id: 4, name: "Echo Echo", ability: "Sonic Clones & Sound Manipulation", origin: "Sonorosian", img: "/images/slider2.png", desc: "Can produce perfectly synchronized sonic clones and unleash concussive screams to shatter or disable targets." },
  { id: 5, name: "Chromastone", ability: "Energy Absorption & Projection", origin: "Crystalline", img: "/images/slider5.png", desc: "Crystalline body that absorbs energy and redirects it as devastating beams; resilient and radiant in combat." },
  { id: 6, name: "Rath", ability: "Berserker Strength & Agility", origin: "Hormann", img: "/images/slider3.png", desc: "A ferocious, tiger-like brawler who relies on raw strength, claws, and relentless aggression to overpower enemies." },
];

const Aliens = ({ onNavigate }) => {
  return (
    <div className="aliens-root">
      <Navbar onNavigate={onNavigate} />
      <div className="aliens-wrap">
        <header className="aliens-header">
          <h1>The Omnitrix Bestiary</h1>
          <p>Explore the Omnitrix aliens — hover to flip cards, click to read full lore and stats.</p>
        </header>

        <div className="aliens-grid">
          {aliens.map((a) => (
            <article key={a.id} className="alien-card" tabIndex={0}>
              <div className="card-inner">
                <div className="card-front" style={{ backgroundImage: `linear-gradient(135deg, rgba(0,255,136,0.06), rgba(0,255,255,0.03))` }}>
                  <div className="alien-art" style={{ backgroundImage: `url(${a.img})` }} aria-label={a.name} />
                  <h3 className="alien-name">{a.name}</h3>
                  <div className="alien-ability">{a.ability}</div>
                </div>

                <div className="card-back">
                  <h3>{a.name}</h3>
                  <p className="desc">{a.desc}</p>
                  <div className="meta">Origin: <strong>{a.origin}</strong></div>
                  <div className="actions">
                    <button onClick={() => alert(`${a.name}: ${a.desc}`)}>Quick View</button>
                    <button onClick={() => onNavigate && onNavigate('episodes')}>See Episodes</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aliens;
