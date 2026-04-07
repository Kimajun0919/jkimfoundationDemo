import { Bold, Italic, List, Link as LinkIcon, Image } from 'lucide-react';
import { useState } from 'react';
import { useHelpMode } from '../../../utils/helpMode';

interface RichEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  helpText?: string;
}

export default function RichEditor({ value = '', onChange, helpText }: RichEditorProps) {
  const [content, setContent] = useState(value);
  const { helpMode, showHelp } = useHelpMode();

  const handleClick = (e: React.MouseEvent) => {
    if (helpMode && helpText) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <div className="rich-editor" onClick={handleClick} data-help={helpText}>
      <div className="rich-editor-toolbar">
        <button className="rich-editor-btn" type="button">
          <Bold size={16} />
        </button>
        <button className="rich-editor-btn" type="button">
          <Italic size={16} />
        </button>
        <button className="rich-editor-btn" type="button">
          <List size={16} />
        </button>
        <button className="rich-editor-btn" type="button">
          <LinkIcon size={16} />
        </button>
        <button className="rich-editor-btn" type="button">
          <Image size={16} />
        </button>
      </div>
      <div
        className="rich-editor-content"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => {
          const newContent = e.currentTarget.textContent || '';
          setContent(newContent);
          onChange?.(newContent);
        }}
      >
        {content}
      </div>
    </div>
  );
}
