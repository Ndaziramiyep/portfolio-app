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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-light/95 backdrop-blur-md shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-accent rounded flex items-center justify-center">
              <span className="text-accent font-mono font-bold text-lg">P</span>
            </div>
            <span className={`font-mono text-sm hidden sm:block ${dark ? 'text-slate-light' : 'text-ink'}`}>
              Patrick<span className="text-accent">.</span>dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="nav-link cursor-pointer text-xs lg:text-sm font-mono"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Theme toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              dark
                ? 'border-navy-lighter text-slate-muted hover:text-accent hover:border-accent/50'
                : 'border-light-border text-ink-muted hover:text-accent hover:border-accent/50'
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </motion.button>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            href="/Patrick_Ndaziramiye_CV.pdf"
            download
            className="border border-accent text-accent font-mono text-xs lg:text-sm px-3 lg:px-4 py-2 rounded hover:bg-accent/10 transition-all duration-300"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              dark ? 'border-navy-lighter text-slate-muted' : 'border-light-border text-ink-muted'
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            className="text-accent z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed inset-0 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden ${
              dark ? 'bg-navy-light/98' : 'bg-light/98'
            }`}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-xl hover:text-accent transition-colors cursor-pointer ${
                    dark ? 'text-slate-mid' : 'text-ink-mid'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              href="/Patrick_Ndaziramiye_CV.pdf"
              download
              className="border border-accent text-accent font-mono text-lg px-6 py-3 rounded hover:bg-accent/10 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
