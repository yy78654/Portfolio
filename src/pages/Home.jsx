import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Animated Background */}
      <div className="cyberpunk-bg"></div>
      
      {/* Main Content */}
      <div className="home-content">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-section">
            {/* Glitch Title */}
            <motion.h1 
              className="hero-title cyberpunk-title text-neon-pink neon-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="glitch">Yoana</span>
              <br />
              <span className="text-neon-blue">Yordanova</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle cyberpunk-subtitle text-neon-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              FRONTEND DEVELOPER AND DESIGNER
            </motion.p>

            {/* Description */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Creating stunning user interfaces and seamless user experiences with modern web technologies. 
              Specializing in React, responsive design, and pixel-perfect implementations.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <Link to="/projects" className="cyberpunk-btn primary-btn">
                Explore My Work
                <FiArrowRight className="btn-icon" />
              </Link>
              
              <Link to="/contact" className="cyberpunk-btn secondary-btn">
                Contact Me
                <FiMail className="btn-icon" />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiGithub />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home 