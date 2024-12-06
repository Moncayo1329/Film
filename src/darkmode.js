import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const preferredMode = localStorage.getItem('darkMode');
    setIsDarkMode(preferredMode === 'true');
  }, []);

  const toggleMode = () => {
    const updatedMode = !isDarkMode;
    setIsDarkMode(updatedMode);
    localStorage.setItem('darkMode', updatedMode);
    applyMode(updatedMode);
  };

  const applyMode = (isDarkMode) => {
    const root = document.documentElement;
    root.style.setProperty('--background', isDarkMode ? '#121212' : '#FFFFFF');
    root.style.setProperty('--text-color', isDarkMode ? '#FFFFFF' : 'rgb(87, 83, 78)');
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;