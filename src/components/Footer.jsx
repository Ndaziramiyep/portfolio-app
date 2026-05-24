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
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-navy-lighter">
      <div className="section-container py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 border-2 border-mint rounded flex items-center justify-center">
                <span className="text-mint font-bold text-lg font-mono">P</span>
              </div>
              <div>
                <p className="text-slate-light font-bold font-mono">Patrick Ndaziramiye</p>
                <p className="text-mint text-xs font-mono">Full Stack & Mobile Dev</p>
              </div>
            </div>
            <p className="text-slate-muted text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences — from web to mobile. Based in Kigali, Rwanda.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-slate-light font-semibold mb-4 font-mono">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-slate-muted text-sm hover:text-mint transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="text-mint text-xs">▸</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-slate-light font-semibold mb-4 font-mono">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, color: '#64ffda' }}
                  className="w-9 h-9 rounded-lg bg-navy-light border border-navy-lighter flex items-center justify-center text-slate-muted hover:border-mint/40 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-muted text-sm">
              Available for opportunities worldwide.{' '}
              <a
                href="mailto:ndaziramiye_222004090@stud.ur.ac.rw"
                className="text-mint hover:underline"
              >
                Say hello →
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-lighter pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-muted text-sm font-mono text-center sm:text-left">
            © {year} Patrick Ndaziramiye. All rights reserved.
          </p>
          <p className="text-slate-muted text-sm flex items-center gap-1.5">
            Designed & Built with{' '}
            <FiHeart className="text-red-400 animate-pulse" size={14} />
            {' '}using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
