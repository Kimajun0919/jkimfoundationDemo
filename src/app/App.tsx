import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelpModeProvider } from '../utils/helpMode';
import { ToastProvider } from '../utils/toast';
import Toast from './components/common/Toast';
import HelpPanel from './components/common/HelpPanel';

// Pages
import Dashboard from './pages/index';
import Settings from './pages/settings/Settings';
import AdminList from './pages/settings/AdminList';
import AdminDetail from './pages/settings/AdminDetail';
import RoleList from './pages/settings/RoleList';
import CategoryList from './pages/settings/CategoryList';
import AmbassadorList from './pages/ambassador/AmbassadorList';
import AmbassadorDetail from './pages/ambassador/AmbassadorDetail';
import Recruit from './pages/recruit/Recruit';
import VisitList from './pages/visit/VisitList';
import VisitDetail from './pages/visit/VisitDetail';
import InstructorList from './pages/instructor/InstructorList';
import InstructorDetail from './pages/instructor/InstructorDetail';
import LectureList from './pages/lecture/LectureList';
import LectureDetail from './pages/lecture/LectureDetail';
import NewsList from './pages/news/NewsList';
import NewsDetail from './pages/news/NewsDetail';
import PressList from './pages/press/PressList';
import PressDetail from './pages/press/PressDetail';
import NoticeList from './pages/notice/NoticeList';
import NoticeDetail from './pages/notice/NoticeDetail';
import PopupList from './pages/homepage/PopupList';
import PopupDetail from './pages/homepage/PopupDetail';
import BannerList from './pages/homepage/BannerList';
import BannerDetail from './pages/homepage/BannerDetail';
import Stats from './pages/stats/Stats';

// Import CSS
import '../styles/admin.css';

export default function App() {
  return (
    <BrowserRouter>
      <HelpModeProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin-list" element={<AdminList />} />
            <Route path="/admin-detail" element={<AdminDetail />} />
            <Route path="/role-list" element={<RoleList />} />
            <Route path="/category-list" element={<CategoryList />} />

            <Route path="/ambassador-list" element={<AmbassadorList />} />
            <Route path="/ambassador-detail" element={<AmbassadorDetail />} />

            <Route path="/visit-list" element={<VisitList />} />
            <Route path="/visit-detail" element={<VisitDetail />} />

            <Route path="/recruit" element={<Recruit />} />

            <Route path="/instructor-list" element={<InstructorList />} />
            <Route path="/instructor-detail" element={<InstructorDetail />} />

            <Route path="/lecture-list" element={<LectureList />} />
            <Route path="/lecture-detail" element={<LectureDetail />} />

            <Route path="/news-list" element={<NewsList />} />
            <Route path="/news-detail" element={<NewsDetail />} />

            <Route path="/press-list" element={<PressList />} />
            <Route path="/press-detail" element={<PressDetail />} />

            <Route path="/notice-list" element={<NoticeList />} />
            <Route path="/notice-detail" element={<NoticeDetail />} />

            <Route path="/popup-list" element={<PopupList />} />
            <Route path="/popup-detail" element={<PopupDetail />} />
            <Route path="/banner-list" element={<BannerList />} />
            <Route path="/banner-detail" element={<BannerDetail />} />

            <Route path="/stats" element={<Stats />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toast />
          <HelpPanel />
        </ToastProvider>
      </HelpModeProvider>
    </BrowserRouter>
  );
}