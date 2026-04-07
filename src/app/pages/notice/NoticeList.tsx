import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { notices } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2, Eye, Pin } from 'lucide-react';

export default function NoticeList() {
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
    <Layout pageTitle="공지사항 목록">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '공지사항을 검색하고 고정 여부로 필터링할 수 있습니다.')}
        data-help="공지사항을 검색하고 고정 여부로 필터링할 수 있습니다."
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
            <label className="filter-label">고정 여부</label>
            <select className="form-select" style={{ width: '120px' }}>
              <option value="">전체</option>
              <option value="true">고정</option>
              <option value="false">일반</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {notices.length}개</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/notice-detail')}
            >
              공지사항 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 공지사항 목록입니다. 고정 여부, 제목, 조회수, 등록일을 확인할 수 있습니다.')}
          data-help="등록된 공지사항 목록입니다. 고정 여부, 제목, 조회수, 등록일을 확인할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>고정</th>
                <th>제목</th>
                <th style={{ width: '100px' }}>조회수</th>
                <th style={{ width: '120px' }}>등록일</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {notices.map(item => (
                <tr key={item.id}>
                  <td>
                    {item.isPinned && (
                      <span className="badge badge-pinned">
                        <Pin size={12} /> 고정
                      </span>
                    )}
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
                        onClick={() => navigate('/notice-detail')}
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
