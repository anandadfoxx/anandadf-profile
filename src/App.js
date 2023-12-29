import logo from './logo.svg';
import './App.css';
import Home from 'pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'components/navigation/Navbar';
import UnderConstruction from 'pages/UnderConstruction';
import Blog from 'pages/Blog';
import BlogDetail from 'pages/BlogDetail';

function App() {
  return (
    <Router>
      {/* <div id="separator" className="w-full h-16"></div> */}
      <div id="main" className='bg-dark-turquoise flex flex-col h-screen'>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/projects" element={<UnderConstruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
