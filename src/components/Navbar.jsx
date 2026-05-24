import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

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
        scrolled ? 'backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
      style={scrolled ? { backgroundColor: 'rgba(15,23,42,0.95)', borderBottom: '1px solid #2D3F55' } : {}}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ border: '2px solid #3B82F6' }}>
              <span className="font-mono font-bold" style={{ color: '#3B82F6' }}>P</span>
            </div>
            <span className="font-mono text-sm hidden sm:block" style={{ color: '#F8FAFC' }}>
              Patrick<span style={{ color: '#3B82F6' }}>.</span>dev
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
          <a
            href="/Patrick_Ndaziramiye_CV.pdf"
            download
            className="font-mono text-xs lg:text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
            style={{ border: '1px solid #3B82F6', color: '#3B82F6' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <button className="md:hidden z-50 relative" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{ color: '#3B82F6' }}>
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: 'rgba(15,23,42,0.98)' }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                <Link
                  to={link.to} smooth duration={600} offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xl transition-colors cursor-pointer hover:opacity-80"
                  style={{ color: '#94A3B8' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a
              href="/Patrick_Ndaziramiye_CV.pdf" download
              onClick={() => setMenuOpen(false)}
              className="font-mono text-lg px-6 py-3 rounded-lg transition-all hover:opacity-80"
              style={{ border: '1px solid #3B82F6', color: '#3B82F6' }}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
