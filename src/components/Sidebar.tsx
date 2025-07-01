
import React from 'react';
import { Search, Settings, Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onToggle, 
  activeSection, 
  onSectionChange 
}) => {
  const menuItems = [
    { id: 'chat', label: 'Chat', icon: Search },
    { id: 'projects', label: 'Projects', icon: Search },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full bg-white/90 backdrop-blur-sm border-r border-white/20 transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-16'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {isOpen && (
              <h1 className="text-xl font-bold bg-gradient-to-r text-gray-700 bg-clip-text ">
                Lawdie Kiwi AI
              </h1>
            )}
            <button
              onClick={onToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  {isOpen && <span className="font-medium">{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Recent Chats - Placeholder */}
        {isOpen && (
          <div className="p-4 border-t border-gray-200 mt-auto">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Recent Chats</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                >
                  <p className="text-sm text-gray-700 truncate">Sample chat {i}</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
