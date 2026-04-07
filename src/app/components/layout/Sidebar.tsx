import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Settings, Users, Shield, FolderTree, Award,
  BookOpen, Plane, GraduationCap, Newspaper, FileText, Bell, Image,
  Layout, BarChart3, ChevronDown, ChevronRight
} from 'lucide-react';

interface NavGroup {
  title: string;
  items: {
    path: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

const navGroups: NavGroup[] = [
  {
    title: '기본설정',
    items: [
      { path: '/settings', label: '기본설정', icon: <Settings size={16} /> },
      { path: '/admin-list', label: '관리자 관리', icon: <Users size={16} /> },
      { path: '/role-list', label: '관리자 권한', icon: <Shield size={16} /> },
      { path: '/category-list', label: '카테고리 관리', icon: <FolderTree size={16} /> },
    ],
  },
  {
    title: '엠버서더 관리',
    items: [
      { path: '/ambassador-list', label: '엠버서더 목록', icon: <Award size={16} /> },
    ],
  },
  {
    title: '모집안내 관리',
    items: [
      { path: '/recruit', label: '모집안내 관리', icon: <BookOpen size={16} /> },
    ],
  },
  {
    title: '게시판 관리',
    items: [
      { path: '/visit-list', label: '방한단/방미단', icon: <Plane size={16} /> },
      { path: '/instructor-list', label: '역대 강사진', icon: <GraduationCap size={16} /> },
      { path: '/lecture-list', label: '강연사진', icon: <Image size={16} /> },
      { path: '/news-list', label: '포토뉴스', icon: <Newspaper size={16} /> },
      { path: '/press-list', label: '언론보도', icon: <FileText size={16} /> },
      { path: '/notice-list', label: '공지사항', icon: <Bell size={16} /> },
    ],
  },
  {
    title: '홈페이지 관리',
    items: [
      { path: '/popup-list', label: '팝업 관리', icon: <Layout size={16} /> },
      { path: '/banner-list', label: '배너 관리', icon: <Layout size={16} /> },
    ],
  },
  {
    title: '통계관리',
    items: [
      { path: '/stats', label: '접속통계', icon: <BarChart3 size={16} /> },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState<string[]>(
    navGroups.map(g => g.title)
  );

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">김창준한미연구원 관리자</div>
      </div>
      <nav className="sidebar-nav">
        {navGroups.map(group => {
          const isExpanded = expandedGroups.includes(group.title);
          return (
            <div key={group.title} className="nav-group">
              <div
                className="nav-group-title"
                onClick={() => toggleGroup(group.title)}
              >
                {group.title}
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>
              <div className={`nav-group-items ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {group.items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
