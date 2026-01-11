import React from 'react'
import Navbar from './Navbar'
import './Episodes.css'

const episodes = [
  { id: 'ep1', title: 'Pilot - The Omnitrix', thumb: '/images/slider2.png', yt: 'https://www.youtube.com/results?search_query=Ben+10+pilot' },
  { id: 'ep2', title: 'Vilgax Appears', thumb: '/images/slider3.png', yt: 'https://www.youtube.com/results?search_query=Ben+10+Vilgax' },
  { id: 'ep3', title: 'Battle For The Omnitrix', thumb: '/images/slider4.png', yt: 'https://www.youtube.com/results?search_query=Ben+10+battle+omnitrix' },
  { id: 'ep4', title: 'Alien Showcase: Heatblast', thumb: '/images/alien1.png', yt: 'https://www.youtube.com/results?search_query=Ben+10+Heatblast' },
]

const Episodes = ({ onNavigate }) => {
  return (
    <div className="episodes-root">
      <Navbar onNavigate={onNavigate} />
      <div className="episodes-wrap">
        <div className="episodes-header">
          <h1>Episodes & Clips</h1>
          <p>Curated clips and episode highlights — click a thumbnail to watch on YouTube.</p>
        </div>

        <div className="episodes-grid">
          {episodes.map((ep) => (
            <div className="episode-card" key={ep.id}>
              <a href={ep.yt} target="_blank" rel="noreferrer">
                <div className="episode-thumb" style={{ backgroundImage: `url(${ep.thumb})` }} />
              </a>
              <div className="episode-body">
                <h3>{ep.title}</h3>
                <p>Watch this clip on YouTube — full episodes and curated highlights.</p>
                <div className="episode-links">
                  <a href={ep.yt} target="_blank" rel="noreferrer">Watch</a>
                  <a href={ep.yt} target="_blank" rel="noreferrer">Open in YouTube</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Episodes
