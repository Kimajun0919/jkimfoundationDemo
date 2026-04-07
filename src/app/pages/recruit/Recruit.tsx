import Layout from '../../components/layout/Layout';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function Recruit() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '모집안내 정보가 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="모집안내 관리">
      <div
        className="card"
        onClick={(e) => handleClick(e, '과정 안내 섹션입니다. 프로그램의 주요 과정과 내용을 설명하는 항목들을 관리할 수 있습니다.')}
        data-help="과정 안내 섹션입니다. 프로그램의 주요 과정과 내용을 설명하는 항목들을 관리할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">과정 안내</h2>
          <p className="card-description">프로그램 과정에 대한 안내 정보를 입력하세요</p>
        </div>

        <div className="form-group">
          <label className="form-label">
            제목 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            defaultValue="프로그램 과정 안내"
            placeholder="과정 안내 제목을 입력하세요"
          />
        </div>

        {[1, 2, 3].map((num) => (
          <div key={num} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e0e0e0' }}>
            <div className="form-group">
              <label className="form-label">항목 {num}</label>
              <input
                type="text"
                className="form-input"
                placeholder={`${num}번째 과정 항목명을 입력하세요`}
              />
            </div>
            <div className="form-group">
              <label className="form-label">내용 {num}</label>
              <textarea
                className="form-textarea"
                placeholder={`${num}번째 과정에 대한 상세 설명을 입력하세요`}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="card"
        onClick={(e) => handleClick(e, '모집 요강 섹션입니다. 지원 자격, 모집 인원, 일정 등 모집과 관련된 주요 정보를 관리할 수 있습니다.')}
        data-help="모집 요강 섹션입니다. 지원 자격, 모집 인원, 일정 등 모집과 관련된 주요 정보를 관리할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">모집 요강</h2>
          <p className="card-description">모집과 관련된 상세 정보를 입력하세요</p>
        </div>

        <div className="form-group">
          <label className="form-label">
            제목 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            defaultValue="2026년 상반기 모집 요강"
            placeholder="모집 요강 제목을 입력하세요"
          />
        </div>

        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: num < 6 ? '1px solid #e0e0e0' : 'none' }}>
            <div className="form-group">
              <label className="form-label">항목 {num}</label>
              <input
                type="text"
                className="form-input"
                placeholder={`${num}번째 요강 항목명을 입력하세요 (예: 지원자격, 모집인원, 지원기간 등)`}
              />
            </div>
            <div className="form-group">
              <label className="form-label">내용 {num}</label>
              <textarea
                className="form-textarea"
                placeholder={`${num}번째 요강에 대한 상세 설명을 입력하세요`}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="card"
        onClick={(e) => handleClick(e, '외부 링크 설정입니다. 지원서 작성 페이지나 상세 안내 페이지로 연결되는 URL을 설정할 수 있습니다.')}
        data-help="외부 링크 설정입니다. 지원서 작성 페이지나 상세 안내 페이지로 연결되는 URL을 설정할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">외부 링크</h2>
          <p className="card-description">지원 관련 외부 페이지 링크를 설정하세요</p>
        </div>

        <div className="form-group">
          <label className="form-label">지원서 작성 URL</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://forms.example.com/apply"
          />
          <p className="form-hint">지원서 작성 페이지로 이동하는 링크입니다</p>
        </div>

        <div className="form-group">
          <label className="form-label">상세안내 URL</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://example.com/recruit-detail"
          />
          <p className="form-hint">모집 상세 안내 페이지로 이동하는 링크입니다</p>
        </div>
      </div>

      <div className="write-footer">
        <button className="btn btn-outline">취소</button>
        <button className="btn btn-primary" onClick={handleSave}>저장하기</button>
      </div>
    </Layout>
  );
}
