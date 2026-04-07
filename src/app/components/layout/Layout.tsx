import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useHelpMode } from '../../../utils/helpMode';

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

export default function Layout({ pageTitle, children }: LayoutProps) {
  const { helpMode } = useHelpMode();

  return (
    <div className={`layout-wrapper ${helpMode ? 'help-mode-active' : ''}`}>
      <Sidebar />
      <div className="main-container">
        <Header pageTitle={pageTitle} />
        <main className="main-content">
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
