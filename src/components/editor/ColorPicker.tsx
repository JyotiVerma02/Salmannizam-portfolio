// components/editor/ColorPicker.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Palette } from 'lucide-react';

interface ColorPickerProps {
  editor: any;
}

export default function ColorPicker({ editor }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState('#000000');
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    editor.chain().focus().setColor(color.hex).run();
  };

  return (
    <div className="color-picker-container" ref={pickerRef}>
      <button
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setShowPicker(!showPicker)}
        className="toolbar-btn"
        type="button"
        title="Text Color"
        style={{ 
          background: color !== '#000000' ? color : 'transparent',
          borderColor: color !== '#000000' ? color : 'transparent',
        }}
      >
        <Palette size={16} />
      </button>

      {showPicker && (
        <div className="color-picker-popover">
          <div className="color-picker-wrapper">
            <ChromePicker
              color={color}
              onChange={handleColorChange}
              disableAlpha
            />
          </div>
        </div>
      )}
    </div>
  );
}