import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql,
  SiFlutter, SiDart, SiExpo, SiGit, SiPostman, SiVite, SiAndroid,
} from 'react-icons/si'
import { FiMonitor, FiServer, FiSmartphone, FiTool, FiSettings } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Frontend', icon: FiMonitor,
    skills: [
      { name: 'HTML / CSS', icon: SiHtml5, level: 95 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'TypeScript', icon: SiTypescript, level: 82 },
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
    ],
  },
  {
    title: 'Backend', icon: FiServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 83 },
      { name: 'Firebase', icon: SiFirebase, level: 88 },
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
    ],
  },
  {
    title: 'Mobile', icon: FiSmartphone,
    skills: [
      { name: 'React Native', icon: SiReact, level: 92 },
      { name: 'Flutter', icon: SiFlutter, level: 88 },
      { name: 'Dart', icon: SiDart, level: 85 },
      { name: 'Expo', icon: SiExpo, level: 88 },
    ],
  },
  {
    title: 'Tools & Platforms', icon: FiTool,
    skills: [
      { name: 'Git / GitHub', icon: SiGit, level: 92 },
      { name: 'VS Code', icon: SiVite, level: 95 },
      { name: 'Android Studio', icon: SiAndroid, level: 80 },
      { name: 'Postman', icon: SiPostman, level: 88 },
      { name: 'CI/CD', icon: FiSettings, level: 75 },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon className="text-accent" size={13} />
          <span className="text-tx-muted text-sm group-hover:text-tx transition-colors">{name}</span>
        </div>
        <span className="text-accent font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-bg-subtle rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full skill-bar bg-accent"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-16 sm:py-24 bg-bg-subtle">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-accent font-mono text-lg">02.</span>
          <h2 className="text-3xl font-bold text-tx">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map(({ title, icon: CatIcon, skills }, catIdx) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              whileHover={{ y: 0 }}
              className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-accent/10">
                  <CatIcon className="text-accent" size={18} />
                </div>
                <h3 className="text-tx font-semibold">{title}</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={catIdx * 6 + i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
