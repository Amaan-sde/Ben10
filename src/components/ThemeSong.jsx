import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./ThemeSong.css";

const ThemeSong = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scPlaying, setScPlaying] = useState(false);
  const scRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load SoundCloud Widget API if needed and initialize widget
    const initWidget = () => {
      if (window.SC && scRef.current) {
        widgetRef.current = window.SC.Widget(scRef.current);
        widgetRef.current.bind(window.SC.Widget.Events.FINISH, () => setScPlaying(false));
        widgetRef.current.bind(window.SC.Widget.Events.PLAY, () => setScPlaying(true));
        widgetRef.current.bind(window.SC.Widget.Events.PAUSE, () => setScPlaying(false));
      }
    };

    if (!window.SC) {
      const s = document.createElement("script");
      s.src = "https://w.soundcloud.com/player/api.js";
      s.onload = initWidget;
      document.body.appendChild(s);
    } else {
      initWidget();
    }

    return () => {
      // optional cleanup
    };
  }, []);

  return (
    <div className="theme-root">
      <Navbar onNavigate={onNavigate} />
      
      <div className="theme-wrap">
        <header className="theme-header">
          <motion.h1
            initial={{ scale: 0, rotateX: 90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Ben 10 Theme Song
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Experience the iconic Ben 10 opening theme
          </motion.p>
        </header>

        <div className="theme-container">
          {/* Audio Player */}
          <motion.div
            className="player-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="player-box">
              {/* Animated visualization bars */}
              <div className="visualizer">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bar"
                    animate={isPlaying ? { height: ["20px", "60px", "40px", "70px"] } : { height: "20px" }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                  />
                ))}
              </div>

              {/* Audio Player */}
              <div className="player-controls">
                <button
                  className="play-btn"
                  onClick={() => {
                    const audio = document.getElementById("theme-audio");
                    if (audio.paused) {
                      audio.play();
                      setIsPlaying(true);
                      // pause soundcloud if playing
                      if (widgetRef.current) widgetRef.current.pause();
                    } else {
                      audio.pause();
                      setIsPlaying(false);
                    }
                  }}
                >
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>

                <button
                  className="sc-play-btn"
                  onClick={() => {
                    if (!widgetRef.current) return;
                    // toggle soundcloud playback
                    widgetRef.current.isPaused((paused) => {
                      if (paused) {
                        widgetRef.current.play();
                        // pause local audio if playing
                        const audio = document.getElementById("theme-audio");
                        if (audio && !audio.paused) {
                          audio.pause();
                          setIsPlaying(false);
                        }
                      } else {
                        widgetRef.current.pause();
                      }
                    });
                  }}
                >
                  {scPlaying ? "⏸ SoundCloud" : "▶ SoundCloud"}
                </button>

                <audio
                  id="theme-audio"
                  onEnded={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  {/* Add Ben 10 theme MP3 to public/ben10-theme.mp3 */}
                  <source
                    src="/ben10-theme.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element. Use the YouTube video below instead.
                </audio>

                <input
                  type="range"
                  className="progress-bar"
                  id="progress"
                  defaultValue="0"
                  onInput={(e) => {
                    const audio = document.getElementById("theme-audio");
                    audio.currentTime = (e.target.value / 100) * audio.duration;
                  }}
                />
              </div>

              {/* Animated glow effect */}
              <div className="glow-effect" />
            </div>
          </motion.div>

          {/* YouTube Embed - Right after player */}
          <motion.div
            className="youtube-embed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <h3>🎵 Watch & Listen</h3>
            <img src="/images/ben10-card.svg" alt="Ben 10" className="card-image" />
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/TuzaQdlGfKs?autoplay=0"
              title="Ben 10 Theme Song"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* SoundCloud Embed */}
          <motion.div
            className="soundcloud-embed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <h3>🔊 Listen on SoundCloud</h3>
            <iframe
              title="SoundCloud Player"
              ref={scRef}
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent("https://soundcloud.com/philip-longman/ben-10-intro-hindi-hq")}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            />
            <p>
              <a href="https://soundcloud.com/philip-longman/ben-10-intro-hindi-hq" target="_blank" rel="noreferrer">Open track on SoundCloud</a>
            </p>
          </motion.div>
        </div>

        <motion.section
          className="theme-lyrics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Theme Lyrics</h2>
          <p>
            "It started when an alien device did what it did and stuck itself upon his wrist with secrets that it hid. Now he's got super powers, he's no ordinary kid, he's Ben 10!"
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default ThemeSong;
