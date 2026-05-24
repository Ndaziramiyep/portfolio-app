import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed / Remote',
    period: 'Jan 2023 – Present',
    location: 'Kigali, Rwanda (Remote)',
    type: 'Full-time',
    description: [
      'Designed and delivered 15+ web and mobile applications for clients across Africa, Europe, and North America.',
      'Built scalable REST APIs with Node.js & Django, reducing average response time by 40% through caching and query optimization.',
      'Developed React Native and Flutter apps with 4.7+ App Store ratings and 10,000+ combined downloads.',
      'Consulted on tech stack selection, cloud architecture (AWS/Vercel), and CI/CD pipeline setup for 3 startups.',
    ],
    tech: ['React.js', 'React Native', 'Flutter', 'Node.js', 'Django', 'PostgreSQL', 'AWS'],
    color: 'border-mint',
    dotColor: 'bg-mint',
  },
  {
    role: 'Junior Software Developer',
    company: 'TechBridge Rwanda',
    period: 'Jul 2022 – Dec 2022',
    location: 'Kigali, Rwanda',
    type: 'Internship → Full-time',
    description: [
      'Contributed to a government-backed digital agriculture platform used by 5,000+ farmers across Rwanda.',
      'Built the mobile companion app with React Native, integrating offline-first data sync with PouchDB/CouchDB.',
      'Collaborated in a 6-person agile team using Jira, daily standups, and bi-weekly sprints.',
      'Reduced app load time by 35% through bundle splitting, lazy loading, and image optimization.',
    ],
    tech: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'PouchDB', 'Docker'],
    color: 'border-blue-400',
    dotColor: 'bg-blue-400',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'CodeLab Africa',
    period: 'Jan 2022 – Jun 2022',
    location: 'Kigali, Rwanda',
    type: 'Internship',
    description: [
      'Built interactive UI components for a fintech dashboard serving 2,000+ users.',
      'Migrated legacy jQuery codebase to React.js, improving maintainability and performance.',
      'Wrote unit and integration tests achieving 80% coverage with React Testing Library & Jest.',
      'Mentored 5 junior interns on React fundamentals and Git best practices.',
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Jest', 'Figma', 'REST APIs'],
    color: 'border-purple-400',
    dotColor: 'bg-purple-400',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-16 sm:py-24 bg-navy-light/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-mint font-mono text-lg">04.</span>
          <h2 className="text-3xl font-bold text-slate-light">Experience</h2>
          <div className="flex-1 h-px bg-navy-lighter max-w-xs" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-navy-lighter hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-navy ${exp.dotColor} hidden md:block z-10`}
                />

                <motion.div
                  whileHover={{ x: 4 }}
                  className={`bg-navy-light rounded-2xl p-6 border-l-4 ${exp.color} border border-navy-lighter hover:border-mint/30 transition-all duration-300 hover:shadow-lg hover:shadow-mint/5`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-slate-light font-bold text-lg sm:text-xl leading-tight">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <FiBriefcase size={14} className="text-mint" />
                        <span className="text-mint font-semibold">{exp.company}</span>
                        <span className="text-navy-lighter">•</span>
                        <span className="text-slate-muted text-sm font-mono bg-navy px-2 py-0.5 rounded">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right space-y-1 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-muted text-sm">
                        <FiCalendar size={13} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-muted text-sm">
                        <FiMapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-muted text-sm leading-relaxed">
                        <span className="text-mint mt-1 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-slate-muted bg-navy px-2.5 py-1 rounded-full border border-navy-lighter"
                      >
                        {t}
                      </span>
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
