import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCalendar, FiMapPin, FiBook, FiStar } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Rwanda',
    faculty: 'College of Science & Technology',
    period: '2022 – Present (Expected 2026)',
    location: 'Kigali, Rwanda',
    gpa: '3.8 / 4.0',
    relevant: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Systems',
      'Mobile Application Development',
      'Computer Networks',
      'Operating Systems',
      'Cloud Computing',
      'Artificial Intelligence',
    ],
    achievements: [
      'Dean\'s List — 2022/2023 & 2023/2024 academic years',
      'Best Final Year Project Award candidate',
      'Tech Club President — 200+ member community',
    ],
    color: 'border-mint',
    badge: 'bg-mint/20 text-mint border-mint/30',
  },
  {
    degree: 'Full Stack Web Development',
    school: 'The Odin Project / freeCodeCamp',
    faculty: 'Self-Directed Learning',
    period: '2021 – 2022',
    location: 'Online',
    gpa: null,
    relevant: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React.js & Node.js',
      'REST APIs & Databases',
      'Git & Version Control',
      'Agile Development',
      'Testing & Debugging',
    ],
    achievements: [
      'freeCodeCamp Responsive Web Design Certification',
      'freeCodeCamp JavaScript Algorithms & Data Structures',
      'Completed 10+ full-stack projects',
    ],
    color: 'border-blue-400',
    badge: 'bg-blue-400/20 text-blue-400 border-blue-400/30',
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

  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-mint font-mono text-lg">05.</span>
          <h2 className="text-3xl font-bold text-slate-light">Education</h2>
          <div className="flex-1 h-px bg-navy-lighter max-w-xs" />
        </motion.div>

        {/* Education cards */}
        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ x: 4 }}
              className={`bg-navy-light rounded-2xl p-6 border-l-4 ${edu.color} border border-navy-lighter hover:border-mint/30 transition-all duration-300`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-navy border border-navy-lighter flex items-center justify-center flex-shrink-0">
                    <FiBook className="text-mint" size={20} />
                  </div>
                  <div>
                    <h3 className="text-slate-light font-bold text-lg sm:text-xl leading-tight">{edu.degree}</h3>
                    <p className="text-mint font-semibold mt-0.5">{edu.school}</p>
                    <p className="text-slate-muted text-sm">{edu.faculty}</p>
                  </div>
                </div>
                <div className="space-y-1.5 flex-shrink-0">
                  <div className="flex items-center gap-1.5 text-slate-muted text-sm">
                    <FiCalendar size={13} />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-muted text-sm">
                    <FiMapPin size={13} />
                    <span>{edu.location}</span>
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
                  <h4 className="text-slate-mid text-sm font-semibold mb-3 flex items-center gap-2">
                    <FiBook size={14} className="text-mint" /> Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5">
                    {edu.relevant.map((course) => (
                      <div key={course} className="flex items-center gap-1.5 text-slate-muted text-xs">
                        <span className="text-mint">▸</span>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-mid text-sm font-semibold mb-3 flex items-center gap-2">
                    <FiAward size={14} className="text-mint" /> Achievements
                  </h4>
                  <div className="space-y-2">
                    {edu.achievements.map((ach) => (
                      <div key={ach} className="flex items-start gap-1.5 text-slate-muted text-xs">
                        <span className="text-yellow-400 mt-0.5">★</span>
                        {ach}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-slate-light font-bold text-xl mb-6 flex items-center gap-2">
            <FiAward className="text-mint" size={22} />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ y: -4, borderColor: '#64ffda55' }}
                className="bg-navy-light rounded-xl p-4 border border-navy-lighter flex items-start gap-3 transition-all duration-300"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className="text-slate-light text-sm font-semibold leading-tight">{cert.name}</p>
                  <p className="text-mint text-xs mt-0.5">{cert.issuer}</p>
                  <p className="text-slate-muted text-xs font-mono mt-1">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
