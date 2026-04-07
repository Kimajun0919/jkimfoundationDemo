import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { news } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2, Eye } from 'lucide-react';

export default function NewsList() {
  const navigate = useNavigate();
  const { helpMode, showHelp } = useHelpMode();
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="포토뉴스 목록">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '포토뉴스를 검색하고 카테고리별로 필터링할 수 있습니다. 연구원소식과 원우소식으로 구분됩니다.')}
        data-help="포토뉴스를 검색하고 카테고리별로 필터링할 수 있습니다. 연구원소식과 원우소식으로 구분됩니다."
      >
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">검색어</label>
            <input
              type="text"
              className="form-input"
              placeholder="제목 검색"
              style={{ width: '300px' }}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">구분</label>
            <select className="form-select" style={{ width: '150px' }}>
              <option value="">전체</option>
              <option value="institute">연구원소식</option>
              <option value="alumni">원우소식</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {news.length}개</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/news-detail')}
            >
              포토뉴스 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 포토뉴스 목록입니다. 썸네일, 구분, 제목, 조회수, 등록일을 확인하고 관리할 수 있습니다.')}
          data-help="등록된 포토뉴스 목록입니다. 썸네일, 구분, 제목, 조회수, 등록일을 확인하고 관리할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>썸네일</th>
                <th style={{ width: '120px' }}>구분</th>
                <th>제목</th>
                <th style={{ width: '100px' }}>조회수</th>
                <th style={{ width: '120px' }}>등록일</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {news.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.thumbnail} alt={item.title} className="table-thumbnail" />
                  </td>
                  <td>
                    <span className="badge badge-category">{item.category}</span>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Eye size={14} color="#999" />
                      {item.views}
                    </div>
                  </td>
                  <td>{item.createdAt}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/news-detail')}
                      >
                        <Edit size={14} />
                      </button>
                      <button className="btn btn-outline btn-sm">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={4}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
