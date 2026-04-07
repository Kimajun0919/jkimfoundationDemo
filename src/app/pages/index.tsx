import Layout from '../components/layout/Layout';
import { useHelpMode } from '../../utils/helpMode';
import { Users, FileText, BarChart3, Bell } from 'lucide-react';

export default function Dashboard() {
  const { helpMode, showHelp } = useHelpMode();

  const handleCardClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="대시보드">
      <div className="stats-overview">
        <div
          className="stats-card"
          onClick={(e) => handleCardClick(e, '오늘 관리자 시스템에 접속한 총 방문자 수를 표시합니다.')}
          data-help="오늘 관리자 시스템에 접속한 총 방문자 수를 표시합니다."
        >
          <div className="stats-card-label">오늘 방문자</div>
          <div className="stats-card-value">1,234</div>
          <div className="stats-card-change positive">+6.7% from yesterday</div>
        </div>

        <div
          className="stats-card"
          onClick={(e) => handleCardClick(e, '등록된 총 콘텐츠 수를 표시합니다.')}
          data-help="등록된 총 콘텐츠 수를 표시합니다."
        >
          <div className="stats-card-label">총 콘텐츠</div>
          <div className="stats-card-value">567</div>
          <div className="stats-card-change positive">+12 this month</div>
        </div>

        <div
          className="stats-card"
          onClick={(e) => handleCardClick(e, '현재 활동 중인 엠버서더 수를 표시합니다.')}
          data-help="현재 활동 중인 엠버서더 수를 표시합니다."
        >
          <div className="stats-card-label">활동 엠버서더</div>
          <div className="stats-card-value">45</div>
          <div className="stats-card-change positive">+3 this month</div>
        </div>

        <div
          className="stats-card"
          onClick={(e) => handleCardClick(e, '확인되지 않은 공지사항 수를 표시합니다.')}
          data-help="확인되지 않은 공지사항 수를 표시합니다."
        >
          <div className="stats-card-label">미확인 공지</div>
          <div className="stats-card-value">3</div>
          <div className="stats-card-change">Needs attention</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">빠른 접근</h2>
          <p className="card-description">자주 사용하는 메뉴로 빠르게 이동할 수 있습니다</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <a href="/ambassador-list" className="card" style={{ textDecoration: 'none', padding: '20px', textAlign: 'center' }}>
            <Users size={32} style={{ margin: '0 auto 12px', color: '#666' }} />
            <div style={{ fontWeight: 600 }}>엠버서더 관리</div>
          </a>
          <a href="/news-list" className="card" style={{ textDecoration: 'none', padding: '20px', textAlign: 'center' }}>
            <FileText size={32} style={{ margin: '0 auto 12px', color: '#666' }} />
            <div style={{ fontWeight: 600 }}>포토뉴스</div>
          </a>
          <a href="/stats" className="card" style={{ textDecoration: 'none', padding: '20px', textAlign: 'center' }}>
            <BarChart3 size={32} style={{ margin: '0 auto 12px', color: '#666' }} />
            <div style={{ fontWeight: 600 }}>통계</div>
          </a>
          <a href="/notice-list" className="card" style={{ textDecoration: 'none', padding: '20px', textAlign: 'center' }}>
            <Bell size={32} style={{ margin: '0 auto 12px', color: '#666' }} />
            <div style={{ fontWeight: 600 }}>공지사항</div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
