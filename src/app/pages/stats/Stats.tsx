import Layout from '../../components/layout/Layout';
import { stats } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { TrendingUp, Users, Eye } from 'lucide-react';

export default function Stats() {
  const { helpMode, showHelp } = useHelpMode();

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="접속통계">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '통계를 조회할 기간을 설정합니다. 일별, 주별, 월별로 필터링할 수 있습니다.')}
        data-help="통계를 조회할 기간을 설정합니다. 일별, 주별, 월별로 필터링할 수 있습니다."
      >
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">조회 기간</label>
            <div className="date-range">
              <input type="date" defaultValue="2026-04-01" />
              <span>~</span>
              <input type="date" defaultValue="2026-04-07" />
            </div>
          </div>
          <div className="filter-group">
            <label className="filter-label">조회 단위</label>
            <select className="form-select" style={{ width: '120px' }}>
              <option value="daily">일별</option>
              <option value="weekly">주별</option>
              <option value="monthly">월별</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>조회</button>
        </div>
      </div>

      <div
        className="stats-overview"
        onClick={(e) => handleClick(e, '오늘, 어제, 이번 달의 주요 통계 지표를 한눈에 확인할 수 있습니다.')}
        data-help="오늘, 어제, 이번 달의 주요 통계 지표를 한눈에 확인할 수 있습니다."
      >
        <div className="stats-card">
          <div className="stats-card-label">오늘 방문자</div>
          <div className="stats-card-value">{stats.today.visits.toLocaleString()}</div>
          <div className="stats-card-change positive">
            <TrendingUp size={14} style={{ marginRight: '4px' }} />
            +{Math.round(((stats.today.visits - stats.yesterday.visits) / stats.yesterday.visits) * 100)}%
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-label">오늘 페이지뷰</div>
          <div className="stats-card-value">{stats.today.pageviews.toLocaleString()}</div>
          <div className="stats-card-change positive">
            +{Math.round(((stats.today.pageviews - stats.yesterday.pageviews) / stats.yesterday.pageviews) * 100)}%
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-label">오늘 순 방문자</div>
          <div className="stats-card-value">{stats.today.uniqueVisitors.toLocaleString()}</div>
          <div className="stats-card-change positive">
            +{Math.round(((stats.today.uniqueVisitors - stats.yesterday.uniqueVisitors) / stats.yesterday.uniqueVisitors) * 100)}%
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-label">이번 달 총 방문</div>
          <div className="stats-card-value">{stats.thisMonth.visits.toLocaleString()}</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">일별 접속 통계</h2>
          <p className="card-description">최근 7일간의 방문자 및 페이지뷰 추이</p>
        </div>

        <div className="chart-container" style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '12px', padding: '20px' }}>
          {stats.dailyStats.map((day, index) => {
            const maxVisits = Math.max(...stats.dailyStats.map(d => d.visits));
            const height = (day.visits / maxVisits) * 100;
            return (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#666' }}>{day.visits}</div>
                <div style={{ width: '100%', height: `${height}%`, backgroundColor: '#1a1a1a', borderRadius: '4px 4px 0 0', minHeight: '20px' }} />
                <div style={{ fontSize: '11px', color: '#999' }}>{day.date.slice(5)}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">페이지별 방문 통계</h2>
          <p className="card-description">인기 페이지 Top 5</p>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>순위</th>
                <th>페이지 경로</th>
                <th>페이지 제목</th>
                <th style={{ width: '150px' }}>방문 수</th>
              </tr>
            </thead>
            <tbody>
              {stats.topPages.map((page, index) => (
                <tr key={index}>
                  <td>
                    <span className="badge badge-category">{index + 1}</span>
                  </td>
                  <td><code style={{ fontSize: '12px', color: '#666' }}>{page.path}</code></td>
                  <td>{page.title}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Eye size={14} color="#999" />
                      <strong>{page.visits.toLocaleString()}</strong>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
