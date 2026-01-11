import React, { useState } from "react";
import "./AlienBattleground.css";
import Navbar from "./Navbar";

const Enemy = ({ enemy, onAttack }) => (
  <div className="enemy-card" style={{ transform: `translateZ(30px)` }}>
    <div className="enemy-art"><img src={enemy.img} alt={enemy.name} /></div>
    <div className="enemy-info">
      <div className="enemy-name">{enemy.name}</div>
      <div className="enemy-hp">HP: {enemy.hp}</div>
      <button className="attack-btn" onClick={() => onAttack(enemy.id)}>Shoot</button>
    </div>
  </div>
);

const AlienBattleground = ({ onBack, onNavigate }) => {
  const [playerHp, setPlayerHp] = useState(100);
  const [enemies, setEnemies] = useState([
    { id: 1, name: "Wild Drone", hp: 30, img: "/images/slider2.png" },
    { id: 2, name: "Plasma Grunt", hp: 45, img: "/images/slider3.png" },
    { id: 3, name: "Crystal Guard", hp: 60, img: "/images/slider5.png" },
  ]);
  const [message, setMessage] = useState("Battle on! Click enemies to shoot them.");

  const attackEnemy = (id) => {
    setEnemies((prev) => {
      return prev.map((e) => {
        if (e.id === id) {
          const newHp = e.hp - 20;
          setMessage(`Hit ${e.name}! -20`);
          return { ...e, hp: newHp > 0 ? newHp : 0 };
        }
        return e;
      }).filter(e => e.hp > 0);
    });
    // enemy retaliation
    setTimeout(() => {
      const dmg = Math.floor(Math.random() * 10) + 5;
      setPlayerHp((p) => Math.max(0, p - dmg));
      setMessage(`Enemies retaliated! -${dmg}`);
    }, 400);
  };

  const resetBattle = () => {
    setPlayerHp(100);
    setEnemies([
      { id: 1, name: "Wild Drone", hp: 30, img: "/images/slider2.png" },
      { id: 2, name: "Plasma Grunt", hp: 45, img: "/images/slider3.png" },
      { id: 3, name: "Crystal Guard", hp: 60, img: "/images/slider5.png" },
    ]);
    setMessage("Battle reset. Fight again!");
  };

  return (
    <div className="battle-root">
      <Navbar onNavigate={onNavigate} />
      <div className="battle-wrap">
        <div className="battle-header">
          <h1>Alien Battleground</h1>
          <p>Defend the Omnitrix base! Click enemies to shoot. Use special attacks when ready.</p>
        </div>

        <div className="arena">
          <div className="player-card" style={{ transform: `translateZ(40px)` }}>
            <div className="player-art"><img src="/images/slider4.png" alt="Ben" /></div>
            <div className="player-stats">Player HP: <strong>{playerHp}</strong></div>
            <div className="player-actions">
              <button className="special" onClick={() => { setMessage('Special unleashed!'); setEnemies(prev=>prev.map(e=>({ ...e, hp: Math.max(0,e.hp-30)})).filter(e=>e.hp>0)); }}>Special</button>
              <button className="reset" onClick={resetBattle}>Reset</button>
              <button className="back" onClick={() => onBack && onBack()}>Back</button>
            </div>
          </div>

          <div className="enemies">
            {enemies.length === 0 ? (
              <div className="victory">All enemies defeated! You saved the Omnitrix 🌟</div>
            ) : (
              enemies.map((enemy) => (
                <Enemy key={enemy.id} enemy={enemy} onAttack={attackEnemy} />
              ))
            )}
          </div>
        </div>

        <div className="battle-footer">{message}</div>
      </div>
    </div>
  );
};

export default AlienBattleground;
