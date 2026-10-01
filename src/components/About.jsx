import { Download, Github, Linkedin, Mail, Code2, Award, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: Code2,
      label: 'Projects Built',
      value: '4',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      label: 'Certifications',
      value: '5',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShieldCheck,
      label: 'Core Focus',
      value: 'CyberSec & AI',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: GraduationCap,
      label: 'Status',
      value: 'Graduate',
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section id="about" className="relative pt-28 pb-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-gray-50/50">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-blue-100 text-blue-600 rounded-full mb-6 text-xs font-semibold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Computer Science & Engineering Graduate
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Yawer Nazir</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Computer Science and Engineering graduate interested in cybersecurity, artificial intelligence and quantum cryptography. Experience spans machine learning research, secure systems, software development and embedded applications, with a focus on applying computational methods to practical problems and building reliable, intelligent technologies.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/CV_Yawer.pdf"
                download="Yawer_Nazir_CV.pdf"
                className="btn-primary"
              >
                <Download size={18} />
                Download CV
              </a>

              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary group"
              >
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-2">Connect:</span>
              <a
                href="https://github.com/yawer-1229"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/yawer-nazir-213576250"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:yawar1229@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="card p-6 hover-lift bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col justify-between"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} shadow-sm mb-4`}>
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-1">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
