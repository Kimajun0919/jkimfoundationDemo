import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';
import { roles } from '../../../data/dummy';
import { Edit, Trash2 } from 'lucide-react';

export default function RoleList() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (roleName: string) => {
    showToast('삭제되었습니다', `"${roleName}" 권한그룹이 삭제되었습니다.`);
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  const getPermissionLabel = (permission: string) => {
    switch (permission) {
      case 'all': return '전체';
      case 'write': return '쓰기';
      case 'read': return '읽기';
      case 'none': return '없음';
      default: return permission;
    }
  };

  const getPermissionBadgeClass = (permission: string) => {
    switch (permission) {
      case 'all': return 'badge-success';
      case 'write': return 'badge-warning';
      case 'read': return 'badge-info';
      default: return 'badge-secondary';
    }
  };

  return (
    <Layout pageTitle="권한그룹 관리">
      <div
        className="card"
        onClick={(e) => handleClick(e, '관리자 권한그룹을 관리하는 화면입니다. 각 그룹별로 설정, 콘텐츠, 사용자 관리에 대한 권한을 설정할 수 있습니다.')}
        data-help="관리자 권한그룹을 관리하는 화면입니다. 각 그룹별로 설정, 콘텐츠, 사용자 관리에 대한 권한을 설정할 수 있습니다."
      >
        <div className="card-header">
          <div>
            <h2 className="card-title">권한그룹 목록</h2>
            <p className="card-description">관리자별 접근 권한을 설정합니다</p>
          </div>
          <button className="btn btn-primary btn-sm">+ 권한그룹 추가</button>
        </div>

        <div className="list-header">
          <div className="list-info">총 {roles.length}개</div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 권한그룹 목록입니다. 각 그룹의 설정, 콘텐츠, 사용자 관리 권한을 확인하고 수정할 수 있습니다.')}
          data-help="등록된 권한그룹 목록입니다. 각 그룹의 설정, 콘텐츠, 사용자 관리 권한을 확인하고 수정할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>권한그룹명</th>
                <th>설정 관리</th>
                <th>콘텐츠 관리</th>
                <th>사용자 관리</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td>
                    <strong>{role.name}</strong>
                  </td>
                  <td>
                    <span className={`badge ${getPermissionBadgeClass(role.permissions.settings)}`}>
                      {getPermissionLabel(role.permissions.settings)}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${getPermissionBadgeClass(role.permissions.content)}`}>
                      {getPermissionLabel(role.permissions.content)}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${getPermissionBadgeClass(role.permissions.user)}`}>
                      {getPermissionLabel(role.permissions.user)}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="btn btn-outline btn-sm">
                        <Edit size={14} />
                      </button>
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleDelete(role.name)}
                        disabled={role.name === '최고관리자'}
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

        <div className="info-box">
          <h3 className="info-box-title">권한 설명</h3>
          <ul className="info-box-list">
            <li><strong>전체:</strong> 생성, 읽기, 수정, 삭제 모든 권한</li>
            <li><strong>쓰기:</strong> 생성, 읽기, 수정 권한 (삭제 불가)</li>
            <li><strong>읽기:</strong> 조회 권한만 가능</li>
            <li><strong>없음:</strong> 접근 불가</li>
          </ul>
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
