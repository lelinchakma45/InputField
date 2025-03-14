import { useState } from 'react'

const InputField = ({ 
  value, 
  onChange, 
  placeholder = "Enter text...", 
  label = "Input",
  type = "text"
}) => {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <div className="mb-4">
      <label 
        className="block text-gray-700 text-sm font-medium mb-2" 
        htmlFor="input-field"
      >
        {label}
      </label>
      
      <div className={`relative rounded-md shadow-sm transition-all duration-200 ${
        isFocused ? 'ring-2 ring-primary' : ''
      }`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="bi bi-pencil-fill text-gray-400"></i>
        </div>
        
        <input
          id="input-field"
          type={type}
          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-0 text-gray-700"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {value && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            onClick={() => onChange('')}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        )}
      </div>
      
      <div className="mt-1 text-xs text-gray-500">
        {value.length > 0 ? `${value.length} characters` : 'Enter your text above'}
      </div>
    </div>
  )
}

export default InputField
