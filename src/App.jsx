import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';

function App() {
    const appStyles = {
        height: '100%',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden',
    };

    const backgroundStyles = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1, 
        backgroundImage: 'url(/backgroundImage.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const videoStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
        opacity: 0.5, 
        pointerEvents: 'none', 
    };

    const sectionStyles = {
        padding: '50px', 
        color: '#ffffff', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    };

    return (
        <div style={appStyles}>
            <div style={backgroundStyles}>
                <video style={videoStyles} autoPlay muted loop>
                    <source src="/backgroundVideo.mp4" type="video/mp4" /> 
                    Your browser does not support the video tag.
                </video>
            </div>
            <Sidenav />
            <Main />
            <div style={sectionStyles}>
                <About />
            </div>
            <div style={sectionStyles}>
                <Projects />
            </div>
            <div style={sectionStyles}>
                <Contact />
            </div>
        </div>
    );
}

export default App;



