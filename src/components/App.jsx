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
import Families from '../components/Teas/Families';

export default function App() {
  return (
    <Router>
      <Toaster />
      <TeaProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="about" element={<About />} />
            <Route path="tea-list" element={<FamilyList />} />
            <Route path="tea-families" element={<Families />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            {/* what does
          this line of code do? */}
          </Route>
        </Routes>
      </TeaProvider>
    </Router>
  );
}
// wkewewwe
