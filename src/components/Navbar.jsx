import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../App'

const navLinks = [
  { label: '01. About', to: 'about' },
  { label: '02. Skills', to: 'skills' },
  { label: '03. Projects', to: 'projects' },
  { label: '04. Experience', to: 'experience' },
  { label: '05. Education', to: 'education' },
  { label: '06. Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, setDark } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md shadow-sm border-b border-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-9 h-9 border-2 border-primary rounded-lg flex items-center justify-center">
              <span className="text-primary font-mono font-bold">P</span>
            </div>
            <span className="text-tx font-mono text-sm hidden sm:block">
              Patrick<span className="text-primary">.</span>dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link, i) => (
            <motion.div key={link.to} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}>
              <Link to={link.to} smooth duration={600} offset={-80} className="nav-link cursor-pointer text-xs lg:text-sm">
                {link.label}
              </Link>
            </motion.div>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg border border-border text-tx-muted hover:text-primary hover:border-primary/40 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <a
            href="/Patrick_Ndaziramiye_CV.pdf"
            download
            className="border border-primary text-primary font-mono text-xs lg:text-sm px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setDark(!dark)} className="p-2 rounded-lg border border-border text-tx-muted" aria-label="Toggle theme">
            {dark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <button className="text-primary z-50 relative" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-bg/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                <Link
                  to={link.to} smooth duration={600} offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-tx-muted font-mono text-xl hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a
              href="/Patrick_Ndaziramiye_CV.pdf" download
              onClick={() => setMenuOpen(false)}
              className="border border-primary text-primary font-mono text-lg px-6 py-3 rounded-lg hover:bg-primary/10 transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
