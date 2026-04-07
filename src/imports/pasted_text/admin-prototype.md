너는 Vite + React 기반 관리자 프로토타입을 만드는 프론트엔드/기획 구현 담당자다.

현재 저장소의 구조, 레이아웃, 디자인 시스템, 인터랙션, data-help 기반 기획 설명 방식을 기준으로 새 관리자 프로토타입을 만들어줘.

## 목표

- 새 프로젝트명: 김창준한미연구원 관리자
- 서비스/도메인: 한미 외교·교육 연구기관 웹사이트 관리
- 사용자: 관리자/운영자
- 목적: 엠버서더, 방한단/방미단, 모집안내, 강사진, 포토뉴스, 언론보도, 공지사항, 홈페이지(팝업·배너), 통계를 조회·등록·수정·삭제 관리

## 절대 변경하지 말아야 할 방향

- Next.js, Tailwind, Bootstrap, Material UI 등 추가 프레임워크/CSS 라이브러리를 도입하지 말 것.
- 실제 로그인, DB, API 서버, 인증/권한 로직을 구현하지 말 것.
- 디자인 톤을 바꾸지 말 것. 흰색/회색/검정 중심의 미니멀 관리자 UI를 유지할 것.
- 레이아웃을 랜딩페이지처럼 만들지 말 것. 첫 화면부터 실제 관리자 업무 화면이어야 한다.
- 카드 안에 카드를 중첩하지 말 것.
- 장식용 그라데이션, 보라색/파란색 그라데이션, 과한 라운드, 불필요한 일러스트를 추가하지 말 것.

## 기술 구조

```text
.
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── admin.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Layout.jsx
│   │   └── common/
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── Pagination.jsx
│   │       ├── Toast.jsx
│   │       ├── DataTable.jsx
│   │       ├── FileUpload.jsx
│   │       ├── RichEditor.jsx
│   │       └── HelpPanel.jsx
│   ├── pages/
│   │   ├── index.jsx
│   │   ├── settings/
│   │   │   ├── Settings.jsx
│   │   │   ├── AdminList.jsx
│   │   │   ├── AdminDetail.jsx
│   │   │   ├── RoleList.jsx
│   │   │   └── CategoryList.jsx
│   │   ├── ambassador/
│   │   │   ├── AmbassadorList.jsx
│   │   │   └── AmbassadorDetail.jsx
│   │   ├── visit/
│   │   │   ├── VisitList.jsx
│   │   │   └── VisitDetail.jsx
│   │   ├── recruit/
│   │   │   └── Recruit.jsx
│   │   ├── instructor/
│   │   │   ├── InstructorList.jsx
│   │   │   └── InstructorDetail.jsx
│   │   ├── news/
│   │   │   ├── NewsList.jsx
│   │   │   └── NewsDetail.jsx
│   │   ├── press/
│   │   │   ├── PressList.jsx
│   │   │   └── PressDetail.jsx
│   │   ├── notice/
│   │   │   ├── NoticeList.jsx
│   │   │   └── NoticeDetail.jsx
│   │   ├── homepage/
│   │   │   ├── PopupList.jsx
│   │   │   ├── PopupDetail.jsx
│   │   │   ├── BannerList.jsx
│   │   │   └── BannerDetail.jsx
│   │   └── stats/
│   │       └── Stats.jsx
│   ├── data/
│   │   └── dummy.js
│   └── utils/
│       ├── helpMode.js
│       └── toast.js
└── docs/
    └── specs/
        └── [업무영역]/
            └── [page-name]-spec.md
```

## 라우팅 규칙

- `react-router-dom v6`을 사용한다.
- `App.jsx`에서 `<Routes>`로 모든 경로를 선언한다.
- `<Layout>`은 Sidebar + Header를 포함하는 공통 래퍼 컴포넌트로, 모든 페이지를 감싼다.
- 경로 예시:
  - `/` → `index.jsx` (대시보드)
  - `/settings` → `Settings.jsx`
  - `/admin-list` → `AdminList.jsx`
  - `/ambassador-list` → `AmbassadorList.jsx`
  - `/ambassador-detail` → `AmbassadorDetail.jsx`
  - 나머지 페이지도 동일한 패턴으로 선언

## 레이아웃 규칙

- 전체 레이아웃은 `<aside className="sidebar">`와 `<main className="main-content">`로 나눈다.
- 사이드바는 260px 고정 폭, 흰색 배경, 우측 보더를 유지한다.
- 헤더는 64px 높이, 흰색 배경, 하단 보더를 유지한다.
- 본문은 `.content-wrapper` 안에 구성하고, 화면 섹션은 `.card` 단위로 만든다.
- 목록 화면 구성:
  - `.card.filter-section`: 검색/필터 영역
  - `.card.list-section`: 목록 헤더, 액션 버튼, `.table-container`, `.data-table`, `<Pagination />`
