import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-surface-elevated rounded-lg p-6 shadow-card">
            <h2 className="text-xl font-semibold text-text-primary mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Email</p>
                  <a href="mailto:nikhil@example.com" className="text-primary hover:text-primary/80 transition-colors">
                    nikhil@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Phone</p>
                  <a href="tel:+1234567890" className="text-primary hover:text-primary/80 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Location</p>
                  <p className="text-text-secondary">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-elevated rounded-lg p-6 shadow-card">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Send a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;