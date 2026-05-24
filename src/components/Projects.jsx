import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi'

const filters = ['All', 'Web', 'Mobile', 'Full Stack']

const projects = [
  {
    id: 1, title: 'ShopEase – E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing via Stripe, order tracking, and an admin dashboard.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redis'],
    github: 'https://github.com/patrickndaziramiye/shopease', live: 'https://shopease-demo.vercel.app',
    category: ['Web', 'Full Stack'], featured: true, stars: 48,
  },
  {
    id: 2, title: 'TaskFlow – Project Management App',
    description: 'A cross-platform mobile app for team productivity. Real-time collaboration, Kanban boards, push notifications, and offline-first architecture.',
    tech: ['React Native', 'Firebase', 'Expo', 'Redux Toolkit', 'TypeScript'],
    github: 'https://github.com/patrickndaziramiye/taskflow', live: 'https://expo.dev/@patrickndazi/taskflow',
    category: ['Mobile', 'Full Stack'], featured: true, stars: 35,
  },
  {
    id: 3, title: 'NutriTrack – Fitness & Nutrition App',
    description: 'A Flutter-based mobile app for tracking daily nutrition, workout plans, and fitness goals with beautiful data visualizations.',
    tech: ['Flutter', 'Dart', 'Django REST', 'PostgreSQL', 'SQLite'],
    github: 'https://github.com/patrickndaziramiye/nutritrack', live: null,
    category: ['Mobile'], featured: true, stars: 22,
  },
  {
    id: 4, title: 'DevConnect – Developer Social Network',
    description: 'A LinkedIn-style platform tailored for developers. Features GitHub integration, project showcasing, job board, and real-time messaging.',
    tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'TypeScript', 'Prisma', 'WebSocket'],
    github: 'https://github.com/patrickndaziramiye/devconnect', live: 'https://devconnect-app.vercel.app',
    category: ['Web', 'Full Stack'], featured: false, stars: 61,
  },
  {
    id: 5, title: 'QuickBite – Food Delivery App',
    description: 'A complete food delivery ecosystem with customer app, restaurant dashboard, and delivery partner app — all in one Flutter project.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
    github: 'https://github.com/patrickndaziramiye/quickbite', live: null,
    category: ['Mobile', 'Full Stack'], featured: false, stars: 29,
  },
  {
    id: 6, title: 'BlogStudio – CMS & Blog Engine',
    description: 'A headless CMS and blogging platform with a rich markdown editor, SEO tools, analytics, and multi-author support.',
    tech: ['Next.js', 'MDX', 'Supabase', 'TypeScript', 'Vercel Edge'],
    github: 'https://github.com/patrickndaziramiye/blogstudio', live: 'https://blogstudio.vercel.app',
    category: ['Web'], featured: false, stars: 17,
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
          <a href="https://github.com/patrickndaziramiye" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent text-accent font-mono px-6 py-3 rounded-lg hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1">
            <FiGithub size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
