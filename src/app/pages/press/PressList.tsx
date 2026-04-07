import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Search } from 'lucide-react';
import { press } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';

export default function PressList() {
  const navigate = useNavigate();
  const { helpMode, showHelp } = useHelpMode();

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="언론보도">
      <div
        className="card"
        onClick={(e) => handleClick(e, '언론보도 목록을 조회하고 관리하는 화면입니다. 검색, 정렬, 등록 기능을 제공합니다.')}
        data-help="언론보도 목록을 조회하고 관리하는 화면입니다. 검색, 정렬, 등록 기능을 제공합니다."
      >
        <div className="card-header">
          <h2 className="card-title">언론보도 목록</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/press-detail')}
          >
            + 언론보도 등록
          </button>
        </div>

        <div className="list-controls">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="제목 또는 출처로 검색..."
              className="search-input"
            />
          </div>

          <select className="form-select" style={{ width: '150px' }}>
            <option value="recent">최신순</option>
            <option value="source">출처순</option>
            <option value="oldest">오래된순</option>
          </select>
        </div>

        <div className="grid-list">
          {press.map((item) => (
            <div
              key={item.id}
              className="grid-item"
              onClick={() => navigate('/press-detail')}
            >
              <div className="grid-item-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="grid-item-content">
                <h3 className="grid-item-title">{item.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span className="badge">{item.source}</span>
                  <p className="grid-item-date">{item.createdAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="pagination-btn" disabled>
            이전
          </button>
          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
          </div>
          <button className="pagination-btn">다음</button>
        </div>
      </div>
    </Layout>
  );
}
