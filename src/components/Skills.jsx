import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql,
  SiFlutter, SiDart, SiExpo, SiGit, SiPostman, SiAndroid,
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
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon size={13} style={{ color: '#737373' }} />
          <span className="text-sm" style={{ color: '#737373' }}>{name}</span>
        </div>
        <span className="font-mono text-xs" style={{ color: '#D4AF37' }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay * 0.06, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: '#D4AF37' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-16 sm:py-24 section-alt">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <h2 className="text-3xl font-bold" style={{ color: '#FAFAFA' }}>Skills & Technologies</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map(({ title, icon: CatIcon, skills }, catIdx) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <CatIcon size={18} style={{ color: '#FAFAFA' }} />
                </div>
                <h3 className="font-semibold" style={{ color: '#FAFAFA' }}>{title}</h3>
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
