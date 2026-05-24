import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi'

const roles = ['Full Stack Developer', 'Mobile App Developer', 'React Native Engineer', 'Flutter Developer', 'UI/UX Enthusiast']

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/patrickndaziramiye', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/patrickndaziramiye', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/patrickndazi', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:ndaziramiye_222004090@stud.ur.ac.rw', label: 'Email' },
]

function Typewriter({ words }) {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWord]
    const speed = isDeleting ? 60 : 100
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) { setTimeout(() => setIsDeleting(true), 1500); return }
      if (isDeleting && currentText === '') { setIsDeleting(false); setCurrentWord((p) => (p + 1) % words.length); return }
      setCurrentText((p) => isDeleting ? p.slice(0, -1) : word.slice(0, p.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWord, words])

  return (
    <span className="text-accent">
      {currentText}
      <span className="animate-blink border-r-2 border-accent ml-0.5">&nbsp;</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="floating-shapes">
        <div className="shape w-96 h-96 bg-accent" style={{ top: '10%', right: '10%', animationDelay: '0s' }} />
        <div className="shape w-64 h-64 bg-accent" style={{ bottom: '20%', left: '5%', animationDelay: '3s' }} />
      </div>

      {/* Social sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-5 z-40"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="text-tx-faint hover:text-accent transition-all duration-300 hover:-translate-y-1">
            <Icon size={20} />
          </a>
        ))}
        <div className="w-px h-24 bg-border mt-2" />
      </motion.div>

      {/* Email sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-5 z-40"
      >
        <a href="mailto:ndaziramiye_222004090@stud.ur.ac.rw"
          className="text-tx-faint hover:text-accent transition-all duration-300 hover:-translate-y-1 font-mono text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}>
          ndaziramiye_222004090@stud.ur.ac.rw
        </a>
        <div className="w-px h-24 bg-border mt-2" />
      </motion.div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-accent font-mono text-base mb-5">
            Hi, my name is
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-tx mb-3 leading-tight">
            Patrick Ndaziramiye
          </motion.h1>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-tx-muted mb-6 leading-tight">
            I build <Typewriter words={roles} />
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-tx-muted text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
            I'm a passionate <span className="text-accent font-semibold">Full Stack & Mobile App Developer</span> based in Rwanda,
            specializing in building exceptional digital experiences — from blazing-fast web apps to polished cross-platform mobile apps.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4">
            <Link to="projects" smooth duration={600} offset={-80}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-accent text-white font-bold font-mono px-8 py-4 rounded-lg hover:bg-accent-hover transition-all duration-300 text-sm cursor-pointer">
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-80}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="border border-accent text-accent font-mono px-8 py-4 rounded-lg hover:bg-accent/10 transition-all duration-300 text-sm cursor-pointer">
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 sm:gap-10 mt-12 sm:mt-16">
            {[{ number: '3+', label: 'Years Experience' }, { number: '25+', label: 'Projects Built' }, { number: '10+', label: 'Happy Clients' }, { number: '5+', label: 'Tech Stacks' }].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-accent font-mono">{number}</div>
                <div className="text-tx-faint text-sm mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-tx-faint font-mono text-xs">scroll down</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-accent">
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
