// src/app.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <div className="card">
        <h1>Vite + React</h1>
        <div className="counter">
          <button onClick={() => setCount(count => count + 1)}>
            Count is {count}
          </button>
        </div>
        <p>
          Edit <code>src/app.jsx</code> to test HMR
        </p>
        <div className="theme-switcher">
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;