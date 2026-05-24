import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCalendar, FiMapPin, FiBook, FiStar } from 'react-icons/fi'
import { useTheme } from '../App'

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Rwanda', faculty: 'College of Science & Technology',
    period: '2022 – Present (Expected 2026)', location: 'Kigali, Rwanda', gpa: '3.8 / 4.0',
    relevant: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Mobile Application Development', 'Computer Networks', 'Operating Systems', 'Cloud Computing', 'Artificial Intelligence'],
    achievements: ["Dean's List — 2022/2023 & 2023/2024 academic years", 'Best Final Year Project Award candidate', 'Tech Club President — 200+ member community'],
    color: 'border-accent',
  },
  {
    degree: 'Full Stack Web Development',
    school: 'The Odin Project / freeCodeCamp', faculty: 'Self-Directed Learning',
    period: '2021 – 2022', location: 'Online', gpa: null,
    relevant: ['HTML5, CSS3, JavaScript (ES6+)', 'React.js & Node.js', 'REST APIs & Databases', 'Git & Version Control', 'Agile Development', 'Testing & Debugging'],
    achievements: ['freeCodeCamp Responsive Web Design Certification', 'freeCodeCamp JavaScript Algorithms & Data Structures', 'Completed 10+ full-stack projects'],
    color: 'border-violet-400',
  },
]

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', icon: '☁️' },
  { name: 'Meta React Native Developer', issuer: 'Meta / Coursera', year: '2023', icon: '📱' },
  { name: 'Google Flutter Certified', issuer: 'Google / Coursera', year: '2023', icon: '🦋' },
  { name: 'MongoDB Associate Developer', issuer: 'MongoDB University', year: '2023', icon: '🍃' },
  { name: 'GitHub Actions CI/CD', issuer: 'GitHub', year: '2024', icon: '⚙️' },
  { name: 'Docker & Kubernetes Fundamentals', issuer: 'KodeKloud', year: '2024', icon: '🐳' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { dark } = useTheme()

  return (
    <section id="education" className={`py-16 sm:py-24 ${dark ? '' : 'bg-light'}`}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-accent font-mono text-lg">05.</span>
          <h2 className={`text-3xl font-bold ${dark ? 'text-slate-light' : 'text-ink'}`}>Education</h2>
          <div className={`flex-1 h-px max-w-xs ${dark ? 'bg-navy-lighter' : 'bg-light-border'}`} />
        </motion.div>

        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ x: 4 }}
              className={`rounded-2xl p-6 border-l-4 ${edu.color} border transition-all duration-300 ${dark ? 'bg-navy-light border-navy-lighter hover:border-accent/30' : 'bg-white border-light-border hover:border-accent/30 shadow-sm'}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${dark ? 'bg-navy border-navy-lighter' : 'bg-violet-50 border-light-border'}`}>
                    <FiBook className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg sm:text-xl leading-tight ${dark ? 'text-slate-light' : 'text-ink'}`}>{edu.degree}</h3>
                    <p className="text-accent font-semibold mt-0.5">{edu.school}</p>
                    <p className={`text-sm ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>{edu.faculty}</p>
                  </div>
                </div>
                <div className="space-y-1.5 flex-shrink-0">
                  <div className={`flex items-center gap-1.5 text-sm ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                    <FiCalendar size={13} /><span className="font-mono">{edu.period}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                    <FiMapPin size={13} /><span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <FiStar size={13} className="text-yellow-400" />
                      <span className="text-yellow-400 font-mono font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
                <div>
                  <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${dark ? 'text-slate-mid' : 'text-ink-mid'}`}>
                    <FiBook size={14} className="text-accent" /> Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5">
                    {edu.relevant.map((course) => (
                      <div key={course} className={`flex items-center gap-1.5 text-xs ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                        <span className="text-accent">▸</span>{course}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${dark ? 'text-slate-mid' : 'text-ink-mid'}`}>
                    <FiAward size={14} className="text-accent" /> Achievements
                  </h4>
                  <div className="space-y-2">
                    {edu.achievements.map((ach) => (
                      <div key={ach} className={`flex items-start gap-1.5 text-xs ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                        <span className="text-yellow-400 mt-0.5">★</span>{ach}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className={`font-bold text-xl mb-6 flex items-center gap-2 ${dark ? 'text-slate-light' : 'text-ink'}`}>
            <FiAward className="text-accent" size={22} /> Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ y: -4, borderColor: '#7c3aed55' }}
                className={`rounded-xl p-4 border flex items-start gap-3 transition-all duration-300 ${dark ? 'bg-navy-light border-navy-lighter' : 'bg-white border-light-border shadow-sm'}`}
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className={`text-sm font-semibold leading-tight ${dark ? 'text-slate-light' : 'text-ink'}`}>{cert.name}</p>
                  <p className="text-accent text-xs mt-0.5">{cert.issuer}</p>
                  <p className={`text-xs font-mono mt-1 ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
