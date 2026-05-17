import { motion } from 'framer-motion'

const shapes = [
  { size: 80, top: '10%', right: '5%', delay: 0, gradient: 'from-[#d4d0cb] to-[#c0bcb7]' },
  { size: 40, bottom: '20%', left: '-5%', delay: 2, gradient: 'from-[#c8c4bf] to-[#b4b0ab]' },
  { size: 60, top: '50%', right: '-10%', delay: 4, gradient: 'from-[#ddd9d4] to-[#c9c5c0]' },
]

export default function FloatingShapes() {
  return (
    <>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full opacity-40 bg-gradient-to-br ${shape.gradient}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            right: shape.right,
            bottom: shape.bottom,
            left: shape.left,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}