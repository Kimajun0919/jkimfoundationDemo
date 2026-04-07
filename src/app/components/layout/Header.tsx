import { HelpCircle, User } from 'lucide-react';
import { useHelpMode } from '../../../utils/helpMode';

interface HeaderProps {
  pageTitle: string;
}

export default function Header({ pageTitle }: HeaderProps) {
  const { helpMode, toggleHelpMode } = useHelpMode();

  return (
    <header className="header">
      <h1 className="header-title">{pageTitle}</h1>
      <div className="header-actions">
        <button
          className={`btn btn-icon ${helpMode ? 'btn-primary' : 'btn-outline'}`}
          onClick={toggleHelpMode}
          title="기획 안내 모드"
        >
          <HelpCircle size={18} />
        </button>
        <button className="btn btn-outline btn-icon">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
