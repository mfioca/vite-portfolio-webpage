import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './SharedComponents.css';
import 'react-tabs/style/react-tabs.css';


export const IntroSection = ({ title, children }) => {
    return (
        <section className="flex-column standard-padding-margin-center Intro">
            <h2 className="shadow">{ title }</h2>
            { children } 
        </section>
    );
};

export const DividerLine = ({ width = '80%' }) => {
    return <hr className="divider-line" style={{ width }} />;
};

export const BodyContainer = ({ children, className = '', hasBackground = true }) => {
    const backgroundClass = hasBackground ? 'box-background-standard' : 'box-Nobackground-standard';
    return (
        <div className={ `${ backgroundClass } base-max-width standard-padding-margin-center ${ className }` }>
            { children }
        </div>
    );
};

export const BorderBox = ({ children, className = '' }) => {
    return (
        <div className={ `box-style-standard standard-padding ${ className }` }>
            { children }
        </div>
    );
};

export const NavButton = ({ to, label }) => {
    return (
        <button className="center-div center-margin button" type="button">
            <Link
                to={ to }
                style={{ color: 'white', textDecoration: 'none' }}
            >
                { label }
            </Link>
        </button>
    );
};

/***********************************************************************************/
/*           Elements to help with CSS on smaller screens                          */
/***********************************************************************************/

export const WindowWidthDisplay = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="windowMeasurement">
            <p>{ `Window width: ${windowWidth}px` }</p>
        </div>
    );
};

export const WindowHeightDisplay = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
  
        window.addEventListener('resize', handleResize);
  
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <div className="windowMeasurement">
            <p>{ `Window height: ${windowHeight}px` }</p>
        </div>
    );
};



export const YouTubeEmbed = ({ videoId, title = "YouTube video" }) => {
  return (
    <div className="youtube-embed-wrapper center-div center-margin">
      <iframe
        className="youtube-embed"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};


