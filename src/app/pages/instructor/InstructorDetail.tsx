import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import RichEditor from '../../components/common/RichEditor';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function InstructorDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '역대 강사진 정보가 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="역대 강사진 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '역대 강사진의 기본 정보를 입력하는 섹션입니다. 썸네일, 이름, 프로필을 작성할 수 있습니다.')}
        data-help="역대 강사진의 기본 정보를 입력하는 섹션입니다. 썸네일, 이름, 프로필을 작성할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">강사진 정보</h2>
          <p className="card-description">역대 강사진의 정보를 입력하세요</p>
        </div>

        <FileUpload
          label="프로필 사진"
          accept="image/*"
          helpText="강사 프로필 사진입니다. 권장 크기: 400x400px"
        />

        <div className="form-group">
          <label className="form-label">
            제목 (이름 및 소속) <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="예: 박준영 교수 (하버드 케네디스쿨)"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            프로필 <span className="required">*</span>
          </label>
          <RichEditor
            placeholder="강사의 경력, 전공 분야, 주요 업적 등을 입력하세요"
          />
        </div>

        <FileUpload
          label="첨부파일"
          accept="*/*"
          multiple
          helpText="강의 자료나 논문 등을 첨부할 수 있습니다"
        />

        <div className="form-group">
          <label className="form-label">등록일</label>
          <input
            type="date"
            className="form-input"
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>
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
