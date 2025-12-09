import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yawar1229@gmail.com',
      link: 'mailto:yawar1229@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9419552792',
      link: 'tel:+919419552792',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Srinagar, Jammu and Kashmir',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="p-3 bg-blue-50 rounded-full mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <div className="text-gray-900 font-medium mb-1">{info.label}</div>
                
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-gray-600 text-sm">{info.value}</div>
                )}
              </div>
            );
          })}
        </div>

        {}
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-3">Open to Opportunities</h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities in Cyber Security and AI. 
          </p>
        </div>

      </div>
    </section>
  );
}