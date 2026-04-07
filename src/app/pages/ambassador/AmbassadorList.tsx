import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Pagination from '../../components/common/Pagination';
import { ambassadors } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';
import { Edit, Trash2 } from 'lucide-react';

export default function AmbassadorList() {
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
    <Layout pageTitle="엠버서더 목록">
      <div
        className="card filter-section"
        onClick={(e) => handleClick(e, '엠버서더를 지역별, 명예대사 여부로 필터링할 수 있습니다.')}
        data-help="엠버서더를 지역별, 명예대사 여부로 필터링할 수 있습니다."
      >
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">지역</label>
            <select className="form-select" style={{ width: '150px' }}>
              <option value="">전체</option>
              <option value="seoul">서울</option>
              <option value="busan">부산</option>
              <option value="daejeon">대전</option>
              <option value="gwangju">광주</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">명예대사</label>
            <select className="form-select" style={{ width: '120px' }}>
              <option value="">전체</option>
              <option value="true">명예대사</option>
              <option value="false">일반</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '22px' }}>검색</button>
        </div>
      </div>

      <div className="card list-section">
        <div className="list-header">
          <div className="list-info">총 {ambassadors.length}명</div>
          <div className="list-actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/ambassador-detail')}
            >
              엠버서더 등록
            </button>
          </div>
        </div>

        <div
          className="table-container"
          onClick={(e) => handleClick(e, '등록된 엠버서더 목록입니다. 지역, 명예대사 여부, 이름, 직책, 등록일을 확인할 수 있습니다.')}
          data-help="등록된 엠버서더 목록입니다. 지역, 명예대사 여부, 이름, 직책, 등록일을 확인할 수 있습니다."
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>지역</th>
                <th>명예대사</th>
                <th>이름</th>
                <th>직책</th>
                <th>등록일</th>
                <th style={{ width: '120px', textAlign: 'center' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {ambassadors.map(amb => (
                <tr key={amb.id}>
                  <td><span className="badge badge-category">{amb.region}</span></td>
                  <td>
                    <span className={`badge ${amb.isHonorary ? 'badge-pinned' : 'badge-inactive'}`}>
                      {amb.isHonorary ? '명예대사' : '일반'}
                    </span>
                  </td>
                  <td>{amb.name}</td>
                  <td>{amb.position}</td>
                  <td>{amb.registeredAt}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate('/ambassador-detail')}
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
