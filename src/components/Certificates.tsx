import { Award, BookOpen } from 'lucide-react';

export function Certificates() {
  const certifications = [
    {
      name: 'Certified in Cybersecurity (CC) Training',
      issuer: 'ICS2',
      date: '2025',
    },
    {
      name: 'CS50\'s Introduction to Cybersecurity',
      issuer: 'edX (HarvardX)',
      date: '2025',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-600" size={32} />
            <h3 className="text-gray-900">Professional Certificates</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-bold mb-1">{cert.name}</h4>
                    <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}