import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { popups } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2 } from 'lucide-react';

export default function PopupList() {
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
    <Layout pageTitle="팝업 관리">
      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {popups.length}개</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/popup-detail')}
            >
              팝업 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 팝업 목록입니다. 팝업명, 미리보기, 링크 URL, 노출기간, 노출여부를 관리할 수 있습니다.')}
          data-help="등록된 팝업 목록입니다. 팝업명, 미리보기, 링크 URL, 노출기간, 노출여부를 관리할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>팝업명</th>
                <th style={{ width: '100px' }}>미리보기</th>
                <th>링크 URL</th>
                <th style={{ width: '200px' }}>노출기간</th>
                <th style={{ width: '100px' }}>노출여부</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {popups.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.imageUrl} alt={item.name} className="table-thumbnail" />
                  </td>
                  <td><code style={{ fontSize: '12px', color: '#666' }}>{item.linkUrl}</code></td>
                  <td>{item.startDate} ~ {item.endDate}</td>
                  <td>
                    <span className={`badge ${item.isActive ? 'badge-active' : 'badge-inactive'}`}>
                      {item.isActive ? '노출' : '미노출'}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/popup-detail')}
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
          totalPages={2}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
