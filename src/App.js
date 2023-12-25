import logo from './logo.svg';
import './App.css';
import Home from 'pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'components/navigation/Navbar';
import UnderConstruction from 'pages/UnderConstruction';
import Blog from 'pages/Blog';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div id="separator" className="w-full h-16"></div> */}
      <div id="main" className='bg-dark-turquoise'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<UnderConstruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
