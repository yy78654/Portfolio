import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiLayout } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'To-Do App',
      description: 'A modern and intuitive to-do application built with React, featuring task management, filtering, and local storage.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React', 'CSS3', 'Local Storage', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://yy78654.github.io/To-do/',
      category: 'web'
    },
    {
      id: 2,
      title: 'SeeTheWorld',
      description: 'An interactive travel and exploration application showcasing destinations and travel experiences.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React', 'JavaScript', 'CSS3', 'API Integration'],
      github: 'https://github.com',
      live: 'https://fluecs.github.io/stw',
      category: 'web'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with cyberpunk theme, featuring smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Vite'],
      github: 'https://github.com',
      live: 'https://yy78654.github.io/Portfolio',
      category: 'web'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FiCode /> },
    { id: 'web', name: 'Web Apps', icon: <FiLayout /> }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="cyberpunk-title text-neon-pink neon-glow">My Projects</h1>
          <p className="projects-subtitle">
            A collection of innovative projects showcasing my skills and creativity
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card cyberpunk-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="empty-icon">🚀</div>
            <h3>No projects found</h3>
            <p>Try selecting a different category or check back later for new projects!</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects 
