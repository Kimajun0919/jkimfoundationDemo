import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { useHelpMode } from '../../../utils/helpMode';
import { useToast } from '../../../utils/toast';
import { instructors } from '../../../data/dummy';
import { Edit, Trash2 } from 'lucide-react';

export default function InstructorList() {
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
    <Layout pageTitle="역대 강사진">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '강사진을 검색할 수 있는 영역입니다.')}
        data-help="강사진을 검색할 수 있는 영역입니다."
      >
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">검색어</label>
            <input
              type="text"
              className="form-input"
              placeholder="강사 이름으로 검색"
              style={{ width: '300px' }}
            />
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {instructors.length}명</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/instructor-detail')}
            >
              강사진 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 강사진 목록입니다. 수정 버튼으로 상세 정보를 편집할 수 있습니다.')}
          data-help="등록된 강사진 목록입니다. 수정 버튼으로 상세 정보를 편집할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>썸네일</th>
                <th>제목</th>
                <th style={{ width: '120px' }}>등록일</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor) => (
                <tr key={instructor.id}>
                  <td>
                    <img
                      src={instructor.thumbnail}
                      alt={instructor.title}
                      className="table-thumbnail"
                    />
                  </td>
                  <td>{instructor.title}</td>
                  <td>{instructor.createdAt}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/instructor-detail')}
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleDelete(instructor.title)}
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
