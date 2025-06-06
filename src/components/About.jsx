import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase as BriefcaseBusiness, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-white dark:bg-dark-900" ref={ref}>
      <div className="container-custom">
        <div className="section-title">
          <h2 className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-primary-500 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} space-y-6`}>
            <p className="text-lg">
              Hi! I'm a passionate developer who loves building web applications that make a real impact. 
              I enjoy digging into complex problems and turning ideas into clean, functional code that users actually enjoy.
            </p>
            <p className="text-lg">
            My journey into tech started with a simple curiosity about how things work—and that curiosity has only grown. It’s what keeps me learning and staying up-to-date in the fast-moving world of web development.             </p>
            <p className="text-lg">
            Outside of coding, I’m usually exploring new tools and technologies, contributing to open-source projects, or just spending time outdoors to recharge.            </p>
            
            <div className="pt-4">
              <a href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Experience & Education</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                      <GraduationCap className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Computer Science Degree</h4>
                    <p className="text-gray-600 dark:text-gray-400">NSHM Knowledge Campus • 2022 - 2026</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                      <BriefcaseBusiness className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Evangelist @ Hack4Bengal</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hack4Bengal Season 4</p>
                  </div>
                </div>
                
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                      <Award className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">JWOC 2025</h4>
                    <p className="text-gray-600 dark:text-gray-400">Contributor  • 8 PRs Merged</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;