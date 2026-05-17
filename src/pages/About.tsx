import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import Card3D from '@/components/Card3D'
import StatCounter from '@/components/StatCounter'

const skills = [
  { icon: 'fab fa-html5', title: 'HTML5', desc: 'Semantic markup, accessibility, SEO-friendly structure' },
  { icon: 'fab fa-css3-alt', title: 'CSS3', desc: 'Flexbox, Grid, animations, responsive design' },
  { icon: 'fab fa-js', title: 'JavaScript', desc: 'ES6+, DOM manipulation, async programming' },
  { icon: 'fab fa-react', title: 'React', desc: 'Hooks, Context API, component architecture' },
  { icon: 'fab fa-node-js', title: 'Node.js', desc: 'Express, REST APIs, server-side logic' },
  { icon: 'fas fa-wind', title: 'Tailwind CSS', desc: 'Utility-first styling, custom configurations' },
  { icon: 'fab fa-bootstrap', title: 'Bootstrap', desc: 'Rapid prototyping, responsive components' },
  { icon: 'fab fa-git-alt', title: 'Git & GitHub', desc: 'Version control, collaboration, CI/CD basics' },
]

export default function About() {
  return (
    <div className="pt-24">
      {/* About Hero */}
      <section className="grid lg:grid-cols-2 gap-16 px-8 lg:px-16 py-20 max-w-[1400px] mx-auto items-center">
        <AnimatedSection direction="left">
          <motion.div
            className="relative perspective-1000"
            whileHover={{ rotateY: -5, rotateX: 3, z: 20 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/images/bilal.jpg"
              alt="Muhammad Bilal Arshad"
              className="w-full max-w-[450px] rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <h1 className="font-display text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6">About Me</h1>
          <p className="text-base text-brand-secondary leading-relaxed mb-4">
            I am Muhammad Bilal Arshad, a Full-Stack Designer and Web Developer based in Pakistan. My journey into tech started with a curiosity about how things work on the web, and it quickly grew into a deep passion for building beautiful, functional applications.
          </p>
          <p className="text-base text-brand-secondary leading-relaxed mb-4">
            Over the years, I have honed my skills across the entire development stack — from crafting pixel-perfect UIs with HTML, CSS, and Tailwind, to building dynamic frontend experiences with React, and powering them with robust Node.js backends.
          </p>
          <p className="text-base text-brand-secondary leading-relaxed mb-4">
            Currently, I am interning at GeekyBugs where I am getting hands-on experience with real-world projects, learning from seasoned developers, and pushing my boundaries every day. I believe in writing clean, maintainable code and designing with empathy for the end user.
          </p>
          <p className="text-base text-brand-secondary leading-relaxed">
            When I am not coding, you will find me exploring new design trends, contributing to open-source projects, or brainstorming my next side project. I am always open to collaboration and excited about opportunities to create impactful digital experiences.
          </p>
        </AnimatedSection>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 lg:px-16 py-16 max-w-[1400px] mx-auto">
        <StatCounter end={8} label="Technologies" delay={0.1} />
        <StatCounter end={3} label="Projects" delay={0.2} />
        <StatCounter end={1} label="Internship" delay={0.3} />
      </section>

      {/* Skills Grid */}
      <section className="py-24 px-8 lg:px-16 max-w-[1400px] mx-auto perspective-1500">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-3">My Skills</h2>
          <p className="text-[15px] text-brand-secondary">Technologies and tools I use to bring ideas to life</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card3D key={skill.title} delay={index * 0.1}>
              <motion.div
                className="text-brand-primary mb-5 inline-block text-4xl"
                whileHover={{ scale: 1.1, z: 30 }}
                transition={{ duration: 0.3 }}
              >
                <i className={skill.icon} />
              </motion.div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">{skill.title}</h4>
              <p className="text-[13px] text-brand-muted leading-relaxed">{skill.desc}</p>
            </Card3D>
          ))}
        </div>
      </section>
    </div>
  )
}