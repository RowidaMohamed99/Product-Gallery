import {  useState , useEffect} from "react"
// import { ThemeContext } from "../../Context/ThemeContext";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
useEffect(() => {
    // Apply class to HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Persist to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    console.log("Dark mode is", darkMode); // Verify in console
  }, [darkMode]);
const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
//     const [ darkMode, setDarkMode ] = useState(false);
//     useEffect(() => {
//     if (darkMode) {
//     document.documentElement.classList.add('dark')
//     } else {
//     document.documentElement.classList.remove('dark')
//     }
// }, [darkMode])
// console.log("Dark mode is", darkMode);
    return <>
    <nav className="bg-slate-800 shadow-lg fixed left-0 top-0  right-0 z-50">
            <div className="container p-3 flex items-center  justify-between">
                <h1 className="text-2xl font-bold text-pink-500">Products Gallery</h1>
                <button
                onClick={() => toggleDarkMode()}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md transition-all"
                >
                    {darkMode ? '☀' : '🌙'}
                </button>
            </div>
    </nav>
    </>
}
