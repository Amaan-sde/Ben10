import React, { useState, useEffect } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = ({ onNavigate }) => {
  const aliens = [
    "/images/alien1.png",
    "/images/alien2.png",
    "/images/alien3.png",
    "/images/alien4.png",
    "/images/alien5.png",
    "/images/alien6.png",
  ];

  const repeatedAliens = [...aliens, ...aliens, ...aliens];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) * 0.01,
        y: (clientY - innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hero">
      <Navbar onNavigate={onNavigate} />

      <motion.div
        className="alien-slider"
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }}
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {repeatedAliens.map((src, i) => (
          <motion.div
            className="alien-card"
            key={i}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <img src={src} alt={`Alien ${i + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
