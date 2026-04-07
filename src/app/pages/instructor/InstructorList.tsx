import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Search } from 'lucide-react';
import { instructors } from '../../../data/dummy';
import { useHelpMode } from '../../../utils/helpMode';

export default function InstructorList() {
  const navigate = useNavigate();
  const { helpMode, showHelp } = useHelpMode();

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="역대 강사진">
      <div
        className="card"
        onClick={(e) => handleClick(e, '역대 강사진 목록을 조회하고 관리하는 화면입니다. 검색, 정렬, 등록 기능을 제공합니다.')}
        data-help="역대 강사진 목록을 조회하고 관리하는 화면입니다. 검색, 정렬, 등록 기능을 제공합니다."
      >
        <div className="card-header">
          <h2 className="card-title">역대 강사진 목록</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/instructor-detail')}
          >
            + 강사진 등록
          </button>
        </div>

        <div className="list-controls">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="강사 이름으로 검색..."
              className="search-input"
            />
          </div>

          <select className="form-select" style={{ width: '150px' }}>
            <option value="recent">최신순</option>
            <option value="name">이름순</option>
            <option value="oldest">오래된순</option>
          </select>
        </div>

        <div className="grid-list">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="grid-item"
              onClick={() => navigate('/instructor-detail')}
            >
              <div className="grid-item-image">
                <img src={instructor.thumbnail} alt={instructor.title} />
              </div>
              <div className="grid-item-content">
                <h3 className="grid-item-title">{instructor.title}</h3>
                <p className="grid-item-date">{instructor.createdAt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="pagination-btn" disabled>
            이전
          </button>
          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
          </div>
          <button className="pagination-btn">다음</button>
        </div>
      </div>
    </Layout>
  );
}
