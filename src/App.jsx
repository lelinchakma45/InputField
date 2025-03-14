import { useState } from 'react'
import InputField from './components/InputField'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          <i className="bi bi-input-cursor-text mr-2"></i>
          React Input Demo
        </h1>
        
        <InputField 
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something here..."
          label="Input Field"
        />
        
        {inputValue && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Input Value:</h2>
            <p className="text-gray-800 break-words">{inputValue}</p>
          </div>
        )}
      </div>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        Designed by WebSparks AI &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
