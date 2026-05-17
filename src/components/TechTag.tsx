import { motion } from 'framer-motion'

interface TechTagProps {
  name: string
  delay?: number
}

export default function TechTag({ name, delay = 0 }: TechTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2, backgroundColor: '#1a1a1a', color: '#ffffff', borderColor: '#1a1a1a' }}
      className="bg-white border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium cursor-default transition-colors duration-300"
    >
      {name}
    </motion.span>
  )
}