import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
  FiTwitter, FiSend, FiCheck, FiLoader,
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

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

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
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
    // Simulate sending — replace with your preferred email service (EmailJS, Formspree, etc.)
    await new Promise((res) => setTimeout(res, 2000))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-navy-light/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-mint font-mono text-lg">06.</span>
          <h2 className="text-3xl font-bold text-slate-light">Get In Touch</h2>
          <div className="flex-1 h-px bg-navy-lighter max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-muted max-w-2xl mb-12 text-lg"
        >
          I'm currently open to new opportunities — whether it's a full-time role, freelance project,
          or just a tech conversation. My inbox is always open. Let's build something great together!
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy-light rounded-2xl p-6 border border-navy-lighter space-y-5">
              <h3 className="text-slate-light font-bold text-lg mb-2">Contact Information</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Location' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center flex-shrink-0 group-hover:bg-mint/20 transition-colors">
                    <Icon size={18} className="text-mint" />
                  </div>
                  <div>
                    <p className="text-slate-muted text-xs font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-slate-light text-sm group-hover:text-mint transition-colors break-all">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="bg-navy-light rounded-2xl p-5 border border-navy-lighter">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-mint" />
                </span>
                <span className="text-mint font-mono text-sm font-semibold">Available for work</span>
              </div>
              <p className="text-slate-muted text-sm">
                Open to full-time, part-time, and freelance opportunities. Typical response time:{' '}
                <span className="text-mint font-mono">{'< 24 hours'}</span>
              </p>
            </div>

            {/* Social links */}
            <div className="bg-navy-light rounded-2xl p-5 border border-navy-lighter">
              <p className="text-slate-mid text-sm font-semibold mb-4">Find me online</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-lg bg-navy border border-navy-lighter flex items-center justify-center text-slate-muted ${color} hover:border-mint/40 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-navy-light rounded-2xl p-6 border border-navy-lighter"
            >
              <h3 className="text-slate-light font-bold text-lg mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                ].map(({ name, label, placeholder, type }) => (
                  <div key={name}>
                    <label className="block text-slate-mid text-sm mb-1.5 font-mono">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full bg-navy border rounded-xl px-4 py-3 text-slate-light text-sm placeholder-slate-muted/50 focus:outline-none focus:border-mint transition-colors ${
                        errors[name] ? 'border-red-500/60' : 'border-navy-lighter'
                      }`}
                    />
                    {errors[name] && (
                      <p className="text-red-400 text-xs mt-1 font-mono">{errors[name]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-slate-mid text-sm mb-1.5 font-mono">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration / etc."
                  className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-slate-light text-sm placeholder-slate-muted/50 focus:outline-none focus:border-mint transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-mid text-sm mb-1.5 font-mono">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className={`w-full bg-navy border rounded-xl px-4 py-3 text-slate-light text-sm placeholder-slate-muted/50 focus:outline-none focus:border-mint transition-colors resize-none ${
                    errors.message ? 'border-red-500/60' : 'border-navy-lighter'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(100,255,218,0.25)' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full font-mono font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                    : 'bg-mint text-navy hover:bg-mint/90'
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
