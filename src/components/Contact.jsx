import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      const res = await fetch('https://formspree.io/f/mrbqrver', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form,
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-dark-800" ref={ref}>
      <div className="container-custom">
        <div className="section-title">
          <h2 className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In <span className="text-primary-500 dark:text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="mb-8 text-lg">
              I'm always open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out using the form or through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mr-4">
                  <Mail className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a 
                    href="mailto:rohitmondal0046@gmail.com" 
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    rohitmondal0046@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mr-4">
                  <MapPin className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p>Durgapur, West Bengal, IN</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
            >
              {['name', 'email', 'subject'].map((field, i) => (
                <div className="mb-4" key={i}>
                  <label htmlFor={field} className="block text-sm font-medium mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn ${
                  submitStatus === 'success' 
                    ? 'bg-green-500 hover:bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'btn-primary'
                } flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span>Message Sent!</span>
                ) : submitStatus === 'error' ? (
                  <span>Failed to Send</span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
