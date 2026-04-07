import { createContext, useContext, useState, ReactNode } from 'react';

interface HelpModeContextType {
  helpMode: boolean;
  helpContent: string;
  toggleHelpMode: () => void;
  showHelp: (content: string) => void;
}

const HelpModeContext = createContext<HelpModeContextType | undefined>(undefined);

export function HelpModeProvider({ children }: { children: ReactNode }) {
  const [helpMode, setHelpMode] = useState(false);
  const [helpContent, setHelpContent] = useState('');

  const toggleHelpMode = () => {
    setHelpMode(prev => !prev);
    if (helpMode) {
      setHelpContent('');
    }
  };

  const showHelp = (content: string) => {
    setHelpContent(content);
  };

  return (
    <HelpModeContext.Provider value={{ helpMode, helpContent, toggleHelpMode, showHelp }}>
      {children}
    </HelpModeContext.Provider>
  );
}

export function useHelpMode() {
  const context = useContext(HelpModeContext);
  if (!context) {
    throw new Error('useHelpMode must be used within HelpModeProvider');
  }
  return context;
}
