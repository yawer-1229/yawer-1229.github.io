import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Central University of Kashmir',
      location: 'Ganderbal, J&K',
      period: '2022 - Present',
      percentage: '73%',
      description: 'Specialization in Cyber Security and Artificial Intelligence. Relevant coursework includes Network Security, Data Structures, Algorithms, Machine Learning, Database Systems, and Web Development.',
      achievements: [
        'Institute Ambassador for DEFCON Srinagar Conference 2025',
        'Head of the university Research Club',
        'Participated in coding competitions and hackathons',
      ],
      current: true,
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Space Age Higher Secondary',
      location: 'Srinagar, J&K',
      period: '2020 - 2022',
      percentage: '82%',
      description: 'Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
      current: false,
    },
    {
      degree: 'Secondary School Education',
      institution: 'New Generation Public School',
      location: 'Srinagar, J&K',
      period: '2018 - 2020',
      percentage: '98%',
      description: 'Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Education</h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="section-subheading mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-gray-200" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative md:pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white rounded-2xl border-2 border-blue-500 items-center justify-center shadow-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>

                {/* Card */}
                <div className={`card p-6 lg:p-8 ${edu.current ? 'border-l-4 border-l-blue-500' : ''}`}>
                  {/* Current badge */}
                  {edu.current && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-4">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                      Currently Pursuing
                    </span>
                  )}

                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-title text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      <div className="px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-lg">
                        {edu.percentage}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-body mb-4">{edu.description}</p>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                        <Trophy size={16} className="text-amber-500" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}