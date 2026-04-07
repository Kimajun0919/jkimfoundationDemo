import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function PopupDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '팝업이 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="팝업 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '팝업의 기본 정보를 입력하는 섹션입니다. 팝업명, 이미지, 링크 URL, 노출기간, 노출여부를 설정할 수 있습니다.')}
        data-help="팝업의 기본 정보를 입력하는 섹션입니다. 팝업명, 이미지, 링크 URL, 노출기간, 노출여부를 설정할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">팝업 정보</h2>
          <p className="card-description">홈페이지에 표시될 팝업 정보를 입력하세요</p>
        </div>

        <div className="form-group">
          <label className="form-label">
            팝업명 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="팝업 이름을 입력하세요"
          />
          <p className="form-hint">관리용 팝업 이름입니다 (사용자에게 노출되지 않음)</p>
        </div>

        <FileUpload
          label="팝업 이미지"
          accept="image/*"
          helpText="팝업창에 표시될 이미지입니다. 권장 크기: 400x600px"
        />

        <div className="form-group">
          <label className="form-label">링크 URL</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://example.com"
          />
          <p className="form-hint">팝업 클릭 시 이동할 페이지 주소입니다</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              노출 시작일 <span className="required">*</span>
            </label>
            <input
              type="date"
              className="form-input"
              defaultValue="2026-04-01"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              노출 종료일 <span className="required">*</span>
            </label>
            <input
              type="date"
              className="form-input"
              defaultValue="2026-04-30"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">노출여부</label>
          <div style={{ marginTop: '10px' }}>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
            <span style={{ marginLeft: '10px', fontSize: '13px', color: '#666' }}>
              활성화하면 설정된 기간 동안 팝업이 표시됩니다
            </span>
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
