import { Code, Shield, Brain, Cloud } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Core Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL & Database Design', level: 85 },
      ],
    },
    {
      title: 'Cybersecurity & Systems',
      icon: Shield,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Network Security', level: 85 },
        { name: 'Cryptography', level: 80 },
        { name: 'Linux / Bash Scripting', level: 90 },
        { name: 'Computer Networks', level: 85 },
      ],
    },
    {
      title: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 78 },
        { name: 'TensorFlow / PyTorch', level: 75 },
        { name: 'NLP', level: 70 },
        { name: 'Data Structures & Algo', level: 88 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Google Cloud (GCP)', level: 82 },
        { name: 'Docker & Containers', level: 75 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'AWS (Basic)', level: 70 },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="section-subheading mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="card p-6 lg:p-8 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-title text-gray-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`,
                            transition: 'width 1s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}