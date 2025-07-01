import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';

interface ProjectsSectionProps {
  onBackToChat: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onBackToChat }) => {
  const sampleProjects = [
    {
      id: 1,
      title: "case",
      description: "case",
      tags: [],
      lastUpdated: "Updated 10 hours ago",
    },
  ];

  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header with back arrow */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToChat}
              className="p-2 rounded-full hover:bg-gray-200 transition"
              aria-label="Back to Chat"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          </div>
          <div>
            <button className="bg-white items-center text-black px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-white transition-colors duration-200 font-medium text-sm">
              + New Project
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-3/5 pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-gray-500">{project.lastUpdated}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
