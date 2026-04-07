import { X } from 'lucide-react';
import { useHelpMode } from '../../../utils/helpMode';

export default function HelpPanel() {
  const { helpMode, helpContent, showHelp } = useHelpMode();

  if (!helpMode) return null;

  return (
    <div className="help-panel">
      <div className="help-panel-header">
        <h3 className="help-panel-title">기획 안내</h3>
        <X
          className="help-panel-close"
          size={20}
          onClick={() => showHelp('')}
        />
      </div>
      <div className="help-panel-content">
        {helpContent ? (
          <div style={{ whiteSpace: 'pre-wrap' }}>{helpContent}</div>
        ) : (
          <div className="help-panel-placeholder">
            data-help 속성이 있는 요소를 클릭하면<br />
            기획 설명이 여기에 표시됩니다.
          </div>
        )}
      </div>
    </div>
  );
}
