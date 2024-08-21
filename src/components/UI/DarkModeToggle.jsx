import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
    };

    return (
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
