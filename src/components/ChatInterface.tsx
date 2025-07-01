
import React from 'react';
import { MessageCard } from '@/components/MessageCard';

interface Message {
  id: number;
  query: string;
  mode: string;
  response: string;
  citations: Array<{
    id: number;
    title: string;
    url: string;
    snippet: string;
  }>;
  timestamp: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  isSearching: boolean;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, isSearching }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
        
        {isSearching && (
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="text-gray-600 font-medium">Searching and analyzing...</span>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse w-1/2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
