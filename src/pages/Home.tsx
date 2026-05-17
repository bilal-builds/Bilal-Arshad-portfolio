import { motion } from "framer-motion";
import {
  ArrowRight,
  Paintbrush,
  Code,
  Server,
  Rocket,
  Globe,
  TreePine,
  Wallet,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Card3D from "@/components/Card3D";
import FloatingShapes from "@/components/FloatingShapes";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  {
    icon: <Paintbrush size={36} />,
    title: "UI/UX Design",
    desc: "Creating intuitive interfaces with user-centered design principles that delight and engage.",
  },
  {
    icon: <Code size={36} />,
    title: "Frontend Dev",
    desc: "Building responsive, performant interfaces with React, Tailwind CSS, and modern frameworks.",
  },
  {
    icon: <Server size={36} />,
    title: "Backend Dev",
    desc: "Developing scalable APIs and server-side logic with Node.js and robust architecture.",
  },
  {
    icon: <Rocket size={36} />,
    title: "Full-Stack Solutions",
    desc: "End-to-end development from concept to deployment with seamless integration.",
  },
];

const techStack = [
  { icon: "fab fa-html5", name: "HTML5" },
  { icon: "fab fa-css3-alt", name: "CSS3" },
  { icon: "fab fa-js", name: "JavaScript" },
  { icon: "fab fa-react", name: "React" },
  { icon: "fab fa-node-js", name: "Node.js" },
  { icon: "fas fa-wind", name: "Tailwind" },
  { icon: "fab fa-bootstrap", name: "Bootstrap" },
  { icon: "fab fa-git-alt", name: "Git" },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 min-h-screen px-8 lg:px-16 gap-16 items-center max-w-[1400px] mx-auto relative">
        <div className="flex flex-col gap-6 relative z-10">
          <motion.p
            className="text-lg text-brand-secondary font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hey, I am Bilal,
          </motion.p>
          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-brand-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            A Full-Stack
            <br />
            <motion.span
              className="italic font-medium inline-block"
              animate={{ y: [0, -8, 0], rotateX: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Designer
            </motion.span>
            <br />& Developer
          </motion.h1>
          <motion.p
            className="text-base text-brand-secondary max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Transforming ideas into stunning visuals and robust applications — I
            craft modern web experiences that captivate, engage, and deliver
            results using React, Node.js, and cutting-edge technologies.
          </motion.p>
          <motion.a
            href="mailto:bilalarshad.dev@gmail.com"
            className="inline-flex items-center gap-2.5 bg-brand-primary text-white px-7 py-3.5 rounded-full text-[13px] font-semibold uppercase tracking-wider w-fit mt-2 shine-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.25)" }}
          >
            Contact Me <ArrowRight size={14} />
          </motion.a>
        </div>

        <motion.div
          className="flex justify-center items-center relative perspective-1200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative w-[320px] h-[400px] lg:w-[420px] lg:h-[520px]"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ rotateY: -5, rotateX: 3, z: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute -inset-5 bg-gradient-to-br from-[#c8c4bf] to-[#d8d4cf] rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
              style={{ transform: "translateZ(-30px)" }}
            />
            <img
              src="/images/bilal.jpg"
              alt="Muhammad Bilal Arshad"
              className="w-full h-full object-cover rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] relative z-10 contrast-[1.05] brightness-[1.02] shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
          <FloatingShapes />
        </motion.div>
      </section>

      {/* 3D Skills Cards */}
      <section className="py-24 px-8 lg:px-16 max-w-[1400px] mx-auto perspective-1500">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-3">What I Do</h2>
          <p className="text-[15px] text-brand-secondary">
            Core competencies that drive every project
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card3D key={skill.title} delay={index * 0.1}>
              <motion.div
                className="text-brand-primary mb-5 inline-block"
                whileHover={{ scale: 1.1, z: 30 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                {skill.title}
              </h4>
              <p className="text-[13px] text-brand-muted leading-relaxed">
                {skill.desc}
              </p>
            </Card3D>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-8 lg:px-16 max-w-[1400px] mx-auto">
        <AnimatedSection className="flex justify-between items-center mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-[2px]">
            Tech Stack
          </h3>
          <p className="text-[13px] text-brand-muted">
            Technologies I work with daily
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-brand-border rounded-lg overflow-hidden">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                backgroundColor: "#f0ede8",
                color: "#1a1a1a",
                y: -3,
              }}
              className="flex items-center justify-center gap-2.5 py-6 border-r border-b border-brand-border text-brand-muted text-sm font-medium transition-colors duration-400 relative group"
            >
              <i className={tech.icon + " text-lg"} />
              {tech.name}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-8 lg:px-16 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center perspective-1000">
        <AnimatedSection direction="left">
          <motion.h2
            className="font-display text-4xl lg:text-[52px] font-bold leading-[1.1] uppercase"
            whileHover={{ z: 20, rotateY: -3 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Crafting Meaningful
            <br />
            Web Experiences
            <br />& Intuitive Interfaces
          </motion.h2>
        </AnimatedSection>
        <AnimatedSection direction="right" className="flex flex-col gap-5">
          <h3 className="font-display text-[22px] font-semibold">
            Hey, I am Muhammad Bilal Arshad
          </h3>
          <p className="text-[15px] text-brand-secondary leading-relaxed">
            A passionate Full-Stack Designer and Web Developer dedicated to
            creating visual experiences that are both compelling and
            user-friendly. With a strong foundation in HTML, CSS, JavaScript,
            React, Node.js, Bootstrap, and Tailwind CSS, I bring ideas to life
            through clean code and thoughtful design.
          </p>
          <p className="text-[15px] text-brand-secondary leading-relaxed">
            I believe great design is not just about aesthetics — it is about
            solving real problems. Every project I take on is an opportunity to
            blend creativity with functionality.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 bg-brand-primary text-white px-7 py-3.5 rounded-full text-[13px] font-semibold uppercase tracking-wider w-fit mt-2 shine-effect"
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-8 lg:px-16 max-w-[1400px] mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-3">
            Featured Projects
          </h2>
          <p className="text-[15px] text-brand-secondary">
            A selection of my recent work and ongoing builds
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1500">
          <ProjectCard
            title="Yavin"
            description="A modern web application built with React and modern design principles. Live and deployed."
            icon={<Globe size={48} />}
            link="https://prismatic-centaur-1010c3.netlify.app/"
            status="live"
            delay={0.1}
          />
          <ProjectCard
            title="StudyForest"
            description="An educational platform designed to enhance learning experiences. In active development."
            icon={<TreePine size={48} />}
            status="coming-soon"
            delay={0.2}
          />
          <ProjectCard
            title="MoneyWise"
            description="A personal finance management tool to track expenses and manage budgets. In development."
            icon={<Wallet size={48} />}
            status="coming-soon"
            delay={0.3}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-8 lg:px-16 max-w-[1400px] mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-3">Experience</h2>
          <p className="text-[15px] text-brand-secondary">
            My professional journey and current role
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 perspective-1500">
          <AnimatedSection direction="left">
            <motion.div
              className="bg-brand-bg-light border border-brand-border rounded-[20px] p-10 relative overflow-hidden"
              whileHover={{
                z: 20,
                rotateY: -2,
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="absolute top-0 left-0 w-1 h-full bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />
              <span className="inline-block bg-brand-primary text-white px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
                Current
              </span>
              <h3 className="text-xl font-semibold mb-3">
                Intern at GeekyBugs
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Currently working as an intern at GeekyBugs, where I am gaining
                hands-on experience in full-stack development. Contributing to
                real-world projects, collaborating with senior developers, and
                sharpening my skills in modern web technologies while delivering
                quality code.
              </p>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <motion.div
              className="bg-brand-bg-light border border-brand-border rounded-[20px] p-10 relative overflow-hidden"
              whileHover={{
                z: 20,
                rotateY: -2,
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="inline-block bg-brand-primary text-white px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
                Skills
              </span>
              <h3 className="text-xl font-semibold mb-3">
                Technical Expertise
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Proficient in HTML, CSS, JavaScript, React, Node.js, Bootstrap,
                and Tailwind CSS. Experienced in building responsive,
                accessible, and performant web applications. Continuously
                learning and adapting to new technologies and best practices.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-8 lg:px-16 max-w-[1400px] mx-auto text-center perspective-1000">
        <AnimatedSection direction="scale">
          <motion.h2
            className="font-display text-4xl lg:text-[52px] font-bold mb-5"
            whileHover={{ z: 30 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Let us Work Together
          </motion.h2>
        </AnimatedSection>
        <AnimatedSection className="mb-10">
          <p className="text-base text-brand-secondary">
            Have a project in mind? I would love to hear about it. Drop me a
            line and let us create something amazing.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <motion.a
            href="mailto:bilalarshad.dev@gmail.com"
            className="inline-flex items-center gap-3 bg-brand-primary text-white px-9 py-4 rounded-full text-[15px] font-medium shine-effect"
            whileHover={{
              y: -3,
              z: 10,
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.4 }}
          >
            <Mail size={18} /> bilalarshad.dev@gmail.com
          </motion.a>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex justify-center gap-5">
            {[
              {
                icon: <Github size={20} />,
                href: "https://github.com/bilal-builds",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={20} />,
                href: "https://www.linkedin.com/in/bilal-arshad-277b51407/",
                label: "LinkedIn",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[55px] h-[55px] border border-brand-border rounded-full text-brand-primary text-xl"
                whileHover={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  borderColor: "#1a1a1a",
                  y: -5,
                  z: 15,
                  rotateY: 10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
