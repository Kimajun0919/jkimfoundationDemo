import { Upload, X } from 'lucide-react';
import { useState } from 'react';
import { useHelpMode } from '../../../utils/helpMode';

interface FileUploadProps {
  label: string;
  accept?: string;
  multiple?: boolean;
  helpText?: string;
}

export default function FileUpload({ label, accept, multiple, helpText }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const { helpMode, showHelp } = useHelpMode();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleClick = (e: React.MouseEvent) => {
    if (helpMode && helpText) {
      e.preventDefault();
      showHelp(helpText);
    }
  };

  return (
    <div className="form-group" onClick={handleClick} data-help={helpText}>
      <label className="form-label">{label}</label>
      <div className="file-upload">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          id="file-upload-input"
        />
        <label htmlFor="file-upload-input" style={{ cursor: 'pointer', display: 'block' }}>
          <Upload className="file-upload-icon" size={32} />
          <div className="file-upload-text">클릭하여 파일 선택</div>
          <div className="file-upload-hint">또는 파일을 드래그하세요</div>
        </label>
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <span className="file-item-name">{file.name}</span>
              <X
                className="file-item-remove"
                size={16}
                onClick={() => removeFile(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
