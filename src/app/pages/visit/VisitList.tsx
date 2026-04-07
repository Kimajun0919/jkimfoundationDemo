import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { visits } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2, Eye } from 'lucide-react';

export default function VisitList() {
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
    <Layout pageTitle="방한단/방미단 목록">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '방한단/방미단을 제목으로 검색하고 정렬할 수 있습니다.')}
        data-help="방한단/방미단을 제목으로 검색하고 정렬할 수 있습니다."
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
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {visits.length}개</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/visit-detail')}
            >
              방한단/방미단 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 방한단/방미단 목록입니다. 썸네일, 제목, 조회수, 등록일을 확인할 수 있습니다.')}
          data-help="등록된 방한단/방미단 목록입니다. 썸네일, 제목, 조회수, 등록일을 확인할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>썸네일</th>
                <th>제목</th>
                <th style={{ width: '100px' }}>조회수</th>
                <th style={{ width: '120px' }}>등록일</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {visits.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.thumbnail} alt={item.title} className="table-thumbnail" />
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
                        onClick={() => navigate('/visit-detail')}
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
          totalPages={3}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
