import { Github, Terminal } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Kernel Watchtower: eBPF Rootkit Detector',
      description: 'A real-time security observability engine executing in Linux Kernel Ring 0. It uses eBPF probes to intercept malicious syscalls (execve, openat, unlinkat) and detects rootkits like Diamorphine before they can hide.',
      tags: ['C', 'eBPF', 'Python', 'BCC', 'Linux Kernel', 'Forensics'],
      githubUrl: 'https://github.com/yawer-1229', 
      icon: Terminal,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

       
        <div className="grid md:grid-cols-1 max-w-2xl w-full">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="pt-6 border-t border-gray-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 font-semibold transition-colors"
                    >
                      <Github size={20} />
                      View Source Code
                    </a>
                  </div>

                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}