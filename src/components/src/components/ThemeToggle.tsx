// components/ThemeToggle.js
// "use client";

// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     const currentTheme = isDarkMode ? "dark-mode" : "light-mode";
//     document.body.className = currentTheme;
//   }, [isDarkMode]);

//   return (
//     <button onClick={toggleTheme}>
//       {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//     </button>
//   );
// };

// export default ThemeToggle;

"use client";

import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const currentTheme = isDarkMode ? "dark-mode" : "light-mode";
    document.body.className = currentTheme;
  }, [isDarkMode]);

  return (
    <button className="p-4  text-4xl font-bold" onClick={toggleTheme}>
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
