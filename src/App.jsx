import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CvBuilder from './pages/CvBuilder'
import BuildCV from './pages/BuildCV'

const App = () => {
  return (
  <div className='min-h-screen flex flex-col'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CvBuilder />} />
        <Route path="/build" element={<BuildCV />} />
        {/* Your other routes */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
