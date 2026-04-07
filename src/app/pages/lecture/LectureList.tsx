import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { instructors } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2 } from 'lucide-react';

export default function LectureList() {
  const navigate = useNavigate();
  const { helpMode, showHelp } = useHelpMode();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? instructors.map(i => i.id) : []);
  };

  const handleSelect = (id: number, checked: boolean) => {
    setSelectedIds(prev =>
      checked ? [...prev, id] : prev.filter(i => i !== id)
    );
  };

  return (
    <Layout pageTitle="강연사진 목록">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '강연사진을 검색하고 필터링할 수 있는 영역입니다. 제목으로 검색하거나 등록일 기준으로 정렬할 수 있습니다.')}
        data-help="강연사진을 검색하고 필터링할 수 있는 영역입니다. 제목으로 검색하거나 등록일 기준으로 정렬할 수 있습니다."
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
            <label className="filter-label">정렬</label>
            <select className="form-select" style={{ width: '150px' }}>
              <option value="recent">최신순</option>
              <option value="oldest">오래된순</option>
              <option value="views">조회수순</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {instructors.length}개</div>
          <div className="list-actions">
            {selectedIds.length > 0 && (
              <button className="btn btn-outline btn-sm">
                <Trash2 size={14} />
                선택 삭제 ({selectedIds.length})
              </button>
            )}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/lecture-detail')}
            >
              강연사진 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 강연사진 목록입니다. 썸네일, 제목, 등록일을 확인할 수 있으며, 수정 버튼으로 상세 내용을 편집할 수 있습니다.')}
          data-help="등록된 강연사진 목록입니다. 썸네일, 제목, 등록일을 확인할 수 있으며, 수정 버튼으로 상세 내용을 편집할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '50px' }}>
                  <input
                    type="checkbox"
                    checked={selectedIds.length === instructors.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
                <th style={{ width: '100px' }}>썸네일</th>
                <th>제목</th>
                <th style={{ width: '120px' }}>등록일</th>
                <th style={{ width: '100px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map(item => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={(e) => handleSelect(item.id, e.target.checked)}
                    />
                  </td>
                  <td>
                    <img src={item.thumbnail} alt={item.title} className="table-thumbnail" />
                  </td>
                  <td><strong>{item.title}</strong></td>
                  <td>{item.createdAt}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/lecture-detail')}
                      >
                        <Edit size={14} />
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
          totalPages={2}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
