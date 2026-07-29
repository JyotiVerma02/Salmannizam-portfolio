"use client";

import { useEffect, useRef, useState } from "react";
import { ChromePicker, type ColorResult } from "react-color";
import { Palette } from "lucide-react";
import type { Editor } from "@tiptap/react";

type ColorPickerProps = {
  editor: Editor;
};

export default function ColorPicker({ editor }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState("#000000");
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorChange = (nextColor: ColorResult) => {
    setColor(nextColor.hex);
    editor.chain().focus().setColor(nextColor.hex).run();
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
          background: color !== "#000000" ? color : "transparent",
          borderColor: color !== "#000000" ? color : "transparent",
        }}
      >
        <Palette size={16} />
      </button>

      {showPicker && (
        <div className="color-picker-popover">
          <div className="color-picker-wrapper">
            <ChromePicker color={color} onChange={handleColorChange} disableAlpha />
          </div>
        </div>
      )}
    </div>
  );
}