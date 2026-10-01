import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
  const certifications = [
    {
      name: 'Certified in Cybersecurity (CC) Training',
      issuer: 'ISC²',
      date: '2025',
      color: 'from-green-500 to-emerald-500',
      url: '#',
    },
    {
      name: "CS50's Introduction to Cybersecurity",
      issuer: 'Harvard University (edX)',
      date: '2025',
      color: 'from-red-500 to-rose-500',
      url: '#',
    },
    {
      name: 'Building RAG Agents with LLMs',
      issuer: 'NVIDIA',
      date: '2025',
      color: 'from-green-400 to-lime-500',
      url: '#',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Certifications</h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="section-subheading mx-auto">
            Professional certifications demonstrating expertise and continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card p-6 hover-lift animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${cert.color} mb-4`}>
                <Award className="text-white" size={22} />
              </div>

              {/* Content */}
              <h3 className="text-title text-gray-900 mb-2 leading-tight">{cert.name}</h3>
              <p className="text-sm font-semibold text-blue-600 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>

              {/* Hover indicator */}
              <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                  <ExternalLink size={14} />
                  View Certificate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}