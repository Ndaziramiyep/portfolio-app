import { useState, useEffect, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
      document.body.style.backgroundColor = '#0f0e17'
      document.body.style.color = '#e8e6f0'
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      document.body.style.backgroundColor = '#f8f7ff'
      document.body.style.color = '#0f0e17'
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-navy text-slate-light' : 'bg-light text-ink'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
