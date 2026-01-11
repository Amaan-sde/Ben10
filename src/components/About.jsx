import React, { useState } from "react";
import Navbar from "./Navbar";
import "./About.css";

const stories = {
  en: `Ben 10 follows the life-changing adventure of Benjamin "Ben" Tennyson, an ordinary, impulsive kid who stumbles on an extraordinary alien device called the Omnitrix during a summer road trip. The Omnitrix locks onto Ben's wrist and contains the genetic templates of dozens of alien species. By selecting different faces on the device, Ben can transform into those aliens — each transformation granting him distinct powers, appearance, and instincts.

At first, Ben treats the Omnitrix like the ultimate toy: testing random transformations, pulling pranks, and racing through small scrapes. But the device drags him into conflict after conflict. As he learns the cost of unchecked power, Ben grows alongside his cousin Gwen — a clever, resourceful heroine with budding magical and tech-savvy skills — and their wise but gruff Grandpa Max, a retired Plumber (an interstellar lawkeeper who defends Earth from extraterrestrial threats).

Together they travel in the RV known as the Rustbucket, chasing alien mysteries, rescuing people, and stopping invasions. Ben's growth is not linear: he makes mistakes, loses battles, and faces moral choices that test his maturity. The Omnitrix itself becomes a character — sometimes malfunctioning, sometimes revealing hidden secrets about its creators and purpose. Villains like Vilgax (a brutal warlord obsessed with acquiring the Omnitrix), Duplicates, and rogue alien factions challenge Ben repeatedly, forcing him to rely on courage, creativity, and teamwork.

Throughout the saga, Ben learns that heroism requires more than power: it needs empathy, responsibility, and the ability to choose what is right under pressure. The series blends moments of humor with high-stakes sci-fi action, exploring what it means for a kid to shoulder a cosmic responsibility while trying to stay true to himself.`,

  hi: `Ben 10 ki kahani Benjamin "Ben" Tennyson ke jeevan ka ek dam badal dene wala safar hai. Ek saral sa bachcha, Ben, ek summer trip ke dauraan ek ajeeb aur shaktishaali alien device — Omnitrix — paata hai. Omnitrix uski kalai par chipak jaata hai aur ismein kai alien species ka genetic template hota hai. Is device ki madad se Ben anek aliens mein badal sakta hai, aur har ek alien alag shakti, roop aur svabhaav laata hai.

Shuru mein Ben Omnitrix ko ek khilauna samajhta hai: woh alag-alag forms try karta hai, majak karta hai aur chhoti-moti mushkilein solve karta hai. Lekin Omnitrix use bade sangharsh mein kheench leta hai. Dheere-dheere Ben seekhta hai ki bina samajh ke shakti ka istemal kitna khatarnak ho sakta hai. Uski cousin Gwen — jo tez aur chalak hai, magic aur technology mein mahir — aur Grandpa Max — ek purane Plumber (interstellar kanoon rakhne wale) — uske saath Rustbucket RV mein safar karte hain, jahan woh aliens ke mysteries suljhate hain aur duniya bachaate hain.

Ben ki yatra seedhi nahi hai; woh galtiyan karta hai, haar bhi maanta hai, aur mushkil faisle leta hai. Omnitrix bhi kabhi-kabhi apne raaz kholta hai aur kabhi malfunction karta hai. Dushman jaise Vilgax — jo Omnitrix chahata hai — aur anya alien factions bar bar samna karte hain. In sab challenge se Ben ko himmat, dosti aur zimmedari ka mahatva samajh aata hai.

Ant mein kahani yeh batati hai ki asli hero wahi hai jo taakat ka sahi istemal kare — jo empathetic ho, zimmedar ho aur mushkil faislo mein sahi chunav kare. Ye series hasya aur zabardast sci-fi action ko saath lekar chalti hai aur dikhati hai ki ek bachcha kaise apni badi zimmedariyon ko apnaata hai.`
};

const About = ({ onNavigate }) => {
  const [lang, setLang] = useState("en");

  return (
    <div className="about-root">
      <Navbar onNavigate={onNavigate} />
      <div className="about-wrap">
        <aside className="about-side">
          <h3>Options</h3>
          <div className="option-group">
            <label>Language</label>
            <div className="lang-buttons">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>English</button>
              <button className={lang === 'hi' ? 'active' : ''} onClick={() => setLang('hi')}>Hinglish</button>
            </div>
          </div>

          <div className="option-group">
            <label>Show</label>
            <div className="small-note">Story &amp; background will update based on language.</div>
          </div>
        </aside>

        <main className="about-main">
          <h1>About Ben 10</h1>
          <div className="story">
            {lang === 'en' ? (
              <pre>{stories.en}</pre>
            ) : (
              <pre>{stories.hi}</pre>
            )}
          </div>

          <section className="about-more">
            <h2>More Details</h2>
            <p>
              The Omnitrix not only grants powers but often forces Ben to confront different perspectives: every alien has its own culture and instincts. Ben's journey is as much about empathy and learning as it is about action. The team frequently encounters moral dilemmas, and the series blends humor with high-stakes sci-fi adventure.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
