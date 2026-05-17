import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Card3DProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Card3D({ children, className = '', delay = 0 }: Card3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -15,
        rotateX: 5,
        z: 40,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`bg-brand-bg-light border border-brand-border rounded-2xl p-8 text-center relative overflow-hidden group ${className}`}
    >
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  )
}