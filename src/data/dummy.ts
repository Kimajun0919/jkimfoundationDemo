// 더미 데이터 - 김창준한미연구원 관리자

export const ambassadors = [
  { id: 1, region: '서울', isHonorary: true, name: '김영호', position: '한미연구원 원장', registeredAt: '2025-01-15' },
  { id: 2, region: '부산', isHonorary: false, name: '이수진', position: '부산외국어대 교수', registeredAt: '2025-02-20' },
  { id: 3, region: '대전', isHonorary: false, name: '박민수', position: '충남대학교 교수', registeredAt: '2025-03-10' },
  { id: 4, region: '광주', isHonorary: true, name: '최지혜', position: '전남대학교 명예교수', registeredAt: '2025-03-25' },
  { id: 5, region: '서울', isHonorary: false, name: '정현우', position: '연세대학교 교수', registeredAt: '2025-04-01' },
];

export const visits = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300', title: '2026년 제12기 미주지역 한인차세대 방한단', createdAt: '2026-03-15', views: 245 },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300', title: '2026년 제8기 방미단 워싱턴 방문', createdAt: '2026-02-28', views: 312 },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=300', title: '2025년 겨울 방한단 백악관 특별 세미나', createdAt: '2025-12-20', views: 428 },
  { id: 4, thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300', title: '2025년 가을 방미단 국무부 교류 프로그램', createdAt: '2025-10-05', views: 389 },
];

export const instructors = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300', title: '박준영 교수 (하버드 케네디스쿨)', createdAt: '2026-01-10' },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300', title: '김선아 박사 (조지타운 외교대학원)', createdAt: '2025-11-20' },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=300', title: '이재훈 교수 (존스홉킨스 국제대학원)', createdAt: '2025-09-15' },
  { id: 4, thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300', title: '정미경 박사 (스탠퍼드 프리먼 연구소)', createdAt: '2025-07-30' },
];

export const news = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300', category: '연구원소식', title: '2026년 상반기 한미 외교포럼 성공리 개최', createdAt: '2026-04-02', views: 567 },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=300', category: '원우소식', title: '제15기 원우회 정기총회 진행', createdAt: '2026-03-28', views: 423 },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300', category: '연구원소식', title: '한미관계 70주년 기념 특별 강연회', createdAt: '2026-03-20', views: 892 },
  { id: 4, thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300', category: '원우소식', title: '신규 원우 환영회 및 네트워킹 행사', createdAt: '2026-03-12', views: 345 },
];

export const press = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300', title: '조선일보: 한미연구원, 차세대 외교 리더 양성 프로그램 발표', createdAt: '2026-04-05', source: '조선일보' },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1586339949216-35c2747e87e4?w=300', title: '중앙일보: 김창준 연구원장, 미 국무부 초청 강연', createdAt: '2026-03-30', source: '중앙일보' },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300', title: 'KBS뉴스: 한미 교육교류 확대 방안 세미나', createdAt: '2026-03-22', source: 'KBS' },
];

export const notices = [
  { id: 1, isPinned: true, title: '2026년 제13기 방한단 모집 안내', createdAt: '2026-04-01', views: 1234 },
  { id: 2, isPinned: true, title: '홈페이지 리뉴얼 안내', createdAt: '2026-03-28', views: 892 },
  { id: 3, isPinned: false, title: '2026년 상반기 정기세미나 일정 공지', createdAt: '2026-03-25', views: 678 },
  { id: 4, isPinned: false, title: '연구원 사무실 이전 안내', createdAt: '2026-03-15', views: 456 },
];

export const popups = [
  { id: 1, name: '2026 방한단 모집', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400', linkUrl: '/recruit', startDate: '2026-04-01', endDate: '2026-05-31', isActive: true },
  { id: 2, name: '한미관계 70주년 행사', imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', linkUrl: '/event', startDate: '2026-03-01', endDate: '2026-04-30', isActive: true },
  { id: 3, name: '신규 강좌 안내', imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400', linkUrl: '/course', startDate: '2026-02-01', endDate: '2026-03-31', isActive: false },
];

export const banners = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=300', text1: '한미 차세대 리더 양성', text2: '함께 만들어가는 미래', linkUrl: '/about', order: 1, isActive: true },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=300', text1: '2026년 신규 프로그램', text2: '지금 바로 신청하세요', linkUrl: '/recruit', order: 2, isActive: true },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=300', text1: '글로벌 네트워크', text2: '세계로 뻗어나가는 인재', linkUrl: '/network', order: 3, isActive: false },
];

export const admins = [
  { id: 1, username: 'admin', name: '김관리', email: 'admin@kjcus.org', role: '최고관리자', status: 'active', registeredAt: '2024-01-10' },
  { id: 2, username: 'editor1', name: '박편집', email: 'editor1@kjcus.org', role: '편집자', status: 'active', registeredAt: '2024-03-15' },
  { id: 3, username: 'operator', name: '이운영', email: 'operator@kjcus.org', role: '운영자', status: 'active', registeredAt: '2024-06-20' },
  { id: 4, username: 'viewer', name: '최조회', email: 'viewer@kjcus.org', role: '조회자', status: 'inactive', registeredAt: '2024-09-05' },
];

export const roles = [
  { id: 1, name: '최고관리자', permissions: { settings: 'all', content: 'all', user: 'all' } },
  { id: 2, name: '편집자', permissions: { settings: 'read', content: 'all', user: 'read' } },
  { id: 3, name: '운영자', permissions: { settings: 'read', content: 'write', user: 'none' } },
  { id: 4, name: '조회자', permissions: { settings: 'none', content: 'read', user: 'none' } },
];

export const categories = [
  { id: 1, name: '연구원소식', parent: null, order: 1, isActive: true },
  { id: 2, name: '원우소식', parent: null, order: 2, isActive: true },
  { id: 3, name: '학술행사', parent: '연구원소식', order: 3, isActive: true },
  { id: 4, name: '교류활동', parent: '연구원소식', order: 4, isActive: true },
];

export const stats = {
  today: { visits: 1234, pageviews: 3456, uniqueVisitors: 987 },
  yesterday: { visits: 1156, pageviews: 3289, uniqueVisitors: 923 },
  thisMonth: { visits: 34567, pageviews: 98765, uniqueVisitors: 23456 },
  dailyStats: [
    { date: '2026-04-01', visits: 1234, pageviews: 3456 },
    { date: '2026-04-02', visits: 1189, pageviews: 3298 },
    { date: '2026-04-03', visits: 1367, pageviews: 3721 },
    { date: '2026-04-04', visits: 1290, pageviews: 3567 },
    { date: '2026-04-05', visits: 1423, pageviews: 3892 },
    { date: '2026-04-06', visits: 1156, pageviews: 3234 },
    { date: '2026-04-07', visits: 1234, pageviews: 3456 },
  ],
  topPages: [
    { path: '/', title: '메인페이지', visits: 5678 },
    { path: '/about', title: '연구원소개', visits: 3456 },
    { path: '/recruit', title: '모집안내', visits: 2890 },
    { path: '/ambassador', title: '엠버서더', visits: 2345 },
    { path: '/news', title: '포토뉴스', visits: 1987 },
  ]
};
