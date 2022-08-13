import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import { Toaster } from 'react-hot-toast';
import FamilyList from './Teas/FamilyList';
import TeaProvider from '../state/context/TeaContext';
import UserProvider from '../state/context/UserContext.jsx';
import Families from '../components/Teas/Families';
import UserAuth from '../components/UserAuth/ProtectRoutes';
import ProtectedRoutes from '../components/UserAuth/ProtectRoutes';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Toaster />
        <TeaProvider>
          <Routes>
            <Route path="user/*" element={<UserAuth />} />
            <Route element={<Layout />}>
              <Route element={<ProtectedRoutes />}>
                <Route index element={<Home />} />
                <Route path="pokedex" element={<Pokedex />} />
                <Route path="tea-list" element={<FamilyList />} />
                <Route path="tea-families" element={<Families />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </TeaProvider>
      </UserProvider>
    </Router>
  );
}
// wewewewsdsdsds
