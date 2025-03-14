import { useState } from 'react'

const BackgroundSelector = ({ currentColor, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const colorOptions = [
    { name: 'Light Gray', value: '#F9FAFB' },
    { name: 'Light Blue', value: '#EFF6FF' },
    { name: 'Light Purple', value: '#F5F3FF' },
    { name: 'Light Pink', value: '#FDF2F8' },
    { name: 'Light Green', value: '#ECFDF5' },
    { name: 'Light Yellow', value: '#FFFBEB' },
    { name: 'Dark Blue', value: '#1E3A8A' },
    { name: 'Dark Purple', value: '#4C1D95' },
    { name: 'Dark Green', value: '#064E3B' },
    { name: 'Dark Gray', value: '#111827' }
  ]

  return (
    <div className="mt-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        Background Color
      </label>
      
      <div className="relative">
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <div 
              className="w-5 h-5 rounded-full mr-3 border border-gray-300" 
              style={{ backgroundColor: currentColor }}
            ></div>
            <span className="text-gray-700">
              {colorOptions.find(c => c.value === currentColor)?.name || 'Custom Color'}
            </span>
          </div>
          <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-gray-500`}></i>
        </button>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            <div className="p-2 grid grid-cols-5 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  className={`w-8 h-8 rounded-full border hover:scale-110 transition-transform ${
                    currentColor === color.value ? 'ring-2 ring-offset-2 ring-primary' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => {
                    onColorChange(color.value)
                    setIsOpen(false)
                  }}
                  title={color.name}
                ></button>
              ))}
            </div>
            
            <div className="p-2 border-t">
              <label className="block text-xs text-gray-500 mb-1">Custom Color</label>
              <input
                type="color"
                value={currentColor}
                onChange={(e) => onColorChange(e.target.value)}
                className="w-full h-8 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BackgroundSelector
