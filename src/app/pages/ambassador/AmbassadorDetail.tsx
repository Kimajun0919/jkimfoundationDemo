import Layout from '../../components/layout/Layout';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function AmbassadorDetail() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '엠버서더 정보가 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="엠버서더 등록·수정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '엠버서더의 기본 정보를 입력하는 섹션입니다. 지역, 명예대사 여부, 이름, 직책을 설정할 수 있습니다.')}
        data-help="엠버서더의 기본 정보를 입력하는 섹션입니다. 지역, 명예대사 여부, 이름, 직책을 설정할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">엠버서더 정보</h2>
          <p className="card-description">엠버서더의 기본 정보를 입력하세요</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              지역 <span className="required">*</span>
            </label>
            <select className="form-select">
              <option value="">지역 선택</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
              <option value="인천">인천</option>
              <option value="광주">광주</option>
              <option value="대전">대전</option>
              <option value="울산">울산</option>
              <option value="세종">세종</option>
              <option value="경기">경기</option>
              <option value="강원">강원</option>
              <option value="충북">충북</option>
              <option value="충남">충남</option>
              <option value="전북">전북</option>
              <option value="전남">전남</option>
              <option value="경북">경북</option>
              <option value="경남">경남</option>
              <option value="제주">제주</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              명예대사 여부 <span className="required">*</span>
            </label>
            <div className="radio-group" style={{ marginTop: '10px' }}>
              <label className="radio-label">
                <input type="radio" name="isHonorary" value="true" />
                명예대사
              </label>
              <label className="radio-label">
                <input type="radio" name="isHonorary" value="false" defaultChecked />
                일반 엠버서더
              </label>
            </div>
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
              직책 <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="직책을 입력하세요 (예: 서울대학교 교수)"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">연락처</label>
          <input
            type="tel"
            className="form-input"
            placeholder="010-0000-0000"
          />
          <p className="form-hint">선택 사항입니다</p>
        </div>

        <div className="form-group">
          <label className="form-label">이메일</label>
          <input
            type="email"
            className="form-input"
            placeholder="email@example.com"
          />
          <p className="form-hint">선택 사항입니다</p>
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
