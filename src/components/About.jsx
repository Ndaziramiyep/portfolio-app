import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiSmartphone, FiServer, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, title: 'Frontend Dev', desc: 'Crafting responsive UIs with React.js, TypeScript & Tailwind CSS' },
  { icon: FiServer, title: 'Backend Dev', desc: 'Building REST APIs and services with Node.js & Firebase' },
  { icon: FiSmartphone, title: 'Mobile Dev', desc: 'Delivering cross-platform apps with React Native & Flutter' },
  { icon: FiZap, title: 'Performance', desc: 'Optimizing for speed, scalability, and seamless user experiences' },
]

const technologies = [
  'JavaScript / TypeScript', 'React.js / Next.js',
  'React Native', 'Flutter / Dart',
  'Node.js / Express', 'Firebase',
  'Git / GitHub / CI/CD', 'Android Studio / VS Code',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <h2 className="text-3xl font-bold" style={{ color: '#FAFAFA' }}>About Me</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-5">
            <p className="text-lg leading-relaxed" style={{ color: '#737373' }}>
              Hello! I'm <span className="font-semibold" style={{ color: '#D4AF37' }}>Patrick Ndaziramiye</span>, a passionate Full Stack & Mobile App Developer based in{' '}
              <span style={{ color: '#FAFAFA' }}>Nyarugenge District, Kigali, Rwanda</span>.
            </p>
            <p className="leading-relaxed" style={{ color: '#737373' }}>
              I build production-ready mobile and web applications — from React Native apps with native Java bridge integration to full-stack e-commerce platforms. I've worked in Agile teams, led code reviews, and shipped software under real-world project conditions at Kumva Insights and KLAB Academy.
            </p>
            <p className="leading-relaxed" style={{ color: '#737373' }}>
              I hold a BSc with Honors in Computer and Software Engineering from the University of Rwanda, and I'm certified by KLAB Academy, PLP Africa, Carnegie Mellon Africa, and CISCO.
            </p>
            <div className="pt-4">
              <p className="font-mono text-sm mb-4" style={{ color: '#737373' }}>Technologies I work with:</p>
              <div className="grid grid-cols-2 gap-2">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm" style={{ color: '#737373' }}>
                    <span style={{ color: '#D4AF37' }}>▸</span>{tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative mb-8">
              <div className="relative mx-auto w-56 h-56">
                <div className="absolute inset-0 rounded-2xl translate-x-4 translate-y-4" style={{ border: '2px solid #D4AF37' }} />
                <div className="card relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/img1.png"
                    alt="Patrick Ndaziramiye"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card p-4 cursor-default">
                  <Icon className="mb-2" size={20} style={{ color: '#D4AF37' }} />
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#FAFAFA' }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#737373' }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
