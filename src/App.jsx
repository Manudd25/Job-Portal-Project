import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CvBuilder from './pages/CvBuilder'

const App = () => {
  return (
  <div className='min-h-screen flex flex-col'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create-cv" element={<CvBuilder />} />
        {/* Your other routes */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
