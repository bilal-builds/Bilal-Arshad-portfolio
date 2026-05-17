import { motion } from 'framer-motion'
import { ArrowRight, Clock, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  status?: 'live' | 'coming-soon'
  delay?: number
}

export default function ProjectCard({ title, description, icon, link, status = 'live', delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -12,
        rotateX: 2,
        z: 30,
        transition: { duration: 0.4 },
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className="bg-brand-bg-light rounded-[20px] overflow-hidden border border-brand-border group"
    >
      <div className="h-[220px] bg-gradient-to-br from-[#d4d0cb] to-[#c8c4bf] flex items-center justify-center text-5xl text-brand-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {icon}
      </div>
      <div className="p-7">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[13px] text-brand-muted mb-4 leading-relaxed">{description}</p>
        {status === 'live' && link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-brand-primary hover:gap-3 transition-all duration-300 relative group/link"
          >
            View Live <ArrowRight size={14} />
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-brand-primary group-hover/link:w-full transition-all duration-300" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-brand-muted">
            Coming Soon <Clock size={14} />
          </span>
        )}
      </div>
    </motion.div>
  )
}