import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi'

const filters = ['All', 'Web', 'Mobile', 'Full Stack']

const projects = [
  {
    id: 1, title: 'Tea Leaf Disease Detector',
    description: 'AI-powered Flutter app that detects crop diseases from photos, paired with a web dashboard helping farmers protect harvests faster.',
    tech: ['Flutter', 'CNN / AI', 'Python', 'Firebase'],
    github: 'https://github.com/ndaziramiyep', live: null,
    category: ['Mobile'], featured: true, stars: 34,
  },
  {
    id: 2, title: 'Ease-Salon Booking App',
    description: 'React Native salon and barbershop booking app delivering smooth appointment management and real-time service discovery.',
    tech: ['React Native', 'Firebase', 'Expo', 'Node.js'],
    github: 'https://github.com/ndaziramiyep', live: null,
    category: ['Mobile', 'Full Stack'], featured: true, stars: 28,
  },
  {
    id: 3, title: 'E-Commerce Platform',
    description: 'Full-stack store with product listings, shopping cart, and secure user authentication built entirely from scratch.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/ndaziramiyep', live: null,
    category: ['Web', 'Full Stack'], featured: true, stars: 41,
  },
  {
    id: 4, title: 'Driver-Assist',
    description: 'On-the-road safety Flutter app connecting drivers to the nearest fuel stations, garages, and emergency services instantly.',
    tech: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    github: 'https://github.com/ndaziramiyep', live: null,
    category: ['Mobile'], featured: false, stars: 19,
  },
  {
    id: 5, title: 'Personal Finance Tracker',
    description: 'Mobile app for tracking personal finances, budgets, and expenses with intuitive data visualizations.',
    tech: ['React Native', 'Firebase', 'Expo', 'TypeScript'],
    github: 'https://github.com/ndaziramiyep', live: null,
    category: ['Mobile'], featured: false, stars: 15,
  },
  {
    id: 6, title: 'Countries-GeoStats',
    description: 'Flutter data explorer app presenting country profiles and global statistics through a clean, engaging interface.',
    tech: ['Flutter', 'Dart', 'REST API'],
    github: 'https://github.com/ndaziramiyep', live: null,
    category: ['Mobile'], featured: false, stars: 12,
  },
]

function ProjectCard({ project, index, inView }) {
  const { title, description, tech, github, live, stars, featured } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="card p-6 flex flex-col h-full relative group"
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-accent/10 text-accent text-xs font-mono px-2 py-1 rounded-full border border-accent/20">Featured</span>
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <FiFolder className="text-accent" size={30} />
        <div className="flex items-center gap-1">
          <FiStar size={12} className="text-accent" />
          <span className="text-tx-faint text-xs">{stars}</span>
        </div>
      </div>
      <h3 className="text-tx font-bold text-lg mb-3 group-hover:text-accent transition-colors leading-tight">{title}</h3>
      <p className="text-tx-muted text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <span key={t} className="text-tx-faint text-xs font-mono bg-bg-subtle px-2 py-1 rounded border border-border">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-auto">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-tx-faint hover:text-accent transition-colors" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-tx-faint hover:text-accent transition-colors" aria-label="Live demo">
            <FiExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16">
          <span className="text-accent font-mono text-lg">03.</span>
          <h2 className="text-3xl font-bold text-tx">Projects</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-tx-muted mb-10 max-w-2xl">
          A curated selection of projects spanning web, mobile, and full-stack development.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)}
              className={`font-mono text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-white border-accent'
                  : 'border-border text-tx-muted hover:border-accent hover:text-accent'
              }`}>
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mt-14">
          <p className="text-tx-muted mb-4">Want to see more?</p>
          <a href="https://github.com/ndaziramiyep" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent text-accent font-mono px-6 py-3 rounded-lg hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1">
            <FiGithub size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
