import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function texter() {
  const response = await fetch("https://project-orpin-chi.vercel.app/")
  const txt = await response.text();
  return txt;
}

function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await texter();  // Wait for the async data
        setText(result);                // Set the data in state
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };
    fetchData(); // Call the function to fetch data
      }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>{text}</h1>
      </div>
    </>
  )
}

export default App
