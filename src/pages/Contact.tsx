import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Briefcase, Send, Check } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const contactInfo = [
  {
    icon: <Mail size={28} />,
    title: 'Email',
    content: 'bilalarshad.dev@gmail.com',
    href: 'mailto:bilalarshad.dev@gmail.com',
  },
  {
    icon: <Github size={28} />,
    title: 'GitHub',
    content: 'github.com/bilal-builds',
    href: 'https://github.com/bilal-builds',
    external: true,
  },
  {
    icon: <Linkedin size={28} />,
    title: 'LinkedIn',
    content: 'linkedin.com/in/bilal-arshad',
    href: 'https://www.linkedin.com/in/bilal-arshad-277b51407/',
    external: true,
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Current Role',
    content: 'Intern at GeekyBugs',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-24">
      {/* Contact Hero */}
      <section className="text-center px-8 lg:px-16 pt-20 pb-10 max-w-[1400px] mx-auto">
        <motion.h1
          className="font-display text-5xl lg:text-[56px] font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-base text-brand-secondary max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Have a project in mind or just want to say hello? I would love to hear from you.
        </motion.p>
      </section>

      {/* Contact Grid */}
      <section className="grid lg:grid-cols-2 gap-16 px-8 lg:px-16 pb-24 max-w-[1400px] mx-auto items-start">
        {/* Contact Form */}
        <AnimatedSection direction="left">
          <div className="bg-brand-bg-light border border-brand-border rounded-3xl p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[13px] font-semibold uppercase tracking-wider mb-2 text-brand-primary">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-3.5 border border-brand-border rounded-xl bg-white text-[15px] text-brand-primary focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(26,26,26,0.08)] focus:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] font-semibold uppercase tracking-wider mb-2 text-brand-primary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-3.5 border border-brand-border rounded-xl bg-white text-[15px] text-brand-primary focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(26,26,26,0.08)] focus:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[13px] font-semibold uppercase tracking-wider mb-2 text-brand-primary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-5 py-3.5 border border-brand-border rounded-xl bg-white text-[15px] text-brand-primary focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(26,26,26,0.08)] focus:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] font-semibold uppercase tracking-wider mb-2 text-brand-primary">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 border border-brand-border rounded-xl bg-white text-[15px] text-brand-primary focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(26,26,26,0.08)] focus:-translate-y-0.5 transition-all duration-300 resize-y min-h-[140px]"
                />
              </div>
              <motion.button
                type="submit"
                className={`w-full flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-400 ${
                  isSubmitted
                    ? 'bg-green-700 text-white'
                    : 'bg-brand-primary text-white shine-effect'
                }`}
                whileHover={!isSubmitted ? { y: -2, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' } : {}}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check size={16} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </AnimatedSection>

        {/* Contact Info Cards */}
        <AnimatedSection direction="right" className="flex flex-col gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ z: 20, rotateY: -3, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
              className="bg-brand-bg-light border border-brand-border rounded-[20px] p-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-brand-primary mb-4">{info.icon}</div>
              <h4 className="text-base font-semibold mb-2">{info.title}</h4>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.external ? '_blank' : undefined}
                  rel={info.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-brand-secondary hover:text-brand-primary transition-colors duration-300"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-sm text-brand-secondary">{info.content}</p>
              )}
            </motion.div>
          ))}
        </AnimatedSection>
      </section>
    </div>
  )
}