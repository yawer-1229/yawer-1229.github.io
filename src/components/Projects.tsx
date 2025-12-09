import { FolderGit2, Sparkles } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <div className="relative mb-6">
            <div className="p-5 bg-blue-100 rounded-full">
              <FolderGit2 className="w-12 h-12 text-blue-600" />
            </div>
            <div className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow-sm">
              <Sparkles className="w-5 h-5 text-yellow-500" fill="currentColor" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Projects Uploading Soon
          </h3>
          
          <p className="text-gray-600 text-center max-w-lg px-4">
            I am currently curating my portfolio to showcase my best work. Check back shortly for updates!
          </p>
        </div>
      </div>
    </section>
  );
}