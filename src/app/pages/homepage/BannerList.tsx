import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { banners } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2 } from 'lucide-react';

export default function BannerList() {
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
    <Layout pageTitle="배너 관리">
      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {banners.length}개</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/banner-detail')}
            >
              배너 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 배너 목록입니다. 메인 페이지에 노출되는 배너의 이미지, 텍스트, 링크 URL, 노출순서, 노출여부를 관리할 수 있습니다.')}
          data-help="등록된 배너 목록입니다. 메인 페이지에 노출되는 배너의 이미지, 텍스트, 링크 URL, 노출순서, 노출여부를 관리할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>미리보기</th>
                <th>텍스트1</th>
                <th>텍스트2</th>
                <th>링크 URL</th>
                <th style={{ width: '80px' }}>노출순서</th>
                <th style={{ width: '100px' }}>노출여부</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {banners.map(item => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.text1}
                      style={{
                        width: '100px',
                        height: '40px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '1px solid #e0e0e0'
                      }}
                    />
                  </td>
                  <td><strong>{item.text1}</strong></td>
                  <td>{item.text2}</td>
                  <td><code style={{ fontSize: '12px', color: '#666' }}>{item.linkUrl}</code></td>
                  <td>
                    <span className="badge badge-category">{item.order}</span>
                  </td>
                  <td>
                    <span className={`badge ${item.isActive ? 'badge-active' : 'badge-inactive'}`}>
                      {item.isActive ? '노출' : '미노출'}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/banner-detail')}
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
          totalPages={1}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
}
