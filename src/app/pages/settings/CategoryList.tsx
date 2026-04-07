import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';
import { categories } from '../../../data/dummy';
import { Edit, Trash2 } from 'lucide-react';

export default function CategoryList() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (categoryName: string) => {
    showToast('삭제되었습니다', `"${categoryName}" 카테고리가 삭제되었습니다.`);
  };

  const handleToggleActive = (categoryName: string, isActive: boolean) => {
    const status = isActive ? '활성화' : '비활성화';
    showToast('변경되었습니다', `"${categoryName}" 카테고리가 ${status}되었습니다.`);
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="카테고리 관리">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '카테고리를 검색할 수 있는 영역입니다.')}
        data-help="카테고리를 검색할 수 있는 영역입니다."
      >
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">검색어</label>
            <input
              type="text"
              className="form-input"
              placeholder="카테고리명 검색"
              style={{ width: '300px' }}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">상태</label>
            <select className="form-select" style={{ width: '120px' }}>
              <option value="">전체</option>
              <option value="true">활성</option>
              <option value="false">비활성</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div
        className="card list-section"
        onClick={(e) => handleClick(e, '게시판 카테고리를 관리하는 화면입니다. 카테고리의 계층구조, 순서, 활성화 상태를 설정할 수 있습니다.')}
        data-help="게시판 카테고리를 관리하는 화면입니다. 카테고리의 계층구조, 순서, 활성화 상태를 설정할 수 있습니다."
      >
        <div className="list-header">
          <div className="list-info">총 {categories.length}개</div>
          <div className="list-actions">
            <button className="btn btn-primary btn-sm">+ 카테고리 추가</button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 카테고리 목록입니다. 상태 토글로 활성화/비활성화할 수 있습니다.')}
          data-help="등록된 카테고리 목록입니다. 상태 토글로 활성화/비활성화할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>카테고리명</th>
                <th>상위 카테고리</th>
                <th style={{ width: '100px' }}>정렬순서</th>
                <th style={{ width: '100px' }}>상태</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>
                    <strong>{category.name}</strong>
                  </td>
                  <td>
                    {category.parent ? (
                      <span className="badge badge-category">{category.parent}</span>
                    ) : (
                      <span style={{ color: '#999' }}>최상위</span>
                    )}
                  </td>
                  <td>{category.order}</td>
                  <td>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        defaultChecked={category.isActive}
                        onChange={(e) => handleToggleActive(category.name, e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="btn btn-outline btn-sm">
                        <Edit size={14} />
                      </button>
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleDelete(category.name)}
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
          totalPages={1}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
