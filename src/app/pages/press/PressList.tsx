import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { useHelpMode } from '../../../utils/helpMode';
import { useToast } from '../../../utils/toast';
import { press } from '../../../data/dummy';
import { Edit, Trash2 } from 'lucide-react';

export default function PressList() {
  const navigate = useNavigate();
  const { helpMode, showHelp } = useHelpMode();
  const { showToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (title: string) => {
    showToast('삭제되었습니다', `"${title}"이(가) 삭제되었습니다.`);
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="언론보도">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '언론보도를 검색하고 출처로 필터링할 수 있습니다.')}
        data-help="언론보도를 검색하고 출처로 필터링할 수 있습니다."
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
            <label className="filter-label">출처</label>
            <select className="form-select" style={{ width: '150px' }}>
              <option value="">전체</option>
              <option value="조선일보">조선일보</option>
              <option value="중앙일보">중앙일보</option>
              <option value="KBS">KBS</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {press.length}건</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/press-detail')}
            >
              언론보도 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 언론보도 목록입니다. 수정 버튼으로 상세 정보를 편집할 수 있습니다.')}
          data-help="등록된 언론보도 목록입니다. 수정 버튼으로 상세 정보를 편집할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>썸네일</th>
                <th>제목</th>
                <th style={{ width: '100px' }}>출처</th>
                <th style={{ width: '120px' }}>등록일</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {press.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="table-thumbnail"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <span className="badge badge-category">{item.source}</span>
                  </td>
                  <td>{item.createdAt}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/press-detail')}
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleDelete(item.title)}
                      >
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
