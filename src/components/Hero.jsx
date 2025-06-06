import React from 'react';
import Lottie from 'lottie-react';
import { ArrowDownCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import developerAnimation from '../animations/developer-animation.json';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-900 dark:to-dark-800 -z-10"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-bold mb-4 text-gradient bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Hello, I'm <span className="block">Rohit Mondal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-dark-500 dark:text-gray-300">
          I'm a full-stack developer with 2 years of experience using React and NodeJS. Reach out if you'd like to know more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Lottie
            animationData={developerAnimation}
            loop={true}
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
      
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} className="text-primary-500 dark:text-primary-400" />
      </button>
    </section>
  );
};

export default Hero;