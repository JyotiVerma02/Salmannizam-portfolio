// components/editor/Toolbar.tsx
'use client';

import { Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  Table as TableIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Undo2,
  Redo2,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
} from 'lucide-react';
// ✅ Import the ColorPicker component
import ColorPicker from './ColorPicker';

interface ToolbarProps {
  editor: Editor | null;
}

export default function Toolbar({ editor }: ToolbarProps) {
  if (!editor) {
    return null;
  }

  // Helper to add link
  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter the URL', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  // Helper to add image
  const addImage = () => {
    const url = window.prompt('Enter the image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  // Helper to add table
  const addTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  return (
    <div className="toolbar">
      {/* Text Formatting Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`toolbar-btn ${editor.isActive('bold') ? 'is-active' : ''}`}
          type="button"
          title="Bold (Ctrl+B)"
        >
          <Bold size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`toolbar-btn ${editor.isActive('italic') ? 'is-active' : ''}`}
          type="button"
          title="Italic (Ctrl+I)"
        >
          <Italic size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`toolbar-btn ${editor.isActive('underline') ? 'is-active' : ''}`}
          type="button"
          title="Underline (Ctrl+U)"
        >
          <UnderlineIcon size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`toolbar-btn ${editor.isActive('strike') ? 'is-active' : ''}`}
          type="button"
          title="Strikethrough"
        >
          <Strikethrough size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Headings Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`toolbar-btn ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
          type="button"
          title="Heading 1"
        >
          <Heading1 size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`toolbar-btn ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
          type="button"
          title="Heading 2"
        >
          <Heading2 size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`toolbar-btn ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
          type="button"
          title="Heading 3"
        >
          <Heading3 size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Lists Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`toolbar-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`}
          type="button"
          title="Bullet List"
        >
          <List size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`toolbar-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`}
          type="button"
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Block Elements Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`toolbar-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}
          type="button"
          title="Blockquote"
        >
          <Quote size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`toolbar-btn ${editor.isActive('codeBlock') ? 'is-active' : ''}`}
          type="button"
          title="Code Block"
        >
          <Code size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Alignment Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
          type="button"
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
          type="button"
          title="Align Center"
        >
          <AlignCenter size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
          type="button"
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}
          type="button"
          title="Justify"
        >
          <AlignJustify size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Links & Media Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={setLink}
          className={`toolbar-btn ${editor.isActive('link') ? 'is-active' : ''}`}
          type="button"
          title="Add Link"
        >
          <LinkIcon size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={addImage}
          className="toolbar-btn"
          type="button"
          title="Add Image"
        >
          <ImageIcon size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Table Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={addTable}
          className="toolbar-btn"
          type="button"
          title="Insert Table"
        >
          <TableIcon size={16} />
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Highlight & Color Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`toolbar-btn ${editor.isActive('highlight') ? 'is-active' : ''}`}
          type="button"
          title="Highlight"
        >
          <Highlighter size={16} />
        </button>

        {/* ✅ Replace the old color button with the ColorPicker */}
        <ColorPicker editor={editor} />
      </div>

      <div className="toolbar-divider" />

      {/* Undo/Redo Group */}
      <div className="toolbar-group">
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().undo().run()}
          className="toolbar-btn"
          disabled={!editor.can().undo()}
          type="button"
          title="Undo"
        >
          <Undo2 size={16} />
        </button>

        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor.chain().focus().redo().run()}
          className="toolbar-btn"
          disabled={!editor.can().redo()}
          type="button"
          title="Redo"
        >
          <Redo2 size={16} />
        </button>
      </div>
    </div>
  );
}