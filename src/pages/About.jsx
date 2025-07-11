import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi'
import './About.css'

const About = () => {
  const skills = [
    { name: 'React', level: 90, color: 'var(--neon-blue)' },
    { name: 'JavaScript', level: 85, color: 'var(--neon-yellow)' },
    { name: 'Node.js', level: 80, color: 'var(--neon-green)' },
    { name: 'HTML', level: 95, color: 'var(--neon-purple)' },
    { name: 'CSS/SCSS', level: 90, color: 'var(--neon-pink)' }
  ]



  const services = [
    {
      icon: <FiCode />,
      title: 'Build User Interfaces (UI)',
      description: 'Create clean, responsive, and visually appealing user interfaces'
    },
    {
      icon: <FiServer />,
      title: 'Make Interfaces Interactive',
      description: 'Add dynamic functionality and user interactions to web applications'
    },
    {
      icon: <FiLayout />,
      title: 'Implement Designs',
      description: 'Transform design mockups into functional web components'
    },
    {
      icon: <FiDatabase />,
      title: 'Ensure Good User Experience (UX)',
      description: 'Focus on usability, accessibility, and smooth user journeys'
    },
    {
      icon: <FiCode />,
      title: 'Connect to Backends/APIs',
      description: 'Integrate frontend applications with backend services and APIs'
    },
    {
      icon: <FiLayout />,
      title: 'Test and Debug',
      description: 'Ensure code quality through testing and debugging processes'
    },
    {
      icon: <FiServer />,
      title: 'Collaborate with Teams',
      description: 'Work effectively with designers, developers, and stakeholders'
    }
  ]

  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="cyberpunk-title text-neon-pink neon-glow">About Me</h1>
          <p className="about-subtitle">
            Beginner frontend designer with a passion for clean, responsive web design. I've built several school projects using HTML, CSS, JavaScript, and React, and I'm eager to keep learning and gain real-world experience.
          </p>
        </motion.div>

        <div className="about-content">
          {/* Bio Section */}
          <motion.section 
            className="bio-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <h2 className="section-title text-neon-blue">Who I Am</h2>
            <div className="bio-content">
              <p>
                Hi! I'm a passionate and detail-oriented frontend designer with a strong interest in creating clean, responsive, and user-friendly web interfaces. While I'm just starting out professionally, I've worked on several school and personal projects where I designed and built websites using HTML, CSS, JavaScript, and modern frameworks like React.
              </p>
              <p>
                I enjoy transforming ideas into visually appealing digital experiences, and I'm always eager to learn new tools, design systems, and best practices. Whether it's improving usability or experimenting with UI animations, I love the creative and technical challenges that come with frontend design.
              </p>
              <p>
                I'm currently looking for opportunities to apply my skills in real-world projects and grow as part of a collaborative team.
              </p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h2 className="section-title text-neon-green">Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            className="services-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h2 className="section-title text-neon-purple">What I Do</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card cyberpunk-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="service-icon text-neon-pink">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>


        </div>
      </div>
    </div>
  )
}

export default About 