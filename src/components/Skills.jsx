import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiGraphql, SiPhp,
  SiFlutter, SiDart, SiExpo,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiRedis,
  SiDocker, SiGit, SiGithub, SiVercel, SiLinux,
  SiFigma, SiPostman, SiVite, SiTrello,
} from 'react-icons/si'
import { FiMonitor, FiServer, FiSmartphone, FiDatabase, FiSettings, FiTool, FiCloud } from 'react-icons/fi'
import { useTheme } from '../App'

const skillCategories = [
  {
    title: 'Frontend', icon: FiMonitor,
    color: 'from-violet-500/10 to-indigo-500/10', border: 'border-violet-500/30', iconColor: 'text-violet-400',
    skills: [
      { name: 'React.js', icon: SiReact, level: 95, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#a78bfa' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#38BDF8' },
      { name: 'HTML5 / CSS3', icon: SiHtml5, level: 98, color: '#E34F26' },
    ],
  },
  {
    title: 'Backend', icon: FiServer,
    color: 'from-indigo-500/10 to-blue-500/10', border: 'border-indigo-500/30', iconColor: 'text-indigo-400',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 90, color: '#68A063' },
      { name: 'Express.js', icon: SiExpress, level: 88, color: '#a78bfa' },
      { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, level: 80, color: '#0C4B33' },
      { name: 'GraphQL', icon: SiGraphql, level: 75, color: '#E10098' },
      { name: 'PHP / Laravel', icon: SiPhp, level: 72, color: '#777BB3' },
    ],
  },
  {
    title: 'Mobile', icon: FiSmartphone,
    color: 'from-purple-500/10 to-violet-500/10', border: 'border-purple-500/30', iconColor: 'text-purple-400',
    skills: [
      { name: 'React Native', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'Flutter', icon: SiFlutter, level: 85, color: '#54C5F8' },
      { name: 'Dart', icon: SiDart, level: 82, color: '#0175C2' },
      { name: 'Expo', icon: SiExpo, level: 88, color: '#a78bfa' },
    ],
  },
  {
    title: 'Databases', icon: FiDatabase,
    color: 'from-fuchsia-500/10 to-purple-500/10', border: 'border-fuchsia-500/30', iconColor: 'text-fuchsia-400',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#4DB33D' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#316192' },
      { name: 'MySQL', icon: SiMysql, level: 82, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, level: 88, color: '#FFCA28' },
      { name: 'Redis', icon: SiRedis, level: 72, color: '#DC382D' },
      { name: 'Supabase', icon: FiDatabase, level: 78, color: '#3ECF8E' },
    ],
  },
  {
    title: 'DevOps & Cloud', icon: FiSettings,
    color: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/30', iconColor: 'text-blue-400',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 80, color: '#2496ED' },
      { name: 'Git', icon: SiGit, level: 95, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 95, color: '#a78bfa' },
      { name: 'AWS', icon: FiCloud, level: 72, color: '#FF9900' },
      { name: 'Vercel', icon: SiVercel, level: 90, color: '#a78bfa' },
      { name: 'Linux', icon: SiLinux, level: 80, color: '#FCC624' },
    ],
  },
  {
    title: 'Tools & Design', icon: FiTool,
    color: 'from-violet-500/10 to-purple-500/10', border: 'border-violet-500/30', iconColor: 'text-violet-400',
    skills: [
      { name: 'Figma', icon: SiFigma, level: 80, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, level: 90, color: '#FF6C37' },
      { name: 'Vite', icon: SiVite, level: 90, color: '#646CFF' },
      { name: 'Trello', icon: SiTrello, level: 85, color: '#0079BF' },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const { dark } = useTheme()

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon style={{ color }} size={14} />
          <span className={`text-sm group-hover:text-accent transition-colors ${dark ? 'text-slate-mid' : 'text-ink-mid'}`}>{name}</span>
        </div>
        <span className="text-accent font-mono text-xs">{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-navy-lighter' : 'bg-light-border'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full skill-bar"
          style={{ background: `linear-gradient(90deg, #7c3aed99, #a78bfa)` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { dark } = useTheme()

  return (
    <section id="skills" className={`py-16 sm:py-24 ${dark ? 'bg-navy-light/30' : 'bg-violet-50/50'}`}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-accent font-mono text-lg">02.</span>
          <h2 className={`text-3xl font-bold ${dark ? 'text-slate-light' : 'text-ink'}`}>Skills & Technologies</h2>
          <div className={`flex-1 h-px max-w-xs ${dark ? 'bg-navy-lighter' : 'bg-light-border'}`} />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: CatIcon, color, border, iconColor, skills }, catIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-br ${color} rounded-2xl p-6 border ${border} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${dark ? '' : 'bg-white/80'}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`${iconColor} p-2 rounded-lg ${dark ? 'bg-navy/50' : 'bg-white/70'}`}>
                  <CatIcon size={18} />
                </div>
                <h3 className={`font-semibold ${dark ? 'text-slate-light' : 'text-ink'}`}>{title}</h3>
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
