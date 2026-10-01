import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yawar1229@gmail.com',
      link: 'mailto:yawar1229@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9419552792',
      link: 'tel:+919419552792',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Srinagar, J&K, India',
      link: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Get In Touch</h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="section-subheading mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="card p-6 text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${info.color} mx-auto mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-2">{info.label}</div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-sm text-gray-600">{info.value}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="relative overflow-hidden rounded-2xl p-8 lg:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%)' }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Send size={16} className="text-white" />
              <span className="text-sm font-medium text-white">Open to Opportunities</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-blue-100 max-w-lg mx-auto mb-8">
              I'm currently looking for internship opportunities in Cybersecurity and AI.
              If you have a project or opportunity that matches my skills, I'd love to hear from you!
            </p>

            <a
              href="mailto:yawar1229@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}