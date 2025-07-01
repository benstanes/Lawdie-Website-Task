import React, { useState } from 'react';
import { Search, Zap, Brain } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, mode: string) => void;
  isSearching: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('deep');

  const [Research, setResearch] = useState({
    theme: 'light',
    language: 'english',
    citationsEnabled: true,
    deepResearchDefault: true,
    autoSave: true,
    notifications: false // default OFF
  });

  const [Think, setThink] = useState({
    theme: 'light',
    language: 'english',
    citationsEnabled: true,
    deepResearchDefault: false,
    autoSave: true,
    notifications: false // default OFF
  });

  const handleResearchChange = (key: string, value: any) => {
    setResearch(prev => ({ ...prev, [key]: value }));
  };

  const handleThinkChange = (key: string, value: any) => {
    setThink(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query, selectedMode);
      setQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className='left-0 gap-4 text-3xl font-bold px-4 py-2 text-center text-black-500'>Lawdie Kiwi AI</div>
      <div className='gap-4 text-3xl px-4 py-2 text-center text-gray-500'>How can I Help you today?</div>
      {/* Search Input */}
      <div className="relative">
        <div className={`flex items-center bg-white rounded-2xl shadow-lg transition-all duration-300 ${
          isSearching ? 'ring-2 ring-blue-400 shadow-xl' : 'hover:shadow-xl'
        }`}>
          
          {/* Search Button on Left */}
          <button
            onClick={handleSubmit}
            disabled={!query.trim() || isSearching}
            className={`ml-4 p-2 rounded-full transition-all duration-200 ${
              query.trim() && !isSearching
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search size={20} />
            )}
          </button>

          {/* Textarea */}
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What do you want to know?"
            className="w-full px-4 py-4 bg-transparent resize-none rounded-2xl focus:outline-none text-gray-800 placeholder-gray-500"
            rows={1}
            style={{ minHeight: '60px' }}
            disabled={isSearching}
          />
        </div>

        {/* Search Animation Overlay */}
        {isSearching && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 rounded-2xl animate-pulse" />
        )}
      </div>

      {/* Mode Selection */}
      <div className="flex p-6 justify-center gap-3 mb-6">
        {/* Deep Research */}
        <button
          onClick={() => setSelectedMode('deep')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
        >
          <Zap size={16} />
          Deep Research
        </button>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={Research.notifications}
            onChange={(e) => handleResearchChange('notifications', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
        </label>

        {/* Think Mode */}
        <button
          onClick={() => setSelectedMode('think')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
        >
          <Brain size={16} />
          Think Mode
        </button>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={Think.notifications}
            onChange={(e) => handleThinkChange('notifications', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
        </label>
      </div>
    </div>
  );
};
