import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'MediChain AI',
      description: 'MediChain AI integrates AI-driven tools and blockchain to address challenges in the healthcare industry.',
      image: '/medichainImg.png',
      tags: ['React', 'TailwindCSS', 'Node.js', 'MongoDB', 'TensorFlow.js'],
      liveUrl: '',
      githubUrl: 'https://github.com/Rohit-Mondal-46/medichain-ai',
    },
    {
      id: 2,
      title: ' GreenRide',
      description: 'GreenRide helps users find eco-friendly routes by calculating the AQI (Air Quality Index).',
      image: '/greenrideImg.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://green-ride-one.vercel.app/',
      githubUrl: 'https://github.com/Rohit-Mondal-46/GreenRide.git',
    },
    
    {
      id: 3,
      title: 'Upsc Brain',
      description: 'An AI-powered platform to assist UPSC aspirants in preparing for exams.',
      image: '/upscImg.png',
      tags: ['Next.js', 'Gemini API', 'Tailwind CSS'],
      liveUrl: 'https://upsc-brain-kappa.vercel.app/',
      githubUrl: 'https://github.com/SahilGhosh12345/upsc-brain.git',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section bg-white dark:bg-dark-900" ref={ref}>
      <div className="container-custom">
        <div className="section-title">
          <h2 className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="text-primary-500 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative overflow-hidden rounded-xl shadow-xl aspect-video bg-gray-200 dark:bg-dark-700">
              <img 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <div className="flex gap-2 mb-3">
                    {projects[currentIndex].tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-primary-500/80 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {projects[currentIndex].liveUrl && (
                      <a 
                        href={projects[currentIndex].liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-dark-800 rounded-full hover:bg-primary-500 hover:text-white transition-all"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {projects[currentIndex].githubUrl && (
                      <a 
                        href={projects[currentIndex].githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-dark-800 rounded-full hover:bg-primary-500 hover:text-white transition-all"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-gray-300 dark:bg-dark-600'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              {projects[currentIndex].title}
            </h3>
            <p className="text-lg mb-6">
              {projects[currentIndex].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[currentIndex].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {projects[currentIndex].liveUrl && (
                <a
                  href={projects[currentIndex].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live
                </a>
              )}
              {projects[currentIndex].githubUrl && (
                <a
                  href={projects[currentIndex].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Source Code
                </a>
              )}
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} className="text-primary-600 dark:text-primary-400" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={24} className="text-primary-600 dark:text-primary-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;