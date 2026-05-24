import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useTheme } from '../App'

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
    color: 'border-accent', dotColor: 'bg-accent',
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
    color: 'border-violet-400', dotColor: 'bg-violet-400',
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
    color: 'border-indigo-400', dotColor: 'bg-indigo-400',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { dark } = useTheme()

  return (
    <section id="experience" className={`py-16 sm:py-24 ${dark ? 'bg-navy-light/30' : 'bg-violet-50/50'}`}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-accent font-mono text-lg">04.</span>
          <h2 className={`text-3xl font-bold ${dark ? 'text-slate-light' : 'text-ink'}`}>Experience</h2>
          <div className={`flex-1 h-px max-w-xs ${dark ? 'bg-navy-lighter' : 'bg-light-border'}`} />
        </motion.div>

        <div className="relative">
          <div className={`absolute left-6 top-0 bottom-0 w-px hidden md:block ${dark ? 'bg-navy-lighter' : 'bg-light-border'}`} />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative md:pl-16"
              >
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 ${exp.dotColor} hidden md:block z-10 ${dark ? 'border-navy' : 'border-light'}`} />
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`rounded-2xl p-6 border-l-4 ${exp.color} border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${dark ? 'bg-navy-light border-navy-lighter hover:border-accent/30' : 'bg-white border-light-border hover:border-accent/30 shadow-sm'}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div className="min-w-0 flex-1">
                      <h3 className={`font-bold text-lg sm:text-xl leading-tight ${dark ? 'text-slate-light' : 'text-ink'}`}>{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <FiBriefcase size={14} className="text-accent" />
                        <span className="text-accent font-semibold">{exp.company}</span>
                        <span className={dark ? 'text-navy-lighter' : 'text-light-border'}>•</span>
                        <span className={`text-sm font-mono px-2 py-0.5 rounded ${dark ? 'text-slate-muted bg-navy' : 'text-ink-muted bg-violet-50'}`}>{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right space-y-1 flex-shrink-0">
                      <div className={`flex items-center gap-1.5 text-sm ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                        <FiCalendar size={13} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 text-sm ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                        <FiMapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm leading-relaxed ${dark ? 'text-slate-muted' : 'text-ink-muted'}`}>
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className={`text-xs font-mono px-2.5 py-1 rounded-full border ${dark ? 'text-slate-muted bg-navy border-navy-lighter' : 'text-ink-muted bg-violet-50 border-light-border'}`}>{t}</span>
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
