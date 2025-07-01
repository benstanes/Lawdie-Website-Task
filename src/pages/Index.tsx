
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { ChatInterface } from '@/components/ChatInterface';
import { Sidebar } from '@/components/Sidebar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SettingsSection } from '@/components/SettingsSection';
import { ResponsePage } from '@/components/ResponsePage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResponsePage, setShowResponsePage] = useState(false);
  const [currentResponse, setCurrentResponse] = useState(null);
  const [apiKey, setApiKey] = useState('');

  const handleSearch = async (query: string, mode: string) => {
    console.log('Search initiated:', { query, mode });
    setIsSearching(true);
    
    if (!apiKey) {
      alert('Please enter your OpenAI API key in the settings first.');
      setIsSearching(false);
      return;
    }

    try {
      // Check if it's a generic question (simple heuristic)
      const isGeneric = query.toLowerCase().includes('what is') || 
                       query.toLowerCase().includes('how to') ||
                       query.toLowerCase().includes('define') ||
                       query.length < 20;

      if (isGeneric) {
        // Open in new tab for generic questions
        const response = await fetchOpenAIResponse(query, mode);
        const newTab = window.open('', '_blank');
        newTab.document.write(`
          <html>
            <head><title>AI Response</title></head>
            <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
              <h1>Query: ${query}</h1>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
                <p>${response}</p>
              </div>
            </body>
          </html>
        `);
        setIsSearching(false);
      } else {
        // Show in response page for scripted/complex answers
        const response = await fetchOpenAIResponse(query, mode);
        const responseData = {
          id: Date.now(),
          query,
          mode,
          response,
          citations: [
            { id: 1, title: "OpenAI Response", url: "#", snippet: "AI-generated response" }
          ],
          timestamp: new Date().toLocaleTimeString()
        };
        
        setCurrentResponse(responseData);
        setShowResponsePage(true);
        setIsSearching(false);
      }
    } catch (error) {
      console.error('Search error:', error);
      alert('Error occurred while searching. Please check your API key.');
      setIsSearching(false);
    }
  };

  const fetchOpenAIResponse = async (query: string, mode: string) => {
    // Note: This is a placeholder implementation
    // You'll need to implement actual OpenAI API call here
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: mode === 'deep' ? 'Provide a detailed research-based response.' : 
                    mode === 'think' ? 'Think step by step and provide reasoning.' : 
                    'Provide a clear and concise response.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const renderActiveSection = () => {
    if (showResponsePage) {
      return <ResponsePage response={currentResponse} onBack={() => setShowResponsePage(false)} />;
    }

    switch (activeSection) {
      case 'projects':
        return <ProjectsSection/>;
      case 'settings':
        return <SettingsSection apiKey={apiKey} onApiKeyChange={setApiKey} />;
      default:
        return (
          <div className="flex flex-col h-full justify-center items-center">
            <div className="w-full max-w-4xl px-6">
              <SearchBar onSearch={handleSearch} isSearching={isSearching} />
            </div>
            {messages.length > 0 && (
              <div className="flex-1 w-full">
                <ChatInterface messages={messages} isSearching={isSearching} />
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
      {/* Settings trigger button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
      >
        <Settings size={20} className="text-gray-600" />
      </button>

      {isSidebarOpen && (
        <Sidebar 
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      )}
      
      <main className="flex-1 transition-all duration-300">
        <div className="h-screen overflow-hidden">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
