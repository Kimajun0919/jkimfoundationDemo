import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function BannerDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '배너가 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="배너 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '배너의 기본 정보를 입력하는 섹션입니다. 배너 이미지, 텍스트, 링크 URL, 노출순서, 노출여부를 설정할 수 있습니다.')}
        data-help="배너의 기본 정보를 입력하는 섹션입니다. 배너 이미지, 텍스트, 링크 URL, 노출순서, 노출여부를 설정할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">배너 정보</h2>
          <p className="card-description">메인 페이지에 표시될 배너 정보를 입력하세요</p>
        </div>

        <FileUpload
          label="배너 이미지"
          accept="image/*"
          helpText="메인 페이지에 표시될 배너 이미지입니다. 권장 크기: 1200x300px"
        />

        <div className="form-group">
          <label className="form-label">
            텍스트 1 (메인 텍스트) <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="배너의 메인 텍스트를 입력하세요"
          />
          <p className="form-hint">배너에 표시될 주요 메시지입니다</p>
        </div>

        <div className="form-group">
          <label className="form-label">텍스트 2 (서브 텍스트)</label>
          <input
            type="text"
            className="form-input"
            placeholder="배너의 서브 텍스트를 입력하세요"
          />
          <p className="form-hint">메인 텍스트 아래에 표시될 부가 설명입니다</p>
        </div>

        <div className="form-group">
          <label className="form-label">링크 URL</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://example.com"
          />
          <p className="form-hint">배너 클릭 시 이동할 페이지 주소입니다</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              노출순서 <span className="required">*</span>
            </label>
            <input
              type="number"
              className="form-input"
              defaultValue="1"
              min="1"
            />
            <p className="form-hint">숫자가 작을수록 먼저 표시됩니다</p>
          </div>

          <div className="form-group">
            <label className="form-label">노출여부</label>
            <div style={{ marginTop: '10px' }}>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
              <span style={{ marginLeft: '10px', fontSize: '13px', color: '#666' }}>
                활성화하면 메인 페이지에 배너가 표시됩니다
              </span>
            </div>
          </div>
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
