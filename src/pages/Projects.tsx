import { motion } from 'framer-motion'
import { Globe, TreePine, Wallet, ExternalLink, Clock } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechTag from '@/components/TechTag'

const projects = [
  {
    title: 'Yavin',
    description: 'Yavin is a modern web application built with React and deployed on Netlify. It represents my ability to take a concept from design to a fully functional, live product. The project showcases responsive design principles, modern UI patterns, and clean component architecture.',
    icon: <Globe size={64} />,
    link: 'https://prismatic-centaur-1010c3.netlify.app/',
    status: 'live' as const,
    tags: ['React', 'CSS3', 'Responsive', 'Netlify'],
  },
  {
    title: 'StudyForest',
    description: 'StudyForest is an educational platform designed to enhance learning experiences through interactive content and structured study paths. Currently in active development, this project is pushing me to explore complex state management, user authentication, and database integration.',
    icon: <TreePine size={64} />,
    status: 'coming-soon' as const,
    tags: ['React', 'Node.js', 'MongoDB', 'In Progress'],
  },
  {
    title: 'MoneyWise',
    description: 'MoneyWise is a personal finance management tool designed to help users track expenses, set budgets, and visualize their financial health. This project challenges me to work with data visualization, complex calculations, and creating intuitive dashboards that make financial data accessible.',
    icon: <Wallet size={64} />,
    status: 'coming-soon' as const,
    tags: ['React', 'Node.js', 'Chart.js', 'In Progress'],
  },
]

export default function Projects() {
  return (
    <div className="pt-24">
      {/* Projects Hero */}
      <section className="text-center px-8 lg:px-16 pt-20 pb-10 max-w-[1400px] mx-auto">
        <motion.h1
          className="font-display text-5xl lg:text-[56px] font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-base text-brand-secondary max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          A showcase of my work, from live deployments to projects in development
        </motion.p>
      </section>

      {/* Projects Detailed */}
      <section className="px-8 lg:px-16 pb-24 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.15}>
            <motion.div
              className={`grid lg:grid-cols-2 gap-16 items-center mb-20 p-10 bg-brand-bg-light rounded-3xl border border-brand-border ${
                index % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
              whileHover={{ z: 20, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`h-[350px] bg-gradient-to-br from-[#d4d0cb] to-[#c8c4bf] rounded-2xl flex items-center justify-center text-brand-muted relative overflow-hidden ${
                index % 2 === 1 ? 'lg:[direction:ltr]' : ''
              }`}>
                {project.icon}
              </div>
              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <h3 className="font-display text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-[15px] text-brand-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <TechTag key={tag} name={tag} delay={i * 0.05} />
                  ))}
                </div>
                {project.status === 'live' && project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-brand-primary text-white px-7 py-3.5 rounded-full text-[13px] font-semibold uppercase tracking-wider shine-effect"
                    whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.25)' }}
                  >
                    View Live Project <ExternalLink size={14} />
                  </motion.a>
                ) : (
                  <span className="inline-flex items-center gap-2.5 bg-brand-muted text-white px-7 py-3.5 rounded-full text-[13px] font-semibold uppercase tracking-wider cursor-default">
                    Coming Soon <Clock size={14} />
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </section>
    </div>
  )
}