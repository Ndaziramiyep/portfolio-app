import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'Full Stack Developer (Freelance)', company: 'Self-Employed / Remote',
    period: 'Jan 2023 – Present', location: 'Kigali, Rwanda (Remote)', type: 'Full-time',
    description: [
      'Designed and delivered 15+ web and mobile applications for clients across Africa, Europe, and North America.',
      'Built scalable REST APIs with Node.js & Django, reducing average response time by 40%.',
      'Developed React Native and Flutter apps with 4.7+ App Store ratings and 10,000+ combined downloads.',
      'Consulted on tech stack selection, cloud architecture (AWS/Vercel), and CI/CD pipeline setup for 3 startups.',
    ],
    tech: ['React.js', 'React Native', 'Flutter', 'Node.js', 'Django', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Junior Software Developer', company: 'TechBridge Rwanda',
    period: 'Jul 2022 – Dec 2022', location: 'Kigali, Rwanda', type: 'Internship → Full-time',
    description: [
      'Contributed to a government-backed digital agriculture platform used by 5,000+ farmers across Rwanda.',
      'Built the mobile companion app with React Native, integrating offline-first data sync with PouchDB/CouchDB.',
      'Collaborated in a 6-person agile team using Jira, daily standups, and bi-weekly sprints.',
      'Reduced app load time by 35% through bundle splitting, lazy loading, and image optimization.',
    ],
    tech: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'PouchDB', 'Docker'],
  },
  {
    role: 'Frontend Developer Intern', company: 'CodeLab Africa',
    period: 'Jan 2022 – Jun 2022', location: 'Kigali, Rwanda', type: 'Internship',
    description: [
      'Built interactive UI components for a fintech dashboard serving 2,000+ users.',
      'Migrated legacy jQuery codebase to React.js, improving maintainability and performance.',
      'Wrote unit and integration tests achieving 80% coverage with React Testing Library & Jest.',
      'Mentored 5 junior interns on React fundamentals and Git best practices.',
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Jest', 'Figma', 'REST APIs'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-16 sm:py-24 bg-bg-subtle">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-accent font-mono text-lg">04.</span>
          <h2 className="text-3xl font-bold text-tx">Experience</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative md:pl-16">
                <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-accent hidden md:block z-10" />
                <motion.div whileHover={{ x: 4 }}
                  className="card p-6 border-l-4 border-l-accent">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-tx font-bold text-lg sm:text-xl leading-tight">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <FiBriefcase size={13} className="text-accent" />
                        <span className="text-accent font-semibold text-sm">{exp.company}</span>
                        <span className="text-tx-faint text-xs font-mono bg-bg-subtle px-2 py-0.5 rounded border border-border">{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right space-y-1 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-tx-faint text-sm">
                        <FiCalendar size={12} /><span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-tx-faint text-sm">
                        <FiMapPin size={12} /><span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-tx-muted text-sm leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-tx-faint bg-bg-subtle px-2.5 py-1 rounded-full border border-border">{t}</span>
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
