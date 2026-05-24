import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'Mobile Application Developer',
    company: 'Kumva Insights Company',
    period: '02/2026 – 05/2026',
    location: 'Kigali, Rwanda',
    type: 'Professional',
    description: [
      'Built production-ready mobile apps using React Native, integrating the native Java bridge to fix compatibility and build issues on live projects.',
      'Managed debugging, testing, and deployments across sprint cycles, keeping the codebase stable and releases on schedule.',
      'Led code reviews and coordinated team tasks, keeping everyone aligned on goals and driving on-time delivery.',
      'Translated technical decisions into clear language for both developers and non-technical stakeholders, and documented processes to support the team.',
    ],
    tech: ['React Native', 'Java Bridge', 'CI/CD', 'Git', 'Agile'],
  },
  {
    role: 'Mobile App & Full-Stack Software Developer',
    company: 'KLAB Academy',
    period: '11/2025 – 04/2026',
    location: 'Kigali, Rwanda',
    type: 'Training Program',
    description: [
      'Built Ease-Salon and Barbershop booking apps with React Native, delivering smooth appointment management and real-time service discovery.',
      'Developed a personal finance tracker and a full-stack e-commerce website, covering both frontend UI and backend API integration.',
      'Worked in Agile teams to design, test, and ship software solutions on iterative delivery cycles.',
      'Collaborated with mentors and peers to build and launch production-ready applications under real-world project conditions.',
    ],
    tech: ['React Native', 'React.js', 'Node.js', 'Firebase', 'Agile'],
  },
  {
    role: 'Full Stack & Mobile App Development',
    company: 'Personal and Academic Projects',
    period: '05/2022 – 04/2026',
    location: 'Kigali, Rwanda',
    type: 'Self-Directed',
    description: [
      'Tea Leaf Disease Detector (Flutter + CNN): AI-powered app detecting crop diseases from photos, paired with a web dashboard helping farmers protect harvests faster.',
      'Driver-Assist (Flutter): On-the-road safety app connecting drivers to the nearest fuel stations, garages, and emergency services instantly.',
      'Countries-GeoStats (Flutter): Data explorer app presenting country profiles and global stats through a clean, engaging interface.',
      'E-Commerce Platform (React.js, Node.js, MongoDB): Full-stack store with product listings, shopping cart, and secure user authentication.',
    ],
    tech: ['Flutter', 'React.js', 'Node.js', 'MongoDB', 'CNN / AI'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-16 sm:py-24 section-alt">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <h2 className="text-3xl font-bold" style={{ color: '#FAFAFA' }}>Experience</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }} />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }} />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="relative md:pl-16">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ delay: i * 0.2 + 0.6, duration: 0.4 }}
                  className="absolute left-[18px] top-6 w-3 h-3 rounded-full hidden md:block z-10"
                  style={{ backgroundColor: '#D4AF37' }} />
                <motion.div
                  whileHover={{ x: 4 }}
                  className="card p-6"
                  style={{ borderLeft: '3px solid #D4AF37' }}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg sm:text-xl leading-tight" style={{ color: '#FAFAFA' }}>{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <FiBriefcase size={13} style={{ color: '#D4AF37' }} />
                        <span className="font-semibold text-sm" style={{ color: '#D4AF37' }}>{exp.company}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ color: '#737373', border: '1px solid rgba(115,115,115,0.3)' }}>{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right space-y-1 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-sm" style={{ color: '#737373' }}>
                        <FiCalendar size={12} /><span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm" style={{ color: '#737373' }}>
                        <FiMapPin size={12} /><span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: '#737373' }}>
                        <span className="mt-1 flex-shrink-0" style={{ color: '#D4AF37' }}>▸</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{ color: '#737373', border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)' }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
