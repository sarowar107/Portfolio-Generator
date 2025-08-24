import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Preview from './pages/Preview';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/customize/:templateId" element={<Customize />} />
        </Route>
        <Route path="/preview/:templateId" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
