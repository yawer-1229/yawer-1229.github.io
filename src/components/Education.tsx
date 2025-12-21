import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Central University of Kashmir',
      period: '2022 - Present',
      gpa: '7.3/10',
      description: 'Specialization in Cyber Security and Artificial Intelligence. Relevant coursework includes Network Security, Data Structures, Algorithms, Machine Learning, Database Systems, and Web Development.',
      achievements: [
        'Institute Ambassador for DEFCON Srinagar Conference 2025',
        'Head of the university Research Club',
        'Participated in coding competitions and hackathons',
      ],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Space Age Higher Secondary',
      period: '2020 - 2022',
      gpa: '8.2/10',
      description: 'Focused on Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      degree: 'Secondary School Education',
      institution: 'New Generation Public School',
      period: '2018 - 2020',
      gpa: '9.8/10',
      description: 'Focused on Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-600" size={32} />
            <h3 className="text-gray-900">Academic Background</h3>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 mb-1">{edu.institution}</p>
                  </div>
                  <div className="text-gray-500 md:text-right mt-2 md:mt-0">
                    {edu.period && <div>{edu.period}</div>}
                    <div className="text-gray-900">GPA: {edu.gpa}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{edu.description}</p>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <div className="text-gray-700 mb-2">Key Achievements:</div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}