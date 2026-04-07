import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { useHelpMode } from '../../../utils/helpMode';
import { useToast } from '../../../utils/toast';
import { admins } from '../../../data/dummy';
import { Edit, Trash2 } from 'lucide-react';

export default function AdminList() {
  const navigate = useNavigate();
  const { helpMode, showHelp } = useHelpMode();
  const { showToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? admins.map(a => a.id) : []);
  };

  const handleSelect = (id: number, checked: boolean) => {
    setSelectedIds(prev =>
      checked ? [...prev, id] : prev.filter(i => i !== id)
    );
  };

  const handleDelete = () => {
    showToast('삭제되었습니다', `${selectedIds.length}개의 관리자가 삭제되었습니다.`);
    setSelectedIds([]);
  };

  return (
    <Layout pageTitle="관리자 관리">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '관리자를 검색하고 필터링할 수 있는 영역입니다. 아이디, 이름, 권한 그룹 등으로 검색 가능합니다.')}
        data-help="관리자를 검색하고 필터링할 수 있는 영역입니다. 아이디, 이름, 권한 그룹 등으로 검색 가능합니다."
      >
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">검색어</label>
            <input
              type="text"
              className="form-input"
              placeholder="아이디, 이름, 이메일"
              style={{ width: '300px' }}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">권한그룹</label>
            <select className="form-select" style={{ width: '150px' }}>
              <option value="">전체</option>
              <option value="admin">최고관리자</option>
              <option value="editor">편집자</option>
              <option value="operator">운영자</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">상태</label>
            <select className="form-select" style={{ width: '120px' }}>
              <option value="">전체</option>
              <option value="active">활성</option>
              <option value="inactive">비활성</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {admins.length}명</div>
          <div className="list-actions">
            {selectedIds.length > 0 && (
              <button className="btn btn-outline btn-sm" onClick={handleDelete}>
                <Trash2 size={14} />
                선택 삭제
              </button>
            )}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/admin-detail')}
            >
              관리자 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 관리자 목록을 표시합니다. 각 행을 선택하여 일괄 삭제하거나, 수정 버튼으로 상세 정보를 편집할 수 있습니다.')}
          data-help="등록된 관리자 목록을 표시합니다. 각 행을 선택하여 일괄 삭제하거나, 수정 버튼으로 상세 정보를 편집할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '50px' }}>
                  <input
                    type="checkbox"
                    checked={selectedIds.length === admins.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
                <th>아이디</th>
                <th>이름</th>
                <th>이메일</th>
                <th>권한그룹</th>
                <th>상태</th>
                <th>등록일</th>
                <th style={{ width: '100px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(admin.id)}
                      onChange={(e) => handleSelect(admin.id, e.target.checked)}
                    />
                  </td>
                  <td>{admin.username}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td><span className="badge badge-category">{admin.role}</span></td>
                  <td>
                    <span className={`badge ${admin.status === 'active' ? 'badge-active' : 'badge-inactive'}`}>
                      {admin.status === 'active' ? '활성' : '비활성'}
                    </span>
                  </td>
                  <td>{admin.registeredAt}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/admin-detail')}
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
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
