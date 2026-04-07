import Layout from '../../components/layout/Layout';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function AdminDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '관리자 정보가 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="관리자 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '관리자 계정의 기본 정보를 입력하는 섹션입니다. 아이디, 비밀번호, 이름, 이메일, 권한그룹, 상태를 설정할 수 있습니다.')}
        data-help="관리자 계정의 기본 정보를 입력하는 섹션입니다. 아이디, 비밀번호, 이름, 이메일, 권한그룹, 상태를 설정할 수 있습니다."
      >
        <div className="card-header">
          <div>
            <h2 className="card-title">관리자 정보</h2>
            <p className="card-description">관리자 계정의 기본 정보를 입력하세요</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              아이디 <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="아이디를 입력하세요"
            />
            <p className="form-hint">영문, 숫자 조합 4-20자</p>
          </div>

          <div className="form-group">
            <label className="form-label">
              비밀번호 <span className="required">*</span>
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="비밀번호를 입력하세요"
            />
            <p className="form-hint">영문, 숫자, 특수문자 조합 8자 이상</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              이름 <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              이메일 <span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              권한그룹 <span className="required">*</span>
            </label>
            <select className="form-select">
              <option value="">권한그룹 선택</option>
              <option value="admin">최고관리자</option>
              <option value="editor">편집자</option>
              <option value="operator">운영자</option>
              <option value="viewer">조회자</option>
            </select>
            <p className="form-hint">관리자의 권한 수준을 선택하세요</p>
          </div>

          <div className="form-group">
            <label className="form-label">
              상태 <span className="required">*</span>
            </label>
            <div className="radio-group" style={{ marginTop: '10px' }}>
              <label className="radio-label">
                <input type="radio" name="status" value="active" defaultChecked />
                활성
              </label>
              <label className="radio-label">
                <input type="radio" name="status" value="inactive" />
                비활성
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">메모</label>
          <textarea
            className="form-textarea"
            placeholder="관리자에 대한 메모를 입력하세요"
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
