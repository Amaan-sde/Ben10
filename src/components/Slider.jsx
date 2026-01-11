import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const aliens = [
    {
      name: "Swampfire",
      img: "/images/slider4.png",
      description:
        "A methane-based alien with plant powers and the ability to ignite flames." +
        "Swampfire is covered with a tough, bark-like skin that makes him resistant to physical damage." +
        "He can regenerate his body by growing new limbs from plant matter, making him nearly unstoppable in battle." +
        "Besides offense, Swampfire uses his vines and roots for defense, trapping enemies or shielding allies." +
        "His flames can burn even underwater, giving him a terrifying edge in combat.",
      background: "linear-gradient(135deg, #0a0f2c, #0d3b1f)",
    },
    {
      name: "Humungousaur",
      img: "/images/slider6.png",
      description:
        "A giant dinosaur-like alien with immense strength and durability." +
        "Standing over 12 feet tall, Humungousaur’s sheer size makes him a powerhouse in any fight." +
        "He can increase his body size up to nearly 60 feet, making his strength and impact even greater." +
        "Despite his massive build, Humungousaur is surprisingly agile and can react quickly in combat." +
        "His thick, armor-like skin provides natural protection against most forms of attack, allowing him to charge headfirst into danger.",
      background: "linear-gradient(135deg, #1a0f0f, #4d1a1a)",
    },
    {
      name: "Big Chill",
      img: "/images/slider1.png",
      description:
        "A moth-like alien with the power of intangibility and ice breath." +
        "Big Chill can phase through solid objects, making him nearly impossible to trap or contain." +
        "His wings allow him to fly silently through the air, striking fear into his enemies with ghost-like movements." +
        "He can exhale freezing winds capable of encasing opponents in solid ice within seconds.\n\n" +
        "Despite his eerie and mysterious appearance, Big Chill is a calm and strategic fighter who prefers precision over brute force.",
      background: "linear-gradient(135deg, #0a0f2c, #1e3c72)",
    },
    {
      name: "Echo Echo",
      img: "/images/slider2.png",
      description:
        "A small silicon-based alien capable of creating sonic clones." +
        "Echo Echo’s primary ability is to duplicate himself, overwhelming opponents with sheer numbers." +
        "Each clone is fully functional, allowing him to coordinate attacks or distract enemies with ease." +
        "He can unleash powerful sonic screams that disorient foes and shatter obstacles." +
        "Despite his small size, Echo Echo’s versatility and teamwork abilities make him one of the most resourceful aliens in Ben’s arsenal.",
      background: "linear-gradient(135deg, #1a1a1a, #444444)",
    },
    {
      name: "Chromastone",
      img: "/images/slider5.png",
      description:
        "A crystalline alien with the ability to absorb and channel energy." +
        "Chromastone’s body is composed of nearly indestructible crystal, making him resistant to physical and energy-based attacks.\n\n" +
        "He can absorb energy blasts and redirect them as powerful beams of raw force." +
        "His glowing body emits radiant light, often intimidating enemies before the battle even begins." +
        "Chromastone combines durability, energy control, and striking appearance, making him a defensive powerhouse and offensive weapon at the same time.",
      background: "linear-gradient(135deg, #220a2c, #6e1f7c)",
    },
    {
      name: "Rath",
      img: "/images/slider3.png",
      description:
        "A tiger-like alien with unmatched strength and ferocity." +
        "Rath is covered in orange fur with black stripes, sharp claws, and a muscular build that makes him a fearsome close-combat fighter." +
        "He is extremely hot-headed and rushes into battle without hesitation, often relying on brute force over strategy." +
        "Despite his reckless nature, Rath’s durability and power allow him to overpower most opponents in hand-to-hand combat." +
        "His personality is loud, aggressive, and confrontational, but underneath the rage lies a heroic drive to protect those in need.",
      background: "linear-gradient(135deg, #2c0a0a, #ff6600)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) * 0.005,
        y: (clientY - innerHeight / 2) * 0.005,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + aliens.length) % aliens.length);
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % aliens.length);
  };

  return (
    <motion.div
      className="slider"
      style={{ 
        background: aliens[index].background,
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
      }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <motion.button 
        className="arrow left-arrow" 
        onClick={handlePrev}
        whileHover={{ scale: 1.2, rotate: -15 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronLeft size={28} />
      </motion.button>

      <div className="slider-images">
        {aliens.map((alien, i) => {
          const offset = (i - index + aliens.length) % aliens.length;
          let x = 0,
            y = 0,
            scale = 1,
            opacity = 1,
            blur = "none",
            zIndex = 1,
            rotateX = 0,
            rotateY = 0,
            rotateZ = 0;

          if (offset === 0) {
            x = 0;
            y = 0;
            scale = 1.4;
            opacity = 1;
            blur = "none";
            zIndex = 3;
            rotateX = 0;
            rotateY = 0;
          } else if (offset === 1) {
            x = 220;
            y = -90;
            scale = 0.95;
            opacity = 0.4;
            blur = "blur(3px)";
            zIndex = 2;
            rotateX = 10;
            rotateY = -20;
          } else if (offset === aliens.length - 1) {
            x = -290;
            y = 200;
            scale = 0.65;
            opacity = 0.4;
            blur = "blur(6px)";
            zIndex = 2;
            rotateX = -15;
            rotateY = 25;
          } else {
            x = 0;
            y = 0;
            scale = 0.9;
            opacity = 0;
            blur = "blur(10px)";
            zIndex = 0;
          }

          return (
            <motion.img
              key={i}
              src={alien.img}
              alt={alien.name}
              className="alien-img"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                transform: `translate(${x}px, ${y}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                opacity,
                filter: blur,
                zIndex,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{
                scale: scale * 1.15,
                filter: "drop-shadow(0 0 60px rgba(0, 255, 136, 0.8))",
              }}
            />
          );
        })}
      </div>

      <motion.button 
        className="arrow right-arrow" 
        onClick={handleNext}
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaChevronRight size={28} />
      </motion.button>

      <div className="slider-info-wrapper">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="slider-info"
            custom={direction}
            initial={{ 
              y: direction === "next" ? 100 : -100, 
              opacity: 0,
              rotateY: direction === "next" ? 90 : -90,
            }}
            animate={{ 
              y: 0, 
              opacity: 1,
              rotateY: 0,
            }}
            exit={{
              y: direction === "next" ? -100 : 100,
              opacity: 0,
              rotateY: direction === "next" ? -90 : 90,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {aliens[index].name}
            </motion.h1>
            {aliens[index].description.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Slider;
