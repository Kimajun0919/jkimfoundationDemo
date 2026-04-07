import Layout from '../../components/layout/Layout';
import FileUpload from '../../components/common/FileUpload';
import { useToast } from '../../../utils/toast';
import { useHelpMode } from '../../../utils/helpMode';

export default function Settings() {
  const { showToast } = useToast();
  const { helpMode, showHelp } = useHelpMode();

  const handleSave = () => {
    showToast('저장되었습니다', '기본설정이 성공적으로 저장되었습니다.');
  };

  const handleClick = (e: React.MouseEvent, helpText: string) => {
    if (helpMode) {
      e.stopPropagation();
      showHelp(helpText);
    }
  };

  return (
    <Layout pageTitle="기본설정">
      <div
        className="card"
        onClick={(e) => handleClick(e, '사이트 기본 정보를 설정하는 섹션입니다. 사이트명, 대표 이메일, 대표 전화번호를 입력할 수 있습니다.')}
        data-help="사이트 기본 정보를 설정하는 섹션입니다. 사이트명, 대표 이메일, 대표 전화번호를 입력할 수 있습니다."
      >
        <div className="card-header">
          <h2 className="card-title">사이트 정보</h2>
          <p className="card-description">홈페이지 기본 정보를 관리합니다</p>
        </div>

        <div className="form-group">
          <label className="form-label">
            사이트명 <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            defaultValue="김창준한미연구원"
            placeholder="사이트명을 입력하세요"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">대표 이메일</label>
            <input
              type="email"
              className="form-input"
              defaultValue="info@kjcus.org"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label className="form-label">대표 전화</label>
            <input
              type="tel"
              className="form-input"
              defaultValue="02-1234-5678"
              placeholder="전화번호를 입력하세요"
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">브랜드 자산</h2>
          <p className="card-description">파비콘과 로고를 등록합니다</p>
        </div>

        <FileUpload
          label="파비콘"
          accept="image/*"
          helpText="브라우저 탭에 표시되는 작은 아이콘입니다. 권장 크기: 32x32px 또는 64x64px"
        />

        <FileUpload
          label="로고 이미지"
          accept="image/*"
          helpText="홈페이지 헤더에 표시되는 로고입니다. 투명 배경의 PNG 파일을 권장합니다."
        />
      </div>

      <div className="write-footer">
        <button className="btn btn-outline">취소</button>
        <button className="btn btn-primary" onClick={handleSave}>저장하기</button>
      </div>
    </Layout>
  );
}
