import { Github, ExternalLink, Terminal, ShieldAlert, Cloud, Cpu, Code2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Beyond Signatures: Semantic Intelligence Against Generative Malware Evolution',
      date: '2026',
      description: 'AI-based malware detector using Cross-Modal Transformer to analyze evolving threat patterns and synthetic malware behavior.',
      tags: ['PyTorch', 'Transformers', 'Xen', 'DRAKVUF', 'LibVMI'],
      githubUrl: 'https://github.com/yawer-1229',
      icon: ShieldAlert,
      featured: true,
      gradient: 'from-purple-600 via-indigo-600 to-blue-600'
    },
    {
      title: 'Cloud-Native Malware Analysis Lab',
      date: 'Oct 2025',
      description: 'Docker-based malware sandbox on GCP with ELK Stack visualizations.',
      tags: ['Docker', 'GCP', 'ELK Stack', 'Python'],
      githubUrl: 'https://github.com/yawer-1229',
      icon: Cloud,
      featured: false,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      title: 'Kernel Watchtower: eBPF-Based Rootkit Detection',
      date: 'May - Jun 2025',
      description: 'eBPF/BCC monitoring tool tracing syscalls to detect Linux rootkits and malicious system behavior.',
      tags: ['eBPF', 'BCC', 'Linux Kernel', 'Python'],
      githubUrl: 'https://github.com/yawer-1229',
      icon: Terminal,
      featured: false,
      gradient: 'from-red-500 via-rose-500 to-orange-500'
    },
    {
      title: 'Smart Parking Management System',
      date: 'Aug 2024',
      description: 'Arduino Uno prototype using HC-SR04 sensor for real-time space occupancy monitoring.',
      tags: ['Arduino', 'C++', 'Embedded Systems'],
      githubUrl: 'https://github.com/yawer-1229/Smart_Parking_System_IoT',
      icon: Cpu,
      featured: false,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 size={14} />
            Technical Portfolio
          </div>
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <div className="section-divider mb-4" />
          <p className="section-subheading">
            A selection of my technical work spanning cybersecurity, AI-driven malware detection, cloud infrastructure, and embedded systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="card p-7 hover-lift bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-md text-white flex-shrink-0`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-snug">{project.title}</h3>
                        <span className="text-xs font-medium text-gray-400 block mt-0.5">{project.date}</span>
                      </div>
                    </div>
                    {project.featured && (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 flex-shrink-0">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-blue-600 transition-colors group"
                    >
                      <Github size={16} />
                      View Source Code
                      <ExternalLink size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
