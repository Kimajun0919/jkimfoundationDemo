import Layout from '../../components/layout/Layout';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';
import { categories } from '../../../data/dummy';

export default function CategoryList() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

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
        className="card"
        onClick={(e) => handleClick(e, '게시판 카테고리를 관리하는 화면입니다. 카테고리의 계층구조, 순서, 활성화 상태를 설정할 수 있습니다.')}
        data-help="게시판 카테고리를 관리하는 화면입니다. 카테고리의 계층구조, 순서, 활성화 상태를 설정할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">카테고리 목록</h2>
          <button className="btn btn-primary">+ 카테고리 추가</button>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>카테고리명</th>
                <th>상위 카테고리</th>
                <th>정렬순서</th>
                <th>상태</th>
                <th style={{ width: '150px' }}>관리</th>
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
                      <span className="badge badge-info">{category.parent}</span>
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
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button className="btn-icon">수정</button>
                      <button
                        className="btn-icon"
                        onClick={() => handleDelete(category.name)}
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
