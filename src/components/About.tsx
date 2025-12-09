import React from 'react';
import { Download, Github, Linkedin, Mail, Code2, Award, ShieldCheck, GraduationCap } from 'lucide-react';

export function About() {
  const stats = [
    { 
      icon: Code2, 
      label: 'Projects Built', 
      value: '4' 
    },
    { 
      icon: Award, 
      label: 'Certifications', 
      value: '7' 
    },
    { 
      icon: ShieldCheck, 
      label: 'Core Focus', 
      value: 'CyberSec' 
    },
    { 
      icon: GraduationCap, 
      label: 'Status', 
      value: 'Student' 
    },
  ];

  return (
    <section
      id="about" 
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6 font-medium text-sm">
              Computer Science Engineering Student
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I&apos;m <span className="text-blue-600">Yawer Nazir</span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed"> 
             I am a Computer Science student Focusing on cybersecurity and machine learning. I am learning about threat detection, intrusion prevention, and AI-enhanced security systems through my coursework, projects, and self-study. My goal is to design secure and innovative solutions to address the challenges in technology.
            </p>

           

<div className="flex flex-wrap gap-4 mb-8">
  {}
  <a 
    href="/cv.pdf" 
    download="Yawer_Nazir_CV.pdf"
    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
  >
    <Download size={20} />
    Download CV
  </a>

  <button 
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
  >
    View Projects
  </button>
</div>

            <div className="flex gap-4">
              <a
                href="https://github.com/yawer-1229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/yawer-nazir-213576250"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:yawar1229@gmail.com"
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-100 border border-blue-50 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-start justify-center"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
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