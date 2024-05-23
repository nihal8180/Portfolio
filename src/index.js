import React from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './landing_page';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Profiles from './profiles';
import Contact from './contact';
import video from './back1.mp4'
function App(){
  return(
  <div>
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Profiles />
    <Contact />
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


