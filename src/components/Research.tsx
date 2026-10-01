import { BookOpen, FileText, Microscope, Calendar, UserCheck, Award } from 'lucide-react';

export function Research() {
  const publications = [
    {
      type: 'Accepted Paper',
      title: 'An Efficient Graph-Mamba Network for EEG Auditory Attention Decoding',
      venue: 'IEEE IC2E3 2026',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      type: 'Submitted Manuscript',
      title: 'Cross-Stimulus EEG Representation Alignment for Auditory Attention Decoding Across Sessions',
      venue: 'ICASSP 2027',
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  ];

  return (
    <section id="research" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Microscope size={14} />
            Academic & Applied Research
          </div>
          <h2 className="section-heading mb-4">Research Experience & Publications</h2>
          <div className="section-divider mb-4" />
          <p className="section-subheading">
            Investigating multimodal deep learning, EEG representation alignment, and biometrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="card p-8 border border-gray-100 shadow-sm rounded-2xl bg-gradient-to-br from-gray-50/80 to-white hover-lift flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Research Intern</h3>
                    <p className="text-indigo-600 font-semibold text-sm">Indian Institute of Technology (IIT) Jammu</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-gray-600 rounded-lg text-xs font-medium border border-gray-200 shadow-2xs">
                  <Calendar size={13} className="text-indigo-500" />
                  Dec 2025 - Present
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-indigo-50/60 rounded-lg text-xs font-medium text-gray-700 border border-indigo-100">
                <UserCheck size={15} className="text-indigo-600" />
                <span>Advisor: <strong className="text-gray-900">Dr. Karan Nathwani</strong></span>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <p>Developed deep learning models for multimodal classification using MM-AAD dataset.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <p>Built a Cross-Stimulus Autoencoder (CSAE) to align audiovisual EEG representations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <p>Worked with iris and voice datasets for multimodal biometrics.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 border border-gray-100 shadow-sm rounded-2xl bg-white hover-lift flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Publications</h3>
                  <p className="text-gray-500 text-sm">Peer-reviewed papers & conference manuscripts</p>
                </div>
              </div>

              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <div key={idx} className="p-5 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all duration-200">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${pub.badgeStyle}`}>
                        <Award size={12} />
                        {pub.type}
                      </span>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{pub.venue}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm leading-snug mb-1 flex items-start gap-2">
                      <FileText size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>"{pub.title}"</span>
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
