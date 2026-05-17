import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useNavbarScroll(50)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16 transition-all duration-300 ${
          isScrolled ? 'py-3.5 shadow-sm' : 'py-5'
        }`}
        style={{
          backgroundColor: 'rgba(232, 228, 223, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.span
            className="w-2.5 h-2.5 bg-brand-primary rounded-full inline-block"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-display font-semibold text-lg tracking-wide group-hover:scale-[1.02] transition-transform">
            BILAL ARSHAD
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-[13px] font-medium uppercase tracking-wider transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-brand-primary text-white'
                  : 'text-brand-secondary hover:text-brand-primary hover:bg-black/[0.04]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-[13px] font-medium uppercase tracking-wider"
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          <span className="hidden sm:inline">Menu</span>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[rgba(26,26,26,0.95)] flex flex-col justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl"
            >
              <X size={32} />
            </button>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-display text-2xl hover:text-brand-muted transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}