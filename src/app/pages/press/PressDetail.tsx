import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import RichEditor from '../../components/common/RichEditor';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function PressDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '언론보도 정보가 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="언론보도 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '언론보도의 기본 정보를 입력하는 섹션입니다. 썸네일, 제목, 출처, 내용을 작성할 수 있습니다.')}
        data-help="언론보도의 기본 정보를 입력하는 섹션입니다. 썸네일, 제목, 출처, 내용을 작성할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">언론보도 정보</h2>
          <p className="card-description">언론보도의 기본 정보를 입력하세요</p>
        </div>

        <FileUpload
          label="썸네일 이미지"
          accept="image/*"
          helpText="목록에 표시될 썸네일 이미지입니다. 권장 크기: 800x600px"
        />

        <div className="form-group">
          <label className="form-label">
            제목 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="언론보도 제목을 입력하세요"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              출처 <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="예: 조선일보, KBS뉴스 등"
            />
          </div>

          <div className="form-group">
            <label className="form-label">보도일</label>
            <input
              type="date"
              className="form-input"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">원문 링크</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://news.example.com/article/123"
          />
          <p className="form-hint">언론사의 원문 기사 링크를 입력하세요</p>
        </div>

        <div className="form-group">
          <label className="form-label">
            내용 <span className="required">*</span>
          </label>
          <RichEditor
            placeholder="언론보도 내용을 입력하세요"
          />
        </div>

        <FileUpload
          label="첨부파일"
          accept="*/*"
          multiple
          helpText="관련 자료를 첨부할 수 있습니다"
        />
      </div>

      <div className="write-footer">
        <button className="btn btn-outline" onClick={() => window.history.back()}>
          취소
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          저장하기
        </button>
      </div>
    </Layout>
  );
}
