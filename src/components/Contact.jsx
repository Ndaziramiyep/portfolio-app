import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiLoader } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import { useTheme } from '../App'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'ndaziramiye_222004090@stud.ur.ac.rw', href: 'mailto:ndaziramiye_222004090@stud.ur.ac.rw' },
  { icon: FiPhone, label: 'Phone', value: '+250 788 000 000', href: 'tel:+250788000000' },
  { icon: FiMapPin, label: 'Location', value: 'Kigali, Rwanda', href: 'https://maps.google.com/?q=Kigali,Rwanda' },
]

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/patrickndaziramiye', color: 'hover:text-white' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/patrickndaziramiye', color: 'hover:text-blue-400' },
  { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com/patrickndazi', color: 'hover:text-sky-400' },
  { icon: SiWhatsapp, label: 'WhatsApp', href: 'https://wa.me/250788000000', color: 'hover:text-green-400' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { dark } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    await new Promise((res) => setTimeout(res, 2000))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const cardClass = dark ? 'bg-navy-light border-navy-lighter' : 'bg-white border-light-border shadow-sm'
  const inputClass = dark ? 'bg-navy border-navy-lighter text-slate-light placeholder-slate-muted/50' : 'bg-violet-50/50 border-light-border text-ink placeholder-ink-muted/50'
  const textMuted = dark ? 'text-slate-muted' : 'text-ink-muted'
  const textMid = dark ? 'text-slate-mid' : 'text-ink-mid'

  return (
    <section id="contact" className={`py-16 sm:py-24 ${dark ? 'bg-navy-light/30' : 'bg-violet-50/50'}`}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-accent font-mono text-lg">06.</span>
          <h2 className={`text-3xl font-bold ${dark ? 'text-slate-light' : 'text-ink'}`}>Get In Touch</h2>
          <div className={`flex-1 h-px max-w-xs ${dark ? 'bg-navy-lighter' : 'bg-light-border'}`} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl mb-10 sm:mb-12 text-base sm:text-lg ${textMuted}`}
        >
          I'm currently open to new opportunities. My inbox is always open — let's build something great together!
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className={`rounded-2xl p-6 border space-y-5 ${cardClass}`}>
              <h3 className={`font-bold text-lg mb-2 ${dark ? 'text-slate-light' : 'text-ink'}`}>Contact Information</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={label === 'Location' ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className={`text-xs font-mono uppercase tracking-wider ${textMuted}`}>{label}</p>
                    <p className={`text-sm group-hover:text-accent transition-colors break-all ${dark ? 'text-slate-light' : 'text-ink'}`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className={`rounded-2xl p-5 border ${cardClass}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-accent font-mono text-sm font-semibold">Available for work</span>
              </div>
              <p className={`text-sm ${textMuted}`}>
                Open to full-time, part-time, and freelance. Response time:{' '}
                <span className="text-accent font-mono">{'< 24 hours'}</span>
              </p>
            </div>

            <div className={`rounded-2xl p-5 border ${cardClass}`}>
              <p className={`text-sm font-semibold mb-4 ${textMid}`}>Find me online</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${color} ${dark ? 'bg-navy border-navy-lighter text-slate-muted' : 'bg-violet-50 border-light-border text-ink-muted'}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className={`rounded-2xl p-6 border ${cardClass}`}>
              <h3 className={`font-bold text-lg mb-6 ${dark ? 'text-slate-light' : 'text-ink'}`}>Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                ].map(({ name, label, placeholder, type }) => (
                  <div key={name}>
                    <label className={`block text-sm mb-1.5 font-mono ${textMid}`}>{label}</label>
                    <input
                      type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors ${inputClass} ${errors[name] ? 'border-red-500/60' : ''}`}
                    />
                    {errors[name] && <p className="text-red-400 text-xs mt-1 font-mono">{errors[name]}</p>}
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className={`block text-sm mb-1.5 font-mono ${textMid}`}>Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration / etc."
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors ${inputClass}`}
                />
              </div>
              <div className="mb-6">
                <label className={`block text-sm mb-1.5 font-mono ${textMid}`}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none ${inputClass} ${errors.message ? 'border-red-500/60' : ''}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(124,58,237,0.3)' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full font-mono font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                    : 'bg-accent text-white hover:bg-accent/90'
                }`}
              >
                {status === 'idle' && <><FiSend size={18} /> Send Message</>}
                {status === 'sending' && <><FiLoader size={18} className="animate-spin" /> Sending...</>}
                {status === 'sent' && <><FiCheck size={18} /> Message Sent!</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