- 작성/수정 화면 구성:
  - `.card`: 기본 정보 폼
  - 업무 단위별 `.card` 세로 배치
  - 하단 `.write-footer` 액션 영역

## 디자인 규칙

- 폰트는 Pretendard를 사용한다. (`index.html`에서 CDN 로드)
- 아이콘은 `lucide-react` 패키지를 사용한다.
- CSS는 `src/styles/admin.css` 단일 파일로 관리한다. CSS 변수 기반 톤을 유지한다.
  - 배경: 밝은 회색
  - 표면: 흰색
  - 주요 텍스트: 거의 검정
  - 보조 텍스트: 회색
  - 주요 버튼: 검정 배경
  - 테두리: 연한 회색
- 카드 라운드는 8px 수준으로 유지한다.
- 테이블은 헤더 배경, 행 구분선, 작은 배지, 우측 관리 버튼 패턴을 유지한다.
- 버튼 클래스: `btn`, `btn-primary`, `btn-outline`, `btn-sm`, `btn-icon`
- 상태 표시: `badge`, `badge-active`, `badge-inactive`, `badge-category` 계열

## 인터랙션 규칙

- `helpMode` 상태는 React Context 또는 전역 상태로 관리한다.
- 헤더의 기획 안내 토글 버튼으로 helpMode를 켜고 끈다.
- helpMode가 켜진 상태에서 `data-help` 속성이 있는 요소를 클릭하면 우측 `<HelpPanel />`에 설명을 표시한다.
- 실제 기능이 없는 버튼은 `<Toast />`로 더미 동작을 알려준다.
- 테이블 전체선택 체크박스는 `useState`로 관리한다.
- 사이드바 `.nav-group`은 아코디언 방식으로 열고 닫는다. (`useState`)
- 현재 경로(`useLocation`)에 맞는 nav 항목에 `active` 클래스를 붙인다.
- 파일 업로드 영역은 실제 서버 업로드 없이 선택 파일명만 표시한다. (`useState`)

## 새 프로젝트 메뉴 구조

