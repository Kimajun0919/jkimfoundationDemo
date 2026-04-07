import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import RichEditor from '../../components/common/RichEditor';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';
import { useState } from 'react';

export default function NoticeDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();
  const [isPinned, setIsPinned] = useState(false);

  const handleSave = () => {
    showToast('저장되었습니다', '공지사항이 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="공지사항 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '공지사항의 기본 정보를 입력하는 섹션입니다. 고정 여부, 제목, 내용을 작성할 수 있습니다.')}
        data-help="공지사항의 기본 정보를 입력하는 섹션입니다. 고정 여부, 제목, 내용을 작성할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">공지사항 정보</h2>
          <p className="card-description">공지사항의 기본 정보를 입력하세요</p>
        </div>

        <div className="form-group">
          <label className="form-label">고정 여부</label>
          <div style={{ marginTop: '10px' }}>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isPinned}
                onChange={(e) => setIsPinned(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span style={{ marginLeft: '10px', fontSize: '13px', color: '#666' }}>
              활성화하면 공지사항 목록 상단에 고정됩니다
            </span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            제목 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="공지사항 제목을 입력하세요"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            내용 <span className="required">*</span>
          </label>
          <RichEditor
            placeholder="공지사항 내용을 입력하세요"
          />
        </div>

        <FileUpload
          label="첨부파일"
          accept="*/*"
          multiple
          helpText="관련 자료를 첨부할 수 있습니다. 여러 파일 선택 가능"
        />

        <div className="form-group">
          <label className="form-label">등록일</label>
          <input
            type="date"
            className="form-input"
            defaultValue={new Date().toISOString().split('T')[0]}
          />
          <p className="form-hint">작성일자를 설정할 수 있습니다</p>
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
