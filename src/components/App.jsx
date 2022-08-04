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
import Skincare from './Skincare/Skincare.jsx';
import SkincareProvider from '../state/context/SkincareContext';

export default function App() {
  return (
    <Router>
      <Toaster />
      <SkincareProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="about" element={<About />} />
            <Route path="skincare" element={<Skincare />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            {/* what does
          this line of code do? */}
          </Route>
        </Routes>
      </SkincareProvider>
    </Router>
  );
}
