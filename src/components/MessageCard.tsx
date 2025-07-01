
import React from 'react';

interface Citation {
  id: number;
  title: string;
  url: string;
  snippet: string;
}

interface Message {
  id: number;
  query: string;
  mode: string;
  response: string;
  citations: Citation[];
  timestamp: string;
}

interface MessageCardProps {
  message: Message;
}

export const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
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
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Query */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getModeColor(message.mode)}`}>
            {getModeLabel(message.mode)}
          </span>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{message.query}</h3>
      </div>

      {/* Response */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{message.response}</p>
      </div>

      {/* Citations */}
      {message.citations.length > 0 && (
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Sources</h4>
          <div className="grid gap-3">
            {message.citations.map((citation) => (
              <div
                key={citation.id}
                className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[24px] text-center">
                    {citation.id}
                  </span>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-800 text-sm mb-1">{citation.title}</h5>
                    <p className="text-xs text-gray-600">{citation.snippet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
