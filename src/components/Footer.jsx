import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">My Portfolio</h3>
            <p className="mb-6">
              Creating meaningful digital experiences through creative problem-solving 
              and clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Rohit-Mondal-46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-primary-500 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/rohit-mondal-rm46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-primary-500 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/RohitMondal_46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-primary-500 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>rohitmondal0046@gmail.com</li>
              <li>Durgapur, West Bengal, IN</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Rohit. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ by Rohit Mondal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;