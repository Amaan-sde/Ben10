
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Games from './components/Games'
import About from './components/About'
import Aliens from './components/Aliens'
import Episodes from './components/Episodes'
import ThemeSong from './components/ThemeSong'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  if (currentPage === 'games') {
    return (
      <div className="app-container">
        <Games onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === 'themesong') {
    return (
      <div className="app-container">
        <ThemeSong onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === 'about') {
    return (
      <div className="app-container">
        <About onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === 'aliens') {
    return (
      <div className="app-container">
        <Aliens onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === 'episodes') {
    return (
      <div className="app-container">
        <Episodes onNavigate={handleNavigate} />
      </div>
    )
  }

  return (
    <div className="app-container">
      <Hero onNavigate={handleNavigate} />
      <Slider />
    </div>
  )
}

export default App
