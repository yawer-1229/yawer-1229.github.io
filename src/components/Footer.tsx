import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yawer-1229',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/yawer-nazir-213576250',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:yawar1229@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-blue-400">Yawer</span>
              <span className="text-xl font-semibold text-white">Nazir</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              CSE Student passionate about Cybersecurity and AI. Building secure and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Yawer Nazir. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> in Kashmir
          </p>
        </div>
      </div>
    </footer>
  );
}