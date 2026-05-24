import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import { Link } from 'react-scroll'

const socials = [
  { icon: FiGithub, href: 'https://github.com/patrickndaziramiye', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/patrickndaziramiye', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/patrickndazi', label: 'Twitter' },
  { icon: SiWhatsapp, href: 'https://wa.me/250788000000', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:ndaziramiye_222004090@stud.ur.ac.rw', label: 'Email' },
]

const quickLinks = [
  { label: 'About', to: 'about' }, { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' }, { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' }, { label: 'Contact', to: 'contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-border">
      <div className="section-container py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 border-2 border-accent rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold font-mono">P</span>
              </div>
              <div>
                <p className="text-tx font-bold font-mono text-sm">Patrick Ndaziramiye</p>
                <p className="text-accent text-xs font-mono">Full Stack & Mobile Dev</p>
              </div>
            </div>
            <p className="text-tx-muted text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences — from web to mobile. Based in Kigali, Rwanda.
            </p>
          </div>

          <div>
            <h3 className="text-tx font-semibold mb-4 font-mono text-sm">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(({ label, to }) => (
                <Link key={to} to={to} smooth duration={600} offset={-80}
                  className="text-tx-muted text-sm hover:text-accent transition-colors cursor-pointer flex items-center gap-1">
                  <span className="text-accent text-xs">▸</span>{label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-tx font-semibold mb-4 font-mono text-sm">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-tx-faint hover:text-accent hover:border-accent/40 transition-all duration-300">
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
            <p className="text-tx-muted text-sm">
              Available worldwide.{' '}
              <a href="mailto:ndaziramiye_222004090@stud.ur.ac.rw" className="text-accent hover:underline">Say hello →</a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-tx-faint text-sm font-mono text-center sm:text-left">© {year} Patrick Ndaziramiye. All rights reserved.</p>
          <p className="text-tx-faint text-sm flex items-center gap-1.5">
            Built with <FiHeart className="text-accent animate-pulse" size={13} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
