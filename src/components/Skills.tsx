export function Skills() {
  const skillCategories = [
    {
      title: 'Core Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL & Database Design', level: 85 },
      ],
    },
    {
      title: 'Cybersecurity & Systems',
      skills: [
        { name: 'Network Security', level: 85 },
        { name: 'Cryptography', level: 80 },
        { name: 'Linux / Bash Scripting', level: 90 },
        { name: 'Computer Networks', level: 85 },
      ],
    },
    {
      title: 'Artificial Intelligence',
      skills: [
        { name: 'Machine Learning', level: 78 },
        { name: 'TensorFlow / PyTorch', level: 75 },
        { name: 'NLP (Natural Language Proc.)', level: 70 },
        { name: 'Data Structures & Algo', level: 88 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Google Cloud (GCP)', level: 82 },
        { name: 'Docker & Containers', level: 75 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'AWS (Basic)', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}