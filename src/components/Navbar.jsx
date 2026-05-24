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
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled
        ? { backgroundColor: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,175,55,0.15)', padding: '12px 0' }
        : { backgroundColor: 'transparent', padding: '20px 0' }
      }
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ border: '2px solid #D4AF37', background: 'rgba(212,175,55,0.08)' }}>
              <span className="font-mono font-bold text-sm" style={{ color: '#D4AF37' }}>P</span>
            </div>
            <span className="font-mono text-sm hidden sm:block" style={{ color: '#FAFAFA' }}>
              Patrick<span style={{ color: '#D4AF37' }}>.</span>dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link, i) => (
            <motion.div key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}>
              <Link to={link.to} smooth duration={600} offset={-80} className="nav-link cursor-pointer text-xs lg:text-sm">
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.a
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(212,175,55,0.1)' }}
            href="/Patrick_Ndaziramiye_CV.pdf" download
            className="font-mono text-xs lg:text-sm px-4 py-2 rounded-lg transition-all duration-300"
            style={{ border: '1px solid #D4AF37', color: '#D4AF37' }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden z-50 relative transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#D4AF37' }}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}>
                <Link
                  to={link.to} smooth duration={600} offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xl transition-all duration-300 cursor-pointer hover:tracking-widest"
                  style={{ color: '#737373' }}
                  onMouseEnter={e => e.target.style.color = '#D4AF37'}
                  onMouseLeave={e => e.target.style.color = '#737373'}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              href="/Patrick_Ndaziramiye_CV.pdf" download
              onClick={() => setMenuOpen(false)}
              className="font-mono text-lg px-6 py-3 rounded-lg transition-all duration-300"
              style={{ border: '1px solid #D4AF37', color: '#D4AF37' }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
