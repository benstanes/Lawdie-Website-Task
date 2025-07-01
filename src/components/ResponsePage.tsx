
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Citation {
  id: number;
  title: string;
  url: string;
  snippet: string;
}

interface Response {
  id: number;
  query: string;
  mode: string;
  response: string;
  citations: Citation[];
  timestamp: string;
}

interface ResponsePageProps {
  response: Response;
  onBack: () => void;
}

export const ResponsePage: React.FC<ResponsePageProps> = ({ response, onBack }) => {
  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'deep': return 'text-purple-600 bg-purple-100';
      case 'think': return 'text-emerald-600 bg-emerald-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case 'deep': return 'Deep Research';
      case 'think': return 'Think Mode';
      default: return 'Normal';
    }
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back to Search
        </button>

        {/* Response Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
          {/* Query Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getModeColor(response.mode)}`}>
                {getModeLabel(response.mode)}
              </span>
              <span className="text-xs text-gray-500">{response.timestamp}</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{response.query}</h1>
          </div>

          {/* Response Content */}
          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                {response.response}
              </p>
            </div>
          </div>

          {/* Sources/Citations */}
          {response.citations && response.citations.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources</h3>
              <div className="grid gap-4">
                {response.citations.map((citation) => (
                  <div
                    key={citation.id}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full min-w-[32px] text-center">
                        {citation.id}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-2">{citation.title}</h4>
                        <p className="text-sm text-gray-600">{citation.snippet}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
