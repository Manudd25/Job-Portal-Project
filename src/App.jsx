import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CvBuilder from './pages/CvBuilder'
import BuildCV from './pages/BuildCV'
import Main from './components/Main'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/CvBuilder" element={<CvBuilder />} />
          <Route path="/build" element={<BuildCV />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