| 업무 영역 | 사이드바 그룹명 | 컴포넌트 | 경로 | 화면 유형 | 화면 제목 | 주요 내용 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| settings | 기본설정 | Settings.jsx | /settings | 설정 | 기본설정 | 사이트명, 대표 이메일, 대표 전화, 파비콘, 로고 업로드 |
| settings | 기본설정 | AdminList.jsx | /admin-list | 목록 | 관리자 관리 | 아이디, 이름, 이메일, 권한그룹, 상태, 등록일 |
| settings | 기본설정 | AdminDetail.jsx | /admin-detail | 작성/수정 | 관리자 등록·수정 | 아이디, 비밀번호, 이름, 이메일, 권한그룹, 상태 |
| settings | 기본설정 | RoleList.jsx | /role-list | 목록 | 관리자 권한 관리 | 권한그룹명, 메뉴별 읽기/쓰기/삭제 권한 설정 |
| settings | 기본설정 | CategoryList.jsx | /category-list | 목록 | 카테고리 관리 | 카테고리명, 상위카테고리, 노출순서, 사용여부 |
| ambassador | 엠버서더 관리 | AmbassadorList.jsx | /ambassador-list | 목록 | 엠버서더 목록 | 지역 필터, 명예대사 여부 필터, 이름·직책·등록일 |
| ambassador | 엠버서더 관리 | AmbassadorDetail.jsx | /ambassador-detail | 작성/수정 | 엠버서더 등록·수정 | 지역, 명예대사 여부(라디오), 이름, 직책 |
| visit | 방한단/방미단 관리 | VisitList.jsx | /visit-list | 목록 | 방한단/방미단 목록 | 썸네일, 제목 검색, 등록일 정렬 |
| visit | 방한단/방미단 관리 | VisitDetail.jsx | /visit-detail | 작성/수정 | 방한단/방미단 등록·수정 | 썸네일, 제목, 리치에디터, 첨부파일(다중), 등록일 |
| recruit | 모집안내 관리 | Recruit.jsx | /recruit | 설정 | 모집안내 관리 | 과정안내(제목·항목1~3·내용1~3), 모집요강(제목·항목1~6·내용1~6), URL 설정 |
| instructor | 역대 강사진 관리 | InstructorList.jsx | /instructor-list | 목록 | 역대 강사진 목록 | 썸네일, 제목 검색, 등록일 정렬 |
| instructor | 역대 강사진 관리 | InstructorDetail.jsx | /instructor-detail | 작성/수정 | 역대 강사진 등록·수정 | 썸네일, 제목, 리치에디터, 첨부파일(다중), 등록일 |
| news | 포토뉴스 관리 | NewsList.jsx | /news-list | 목록 | 포토뉴스 목록 | 썸네일, 구분 필터(연구원소식/원우소식), 제목 검색, 등록일 |
| news | 포토뉴스 관리 | NewsDetail.jsx | /news-detail | 작성/수정 | 포토뉴스 등록·수정 | 썸네일, 구분 선택, 제목, 리치에디터, 첨부파일(다중), 등록일 |
| press | 언론보도 관리 | PressList.jsx | /press-list | 목록 | 언론보도 목록 | 썸네일, 제목 검색, 등록일 정렬 |
| press | 언론보도 관리 | PressDetail.jsx | /press-detail | 작성/수정 | 언론보도 등록·수정 | 썸네일, 제목, 리치에디터, 첨부파일(다중), 등록일 |
| notice | 공지사항 관리 | NoticeList.jsx | /notice-list | 목록 | 공지사항 목록 | 고정 여부 필터, 제목 검색, 등록일 정렬 |
| notice | 공지사항 관리 | NoticeDetail.jsx | /notice-detail | 작성/수정 | 공지사항 등록·수정 | 고정 여부 토글, 제목, 리치에디터, 첨부파일(다중), 등록일 |
| homepage | 홈페이지 관리 | PopupList.jsx | /popup-list | 목록 | 팝업 관리 | 팝업명, 이미지 미리보기, 링크 URL, 노출기간, 노출여부 |
| homepage | 홈페이지 관리 | PopupDetail.jsx | /popup-detail | 작성/수정 | 팝업 등록·수정 | 팝업명, 이미지 업로드, 링크 URL, 노출기간(시작~종료), 노출여부 토글 |
| homepage | 홈페이지 관리 | BannerList.jsx | /banner-list | 목록 | 배너 관리 | 이미지 미리보기, 텍스트1·2, 링크 URL, 노출순서, 노출여부 |
| homepage | 홈페이지 관리 | BannerDetail.jsx | /banner-detail | 작성/수정 | 배너 등록·수정 | 이미지 업로드, 텍스트1, 텍스트2, 링크 URL, 노출순서, 노출여부 토글 |
| stats | 통계관리 | Stats.jsx | /stats | 통계 | 접속통계 | 조회 기간 필터, 일별/월별 접속수 차트+테이블, 페이지별 방문수 테이블 |

## 화면 작성 규칙

- 모든 페이지는 `<Layout pageTitle="[화면 제목]">` 으로 감싼다.
- 모든 주요 카드, 필터, 테이블, 버튼, 업로드 영역, 폼 그룹에는 `data-help` 속성으로 기획 설명을 붙인다.
- `data-help` 설명은 "이 요소가 무엇이고 관리자가 어떤 목적으로 사용하는지"를 기획 문서처럼 쓴다.
- 버튼은 실제 저장/삭제를 수행하지 않고 `onClick` 핸들러에서 `showToast()`를 호출한다.
- 더미 데이터는 `src/data/dummy.js`에서 import해서 사용한다.
- 더미 데이터는 한미 외교·교육 연구기관 도메인에 맞게 현실적인 이름, 지역, 직책, 날짜로 작성한다.
- 목록 페이지에서 수정 버튼 클릭 시 `useNavigate`로 detail 경로로 이동한다.

## 패키지 설정

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "vite": "^5",
    "@vitejs/plugin-react": "^4"
  }
}
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```

## 문서 규칙

- `README.md`를 작성한다.
- `docs/specs`에 업무 영역별 화면 기획서를 추가한다.
- 각 spec에는 다음을 포함한다.
  - 주요 기능 및 UI 구성
  - 입력 필드 정의
  - 기능 요구사항
  - API 인터페이스 초안
  - 예외 처리/운영 메모

## 완료 기준

- `npm install` 후 `npm run dev`로 실행 가능해야 한다.
- `http://localhost:5173`에서 첫 화면이 떠야 한다.
- 모든 사이드바 링크가 렌더링 가능한 화면으로 연결돼야 한다.
- CSS는 `src/styles/admin.css` 단일 파일 기반으로 클래스명을 최대한 일관되게 유지한다.
- 새 프로젝트의 내용만 바뀌고, 레이아웃/디자인/기획 안내 방식은 기존 구조와 동일해야 한다.
````