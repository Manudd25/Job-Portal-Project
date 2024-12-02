
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CvBuilder from './pages/CvBuilder'
import BuildCV from './pages/BuildCV'
import Main from './components/Main'

const App = () => {
  return (
  <div className='min-h-screen flex flex-col'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CvBuilder" element={<CvBuilder />} />
        <Route path="/build" element={<BuildCV />} />
         <Footer/>
        {/* Your other routes */}
      </Routes>
    </Router>
    </div>
  );
};


export default App;
