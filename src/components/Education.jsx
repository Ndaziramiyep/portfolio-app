import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCalendar, FiMapPin, FiBook, FiStar, FiCloud, FiSmartphone, FiCode, FiDatabase, FiGitBranch, FiBox, FiShield } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Science with Honors in Computer and Software Engineering',
    school: 'University of Rwanda (UR – CST)',
    period: '05/2022 – 06/2026',
    location: 'Kigali, Rwanda',
  },
  {
    degree: 'Software Development — Certificate',
    school: 'Digital Talent Program (DTP)',
    period: '10/2025 – 02/2026',
    location: 'Online',
  },
  {
    degree: 'Web Development & Cybersecurity — Certificates',
    school: 'Carnegie Mellon University Africa (AFRETEC Program)',
    period: '12/2023 – 03/2024',
    location: 'Kigali, Rwanda',
  },
  {
    degree: 'Mobile Application Development — Certificate',
    school: 'Power Learn Project (PLP)',
    period: '01/2023 – 09/2023',
    location: 'Online',
  },
  {
    degree: 'Mathematics, Economics and Computer Science (MCE)',
    school: 'Ecole Secondary Sancta Marie Karambo',
    period: '01/2018 – 07/2021',
    location: 'Kigali, Rwanda',
  },
]

const certifications = [
  { name: 'Mobile App Dev & Full Stack', issuer: 'KLAB Academy', year: '2026', icon: FiSmartphone },
  { name: 'Mobile Application Development', issuer: 'PLP Africa', year: '2023', icon: FiCode },
  { name: 'Web Development', issuer: 'AFRETEC / Carnegie Mellon Africa', year: '2024', icon: FiCloud },
  { name: 'Software Development', issuer: 'Digital Talent Program (DTP)', year: '2026', icon: FiDatabase },
  { name: 'Cyber Security Essentials', issuer: 'CISCO', year: '2024', icon: FiShield },
  { name: 'GitHub Actions CI/CD', issuer: 'GitHub', year: '2024', icon: FiGitBranch },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <h2 className="text-3xl font-bold" style={{ color: '#FAFAFA' }}>Education</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }} />
        </motion.div>

        <div className="space-y-4 mb-16">
          {education.map((edu, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ x: 6 }}
              className="card p-5"
              style={{ borderLeft: '3px solid #FACC15' }}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)' }}>
                    <FiBook style={{ color: '#D4AF37' }} size={17} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-base leading-tight" style={{ color: '#FAFAFA' }}>{edu.degree}</h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color: '#D4AF37' }}>{edu.school}</p>
                  </div>
                </div>
                <div className="space-y-1 flex-shrink-0">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#737373' }}>
                    <FiCalendar size={11} /><span className="font-mono">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#737373' }}>
                    <FiMapPin size={11} /><span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2" style={{ color: '#FAFAFA' }}>
            <FiAward style={{ color: '#D4AF37' }} size={20} /> Awards & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 8px 24px rgba(212,175,55,0.12)' }}
                className="card p-4 flex items-start gap-3">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <cert.icon size={17} style={{ color: '#D4AF37' }} />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: '#FAFAFA' }}>{cert.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#D4AF37' }}>{cert.issuer}</p>
                  <p className="text-xs font-mono mt-1" style={{ color: '#737373' }}>{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
