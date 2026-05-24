import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiLoader } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'ndaziramiye_222004090@stud.ur.ac.rw', href: 'mailto:ndaziramiye_222004090@stud.ur.ac.rw' },
  { icon: FiPhone, label: 'Phone', value: '+250 788 000 000', href: 'tel:+250788000000' },
  { icon: FiMapPin, label: 'Location', value: 'Kigali, Rwanda', href: 'https://maps.google.com/?q=Kigali,Rwanda' },
]

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/patrickndaziramiye' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/patrickndaziramiye' },
  { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com/patrickndazi' },
  { icon: SiWhatsapp, label: 'WhatsApp', href: 'https://wa.me/250788000000' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 2000))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputCls = 'w-full bg-bg border border-border rounded-xl px-4 py-3 text-tx text-sm placeholder-tx-faint focus:outline-none focus:border-accent transition-colors'

  return (
    <section id="contact" className="py-16 sm:py-24 bg-bg-subtle">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-accent font-mono text-lg">06.</span>
          <h2 className="text-3xl font-bold text-tx">Get In Touch</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-tx-muted max-w-2xl mb-10 sm:mb-12 text-base sm:text-lg">
          I'm currently open to new opportunities. My inbox is always open — let's build something great together!
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-5">
            <div className="card p-6 space-y-5">
              <h3 className="text-tx font-bold text-lg">Contact Information</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={label === 'Location' ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={17} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-tx-faint text-xs font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-tx text-sm group-hover:text-accent transition-colors break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-accent font-mono text-sm font-semibold">Available for work</span>
              </div>
              <p className="text-tx-muted text-sm">
                Response time: <span className="text-accent font-mono">{'< 24 hours'}</span>
              </p>
            </div>

            <div className="card p-5">
              <p className="text-tx-muted text-sm font-semibold mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center text-tx-faint hover:text-accent hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6">
              <h3 className="text-tx font-bold text-lg mb-6">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[{ name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' }, { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' }].map(({ name, label, placeholder, type }) => (
                  <div key={name}>
                    <label className="block text-tx-muted text-sm mb-1.5 font-mono">{label}</label>
                    <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
                      className={`${inputCls} ${errors[name] ? 'border-red-400' : ''}`} />
                    {errors[name] && <p className="text-red-400 text-xs mt-1 font-mono">{errors[name]}</p>}
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-tx-muted text-sm mb-1.5 font-mono">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry / Collaboration" className={inputCls} />
              </div>
              <div className="mb-6">
                <label className="block text-tx-muted text-sm mb-1.5 font-mono">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..."
                  className={`${inputCls} resize-none ${errors.message ? 'border-red-400' : ''}`} />
                {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full font-mono font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'sent' ? 'bg-green-500/10 text-green-500 border border-green-500/30' : 'bg-accent text-white hover:bg-accent-hover'
                }`}>
                {status === 'idle' && <><FiSend size={17} /> Send Message</>}
                {status === 'sending' && <><FiLoader size={17} className="animate-spin" /> Sending...</>}
                {status === 'sent' && <><FiCheck size={17} /> Message Sent!</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
