import React, { useState, ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className="absolute z-10 w-64 px-3 py-2 text-sm bg-slate-900 text-slate-200 rounded shadow-lg border border-slate-700 mt-2 left-1/2 transform -translate-x-1/2">
          {content}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-900 border-t border-l border-slate-700"></div>
        </div>
      )}
    </div>
  );
};