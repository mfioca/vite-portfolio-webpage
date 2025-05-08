import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import Home from './Home'; 
import Dashboard from './Dashboard';
import AboutPage from './About'; 
import AIShowcase from './ai_showcase';
import TvMaze from './tv_maze'
import TvMazeShowResults from './Tv_Maze/tv_maze_show_results';
import TvMazePeopleResults from './Tv_Maze/tv_maze_people_results';
import MinecraftProjects from './minecraftProjects';



const Navigation = () => {
  const location = useLocation(); // Get the current location
  const [isAcknowledgementsOpen, setIsAcknowledgementsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll to the top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //event listener to close dropdown list if you touch outside of the dropdown on phones
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAcknowledgementsOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Determine the title based on the current path
  let title; // Ensure it always has a value
  switch (true) {
    case location.pathname === '/':
        title = 'Introduction Page';
        break;
    case location.pathname === '/About':
        title = 'Learn More About Me';
        break;
    case location.pathname === '/Dashboard':
        title = 'Activity Analysis Dashboard';
        break;
    case location.pathname === '/AIShowcase':
        title = 'AI Showcase';
        break;
    case location.pathname === '/tv_maze':
        title = 'TV Maze';
        break;
    case location.pathname.startsWith('/show/'):
        title = 'TV Show Details';
        break;
    case location.pathname.startsWith('/person/'):
        title = 'Person Profile';
        break;
    case location.pathname === '/MinecraftProjects':
        title = 'Minecraft Projects';
        break;
    default:
        title = 'Explore My Web Page'; // A general fallback title
}

  return (
    <nav className="index-shared flex-wrap navbar">
      <div className="navbar-brand">{ title }</div>
      <ul className="flex-wrap navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">About</Link>
        </li>
        
        <li ref={dropdownRef} className="navbar-dropdown-container nav-link"
          onClick={(e) => {
            e.preventDefault();
            setIsAcknowledgementsOpen(!isAcknowledgementsOpen);
          }}
        >
          {isAcknowledgementsOpen ? 'Projects' : 'Projects'}
          {isAcknowledgementsOpen && (
            <ul className="navbar-dropdown-list"
                onMouseLeave={() => setIsAcknowledgementsOpen(false)}
            >
                <li>
                  <Link 
                    to="/Dashboard" 
                    className="nav-link" onClick={() => setIsAcknowledgementsOpen(false)}
                  >
                    Job Activity Analysis
                  </Link>
                </li>
              <li>
                <Link 
                  to="/tv_maze" 
                  className="nav-link" 
                  onClick={() => setIsAcknowledgementsOpen(false)}
                >
                  TV Maze
                </Link>
              </li>
              <li>
                <Link 
                  to="/AIShowcase" 
                  className="nav-link" 
                  onClick={() => setIsAcknowledgementsOpen(false)}
                >
                  AI Showcase
                </Link>
              </li>
              <li>
                <Link 
                  to="/MinecraftProjects" 
                  className="nav-link" 
                  onClick={() => setIsAcknowledgementsOpen(false)}
                >
                  Minecraft Realm
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

const Footer = () =>{
  return (
    <div className="index-shared footer">
      <footer className="footer-content">
        <p>Contact Me: <a href="mailto:mfioca@gmail.com" className="contact-link">mfioca@gmail.com</a></p>
        <p>
          <a 
            href="https://www.linkedin.com/in/mark-fioca/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-link"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" 
              alt="LinkedIn" 
              className="linkedin-icon" 
            />
            LinkedIn Profile
          </a>
        </p>
        <p>
          <a 
            href="https://github.com/mfioca" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-link"
          >
            <img 
              src={`${import.meta.env.BASE_URL}github-white.png`} 
              alt="GitHub Profile" 
              className="github-icon"
            />
            GitHub Profile
          </a>
        </p>
      </footer>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Navigation /> {/* Place Navigation here */}
      <React.StrictMode>
        <Routes>
          <Route path="/" element={ <Home /> } /> 
          <Route path="/About" element={ <AboutPage /> } /> 
          <Route path="/tv_maze" element={ <TvMaze /> } />
          <Route path="/show/:id" element={ <TvMazeShowResults /> } />
          <Route path="/person/:id" element={ <TvMazePeopleResults /> } />
          <Route path="/Dashboard" element={ <Dashboard /> } /> 
          <Route path="/AIShowcase" element={ <AIShowcase /> } />
          <Route path="/MinecraftProjects" element={ <MinecraftProjects /> } />
        </Routes>
      </React.StrictMode>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

