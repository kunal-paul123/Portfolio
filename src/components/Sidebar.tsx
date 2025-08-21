import { useState } from 'react';
import { Home, User, FolderOpen, FileText, Mail, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'articles', label: 'Articles', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface-elevated shadow-card rounded-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 bg-sidebar border-r border-sidebar-border
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-sidebar-accent">
              <img
                src={profileImage}
                alt="Nikhil Bhatt"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-sidebar-foreground mb-1">
              Nikhil Bhatt
            </h2>
            <p className="text-sidebar-foreground/70 text-sm">Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      onSectionChange(id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left
                      transition-all duration-200 ease-in-out
                      ${activeSection === id
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-sidebar-foreground/70 mb-4">Socials</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 px-4 py-2 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-200"
                >
                  <Icon size={16} />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;