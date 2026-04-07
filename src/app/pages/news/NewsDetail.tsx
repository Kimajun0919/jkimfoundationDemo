import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import RichEditor from '../../components/common/RichEditor';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function NewsDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '포토뉴스가 성공적으로 등록되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="포토뉴스 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '포토뉴스의 기본 정보를 입력하는 영역입니다. 구분, 제목을 필수로 입력해야 합니다.')}
        data-help="포토뉴스의 기본 정보를 입력하는 영역입니다. 구분, 제목을 필수로 입력해야 합니다."
      >
        <div className="card-header">
          <h2 className="card-title">기본 정보</h2>
        </div>

        <div className="form-group">
          <label className="form-label">
            구분 <span className="required">*</span>
          </label>
          <select className="form-select">
            <option value="">선택하세요</option>
            <option value="institute">연구원소식</option>
            <option value="alumni">원우소식</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            제목 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="제목을 입력하세요"
          />
        </div>

        <FileUpload
          label="썸네일 이미지"
          accept="image/*"
          helpText="목록에 표시될 썸네일 이미지입니다. 권장 크기: 800x600px"
        />
      </div>

      <div
        className="card"
        onClick={(e) => handleClick(e, '포토뉴스의 본문 내용을 작성하는 리치 에디터입니다. 텍스트 서식, 이미지, 링크 등을 추가할 수 있습니다.')}
        data-help="포토뉴스의 본문 내용을 작성하는 리치 에디터입니다. 텍스트 서식, 이미지, 링크 등을 추가할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">본문 내용</h2>
        </div>

        <RichEditor helpText="본문 내용을 작성하세요" />
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">첨부파일</h2>
        </div>

        <FileUpload
          label="첨부파일"
          multiple
          helpText="포토뉴스와 관련된 첨부파일을 업로드할 수 있습니다. 여러 파일 선택 가능합니다."
        />
      </div>

      <div className="write-footer">
        <button className="btn btn-outline">취소</button>
        <button className="btn btn-primary" onClick={handleSave}>저장하기</button>
      </div>
    </Layout>
  );
}
