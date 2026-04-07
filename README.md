# 김창준한미연구원 관리자 프로토타입

한미 외교·교육 연구기관 웹사이트 관리자 시스템

## 주요 기능

### 업무 영역

1. **기본설정**: 사이트 정보, 관리자 관리, 권한 관리, 카테고리 관리
2. **엠버서더 관리**: 지역별 엠버서더 등록 및 관리
3. **방한단/방미단 관리**: 방문단 일정 및 내용 관리
4. **모집안내 관리**: 과정 안내 및 모집 요강 설정
5. **역대 강사진 관리**: 강사진 프로필 관리
6. **포토뉴스 관리**: 연구원 소식 및 원우 소식 관리
7. **언론보도 관리**: 언론 보도 자료 관리
8. **공지사항 관리**: 공지사항 등록 및 고정 설정
9. **홈페이지 관리**: 팝업 및 배너 관리
10. **통계관리**: 접속 통계 조회

### 핵심 기능

- **Help Mode**: 기획 안내 모드 토글로 모든 UI 요소의 설명 확인
- **Toast 알림**: 액션 성공/실패 알림
- **더미 데이터**: 실제 도메인에 맞는 현실적인 샘플 데이터
- **반응형 레이아웃**: 260px 고정 사이드바 + 유동 메인 콘텐츠

## 기술 스택

- **Framework**: Vite + React 18 + TypeScript
- **Routing**: React Router DOM v7
- **Styling**: CSS Variables (단일 admin.css 파일)
- **Icons**: Lucide React

## 프로젝트 구조

```
src/
├── app/
│   ├── App.tsx                    # 메인 앱 + 라우팅
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx         # 공통 레이아웃 래퍼
│   │   │   ├── Header.tsx         # 헤더 (Help Mode 토글)
│   │   │   └── Sidebar.tsx        # 사이드바 네비게이션
│   │   └── common/
│   │       ├── Toast.tsx          # 토스트 알림
│   │       ├── Pagination.tsx     # 페이지네이션
│   │       ├── FileUpload.tsx     # 파일 업로드
│   │       ├── RichEditor.tsx     # 리치 에디터
│   │       └── HelpPanel.tsx      # 기획 안내 패널
│   └── pages/
│       ├── index.tsx              # 대시보드
│       ├── settings/              # 기본설정 관련 페이지
│       ├── ambassador/            # 엠버서더 관련 페이지
│       ├── visit/                 # 방한단/방미단 관련 페이지
│       ├── news/                  # 포토뉴스 관련 페이지
│       ├── notice/                # 공지사항 관련 페이지
│       ├── homepage/              # 홈페이지 관리 관련 페이지
│       └── stats/                 # 통계 관련 페이지
├── data/
│   └── dummy.ts                   # 더미 데이터 (실제 도메인 반영)
├── utils/
│   ├── toast.tsx                  # Toast Context & Provider
│   └── helpMode.tsx               # Help Mode Context & Provider
└── styles/
    └── admin.css                  # 모든 스타일 (CSS Variables 기반)
```

## 디자인 시스템

### 색상
- **배경**: `#f5f5f5` (밝은 회색)
- **표면**: `#ffffff` (흰색)
- **텍스트**: `#1a1a1a` (거의 검정)
- **보조 텍스트**: `#666666` (회색)
- **강조**: `#1a1a1a` (검정)
- **테두리**: `#e0e0e0` (연한 회색)

### 컴포넌트
- **카드**: 8px 라운드, 흰색 배경, 1px 보더
- **버튼**: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-sm`, `.btn-icon`
- **배지**: `.badge`, `.badge-active`, `.badge-inactive`, `.badge-category`
- **테이블**: 헤더 배경, 행 구분선, hover 효과

## 사용 방법

### Help Mode
1. 헤더 우측의 `?` 아이콘 클릭
2. `data-help` 속성이 있는 요소 클릭
3. 우측 패널에 기획 설명 표시

### 페이지 구조 패턴

#### 목록 페이지
```tsx
<Layout pageTitle="제목">
  <div className="card filter-section">
    {/* 검색/필터 영역 */}
  </div>

  <div className="card list-section">
    <div className="list-header">
      {/* 목록 헤더 + 액션 버튼 */}
    </div>
    <div className="table-container">
      <table className="data-table">
        {/* 테이블 */}
      </table>
    </div>
    <Pagination />
  </div>
</Layout>
```

#### 작성/수정 페이지
```tsx
<Layout pageTitle="제목">
  <div className="card">
    {/* 기본 정보 폼 */}
  </div>

  <div className="write-footer">
    <button className="btn btn-outline">취소</button>
    <button className="btn btn-primary">저장</button>
  </div>
</Layout>
```

## 주요 특징

1. **미니멀 디자인**: 불필요한 장식 없는 깔끔한 관리자 UI
2. **실전형 프로토타입**: 실제 관리 업무 화면 중심 구성
3. **기획 문서 내장**: data-help 속성으로 모든 요소 설명
4. **실제 도메인 반영**: 한미 외교·교육 도메인에 맞는 더미 데이터
5. **CSS 변수 기반**: 일관된 디자인 토큰 사용
6. **타입 안전성**: TypeScript로 타입 체크

## 라우팅

모든 라우트는 `src/app/App.tsx`에 선언:

- `/` - 대시보드
- `/settings` - 기본설정
- `/admin-list` - 관리자 목록
- `/ambassador-list` - 엠버서더 목록
- `/visit-list` - 방한단/방미단 목록
- `/news-list` - 포토뉴스 목록
- `/notice-list` - 공지사항 목록
- `/popup-list` - 팝업 관리
- `/banner-list` - 배너 관리
- `/stats` - 접속통계

## 개발 가이드

### 새 페이지 추가
1. `src/app/pages/[폴더]/[컴포넌트].tsx` 생성
2. `src/app/App.tsx`에 Route 추가
3. `src/app/components/layout/Sidebar.tsx`에 네비게이션 항목 추가

### 더미 데이터 추가
`src/data/dummy.ts`에 export로 추가

### 스타일 수정
`src/styles/admin.css`의 CSS 변수 또는 클래스 수정

## 참고사항

- 실제 로그인, DB, API 서버 없음 (프로토타입)
- 모든 버튼 액션은 Toast 알림으로 대체
- Tailwind, Bootstrap, Material UI 사용 안 함
- 폰트: Pretendard (CDN)
