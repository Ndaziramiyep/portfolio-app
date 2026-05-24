import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiSmartphone, FiServer, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, title: 'Frontend Dev', desc: 'Crafting responsive, pixel-perfect UIs with React.js, Next.js & Tailwind CSS' },
  { icon: FiServer, title: 'Backend Dev', desc: 'Building robust REST APIs and services with Node.js, Django & PostgreSQL' },
  { icon: FiSmartphone, title: 'Mobile Dev', desc: 'Delivering cross-platform mobile apps with React Native & Flutter' },
  { icon: FiZap, title: 'Performance', desc: 'Optimizing for speed, scalability, and seamless user experiences' },
]

const technologies = [
  'JavaScript (ES6+)', 'TypeScript', 'React.js', 'React Native',
  'Flutter / Dart', 'Node.js / Express', 'Python / Django', 'PostgreSQL / MongoDB',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-accent font-mono text-lg">01.</span>
          <h2 className="text-3xl font-bold text-tx">About Me</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-5">
            <p className="text-tx-muted text-lg leading-relaxed">
              Hello! I'm <span className="text-accent font-semibold">Patrick Ndaziramiye</span>, a passionate full stack and mobile developer based in <span className="text-tx">Kigali, Rwanda</span>.
            </p>
            <p className="text-tx-muted leading-relaxed">
              My journey into software development started with curiosity about how apps are built. Today, I specialize in crafting end-to-end solutions — from beautifully designed frontends to powerful, scalable backends and smooth mobile experiences.
            </p>
            <p className="text-tx-muted leading-relaxed">
              When I'm not writing code, you'll find me contributing to open source, mentoring junior developers, or exploring the latest in cloud-native and AI-powered development.
            </p>
            <div className="pt-4">
              <p className="text-tx-muted font-mono text-sm mb-4">Technologies I work with:</p>
              <div className="grid grid-cols-2 gap-2">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-tx-muted text-sm">
                    <span className="text-accent font-mono">▸</span>{tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative mb-8">
              <div className="relative mx-auto w-56 h-56">
                <div className="absolute inset-0 rounded-2xl border-2 border-accent translate-x-4 translate-y-4" />
                <div className="card relative w-full h-full rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent mx-auto mb-3 flex items-center justify-center">
                      <span className="text-accent font-bold text-4xl font-mono">P</span>
                    </div>
                    <p className="text-tx font-semibold">Patrick Ndaziramiye</p>
                    <p className="text-accent font-mono text-xs mt-1">Full Stack Dev</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card p-4 cursor-default">
                  <Icon className="text-accent mb-2" size={20} />
                  <h3 className="text-tx text-sm font-semibold mb-1">{title}</h3>
                  <p className="text-tx-faint text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
