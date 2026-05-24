import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi'

const filters = ['All', 'Web', 'Mobile', 'Full Stack']

const projects = [
  {
    id: 1,
    title: 'ShopEase – E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory, payment processing via Stripe, order tracking, and an admin dashboard. Built with performance and scalability in mind.',
    longDesc:
      'Features include product search with filters, cart & wishlist, Stripe payments, JWT auth, role-based access, admin analytics, and email notifications.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redis'],
    github: 'https://github.com/patrickndaziramiye/shopease',
    live: 'https://shopease-demo.vercel.app',
    category: ['Web', 'Full Stack'],
    featured: true,
    stars: 48,
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'hover:border-blue-500/50',
  },
  {
    id: 2,
    title: 'TaskFlow – Project Management App',
    description:
      'A cross-platform mobile app for team productivity. Real-time collaboration, Kanban boards, push notifications, and offline-first architecture built with React Native.',
    longDesc:
      'Includes drag-and-drop Kanban, team chat, file attachments, deadline reminders, time tracking, and Firebase real-time sync.',
    tech: ['React Native', 'Firebase', 'Expo', 'Redux Toolkit', 'TypeScript'],
    github: 'https://github.com/patrickndaziramiye/taskflow',
    live: 'https://expo.dev/@patrickndazi/taskflow',
    category: ['Mobile', 'Full Stack'],
    featured: true,
    stars: 35,
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'hover:border-purple-500/50',
  },
  {
    id: 3,
    title: 'NutriTrack – Fitness & Nutrition App',
    description:
      'A Flutter-based mobile app for tracking daily nutrition, workout plans, and fitness goals. Integrates with health APIs and features beautiful data visualizations.',
    longDesc:
      'Includes barcode food scanner, macro tracking, workout logging, progress charts, meal planning, and Apple Health / Google Fit integration.',
    tech: ['Flutter', 'Dart', 'Django REST', 'PostgreSQL', 'SQLite'],
    github: 'https://github.com/patrickndaziramiye/nutritrack',
    live: null,
    category: ['Mobile'],
    featured: true,
    stars: 22,
    color: 'from-green-500/10 to-emerald-500/10',
    border: 'hover:border-green-500/50',
  },
  {
    id: 4,
    title: 'DevConnect – Developer Social Network',
    description:
      'A LinkedIn-style platform tailored for developers. Features GitHub integration, project showcasing, job board, and real-time messaging.',
    longDesc:
      'Built with Next.js App Router, GraphQL API, PostgreSQL, WebSocket chat, and GitHub OAuth.',
    tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'TypeScript', 'Prisma', 'WebSocket'],
    github: 'https://github.com/patrickndaziramiye/devconnect',
    live: 'https://devconnect-app.vercel.app',
    category: ['Web', 'Full Stack'],
    featured: false,
    stars: 61,
    color: 'from-yellow-500/10 to-orange-500/10',
    border: 'hover:border-yellow-500/50',
  },
  {
    id: 5,
    title: 'QuickBite – Food Delivery App',
    description:
      'A complete food delivery ecosystem with a customer mobile app, restaurant dashboard, and delivery partner app — all in one Flutter project.',
    longDesc:
      'Includes real-time order tracking with Google Maps, online payments, restaurant management, driver routing, and rating system.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
    github: 'https://github.com/patrickndaziramiye/quickbite',
    live: null,
    category: ['Mobile', 'Full Stack'],
    featured: false,
    stars: 29,
    color: 'from-red-500/10 to-pink-500/10',
    border: 'hover:border-red-500/50',
  },
  {
    id: 6,
    title: 'BlogStudio – CMS & Blog Engine',
    description:
      'A headless CMS and blogging platform with a rich markdown editor, SEO tools, analytics, and multi-author support. JAMstack architecture.',
    longDesc:
      'Features include MDX editor, code syntax highlighting, dark mode, tag system, newsletter integration, and automated sitemap.',
    tech: ['Next.js', 'MDX', 'Supabase', 'TypeScript', 'Vercel Edge'],
    github: 'https://github.com/patrickndaziramiye/blogstudio',
    live: 'https://blogstudio.vercel.app',
    category: ['Web'],
    featured: false,
    stars: 17,
    color: 'from-cyan-500/10 to-teal-500/10',
    border: 'hover:border-cyan-500/50',
  },
]

function ProjectCard({ project, index, inView }) {
  const { title, description, tech, github, live, color, border, stars, featured } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`relative group bg-gradient-to-br ${color} rounded-2xl p-6 border border-navy-lighter ${border} glow-border transition-all duration-300 flex flex-col h-full`}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-mint/20 text-mint text-xs font-mono px-2 py-1 rounded-full border border-mint/30">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <FiFolder className="text-mint" size={32} />
        <div className="flex items-center gap-1 text-slate-muted text-xs">
          <FiStar size={12} className="text-yellow-400" />
          <span>{stars}</span>
        </div>
      </div>

      <h3 className="text-slate-light font-bold text-lg mb-3 group-hover:text-mint transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-slate-muted text-sm leading-relaxed mb-4 flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <span
            key={t}
            className="text-slate-muted text-xs font-mono bg-navy/50 px-2 py-1 rounded border border-navy-lighter"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-mint transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-mint transition-colors"
            aria-label="Live demo"
          >
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

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 sm:mb-16"
        >
          <span className="text-mint font-mono text-lg">03.</span>
          <h2 className="text-3xl font-bold text-slate-light">Projects</h2>
          <div className="flex-1 h-px bg-navy-lighter max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-muted mb-10 max-w-2xl"
        >
          A curated selection of projects spanning web, mobile, and full-stack development.
          Each one built to solve real problems with clean, maintainable code.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-mint text-navy border-mint font-semibold'
                  : 'border-navy-lighter text-slate-muted hover:border-mint hover:text-mint'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-slate-muted mb-4">Want to see more?</p>
          <a
            href="https://github.com/patrickndaziramiye"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-mint text-mint font-mono px-6 py-3 rounded hover:bg-mint/10 transition-all duration-300 hover:-translate-y-1"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
